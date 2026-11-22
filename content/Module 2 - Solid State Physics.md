---
tags: [physics, semester-1, module-2]
---
# Module 2 — Solid State Physics

[[Physics Index|Index]] · [[Formula and Revision Guide|Final revision]]

> [!abstract] Learning route
> Begin with order in solids, then [[glossary/lattice|lattice]] + [[glossary/basis|basis]], cubic-cell geometry, plane indexing and X-ray [[glossary/diffraction|diffraction]]. Finish with [[glossary/energy-band|energy bands]], [[glossary/doping|doping]] and junction formation. Prerequisites: fractions, reciprocals, Pythagoras and charge conservation. Questions are original practice; marks are suggested unless a past-paper source is explicitly identified.

## Read the symbols before calculating

Symbols are local labels: the same letter can mean something different in another topic. Read the equation and units before choosing a formula. A subscript labels a particular quantity; it is not a factor to multiply.

| Symbol | Read it as | Meaning and unit |
|---|---|---|
| $a,r,d$ | a, r, d | Cell edge, atomic radius, [[glossary/interplanar-spacing\|interplanar spacing]]; lengths in consistent units |
| $Z$ | zed | Effective atoms per conventional cell; a count, different from [[glossary/coordination-number\|coordination number]] |
| $(hkl)$ | h k l | Miller plane indices; integers, not lengths |
| $n$ in Bragg's law | [[glossary/diffraction\|diffraction]] order | Positive integer; not [[glossary/refractive-index\|refractive index]] in that equation |
| $n,p,n_i$ in carrier formulas | electron, [[glossary/hole\|hole]], intrinsic densities | Number per volume, usually per cubic metre |
| $E_g$ | E gap | Band-gap energy; eV or J |
| $\mu_n,\mu_p$ | electron and hole mobilities | Drift-speed response per field; square metres per volt-second |
| $\sigma$ | sigma | Electrical conductivity; siemens per metre |

> [!tip] Understand it, then teach it back
> Start each topic with its plain-language explanation. Read the original equations and examples next. Close the note and answer the teach-back question in your own words. Linked scientific terms open a short definition: hover on the website, or open the linked note in Obsidian. On phones, tap a term for its definition. These are original teaching explanations, not quotations from Richard Feynman.

## 1. Structure of solids

### Order is about repeating arrangements, not whether atoms move

Even in a solid, atoms vibrate around local equilibrium positions. A crystal's important feature is that an ideal arrangement repeats over long distances. An amorphous solid can have sensible local bonding without that long-range repetition.

Imagine comparing a repeating floor pattern with a mosaic that has locally similar pieces but no repeating large pattern. This is an analogy for positional order, not a claim that atoms are motionless tiles. Real crystals also have defects and surfaces.

To explain a property, connect it to structure. An ordered arrangement makes scattering from many regularly spaced planes reinforce at particular angles. Losing long-range repetition broadens the [[glossary/diffraction|diffraction]] features. Do not memorize regular versus irregular as your entire answer.

**Teach it back:** Can an amorphous solid have neighbours arranged in a locally preferred way? Can a sample with many small randomly oriented crystals behave approximately isotropically?

Atoms, ions or molecules in a solid stay near equilibrium positions while vibrating. The arrangement and bonding determine many material properties. “Solid” does not necessarily mean “crystalline.”

| Feature | Crystalline solid | Amorphous solid |
|---|---|---|
| Definition | Long-range periodic positional order in an ideal crystal | No long-range periodic positional order; short-range order can remain |
| Examples | Copper, sodium chloride, crystalline silicon | Ordinary window glass, many amorphous polymers |
| Heating | A pure ideal crystal has a definite melting temperature at specified pressure | Often softens over a range and shows a glass transition |
| Directional properties | Can be anisotropic; depends on property and symmetry | Often macroscopically isotropic |
| Diffraction | Sharp diffraction features from ordered planes | Broad diffuse features |

Avoid saying every crystalline property is anisotropic: cubic crystals can have isotropic values of some properties. A polycrystalline sample contains many differently oriented crystallites and can also behave approximately isotropically.

**Question (suggested 3 marks): Differentiate amorphous and crystalline solids.** Define the type of order, give one correct example of each, then compare diffraction and thermal behaviour. This is stronger than merely writing “regular/irregular.”

## 2. Lattice, basis, unit cell and Bravais lattices

### Build a crystal in three instructions

First mark a repeating set of equivalent positions: the [[glossary/lattice|lattice]]. Then put the same atomic motif at every mark: the [[glossary/basis|basis]]. Finally choose a repeating volume you can translate to build the whole structure: a [[glossary/unit-cell|unit cell]]. A wallpaper analogy is useful: the repeat positions differ from the motif printed at each position.

This distinction prevents an important mistake. A lattice point need not stand for exactly one atom. If the basis contains several atoms, repeating one lattice point repeats that entire group. Likewise, a conventional cell may be chosen for an easy-to-see symmetry rather than the smallest possible volume.

Bravais types classify the geometry of equivalent translation points. They cannot list every real crystal, because many different atomic bases can be attached to the same lattice type.

**Teach it back:** Explain lattice, basis and crystal structure without using those three terms in your explanation. Then say what repeats when you translate one unit cell.

**Lattice:** an infinite periodic set of points with identical surroundings at every point. It is a geometrical construction, not a list of actual atoms.

**Basis:** the atom or group of atoms attached identically to every lattice point.

$$\text{Crystal structure}=\text{lattice}+\text{basis}.$$

**Unit cell:** a region which repeats by translation to generate the lattice/crystal. A primitive cell contains one lattice point in total after sharing is counted. A conventional cell may contain more than one lattice point because it displays symmetry conveniently.

**Example:** a simple-cubic lattice with a one-atom basis places the same atom at each lattice point. A multi-atom basis can create a more complicated structure without changing the underlying lattice. Do not confuse an atom with a lattice point in every possible crystal.

The **14 [[glossary/bravais-lattice|Bravais lattices]]** are the distinct three-dimensional translational lattice types, distributed across seven crystal systems:

| System | Cell parameters | Allowed conventional centring |
|---|---|---|
| Cubic | $a=b=c$; $\alpha=\beta=\gamma=90^\circ$ | P, I, F (3) |
| Tetragonal | $a=b\ne c$; all angles $90^\circ$ | P, I (2) |
| Orthorhombic | Three generally unequal edges; all angles $90^\circ$ | P, C, I, F (4) |
| Monoclinic | Three generally unequal edges; $\alpha=\gamma=90^\circ$, $\beta\ne90^\circ$ | P, C (2) |
| Triclinic | General edge lengths and angles; no required right angles | P (1) |
| Hexagonal | $a=b\ne c$; $\alpha=\beta=90^\circ$, $\gamma=120^\circ$ | P (1) |
| Trigonal/rhombohedral | Rhombohedral setting: equal edges, equal non-right angles | R (1) |

P = primitive; I = body-centred; F = face-centred; C = base-centred. The count is $3+2+4+2+1+1+1=14$. The detailed parameter table supports “Bravais lattices”; the tracker gives particular emphasis to SC, BCC and FCC.

**Question (suggested 2 marks): Is BCC primitive?** The conventional cubic BCC cell contains two lattice points, so that particular cell is not primitive. A smaller primitive cell can nevertheless be chosen for the same BCC lattice.

## 3. SC, BCC, FCC and coordination number

### Count ownership and neighbours separately

A cube drawing shows complete circles at its corners, but each corner lies at the meeting point of eight neighbouring cubes. The correct bookkeeping assigns one eighth of that atom to each cell. Nothing cuts a real atom into pieces; we divide its contribution to a repeated counting volume.

Coordination asks a different question: stand at one atom and count its nearest neighbours in the extended crystal. To see all neighbours, you must include adjacent cells. For FCC, stopping at the atoms visible in one cube makes the count confusing.

For the radius relation, draw the line along which hard-sphere atoms actually touch. In SC it is an edge; in BCC the body diagonal; in FCC a face diagonal. Geometry then gives the formula. This is more reliable than remembering three unrelated expressions.

**Teach it back:** Why can FCC have four effective atoms per cell but twelve nearest neighbours per atom?

![Cubic cells and atom counting](assets/cubic-cells.png)

The sketches show atom **centres**, not touching hard spheres. Back edges are schematic. To redraw: draw two offset squares and join corresponding corners; add the body centre for BCC or all six face centres for FCC, including hidden faces.

### Counting shared atoms

- A corner belongs to eight neighbouring cubes: contribution $1/8$.
- A face-centre atom belongs to two cells: contribution $1/2$.
- A body-centre atom belongs to just one cell: contribution $1$.

**[[glossary/coordination-number|Coordination number]] (CN)** is the number of nearest neighbours of a chosen atom in the structure. It is not the number of atoms in a [[glossary/unit-cell|unit cell]].

| Structure | Atoms per conventional cell $Z$ | Contact direction | Radius–edge relation | CN | Examples |
|---|---:|---|---|---:|---|
| SC | $8/8=1$ | Edge | $a=2r$ | 6 | Polonium under suitable conditions |
| BCC | $8/8+1=2$ | Body diagonal | $\sqrt3a=4r$ | 8 | $\alpha$-iron, tungsten |
| FCC | $8/8+6/2=4$ | Face diagonal | $\sqrt2a=4r$ | 12 | Copper, aluminium |

**Why these CN values?** In SC, neighbours lie along the positive and negative coordinate axes: six. In BCC, the body-centre atom has the eight corners as nearest neighbours. In FCC, a selected atom has four nearest neighbours in its plane, four in the plane above and four below.

> [!tip] Remember
> **SC/BCC/FCC: atoms 1–2–4, neighbours 6–8–12; touching directions edge–body–face.**

## 4. Atomic packing factor

### Ask what fraction of the box is occupied

Packing factor is a ratio of two volumes: model atomic volume assigned to one cell divided by that cell's volume. Both use the same length unit, so the units cancel. The atom count alone cannot answer the question because different structures require different box sizes for the same atomic radius.

Use the same three-step recipe every time: find atoms per cell, find edge length in terms of radius from the touching geometry, then substitute into the volume ratio. The radius cancels because making every sphere and the box twice as large multiplies both volumes by eight.

**Teach it back:** If you double atomic radius but keep the same ideal structure, why does [[glossary/atomic-packing-factor|APF]] stay unchanged? Why is APF = 1.2 impossible in this non-overlapping sphere model?

The **atomic packing factor (APF)** is the fraction of unit-cell volume occupied by atoms in the equal hard-sphere model:

$$\mathrm{APF}=\frac{Z(4\pi r^3/3)}{a^3}.$$

$r$ and $a$ must use the same length unit. APF is dimensionless. The model is geometric; actual electron densities do not have rigid sphere boundaries.

### Derivations to learn

**SC:** adjacent corner atoms touch along an edge: $a=2r$. Thus $\mathrm{APF}=(4\pi r^3/3)/(8r^3)=\pi/6=0.524$.

**BCC:** the body diagonal traverses corner radius + body diameter + opposite corner radius, so $\sqrt3a=4r$. With $Z=2$:

$$\mathrm{APF}=\frac{2(4\pi r^3/3)}{(4r/\sqrt3)^3}=\frac{\sqrt3\pi}{8}=0.680.$$

**FCC:** the face diagonal traverses the same four radii through a face centre: $\sqrt2a=4r$. With $Z=4$:

$$\mathrm{APF}=\frac{4(4\pi r^3/3)}{(2\sqrt2r)^3}=\frac{\pi}{3\sqrt2}=0.740.$$

**Question (suggested 3 marks): Why is FCC more closely packed than BCC?** State both APFs, explain that a larger fraction of the conventional-cell volume is occupied in the hard-sphere model, and relate this to their contact geometries. Greater atom count alone is not a valid explanation because cell sizes differ.

### Worked geometry and packing examples

**A — basic:** Given SC atomic radius $r=0.15$ nm, find $a$ and APF. Edge contact gives $a=2r=0.30$ nm $=3.0\times10^{-10}$ m. APF $=\pi/6=0.524$. Check: packing fraction is independent of the chosen radius for the same structure.

**B — exam style:** Given BCC $a=0.288$ nm, find $r$ and unoccupied volume percentage. Use body-diagonal contact: $r=\sqrt3a/4=0.1247$ nm $=1.247\times10^{-10}$ m. APF $=0.6802$; unoccupied fraction $=1-0.6802=0.3198$, or $31.98\%$. Check: $r<a/2$ because atoms do not touch along BCC edges.

**Practice:** (1) FCC $a=0.400$ nm: find $r$, $Z$, CN. (2) BCC radius $0.125$ nm: find $a$ and APF.

> [!success]- Answers
> (1) $r=\sqrt2a/4=0.1414$ nm; $Z=4$, CN $=12$. (2) $a=4r/\sqrt3=0.2887$ nm; APF $=0.6802$.

## 5. Miller indices and Miller planes

### Describe the tilt using where a plane cuts the axes

Intercepts describe where a plane meets each axis. Reciprocals turn a very distant intercept into a small index, and an infinite intercept into zero. That is why a plane parallel to z has a zero z index. Express distances in a, b and c units before taking reciprocals.

Imagine parallel slices through a loaf. Moving a slice without tilting it changes its position but not its orientation. The usual intercept procedure identifies the orientation; do not expect the reduced indices to preserve the particular original plane's offset. A plane through the origin needs a parallel representative or a shifted origin before reciprocals are taken.

[[glossary/interplanar-spacing|Interplanar spacing]] then asks a separate metric question: what is the shortest perpendicular distance between the specified neighbouring parallel planes? The compact cubic formula relies on cubic geometry.

**Teach it back:** Explain why an infinite intercept gives zero, rather than infinity, in the final indices.

[[glossary/miller-indices|Miller indices]] $(hkl)$ specify the orientation of [[glossary/lattice|lattice]] planes using reciprocals of their intercepts with the crystallographic axes, measured in units of $a,b,c$. A zero index means the plane is parallel to that axis. A negative index is written with a bar, for example $(\bar1 1 0)$.

![Representative cubic Miller planes](assets/miller.png)

**Guided method — intercept, reciprocal, clear fractions:**

1. Express intercepts as multiples of the cell edges, not raw lengths in unlike units.
2. Take reciprocals. A parallel-axis intercept is $\infty$, whose reciprocal is zero.
3. Clear fractions to obtain the smallest appropriate integer orientation indices.
4. Put the result in round brackets. If the plane passes through the origin, choose a parallel plane or shift the origin first.

$(hkl)$ denotes a plane orientation/set of parallel planes; $[uvw]$ denotes a direction. In cubic crystals the direction $[hkl]$ is [[glossary/normal|normal]] to $(hkl)$, but this is not generally true for non-cubic cells. Braces $\{hkl\}$ collect symmetry-equivalent planes.

**Worked A:** Given intercepts $a,2b,\infty c$, find indices. In cell units they are $(1,2,\infty)$; reciprocals $(1,1/2,0)$; multiply by 2 → **$(210)$**. Check: $l=0$ correctly indicates parallelism to $c$.

**Worked B:** Given intercepts $2a,3b,4c$, find orientation. Reciprocals $(1/2,1/3,1/4)$; multiply by the least common multiple 12 → **$(643)$**. The representative nearest plane has intercepts $a/6,b/4,c/3$; it is parallel to the stated plane. Check reciprocal ratios, not the absolute offset from the origin.

**Practice:** (1) $a,\infty b,c$. (2) $-a,2b,\infty c$.

> [!success]- Answers
> (1) $(101)$. (2) Reciprocals $(-1,1/2,0)$, multiply by 2: $(\bar2 1 0)$.

### Interplanar spacing in cubic crystals

$$d_{hkl}=\frac{a}{\sqrt{h^2+k^2+l^2}}.$$

Here $d$ and $a$ are lengths, e.g. nm. This expression is for cubic geometry, not arbitrary crystals. Brief derivation: a representative plane is $hx+ky+lz=a$, with $x,y,z$ in physical length units. Its perpendicular distance from the parallel origin plane is the plane constant divided by the normal-vector magnitude, giving the expression above. Equivalently, project a perpendicular of length $d$ onto the three axes and use the squared direction cosines summing to one.

**Worked A:** $a=0.400$ nm; find $d_{110}$. Use the cubic formula: $0.400/\sqrt2=0.2828$ nm. **Worked B:** $d_{111}=0.208$ nm; find $a$. Rearrange: $a=d\sqrt3=0.3603$ nm. Check: for nonzero integer indices of these planes, $d\le a$.

**Practice:** (1) $a=0.300$ nm, find $d_{100},d_{111}$. (2) $d_{200}=0.150$ nm, find $a$.

> [!success]- Answers
> (1) $0.300$ nm and $0.1732$ nm. (2) $a=2d=0.300$ nm. Geometrical spacing does not by itself guarantee an allowed X-ray peak; structure-factor selection rules can suppress reflections.

## 6. Bragg's equation and applications

### A diffraction peak is a timing agreement between waves

Imagine waves scattered from two successive planes. The wave reaching the deeper plane travels extra distance on its way in and on its way out. If that extra travel is one whole wavelength, two whole wavelengths, and so on, the waves arrive with matching phases and reinforce.

The drawing turns that statement into 2d sin(theta) = n lambda: each extra segment contributes d sin(theta). Without the drawing, it is easy to use the angle from the [[glossary/normal|normal]] when the formula needs the angle from the plane.

At fixed wavelength and [[glossary/diffraction|diffraction]] order, a smaller plane spacing needs a larger sine and therefore a larger [[glossary/bragg-angle|Bragg angle]], if reflection is geometrically possible. If your calculation demands sine greater than one, that chosen combination cannot produce the proposed order.

**Teach it back:** Explain both the factor 2 and the integer n without doing algebra. Why is the detector angle commonly twice the angle in the equation?

X-ray wavelengths are comparable to atomic-plane separations, so waves scattered by successive crystal planes can interfere. **Bragg's condition** for a constructive peak is

$$2d\sin\theta=n\lambda,\qquad n=1,2,3,\ldots$$

$\theta$ is the **glancing angle to the planes**, $d$ is plane spacing, $\lambda$ is wavelength and $n$ is diffraction order. $d,\lambda$ must share units. The angle between incident and diffracted beams in the usual diffraction geometry is $2\theta$.

![Bragg path difference geometry](assets/bragg.png)

### Guided derivation

Draw two parallel planes a distance $d$ apart and two parallel incident rays making angle $\theta$ with the planes. The ray scattered from the lower plane travels farther before scattering and again after scattering. Project the plane separation onto each ray direction: each extra segment is $d\sin\theta$. Total extra path is $2d\sin\theta$. Constructive [[glossary/interference|interference]] requires an integer number of wavelengths, hence $2d\sin\theta=n\lambda$.

**Applications:** calculate $d$ from known wavelength and peak angle; determine an unknown wavelength using known crystal spacing; infer [[glossary/lattice|lattice]] parameter after indexing peaks; compare diffraction patterns to identify crystalline phases. Bragg's equation alone does not uniquely identify an unknown crystal from one peak.

**Worked A — spacing:** Given first-order $\theta=30^\circ$ and $\lambda=0.154$ nm, find $d$. A constructive peak gives $d=n\lambda/(2\sin\theta)=0.154/(2\times0.5)=0.154$ nm. Check: both sides of Bragg's equation are lengths.

**Worked B — recorded angle:** Given cubic $a=0.400$ nm, an allowed $(200)$ reflection and $\lambda=0.154$ nm, find the detector angle. First $d_{200}=a/2=0.200$ nm. Then $\sin\theta=0.154/(0.400)=0.385$, so $\theta=22.64^\circ$ and **$2\theta=45.29^\circ$**. Check the sine is below one; do not report $\theta$ if asked for $2\theta$.

**Practice:** (1) First order, $d=0.200$ nm, $\lambda=0.100$ nm: find $\theta$. (2) A first-order peak at $2\theta=60^\circ$ has $\lambda=0.154$ nm: find $d$.

> [!success]- Answers
> (1) $\theta=\sin^{-1}(0.25)=14.48^\circ$. (2) Use $\theta=30^\circ$ to obtain $d=0.154$ nm.

## 7. Physics of semiconductors and energy bands

### Allowed energies are like available options, not physical shelves

Begin with isolated atoms, each having allowed electron energies. Bring many atoms together: interactions produce an enormous collection of closely spaced states, organized into bands. The band picture describes allowed energies throughout the solid; its vertical axis is energy, not height inside the specimen.

To conduct, electrons need suitable available states so the field can change their motion. A completely filled band does not behave like a partly filled band. In the simple semiconductor picture, supplying enough energy promotes an electron to the conduction band and leaves a [[glossary/hole|hole]] behind in the valence band.

Picture a nearly full row of seats: a person moves into the empty seat, leaving a new vacancy. The vacancy seems to move the other way. This helps explain hole motion, but the actual system consists of quantum states, not people jumping between [[glossary/energy-band|energy bands]] at every step.

**Teach it back:** Why is a [[glossary/band-gap|band gap]] an energy interval? Why does creating an electron in the conduction band also leave a hole in an intrinsic material?

**Intuition:** an electron can conduct when there are nearby available [[glossary/energy-state|energy states]] into which its motion can change. In a solid, interactions between many atoms turn individual atomic energy levels into closely spaced **bands**. A **forbidden energy gap** has no allowed bulk electron states in the ideal band picture.

The **valence band (VB)** is the highest filled band at zero temperature in the simple [[glossary/intrinsic-semiconductor|intrinsic semiconductor]] picture. The **conduction band (CB)** above it can carry excited electrons. Band gap $E_g=E_c-E_v$ is measured in joules or electronvolts; $1\,\mathrm{eV}=1.602\times10^{-19}$ J.

![Bands, doping and depletion region](assets/semiconductor.png)

| Material | Band explanation | Typical consequence |
|---|---|---|
| Metal | Partly occupied band or overlapping bands with nearby empty states | Readily conducts |
| Insulator | Filled VB, empty CB, relatively large gap | Very few thermally generated carriers under ordinary conditions |
| Semiconductor | Smaller gap, carrier population controllable by temperature, light and [[glossary/doping\|doping]] | Intermediate, strongly controllable conductivity |

There is no universal gap boundary that classifies every material at every temperature. For orientation, silicon's gap is about 1.1 eV near room temperature. “Semiconductor” does not mean it always conducts exactly half as well as a metal.

### Electrons and holes

An electron excited from VB to CB leaves an empty valence state, a **hole**. A neighbouring valence electron can fill the vacancy, leaving a new vacancy behind. This collective motion acts as a positively charged mobile carrier, with effective charge $+e$. A hole is not a proton or a physically detached positive ion.

With an applied electric field, electron [[glossary/drift|drift]] is opposite to the field and hole drift is along it. Both contribute conventional current along the field.

**Question (suggested 3 marks): Explain a hole.** Define the missing valence electron state; describe neighbouring-electron filling; explain the apparent positive-charge motion and distinguish it from a stationary dopant ion.

## 8. Intrinsic and extrinsic semiconductors

### Change the easy-to-move charges without charging the whole crystal

In intrinsic material, thermal excitation creates carriers in pairs, so electron and [[glossary/hole|hole]] concentrations are equal. [[glossary/doping|Doping]] adds a different route: donors have an electron that can become mobile relatively easily, while acceptors make it easier to create mobile holes.

Track charge conservation. A neutral donor that releases an electron becomes a fixed positive ion; the mobile negative electron balances it. An acceptor that takes an electron becomes negative; the resulting hole supplies the matching positive carrier. Therefore n-type and p-type name majority carriers, not the sign of the entire crystal.

The conductivity expression separates two causes: how many carriers are available and how readily they [[glossary/drift|drift]] in a field. That is why carrier concentration and mobility appear separately. Mobility is not carrier number.

**Teach it back:** Tell the story of one donor atom and account for both the mobile electron and the fixed charge it leaves behind.

**Intrinsic:** an ideally pure semiconductor. Thermal excitation creates electron–hole pairs, so carrier number densities satisfy $n=p=n_i$. These densities are counts per m³. More thermal excitation normally increases intrinsic carrier density strongly.

**Extrinsic:** conductivity is controlled by deliberately added dopants.

| Property | n-type | p-type |
|---|---|---|
| Dopant in Si/Ge | Pentavalent donor, e.g. phosphorus | Trivalent acceptor, e.g. boron |
| Mechanism | Four valence electrons form bonds; the fifth is weakly bound and can enter CB | Dopant accepts a valence electron, leaving a mobile hole |
| Majority/minority carriers | Electrons / holes | Holes / electrons |
| Ion after ionisation | Fixed positive donor ion | Fixed negative acceptor ion |
| Impurity level | Near and below CB edge | Near and above VB edge |
| Fermi-level trend | Toward CB | Toward VB |

Both bulk materials can remain electrically neutral: mobile charge is balanced by fixed ionised dopants. Doping changes carrier concentration without requiring the entire specimen to carry net charge.

For context, conductivity is $\sigma=e(n\mu_n+p\mu_p)$, where $\mu_n,\mu_p$ are mobilities in m²/(V·s), so $\sigma$ is S/m. This is a useful explanation of why carrier density matters; extensive transport numericals are not required by the tracker.

**Question (suggested 5 marks): Compare intrinsic and extrinsic semiconductors.** State purity/doping, pair generation versus donor/acceptor action, equal versus unequal carrier densities, majority/minority carriers, and the role of impurity levels. Draw the relevant band sketches.

> [!tip] Remember
> **Donor → electron → n-type. Acceptor → hole → p-type.** The names identify the majority carriers, not the net specimen charge.

## 9. p-n junction

### The junction builds its own opposing field

Initially the two regions have different carrier concentrations. Random motion gives a net [[glossary/diffusion|diffusion]] of majority carriers across the boundary. Recombination removes mobile carriers nearby but leaves the dopant atoms fixed in place. Their exposed charges create an electric field.

That field opposes further majority-carrier diffusion. Equilibrium occurs when [[glossary/drift|drift]] and diffusion currents cancel, not when every particle stops moving. Trace field direction from positive n-side donors towards negative p-side acceptors; then remember that electron force is opposite the field.

Forward bias reduces the energy barrier to crossing and usually narrows depletion. Reverse bias raises the barrier and widens depletion. The applied voltage reshapes a pre-existing junction barrier; it does not invent the junction from nothing.

**Teach it back:** Draw fixed ions and the field before drawing any battery. Why can a region depleted of mobile carriers still contain charge?

A p-n junction is the boundary between p-type and n-type regions in one semiconductor structure.

### Formation in five steps

1. Initially electrons are numerous on the n side and [[glossary/hole|holes]] on the p side.
2. Concentration gradients cause electrons to diffuse n→p and holes p→n.
3. Recombination near the interface removes many mobile carriers.
4. Fixed **negative acceptor ions on the p side** and **positive donor ions on the n side** remain. This forms a space-charge/[[glossary/depletion-region|depletion region]], depleted mainly of mobile majority carriers.
5. The resulting built-in electric field points **n→p**, opposing further majority-carrier diffusion. At equilibrium drift and diffusion currents balance; net current is zero.

**Forward bias:** p connected to positive, n to negative. Applied voltage lowers the barrier and usually narrows depletion width; majority carriers cross more readily and current grows.

**Reverse bias:** p to negative, n to positive. The barrier and depletion width increase; a small minority-carrier reverse current remains until breakdown mechanisms become important. Do not claim the reverse current is identically zero.

**Question (suggested 5 marks): Explain junction formation with a diagram.** Draw p on the left and n on the right; put fixed minus ions on the left depletion side, plus ions on the right; draw the electric field from right to left. Explain diffusion, recombination, space charge, barrier formation and equilibrium balance in that order.

**CSE connection:** controlling carriers in semiconductor junctions underlies diodes and transistor circuits. Transistor derivations are beyond this tracker.

## 10. Module revision and practice

| Formula or fact | Units/condition |
|---|---|
| $Z=1,2,4$; CN $=6,8,12$ for SC/BCC/FCC | Equal-atom conventional cubic structures |
| [[glossary/atomic-packing-factor\|APF]] $=Z(4\pi r^3/3)/a^3$ | Dimensionless hard-sphere model |
| $d_{hkl}=a/\sqrt{h^2+k^2+l^2}$ | Cubic crystals; lengths in same unit |
| $2d\sin\theta=n\lambda$ | [[glossary/bragg-angle\|Glancing angle]]; constructive [[glossary/diffraction\|diffraction]] |
| Intrinsic $n=p$ | Electron/[[glossary/hole\|hole]] number densities, m⁻³ |

**Derivation checklist:** [ ] three radius–edge relations; [ ] APFs; [ ] cubic spacing; [ ] Bragg path difference. **Diagram checklist:** [ ] SC/BCC/FCC; [ ] (100)/(110)/(111); [ ] Bragg; [ ] bands/dopant levels; [ ] junction ions and field.

### Active recall

1. Why does a corner atom count as $1/8$?
2. Is [[glossary/coordination-number|coordination number]] equal to atoms per cell?
3. What index represents an infinite intercept?
4. Does a diffraction instrument's $2\theta$ equal the Bragg angle?
5. Why does a donor become positively charged?
6. Which way does the built-in field point?
7. Why is equilibrium current zero despite carrier motion?

> [!success]- Answers
> 1. Eight cubes share it. 2. No: nearest neighbours versus effective cell content. 3. Zero. 4. No; halve it. 5. It loses a weakly bound electron. 6. From n-side positive donors toward p-side negative acceptors. 7. [[glossary/drift|Drift]] and [[glossary/diffusion|diffusion]] contributions cancel.

### Mixed test — suggested 25 marks

1. Explain [[glossary/lattice|lattice]], [[glossary/basis|basis]] and [[glossary/unit-cell|unit cell]] with one example. (4)
2. Derive FCC packing factor. (5)
3. Index a plane with intercepts $2a,b,\infty c$. (2)
4. For $a=0.360$ nm and $\lambda=0.154$ nm, find first-order $\theta$ for an allowed (111) reflection. (4)
5. Compare n-type and p-type semiconductors. (4)
6. Explain junction formation and biasing using a labelled sketch. (6)

**Solutions:** 1: geometric periodic points + repeated atomic motif; repeating volume. 2: $Z=4$, $4r=\sqrt2a$, APF $=\pi/(3\sqrt2)=0.740$. 3: $(120)$. 4: $d=0.360/\sqrt3=0.20785$ nm; $\sin\theta=0.154/(2d)=0.37047$; $\theta\approx21.74^\circ$. 5: donors/electrons versus acceptors/holes, fixed-ion charges and band-level locations. 6: the five formation steps, field n→p, forward lowers barrier, reverse raises it.

| Priority | Topics | Basis |
|---|---|---|
| First | Cubic geometry, APF, [[glossary/miller-indices\|Miller indices]], Bragg | Several explicit numerical/derivation skills; overlap with the comparison paper |
| Next | Bands, carriers, [[glossary/doping\|doping]], p-n junction | Complete semiconductor branch of tracker |
| Short daily recall | Definitions, examples, 14 [[glossary/bravais-lattice\|Bravais lattices]] | Supports accurate short answers |

No SurTech recurrence rates are inferred from the comparison paper.

## Sources

Young & Freedman §36.6, printed pp.1205–1206 (PDF pp.1231–1232), and §§42.3–42.7, selected printed pp.1412–1426 (PDF offset +26), inspected for [[glossary/diffraction|diffraction]], structure, bands and carriers. Original geometry derivations and numerical problems use these physical principles. The external [OpenStax semiconductor discussion](https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping) was cross-checked; its online text contains a majority-carrier typo, so the local textbook was used to resolve the discrepancy. See [[Sources and Coverage]].
