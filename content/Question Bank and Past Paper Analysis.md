---
tags: [physics, semester-1, questions]
---
# Question Bank and Past Paper Analysis

[[Physics Index|Index]]

### Verified comparison paper — paraphrased topic map

[GNIT official paper](https://gnit.ac.in/wp-content/uploads/2023/08/Physics-I-Backlog-PH-101.pdf): PH101, R18, 2022–23, CSE/IT/FT backlog; 3 hours, 70 marks. All three scanned pages were visually inspected. Its structure is 10 one-mark selections, three five-mark answers and three fifteen-mark answers. This is **not a verified SurTech scheme**.

| Question | Observed topic | Marks | Tracker mapping |
|---|---|---:|---|
| 1(iv), 1(v), 1(vii), 1(ix), 1(xii) | Probability density; fibre principle; group velocity; photon emission; electron diffraction | 1 each | Modules 1, 3 |
| 4(a) | Solid types and Bravais lattice | 3 | Module 2 |
| 5 | Relativistic matter wavelength | 5 | Beyond core depth |
| 9(a–c) | Bragg; Miller indexing; uncertainty with nuclear confinement | 3, 5, 7 | Modules 2, 3; nuclear application beyond core |
| 11(a–e) | BCC packing; Bravais; spacing; indexing; cell size | 3, 2, 5, 2, 3 | Module 2 |

Other questions cover oscillations, laser theory and diffraction beyond this tracker. Question 4(b)'s printed wavelength/speed combination is physically inconsistent; it was not reused as a valid numerical. Question 1(vi)'s extrinsic-semiconductor options are problematic. No mark-frequency prediction is drawn from this paper.

## What the comparison can usefully teach

The paper supports practising several **forms of response**: identify a concept, distinguish materials, explain a principle, perform a geometrical derivation and solve a numerical. These formats are useful independently of institution. The following bank is newly generated, uses tracker topics, and is **not presented as past-paper wording or predicted questions**. Verified questions above remain a source map; practice problems below have their own values and answer guidance.

## Module 1 — original practice

| Question | Answer or solution route |
|---|---|
| Explain why a ray can be reflected at a boundary without total internal reflection. | Partial reflection occurs generally; TIR specifically needs higher-to-lower index and incidence beyond critical. |
| For core/cladding indices 1.52 and 1.49 in air, find NA and acceptance half-angle. | $\sqrt{1.52^2-1.49^2}=0.3005$; half-angle $17.49^\circ$. |
| Why does graded-index propagation reduce modal pulse broadening? | Outer paths travel through lower-index regions at greater speed, partly compensating their longer distance. |
| A 4 mW signal experiences 6 dB loss. Find output. | $4\times10^{-0.6}=1.005$ mW. |
| Distinguish attenuation, modal dispersion and chromatic dispersion. | Power reduction; different spatial-mode delays; different spectral-component delays. |
| Why can a hologram reconstruct depth? | Interference encodes relative phase; diffraction reconstructs the object wavefront and angular information. Draw both stages. |

**Long-answer practice:** derive NA and explain how immersion in a higher-index external medium changes acceptance. Use Module 1 §2: the core/cladding NA stays fixed in the model, while $\sin\theta_a=\mathrm{NA}/n_0$ decreases.

## Module 2 — original practice

| Question | Answer or solution route |
|---|---|
| Distinguish lattice, basis and crystal structure. | Equivalent geometric points; atomic motif; motif repeated on lattice. |
| Derive BCC packing factor and explain why $a\ne2r$. | Contact is on the body diagonal: $4r=\sqrt3a$; $Z=2$; APF $=\sqrt3\pi/8$. |
| Find indices for intercepts $3a,2b,\infty c$. | Reciprocals $1/3,1/2,0$ → $(230)$. |
| A cubic crystal has $a=0.450$ nm. Find $d_{111}$. | $0.450/\sqrt3=0.2598$ nm. |
| First-order diffraction uses $\lambda=0.150$ nm and $d=0.250$ nm. Find $2\theta$. | $\theta=\sin^{-1}(0.3)=17.46^\circ$; $2\theta=34.92^\circ$. |
| Explain why p-type material is normally electrically neutral. | Mobile holes are balanced by fixed negative acceptor ions; p denotes majority-carrier sign. |
| Explain depletion formation and field direction. | Diffusion/recombination leaves acceptor minus ions on p and donor plus ions on n; field n→p; drift balances diffusion. |

**Long-answer practice:** compare intrinsic, n-type and p-type materials with band sketches. Include purity/doping, carrier concentrations, impurity levels and the distinction between mobile carriers and stationary ions; Module 2 §§7–9 gives model explanations.

## Module 3 — original practice

| Question | Answer or solution route |
|---|---|
| Why does brighter light below the threshold fail to produce ordinary photoemission? | Individual photons still have insufficient energy in the one-photon model. |
| For $\lambda=350$ nm and $\phi=2.20$ eV, find stopping potential. | $1240/350-2.20=1.343$ eV → $1.343$ V. |
| Find electron Compton shift at $120^\circ$. | $2.426[1-(-0.5)]=3.639$ pm. |
| Find an electron's de Broglie wavelength at 81 V. | $1.227/9=0.1363$ nm; nonrelativistic approximation valid. |
| For $\omega=3k^2$ in consistent SI units and $k=4$ m⁻¹, find $v_p,v_g$. | $v_p=3k=12$ m/s; $v_g=6k=24$ m/s. |
| Electron position uncertainty is 0.50 nm. Find minimum velocity spread. | $\hbar/(2m_e\Delta x)=1.158\times10^5$ m/s. |
| Why can equal-energy electrons coexist without violating exclusion? | Different complete states, such as different spins, can have equal energy. |
| At $E=\mu+3k_BT$, find FD occupation. | $1/(1+e^3)=0.04743$. |
| Explain why thermodynamic probability is not ordinary probability. | $W$ counts compatible microstates; normalized probability requires dividing by an appropriate total under stated assumptions. |

**Long-answer practice:** compare MB, BE and FD with examples, then explain the classical limit and draw Fermi curves at zero/nonzero temperatures. Module 3 §§11–13 supplies the complete answer structure. Do not derive distribution formulas unless a teacher adds that requirement.

## Module 4 — original practice

| Question | Answer or solution route |
|---|---|
| Why is a wire 1D and a dot 0D in the electronic picture? | One versus zero free carrier directions; confinement in two versus three. |
| A sphere's radius decreases from 30 nm to 6 nm. Compare $A/V$. | Ratio increases fivefold because $A/V=3/r$. |
| Explain a change that need not be caused by quantum confinement. | Greater adsorption per mass can arise from increased accessible surface area. |
| Compare diamond, graphite and graphene. | 3D tetrahedral network; stacked honeycomb sheets; one honeycomb sheet, with corresponding mechanical/electrical differences. |
| Why should CNT chirality be mentioned when discussing electronics? | It influences whether a tube is metallic or semiconducting. |
| Give one electronic, environmental and medical application with mechanisms. | Tunable dot transitions/display; accessible adsorbing surface/pollutant capture; engineered payload carrier/controlled delivery. |

**Long-answer practice:** explain reduction of dimensionality and the quantum size effect. Draw wells/wires/dots, count confined/free directions, and explain why changing size changes allowed energies. Keep any infinite-well formula explicitly labelled as a model.

## Self-marking routine

Use the marks on an actual verified question when available. Otherwise score each substantial answer for: correct definition, mechanism in order, appropriate labelled diagram, correct equation/units, and a meaningful conclusion. For numericals, separately check setup, conversion, calculation and physical sense. These are study checks, not an official marking rubric.

For timed practice, use the complete mixed test and solution key at the end of **each module file**. Record errors in your own notebook; the original tracker completion boxes are preserved.
