import { autoUpdate, computePosition, flip, shift, offset } from "@floating-ui/dom"

// One delegated controller survives Quartz SPA navigation without duplicate listeners.
const cache = new Map<string, string>()
let current: HTMLAnchorElement | null = null
let panel: HTMLElement | null = null
let stopPosition: (() => void) | undefined
let timer: ReturnType<typeof setTimeout> | undefined
let version = 0
let lastTouch = 0

function termLink(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null
  const link = target.closest<HTMLAnchorElement>("a.internal")
  if (!link || link.closest(".physics-definition")) return null
  const url = new URL(link.href, location.href)
  if (url.origin !== location.origin || !url.pathname.includes("/glossary/")) return null
  link.dataset.noPopover = "true"
  link.classList.add("physics-term")
  link.setAttribute("aria-haspopup", "dialog")
  return link
}

function cancelHide() {
  if (timer) clearTimeout(timer)
  timer = undefined
}

function close() {
  cancelHide()
  version++
  stopPosition?.()
  stopPosition = undefined
  current?.removeAttribute("aria-controls")
  current?.removeAttribute("aria-describedby")
  current?.setAttribute("aria-expanded", "false")
  panel?.remove()
  panel = null
  current = null
}

function hideLater() {
  cancelHide()
  timer = setTimeout(() => {
    if (
      panel?.matches(":hover") ||
      panel?.contains(document.activeElement) ||
      current === document.activeElement
    )
      return
    close()
  }, 250)
}

async function show(link: HTMLAnchorElement) {
  cancelHide()
  if (current === link) return
  close()
  current = link
  const request = ++version
  const url = new URL(link.href)
  url.hash = ""
  url.search = ""
  try {
    let contents = cache.get(url.href)
    if (!contents) {
      const response = await fetch(url.href)
      if (!response.ok) throw new Error(`Definition request failed: ${response.status}`)
      const parsed = new DOMParser().parseFromString(await response.text(), "text/html")
      const article = parsed.querySelector("article")
      if (!article) throw new Error("Definition article missing")
      contents = article.innerHTML
      cache.set(url.href, contents)
    }
    if (request !== version || current !== link) return
    const box = document.createElement("section")
    box.id = "physics-definition"
    box.className = "physics-definition"
    box.setAttribute("role", "dialog")
    box.setAttribute("aria-label", `${link.textContent} explained`)
    const body = document.createElement("div")
    body.className = "physics-definition-body"
    body.innerHTML = contents
    // Definitions are locally authored articles. Avoid duplicate document IDs.
    body.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"))
    body.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href")
      if (href) a.href = new URL(href, url).href
    })
    const summary = body.querySelector("p")
    if (summary) {
      summary.id = "physics-definition-summary"
      link.setAttribute("aria-describedby", summary.id)
    }
    const dismiss = document.createElement("button")
    dismiss.type = "button"
    dismiss.className = "physics-definition-close"
    dismiss.textContent = "Close"
    dismiss.addEventListener("click", () => {
      const anchor = current
      close()
      // Do not trigger a new focus preview while returning focus.
      anchor?.focus({ preventScroll: true })
      close()
    })
    const open = document.createElement("a")
    open.href = link.href
    open.textContent = "Open full definition"
    const controls = document.createElement("div")
    controls.className = "physics-definition-controls"
    controls.append(open, dismiss)
    box.append(body, controls)
    box.addEventListener("pointerenter", cancelHide)
    box.addEventListener("pointerleave", hideLater)
    box.addEventListener("focusout", () =>
      setTimeout(() => {
        if (!box.contains(document.activeElement) && document.activeElement !== link) close()
      }, 0),
    )
    document.body.append(box)
    panel = box
    link.setAttribute("aria-expanded", "true")
    link.setAttribute("aria-controls", box.id)
    const place = async () => {
      const { x, y } = await computePosition(link, box, {
        strategy: "fixed",
        placement: "bottom-start",
        middleware: [offset(8), flip(), shift({ padding: 12, crossAxis: true })],
      })
      if (panel === box) Object.assign(box.style, { left: `${x}px`, top: `${y}px` })
    }
    stopPosition = autoUpdate(link, box, place)
  } catch (error) {
    // Keep the ordinary definition link usable if preview loading fails.
    if (request === version) close()
    console.warn("Physics definition preview unavailable", error)
  }
}

document.addEventListener(
  "pointerover",
  (event) => {
    if (event.pointerType === "touch") return
    const link = termLink(event.target)
    if (link) void show(link)
  },
  true,
)
document.addEventListener(
  "pointerout",
  (event) => {
    const link = termLink(event.target)
    if (
      link &&
      link === current &&
      !(event.relatedTarget instanceof Node && link.contains(event.relatedTarget))
    )
      hideLater()
  },
  true,
)
document.addEventListener(
  "focusin",
  (event) => {
    const link = termLink(event.target)
    if (link) void show(link)
  },
  true,
)
document.addEventListener(
  "focusout",
  (event) => {
    if (termLink(event.target)) hideLater()
  },
  true,
)
document.addEventListener(
  "pointerdown",
  (event) => {
    if (event.pointerType === "touch") lastTouch = Date.now()
    if (!termLink(event.target) && !(event.target instanceof Node && panel?.contains(event.target)))
      close()
  },
  true,
)
document.addEventListener(
  "click",
  (event) => {
    const link = termLink(event.target)
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    if (Date.now() - lastTouch < 1200) {
      // First tap previews; use the explicit full-definition link to navigate.
      event.preventDefault()
      event.stopPropagation()
      void show(link)
    }
  },
  true,
)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") close()
})
document.addEventListener("nav", close)
document.addEventListener("render", () => {
  if (current && !current.isConnected) close()
  document.querySelectorAll("article a.internal").forEach((el) => termLink(el))
})
