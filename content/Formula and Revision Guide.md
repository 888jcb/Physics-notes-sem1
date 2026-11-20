---
tags: [physics, semester-1, revision]
---
# Formula and Revision Guide

[[Physics Index|Index]] · [[Sources and Coverage|Coverage audit]]

> [!note] Scope
> This guide revises the four modules in your tracker. SurTech's published R25 syllabus has additional material identified in the index. Formula recall alone does not replace definitions, diagrams and explanations.

## Constants and conversions

| Quantity | Value |
|---|---|
| Planck constant | $h=6.626\times10^{-34}$ J·s |
| Reduced Planck constant | $\hbar=h/(2\pi)=1.055\times10^{-34}$ J·s |
| Speed of light | $c=2.998\times10^8$ m/s |
| Electron mass | $m_e=9.109\times10^{-31}$ kg |
| Elementary charge magnitude | $e=1.602\times10^{-19}$ C |
| Boltzmann constant | $k_B=1.381\times10^{-23}$ J/K $=8.617\times10^{-5}$ eV/K |
| Energy shortcut | $hc\approx1240$ eV·nm |
| Units | 1 eV $=1.602\times10^{-19}$ J; nm $=10^{-9}$ m; Å $=10^{-10}$ m; pm $=10^{-12}$ m |

The electron charge is $-e$; the constant $e$ in these formulas denotes its positive magnitude. In an exponential, the base $e\approx2.718$ is a different use of the symbol.

## Choose a formula by the physical question

| Trigger | Relation | Conditions and symbol reminder |
|---|---|---|
| Critical incidence inside fibre | $i_c=\sin^{-1}(n_2/n_1)$ | $n_1>n_2$; measured from boundary normal |
| Largest accepted input angle | $\mathrm{NA}=\sqrt{n_1^2-n_2^2}=n_0\sin\theta_a$ | Ideal step-index meridional rays; $\theta_a$ from axis |
| Optical power loss | $A=10\log_{10}(P_{in}/P_{out})$ | Same power units; dB; $\alpha=A/L$ |
| Atoms inside cell | $Z=1,2,4$ for SC/BCC/FCC | Conventional monatomic cells |
| Contact geometry | $a=2r,4r/\sqrt3,2\sqrt2r$ | SC/BCC/FCC respectively |
| Packing fraction | APF $=Z(4\pi r^3/3)/a^3$ | Equal hard-sphere model; unitless |
| Cubic plane spacing | $d=a/\sqrt{h^2+k^2+l^2}$ | Cubic only; here $h$ is a Miller index |
| X-ray constructive peak | $2d\sin\theta=n\lambda$ | $\theta$ from plane; instrument often gives $2\theta$ |
| Photon energy | $E=hf=hc/\lambda$ | Vacuum wavelength |
| Blackbody wavelength peak | $\lambda_{\max}T=b$ | $b=2.898\times10^{-3}$ m·K; wavelength spectrum |
| Photoelectron maximum energy | $K_{\max}=hf-\phi=eV_s$ | Above threshold; one-photon model |
| Threshold | $f_0=\phi/h$, $\lambda_0=hc/\phi$ | Emission for $f\ge f_0$ or $\lambda\le\lambda_0$ |
| Scattered photon shift | $\lambda'-\lambda=(h/m_ec)(1-\cos\theta)$ | Initially stationary free electron; $h/m_ec=2.426$ pm |
| Matter wavelength | $\lambda=h/p$ | Correct relativistic/nonrelativistic momentum |
| Electron accelerated from rest | $\lambda(\mathrm{nm})=1.227/\sqrt{V(\mathrm V)}$ | $eV\ll511$ keV |
| Carrier phase/envelope speed | $v_p=\omega/k$, $v_g=d\omega/dk$ | State the dispersion/energy convention |
| Probability in interval | $P=\int_a^b\lvert\psi\rvert^2dx$ | Use a normalized wave function |
| Position–momentum spreads | $\Delta x\Delta p_x\ge\hbar/2$ | Equality gives minimum; corresponding components |
| Electron occupation | $f(E)=1/[1+e^{(E-\mu)/(k_BT)}]$ | Same energy units; $T>0$ for direct substitution |
| Surface ratio | Sphere $3/r$; cube $6/L$ | Units m⁻¹; ideal geometry |
| Confinement scaling | $\Delta E\propto1/L^2$ | Illustrative fixed-mass well model |

## Definition cards

| Prompt | Answer to reproduce |
|---|---|
| Lattice / basis | Periodic equivalent points / repeated atom or group attached to each point |
| Coordination number | Number of nearest neighbours, not atoms per cell |
| Hole | Missing valence-band electron state acting as a positive carrier |
| Depletion region | Region with reduced mobile-carrier population and fixed ionised dopants |
| Wave function | Complex probability amplitude; modulus squared gives density |
| Energy level / state | Allowed energy value / complete state specification |
| Microstate / macrostate | Detailed microscopic configuration / aggregate constraints |
| Thermodynamic probability | Count $W$ of compatible microstates |
| Boson / fermion | Integer-spin BE particle / half-integer-spin FD particle |
| Fermi level | Chemical potential; at nonzero T, occupation is 1/2 at that energy if a state is considered |
| Quantum well / wire / dot | 2 / 1 / 0 free carrier directions |

## A reliable numerical-answer routine

1. Identify the phenomenon before choosing a formula.
2. Write given values, the unknown and the necessary assumption.
3. Convert units once, showing the conversion.
4. Rearrange symbolically before inserting numbers.
5. Compute with extra digits; round the final answer sensibly.
6. Include units and a sanity check: sign, maximum/minimum, angle convention or physical scale.

**Troubleshooting:** NA is dimensionless; APF lies between 0 and 1; a probability lies between 0 and 1; an absent photoelectric effect cannot be represented by negative emitted kinetic energy; Compton shift is nonnegative for the stationary-electron model; a minimum uncertainty is a lower bound.

## Seven-day revision plan

Use two focused blocks of roughly 45–60 minutes per day, with breaks. Add time if learning a topic from scratch. Keep a small error log: error → corrected rule → one fresh practice question.

| Day | Learn/revise | Closed-book output |
|---|---|---|
| 1 | Module 1: TIR, NA, fibres and holography | Derive NA; solve four problems; draw recording/reconstruction |
| 2 | Module 2: crystal definitions, cubic cells, APF | Rebuild 1–2–4 / 6–8–12 table and all APFs |
| 3 | Module 2: Miller/Bragg; bands/doping/junction | Index four planes; solve two diffraction problems; draw junction field |
| 4 | Module 3: photons, blackbody, photoelectric, Compton | Explain classical failures; solve two problems per main photon process |
| 5 | Module 3: de Broglie, velocities, experiment, wave function, uncertainty | Reproduce experiment; solve wavelength/uncertainty; state Schrödinger equations |
| 6 | Module 3 statistics + Module 4 | Rebuild MB/BE/FD table; sketch Fermi curves; explain well/wire/dot and three applications |
| 7 | Mixed tests from all four files; correct weak areas | Timed answers, checked diagrams and a final error-log review |

Daily retrieval: revisit yesterday's hardest two questions, then two from three days earlier. In the final session, retest mistakes rather than rereading every paragraph.

## Last-day checklist

- [ ] Confirm examinable scope against teacher instructions, especially lasers and storage/display topics absent from the tracker.
- [ ] Reproduce NA, three APFs, cubic plane-spacing reasoning and Bragg derivation.
- [ ] Practise at least one example each for photoelectric effect, Compton shift, matter wavelength and uncertainty.
- [ ] Draw and label fibre, holography, cubic cells, Miller planes, Bragg, junction, electron diffraction, Fermi curves and confinement structures.
- [ ] Explain MB/BE/FD without confusing occupancy, degeneracy and distinguishability.
- [ ] Recall semiconductor majority carriers and junction field direction.
- [ ] Give mechanism-based applications for nanomaterials.
- [ ] Check angle mode on the calculator, unit conversions and significant figures.
- [ ] Stop using unsupported “sure-shot” predictions; use actual mastery to choose the last topics to revisit.

## Answer length by task

For a **definition**, give the defining feature and an example or unit where appropriate. For an **explanation**, give the mechanism in order. For a **comparison**, use matched criteria in a table. For a **derivation**, start with assumptions and geometry, show transformations and finish with the result and conditions. For a **numerical**, follow the routine above. Match depth to the actual question marks when the official paper is available.
