---
tags: [physics, semester-1, sources, coverage]
---
# Sources and Coverage

[[Physics Index|Index]]

## Coverage method and result

The authoritative checklist is the Engineering Physics section of `01-College/Semester_1_Study_Tracker.md`, before its Progress section. **89 of 89 checkbox entries are addressed (100% topic coverage by this author audit).** Five entries are parent groups with separately listed children; removing those parent rows leaves **84 of 84 leaf entries**. Definitions/examples repeated under different parents remain separate because the tracker lists them separately.

Module totals including parent rows: Modern Optics **13**, Solid State **28**, Quantum and Statistical Mechanics **35**, Nanomaterials **13**. Each mapped topic has an explanation at the requested depth; substantial numerical families have worked examples and independent practice. “Covered” means authored and checked against the tracker, not a guarantee of examination marks or personal mastery. No tracker item is intentionally left partial or missing.

**Scope gap outside this denominator:** SurTech's [official R25 CSE curriculum](https://www.surtech.edu.in/pdf/r25/cse.pdf), effective 2025–26 admission batch, includes laser content and Module 5 storage/display devices on PDF pp.16–18. The four-module tracker omits these. They are not silently counted as covered. Student confirmed SurTech/JIS Kolkata; the exact admission/regulation year and any classroom exclusions remain unconfirmed.

## Primary local physics references actually consulted

Page numbers below distinguish **printed book pages** from **one-based PDF viewer pages**. For this copy of Young & Freedman, PDF page = printed page +26, verified against printed p.1088 and the rendered p.1419.

| Local reference | Inspected sections/pages | Use |
|---|---|---|
| Young & Freedman, University Physics, 13th edition | Contents PDF pp.1–35; §33.3 printed 1088–1089 / PDF 1114–1115 | Total internal reflection foundation |
| Same book | §36.6 printed 1205–1206 / PDF 1231–1232; §36.8 printed 1211–1212 / PDF 1237–1238 | Bragg geometry; recording and reconstructing holograms |
| Same book | §§38.1,38.3 printed 1261–1263,1269–1270 / PDF 1287–1289,1295–1296 | Photon interpretation and equations |
| Same book | §39.1 printed 1286–1288 / PDF 1312–1314; §§39.5–39.6 selected printed 1310–1315 / PDF 1336–1341 | Matter waves, electron diffraction, blackbody and uncertainty |
| Same book | §40.1 printed 1328–1331 / PDF 1354–1357 | Wave function and equation statements |
| Same book | §§42.3–42.7 selected printed 1412–1426 / PDF 1438–1452 | Crystal order, bands, carriers, FD occupation and junctions |
| David H. Dowell, Electron Emission and Cathode Emittance | Local PDF pp.1–8 sampled; pp.1–3 particularly relevant | FD occupation and classical tail, used with correction below; advanced emittance excluded |

These were targeted sections, not a claim to have read all 1,598 pages of the physics textbook. Examples, diagrams, answer templates and explanatory wording in the notes are newly authored. Book passages and figures are not reproduced.

## Source corrections and limits

- The local Dowell lecture initially associates bosons with MB without the required limit. The notes instead use BE for bosons, FD for fermions and MB in the dilute/nondegenerate classical limit.
- The retrieved OpenStax §9.6 text has a sentence labelling electrons as majority carriers in p-type material. The notes correctly use **holes**, consistent with its acceptor discussion and the local textbook.
- The Virtual Labs fibre page repeats a less-than acceptance-angle condition in contradictory sentences. The notes use guided incidence inside the acceptance cone and derive the relation independently from Snell's law.
- The comparison exam has problematic questions; they are flagged in [[Question Bank and Past Paper Analysis]]. An official source can still contain a typographical or conceptual error.
- Text extraction from several scanned Cengage PDFs is sparse. Contents pages for the differential-calculus and geometry copies were visually inspected. No unreadable equation is cited as verified evidence.
- The Grewal Markdown file is a link, not a local textbook. Its Archive.org target could not be accessed by the web tool in this session; its contents were not used as verified evidence.

## Internet sources consulted

| Source | Role and limit |
|---|---|
| [SurTech R25 CSE curriculum](https://www.surtech.edu.in/pdf/r25/cse.pdf) | Institution-specific scope comparison; does not override the requested tracker |
| [NPTEL ray-model lecture](https://archive.nptel.ac.in/content/storage2/courses/117101054/Mod-2/Slides/6.html) | NA as acceptance/light collection and distinction from data-rate limits |
| [IIT Kanpur Virtual Labs: NA theory](https://bop-iitk.vlabs.ac.in/exp/numerical-aperture-measurement/theory.html) | Core/cladding and acceptance-cone cross-check; inequality typo handled as above |
| [NED University optical-fibre lab manual](https://tcd.neduet.edu.pk/sites/default/files/Telecommunication/Data/Lab%20Manuals/2018%20onwards/OFC%20TC-315%5BFINAL%5D%20Reviewed.pdf) | Retrieved introductory description used for graded-index delay compensation |
| [OpenStax quantum chapter outline](https://openstax.org/books/university-physics-volume-3/pages/6-introduction) | Supplementary learning route, not the primary derivation source |
| [OpenStax semiconductors](https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping) | Carrier/doping cross-check; typo noted |
| [NSF nanotechnology overview](https://www.nsf.gov/focus-areas/nanotechnology) | Nanoscale definition and broad property categories |
| [NNCO applications](https://www.nano.gov/about-nanotechnology/applications-nanotechnology/) | Selected application examples, synthesised briefly; distinguishes deployed uses from research |
| [MIT OCW single-variable calculus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) | The local Markdown resource's destination; optional prerequisite support |
| [GNIT PH101 comparison paper](https://gnit.ac.in/wp-content/uploads/2023/08/Physics-I-Backlog-PH-101.pdf) | Three pages rendered and inspected; different institution/regulation, not SurTech frequency evidence |

Web sources checked 20 November 2026. Search results that merely advertised question banks without a verified matching paper were not used to claim a pattern.

## Complete local resource inventory

Every file under `17-Books` and `18-Resources` was inventoried. PDF opening pages/contents were sampled (usually first eight pages); ambiguous filenames were identified from contents. “Prerequisite reference” means a useful remedial destination, not that the entire book was required or read. All relevant mathematics is explained briefly inside the physics notes so reading extra textbooks is optional.

| File | Inspection result / relevance | Treatment |
|---|---|---|
| `17-Books/_Cengage Trigonmetry .pdf` | Contents: logarithms, trig ratios, identities and inverse functions | Prerequisite reference for fibre/Bragg angles and logarithmic loss; chapters 1, 2, 4 |
| `17-Books/Algebra Cengage.pdf` | Algebra text; opening pages sampled | Optional algebra refresher; no separate physics evidence |
| `17-Books/ask-chatbot.css` | CSS stylesheet | Not a physics or mathematical source |
| `17-Books/Bernstein.pdf` | Matrix Mathematics, identified from opening pages | Outside the tracker depth; matrix formulation of quantum mechanics is not required |
| `17-Books/CENGAGE CALCULUS .pdf` | Scanned calculus copy; opening text is mainly watermark | Not relied on for verified equations; clearer calculus references used |
| `17-Books/CENGAGE CALCULUS_dt.pdf` | Scanned calculus; PDF p.5 contents visually inspected | Optional derivative/integration refresher; contents identify ch.5–7 topics |
| `17-Books/Cengage G.Tewani  Algebra blunt library.pdf` | Same page count/opening extracted content as Algebra Cengage | Possible duplicate; no need to count it as independent corroboration |
| `17-Books/CENGAGE GEOMETRY.pdf` | Scanned coordinate geometry; PDF p.5 contents visually inspected | Optional coordinate/intercept refresher; ch.1; cube geometry supplied directly |
| `17-Books/Eloquent_JavaScript.pdf` | JavaScript programming book | Unrelated to requested physics notes |
| `17-Books/higher-engineering-mathematics-bs-grewal.md` | Archive.org link only; remote target inaccessible here | Not cited for uninspected content |
| `17-Books/James Stewart-Calculus-Brooks-Cole (2012).pdf` | Calculus contents inspected | Optional derivative and integral interpretation: §2.1 print p.104; §4.2 print p.295 (contents references) |
| `17-Books/K. A. Stroud - Engineering Mathematics.pdf` | Engineering mathematics contents inspected | Prerequisite guide: logarithms print p.86; trig pp.243 onward; differentiation pp.299 onward; integration pp.333 onward (contents references) |
| `17-Books/Lecture2_EmissionStatisticsCathodeEmittance_text.pdf` | SLAC electron-emission lecture; first eight PDF pages extracted | Used critically for FD/MB-tail explanation; correction recorded above |
| `17-Books/leep204.pdf` | Determinants chapter, identified from actual opening text | Not physics despite ambiguous filename; beyond required mathematical tools |
| `17-Books/lemh103.pdf` | Matrices chapter, identified from actual opening text | Not needed for statement-only quantum mechanics |
| `17-Books/Michael Sullivan - Algebra and Trigonometry (11th Edition)-Pearson (2019)-3.pdf` | Algebra and Trigonometry; opening pages inspected | Optional algebra/trig prerequisite reference; no unverified page citation |
| `17-Books/Single Variable Calculus.md` | MIT OCW link; destination opened | Optional calculus learning route |
| `17-Books/Young & Freedman - University Physics 13.pdf` | 1,598-page physics text; targeted relevant sections read | Primary local physics source; exact inspected pages above |
| `18-Resources/C Important Questions for CA1.pdf` | C-programming questions, five pages sampled | Not a physics past paper |
| `18-Resources/IKS_Full_Class_Notes.pdf` | Indian Knowledge Systems, six-page notes | Unrelated to physics syllabus |
| `18-Resources/schools of philosophy HU 102_251118_124430 (1).pdf` | Indian philosophy notes, five pages | Unrelated to physics syllabus |
| `18-Resources/veda-vedanga.pdf` | Vedas/Vedangas, two pages | Unrelated to physics syllabus |

## Mathematical prerequisites used in the notes

Use the local maths resources selectively: trigonometric complements and inverse sine for NA/Bragg; square roots and Pythagoras for cubic cells; reciprocals/least common multiples for Miller indices; logarithms for attenuation; derivatives for group velocity; area under a nonnegative curve for probability; exponentials for FD occupation. Long matrix and determinant methods are deliberately excluded because this tracker requires only statements of the wave equation.

## Topic-by-topic coverage

Statuses are **Covered**, **Partial**, or **Missing**. The current author audit has no Partial/Missing tracker entries. Each link leads to the relevant self-contained module section. General “related numerical problems” entries map to a representative worked family; further worked families are elsewhere in the same module.

### Module 1 — 13 checklist entries

| Tracker topic/subtopic | Note section | Status |
|---|---|---|
| Principle of optical fibres | [[Module 1 - Modern Optics#1. Principle and construction of optical fibres\|§1]] | Covered |
| Propagation of light in optical fibres | [[Module 1 - Modern Optics#3. Propagation and classification\|§3]] | Covered |
| Step-index fibres | [[Module 1 - Modern Optics#3. Propagation and classification\|§3]] | Covered |
| Graded-index fibres | [[Module 1 - Modern Optics#3. Propagation and classification\|§3]] | Covered |
| Single-mode fibres | [[Module 1 - Modern Optics#3. Propagation and classification\|§3]] | Covered |
| Multimode fibres | [[Module 1 - Modern Optics#3. Propagation and classification\|§3]] | Covered |
| Numerical aperture (NA) | [[Module 1 - Modern Optics#2. Acceptance angle and numerical aperture\|§2]] | Covered |
| Acceptance angle | [[Module 1 - Modern Optics#2. Acceptance angle and numerical aperture\|§2]] | Covered |
| Basic concept of losses in optical fibres | [[Module 1 - Modern Optics#4. Losses and pulse spreading\|§4]] | Covered |
| Related numerical problems | [[Module 1 - Modern Optics#2. Acceptance angle and numerical aperture\|§2]] | Covered |
| Theory of holography (qualitative analysis) | [[Module 1 - Modern Optics#5. Holography — qualitative theory\|§5]] | Covered |
| Viewing of holograms | [[Module 1 - Modern Optics#5. Holography — qualitative theory\|§5]] | Covered |
| Applications of holography | [[Module 1 - Modern Optics#5. Holography — qualitative theory\|§5]] | Covered |

### Module 2 — 28 checklist entries

| Tracker topic/subtopic | Note section | Status |
|---|---|---|
| Structure of solids | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Amorphous solids | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Definition | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Examples | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Crystalline solids | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Definition | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Examples | [[Module 2 - Solid State Physics#1. Structure of solids\|§1]] | Covered |
| Lattice | [[Module 2 - Solid State Physics#2. Lattice, basis, unit cell and Bravais lattices\|§2]] | Covered |
| Basis | [[Module 2 - Solid State Physics#2. Lattice, basis, unit cell and Bravais lattices\|§2]] | Covered |
| Unit cell | [[Module 2 - Solid State Physics#2. Lattice, basis, unit cell and Bravais lattices\|§2]] | Covered |
| Fundamental types of lattices | [[Module 2 - Solid State Physics#2. Lattice, basis, unit cell and Bravais lattices\|§2]] | Covered |
| Bravais lattices | [[Module 2 - Solid State Physics#2. Lattice, basis, unit cell and Bravais lattices\|§2]] | Covered |
| Simple cubic (SC) lattice | [[Module 2 - Solid State Physics#3. SC, BCC, FCC and coordination number\|§3]] | Covered |
| Face-centred cubic (FCC) lattice | [[Module 2 - Solid State Physics#3. SC, BCC, FCC and coordination number\|§3]] | Covered |
| Body-centred cubic (BCC) lattice | [[Module 2 - Solid State Physics#3. SC, BCC, FCC and coordination number\|§3]] | Covered |
| Miller indices | [[Module 2 - Solid State Physics#5. Miller indices and Miller planes\|§5]] | Covered |
| Miller planes | [[Module 2 - Solid State Physics#5. Miller indices and Miller planes\|§5]] | Covered |
| Coordination number | [[Module 2 - Solid State Physics#3. SC, BCC, FCC and coordination number\|§3]] | Covered |
| Atomic packing factor (APF) | [[Module 2 - Solid State Physics#4. Atomic packing factor\|§4]] | Covered |
| Bragg's equation | [[Module 2 - Solid State Physics#6. Bragg's equation and applications\|§6]] | Covered |
| Applications of Bragg's equation | [[Module 2 - Solid State Physics#6. Bragg's equation and applications\|§6]] | Covered |
| Related numerical problems | [[Module 2 - Solid State Physics#6. Bragg's equation and applications\|§6]] | Covered |
| Physics of semiconductors | [[Module 2 - Solid State Physics#7. Physics of semiconductors and energy bands\|§7]] | Covered |
| Electrons and holes | [[Module 2 - Solid State Physics#7. Physics of semiconductors and energy bands\|§7]] | Covered |
| Metals, insulators and semiconductors | [[Module 2 - Solid State Physics#7. Physics of semiconductors and energy bands\|§7]] | Covered |
| Intrinsic semiconductors | [[Module 2 - Solid State Physics#8. Intrinsic and extrinsic semiconductors\|§8]] | Covered |
| Extrinsic semiconductors | [[Module 2 - Solid State Physics#8. Intrinsic and extrinsic semiconductors\|§8]] | Covered |
| p-n junction | [[Module 2 - Solid State Physics#9. p-n junction\|§9]] | Covered |

### Module 3 — 35 checklist entries

| Tracker topic/subtopic | Note section | Status |
|---|---|---|
| Inadequacy of classical physics | [[Module 3 - Quantum and Statistical Mechanics#1. Inadequacy of classical physics and quantization\|§1]] | Covered |
| Concept of quantization of energy | [[Module 3 - Quantum and Statistical Mechanics#1. Inadequacy of classical physics and quantization\|§1]] | Covered |
| Particle concept of electromagnetic waves | [[Module 3 - Quantum and Statistical Mechanics#1. Inadequacy of classical physics and quantization\|§1]] | Covered |
| Black body radiation | [[Module 3 - Quantum and Statistical Mechanics#2. Blackbody radiation and photon energy\|§2]] | Covered |
| Photoelectric effect (no derivation required) | [[Module 3 - Quantum and Statistical Mechanics#3. Photoelectric effect — equations, no derivation\|§3]] | Covered |
| Compton effect (no derivation required) | [[Module 3 - Quantum and Statistical Mechanics#4. Compton effect — result, no derivation\|§4]] | Covered |
| Wave-particle duality | [[Module 3 - Quantum and Statistical Mechanics#5. Wave–particle duality and de Broglie hypothesis\|§5]] | Covered |
| Phase velocity | [[Module 3 - Quantum and Statistical Mechanics#6. Phase velocity and group velocity\|§6]] | Covered |
| Group velocity | [[Module 3 - Quantum and Statistical Mechanics#6. Phase velocity and group velocity\|§6]] | Covered |
| de Broglie hypothesis | [[Module 3 - Quantum and Statistical Mechanics#5. Wave–particle duality and de Broglie hypothesis\|§5]] | Covered |
| Davisson–Germer experiment | [[Module 3 - Quantum and Statistical Mechanics#7. Davisson–Germer experiment\|§7]] | Covered |
| Related numerical problems | [[Module 3 - Quantum and Statistical Mechanics#5. Wave–particle duality and de Broglie hypothesis\|§5]] | Covered |
| Concept of wave function | [[Module 3 - Quantum and Statistical Mechanics#8. Wave function, probability and normalization\|§8]] | Covered |
| Physical significance of wave function | [[Module 3 - Quantum and Statistical Mechanics#8. Wave function, probability and normalization\|§8]] | Covered |
| Probability interpretation | [[Module 3 - Quantum and Statistical Mechanics#8. Wave function, probability and normalization\|§8]] | Covered |
| Normalization of wave functions (qualitative discussion) | [[Module 3 - Quantum and Statistical Mechanics#8. Wave function, probability and normalization\|§8]] | Covered |
| Uncertainty principle | [[Module 3 - Quantum and Statistical Mechanics#9. Uncertainty principle and numericals\|§9]] | Covered |
| Relevant numerical problems | [[Module 3 - Quantum and Statistical Mechanics#9. Uncertainty principle and numericals\|§9]] | Covered |
| Introduction to Schrödinger wave equation (statement only) | [[Module 3 - Quantum and Statistical Mechanics#10. Schrödinger wave equation — statement only\|§10]] | Covered |
| Concept of energy levels | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Concept of energy states | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Phase space | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Microstates | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Macrostates | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Thermodynamic probability | [[Module 3 - Quantum and Statistical Mechanics#11. Energy levels, states, phase space and counting\|§11]] | Covered |
| Maxwell–Boltzmann (MB) statistics (qualitative discussion) | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Bose–Einstein (BE) statistics (qualitative discussion) | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Fermi–Dirac (FD) statistics (qualitative discussion) | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Physical significance of MB, BE and FD statistics | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Concept of bosons | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Concept of fermions | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Classical limits of quantum statistics | [[Module 3 - Quantum and Statistical Mechanics#12. MB, BE and FD statistics\|§12]] | Covered |
| Fermi distribution at zero temperature | [[Module 3 - Quantum and Statistical Mechanics#13. Fermi distribution and Fermi level\|§13]] | Covered |
| Fermi distribution at non-zero temperature | [[Module 3 - Quantum and Statistical Mechanics#13. Fermi distribution and Fermi level\|§13]] | Covered |
| Concept of Fermi level (qualitative discussion) | [[Module 3 - Quantum and Statistical Mechanics#13. Fermi distribution and Fermi level\|§13]] | Covered |

### Module 4 — 13 checklist entries

| Tracker topic/subtopic | Note section | Status |
|---|---|---|
| Reduction of dimensionality | [[Module 4 - Physics of Nanomaterials#1. Nanoscale and reduction of dimensionality\|§1]] | Covered |
| Properties of nanomaterials | [[Module 4 - Physics of Nanomaterials#2. Why nanomaterial properties differ\|§2]] | Covered |
| Quantum wells (two-dimensional) | [[Module 4 - Physics of Nanomaterials#1. Nanoscale and reduction of dimensionality\|§1]] | Covered |
| Quantum wires (one-dimensional) | [[Module 4 - Physics of Nanomaterials#1. Nanoscale and reduction of dimensionality\|§1]] | Covered |
| Quantum dots (zero-dimensional) | [[Module 4 - Physics of Nanomaterials#1. Nanoscale and reduction of dimensionality\|§1]] | Covered |
| Quantum size effect | [[Module 4 - Physics of Nanomaterials#3. Quantum confinement and quantum size effect\|§3]] | Covered |
| Quantum confinement | [[Module 4 - Physics of Nanomaterials#3. Quantum confinement and quantum size effect\|§3]] | Covered |
| Carbon allotropes | [[Module 4 - Physics of Nanomaterials#4. Carbon allotropes\|§4]] | Covered |
| Carbon nanotubes (CNTs) | [[Module 4 - Physics of Nanomaterials#5. Graphene and carbon nanotubes\|§5]] | Covered |
| Graphene | [[Module 4 - Physics of Nanomaterials#5. Graphene and carbon nanotubes\|§5]] | Covered |
| Electronic applications | [[Module 4 - Physics of Nanomaterials#6. Applications — explain the property-to-function link\|§6]] | Covered |
| Environmental applications | [[Module 4 - Physics of Nanomaterials#6. Applications — explain the property-to-function link\|§6]] | Covered |
| Medical applications | [[Module 4 - Physics of Nanomaterials#6. Applications — explain the property-to-function link\|§6]] | Covered |
