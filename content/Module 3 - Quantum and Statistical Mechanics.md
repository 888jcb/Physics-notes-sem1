---
tags: [physics, semester-1, module-3]
---
# Module 3 — Quantum and Statistical Mechanics

[[Physics Index|Index]] · [[Formula and Revision Guide|Final revision]]

> [!abstract] Learning route
> Experimental failures of classical physics → photons → matter waves → wave functions and uncertainty → statistics of many particles. This is the largest tracker module: study it in three sittings. All practice below is newly generated unless identified otherwise. Marks are suggested.

**Constants:** $h=6.626\times10^{-34}$ J·s; $\hbar=h/(2\pi)=1.055\times10^{-34}$ J·s; $c=2.998\times10^8$ m/s; $m_e=9.109\times10^{-31}$ kg; $e=1.602\times10^{-19}$ C; $k_B=1.381\times10^{-23}$ J/K $=8.617\times10^{-5}$ eV/K. Useful shortcut: $hc\approx1240$ eV·nm. A nanometre is $10^{-9}$ m; an ångström is $10^{-10}$ m; a picometre is $10^{-12}$ m.

## 1. Inadequacy of classical physics and quantization

Classical mechanics describes many large-scale motions extremely well, and classical electromagnetic waves explain interference. They fail when unrestricted continuous energy exchange is assumed for certain microscopic phenomena.

| Observation | Classical difficulty | Quantum idea |
|---|---|---|
| Blackbody spectrum | Classical mode counting with equipartition predicts excessive short-wavelength energy: ultraviolet catastrophe | Oscillator energy exchange occurs in quanta $hf$ |
| Photoelectric emission | Threshold frequency and immediate emission cannot be explained by gradual intensity-dependent energy accumulation | One absorbed photon provides energy $hf$ |
| Compton shift | Classical scattering from a stationary free charge does not give the observed angle-dependent photon wavelength shift | Photon carries momentum $h/\lambda$ |
| Atomic line spectra | Continuous energies do not explain discrete spectral lines | Bound systems have discrete energy differences |

**Quantization** means that a physical quantity has allowed discrete values in a specified system. In Planck's oscillator model $E_n=nhf$ for $n=0,1,2,\dots$ (the historical model; a quantum oscillator includes zero-point energy). Energy changes by integer multiples of $hf$. A photon has energy $E=hf=hc/\lambda$. This does not mean every free particle can have only integer energy values: discreteness depends on constraints and the system.

**Question (suggested 3 marks): Why was a quantum theory needed?** Give two concrete observations, describe the classical prediction that fails, and explain which quantum assumption resolves it. “Classical physics is wrong” is too broad.

## 2. Blackbody radiation and photon energy

A **blackbody** absorbs all incident electromagnetic radiation in the ideal limit and emits a thermal spectrum determined by temperature. A cavity with a small hole approximates it: radiation entering the hole undergoes many internal reflections and is mostly absorbed.

![Blackbody spectral curves](assets/blackbody.png)

The spectrum rises to a maximum and then falls. Raising temperature increases emission and shifts the wavelength peak to shorter wavelengths. Planck's quantized energy exchange suppresses the high-frequency contribution that classical equipartition overestimates.

Two useful supporting relations are $\lambda_{\max}T=b$, with $b=2.898\times10^{-3}$ m·K (Wien's displacement law), and $P/A=\sigma_{SB}T^4$ for ideal total emission. $\sigma_{SB}=5.670\times10^{-8}$ W·m⁻²·K⁻⁴. Net exchange with surroundings also depends on their temperature. The tracker does not require derivation of the spectral radiation law.

### Worked examples

**A — photon energy:** Given $\lambda=500$ nm, find $E$. Photons obey $E=hc/\lambda$, so use the eV·nm shortcut: $E=1240/500=2.480$ eV $=3.973\times10^{-19}$ J. The wavelength is visible and the energy is a few eV, a sensible scale.

**B — blackbody peak:** Given $T=5800$ K, find peak wavelength and the energy of a photon at that wavelength. Wien gives $\lambda_{\max}=2.898\times10^{-3}/5800=4.997\times10^{-7}$ m $=499.7$ nm. Then $E=1240/499.7=2.482$ eV. This is the photon energy at the wavelength-spectrum peak, not the average photon energy of the entire spectrum.

**Practice:** (1) Find the energy of a 620 nm photon. (2) Find the peak wavelength of a 3000 K blackbody and its peak-wavelength photon energy.

> [!success]- Answers
> (1) $1240/620=2.000$ eV. (2) $966$ nm, then $1240/966=1.284$ eV. Use kelvin, not Celsius.

**Recall answer:** a hotter body need not emit only short-wavelength radiation; it emits a broad spectrum. The position of a peak depends on whether spectral intensity is plotted per wavelength interval or per frequency interval.

## 3. Photoelectric effect — equations, no derivation

The photoelectric effect is emission of electrons from a material after absorption of sufficiently energetic light. The **work function** $\phi$ is the minimum energy needed to remove an electron from the material into vacuum in the relevant surface conditions.

$$K_{\max}=hf-\phi=\frac{hc}{\lambda}-\phi=eV_s.$$

$K_{\max}$ is maximum electron kinetic energy; $V_s$ is the positive magnitude of stopping potential. The threshold frequency is $f_0=\phi/h$ and threshold wavelength $\lambda_0=hc/\phi$. Emission needs $f\ge f_0$, equivalently $\lambda\le\lambda_0$ in the simple one-photon model.

![Photoelectric and Compton experiments](assets/photon-experiments.png)

### Explain the observations

- Below threshold, increasing ordinary light intensity does not cause one-photon emission.
- Above threshold, higher intensity at fixed frequency means more photons per second and generally more emitted electrons/current, not higher $K_{\max}$.
- Higher frequency increases photon energy and hence maximum kinetic energy.
- Emission is prompt on experimental time scales because a photon transfers its energy in one event.

**Graph to draw:** plot $K_{\max}$ against $f$ for $f\ge f_0$: straight line of slope $h$, crossing the frequency axis at $f_0$. Alternatively $V_s$ versus $f$ has slope $h/e$. A negative extrapolated $K_{\max}$ indicates no emission, not negative physical kinetic energy.

### Worked examples

**A:** Given $\lambda=400$ nm and $\phi=2.00$ eV, find $K_{\max}$ and $V_s$. Photon energy $=1240/400=3.10$ eV. Subtract the removal cost: $K_{\max}=1.10$ eV $=1.762\times10^{-19}$ J. Since $eV_s=K_{\max}$, $V_s=1.10$ V. Check the photon energy exceeds the work function.

**B:** Given threshold wavelength $\lambda_0=600$ nm and incident wavelength $300$ nm, find work function, stopping potential and maximum speed. $\phi=1240/600=2.067$ eV; incident energy $=4.133$ eV. Hence $K_{\max}=2.067$ eV $=3.311\times10^{-19}$ J; $V_s=2.067$ V. Use $K=mv^2/2$ because this energy is far below $m_ec^2=511$ keV: $v_{\max}=\sqrt{2K/m_e}=8.53\times10^5$ m/s. Check $v\ll c$, so the nonrelativistic choice was consistent.

**Practice:** (1) A 500 nm beam falls on a surface with $\phi=2.0$ eV; find stopping potential. (2) A surface has $\phi=3.0$ eV. Will 600 nm light emit electrons? Find $\lambda_0$.

> [!success]- Answers
> (1) $1240/500-2=0.480$ eV, hence $0.480$ V. (2) No: photon energy $2.067$ eV is below 3.0 eV. $\lambda_0=413.3$ nm. Do not report a negative stopping potential as an emitted-electron answer.

**Question (suggested 4 marks): Explain frequency versus intensity effects.** Use the photon energy relation and count photons separately from energy per photon; state threshold, stopping potential behaviour and current behaviour. No Einstein-equation derivation is required.

## 4. Compton effect — result, no derivation

An X-ray or high-energy photon scattered by a free or approximately free electron can emerge with increased wavelength. The electron receives recoil energy and momentum; the photon loses energy.

$$\Delta\lambda=\lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta).$$

$\theta$ is the angle between incident and scattered **photon** directions. The electron Compton wavelength $h/(m_ec)=2.426$ pm. The result assumes an initially stationary free electron; tightly bound electrons and other targets require additional care.

At $0^\circ$, shift is zero. At $90^\circ$, shift is 2.426 pm. At $180^\circ$, the maximum is 4.852 pm. The shift for a fixed angle is independent of incident wavelength in this model; the fractional energy change is not.

**Worked A:** Given $\lambda=50$ pm and $\theta=90^\circ$, find the scattered wavelength. $\Delta\lambda=2.426(1-0)=2.426$ pm, so $\lambda'=52.426$ pm. Check the scattered photon has a longer wavelength and lower energy.

**Worked B:** Given $\lambda=0.0710$ nm and $\theta=60^\circ$, find $\lambda'$ and electron recoil kinetic energy. Convert Compton wavelength to $0.002426$ nm. Shift $=0.002426(1-0.5)=0.001213$ nm; $\lambda'=0.072213$ nm. Energy conservation gives $K=hc(1/\lambda-1/\lambda')=1240(1/0.0710-1/0.072213)\approx293$ eV. Check $K>0$ and is smaller than the incoming photon energy, about 17.5 keV.

**Practice:** (1) Find the shift at $180^\circ$. (2) An electron-scattered photon shifts by $1.213$ pm; find the photon scattering angle.

> [!success]- Answers
> (1) 4.852 pm. (2) $1-\cos\theta=1.213/2.426=0.5$; therefore $\theta=60^\circ$.

**Compare:** photoelectric absorption removes the incident photon and ejects an electron from a material; Compton scattering leaves an outgoing photon plus a recoiling electron. Both support photon energy/momentum, but they are not the same process.

## 5. Wave–particle duality and de Broglie hypothesis

Light shows wave behaviour in interference and diffraction, while emission/absorption and Compton scattering reveal discrete photon interactions. Matter also diffracts. Quantum objects are described by a theory that predicts both kinds of observations; they are not tiny classical balls that switch into literal water waves.

de Broglie associated a wavelength with momentum:

$$\lambda=\frac{h}{p}.$$

For nonrelativistic mass $m$, $p=mv$ and $K=p^2/(2m)$, so $\lambda=h/\sqrt{2mK}$. For an electron accelerated from negligible initial speed through potential difference $V$, $K=eV$:

$$\lambda=\frac{h}{\sqrt{2m_e eV}},\qquad \lambda(\text{nm})\approx\frac{1.227}{\sqrt{V(\text{volts})}}.$$

### Guided derivation of accelerated-electron wavelength

Electrical work $eV$ becomes kinetic energy $m_ev^2/2$. Solve for momentum rather than velocity: $p=m_ev=\sqrt{2m_eeV}$. Substitute this into $\lambda=h/p$. The shortcut requires $eV\ll m_ec^2$ and uses volts, not kilovolts inserted without conversion.

**Worked A:** Given $V=150$ V, find electron wavelength. Use the accelerated-electron shortcut: $\lambda=1.227/\sqrt{150}=0.1002$ nm $=1.002$ Å. Check 150 eV is much below 511 keV.

**Worked B:** An electron has $\lambda=0.200$ nm; find accelerating voltage and speed. Rearrange: $V=(1.227/0.200)^2=37.64$ V. $v=\sqrt{2eV/m_e}=3.64\times10^6$ m/s. Check this is about $0.012c$, validating the approximation.

**Practice:** (1) Find wavelength at 100 V. (2) Find the wavelength of a 0.10 kg ball moving at 10 m/s.

> [!success]- Answers
> (1) $0.1227$ nm. (2) $p=1$ kg·m/s, so $\lambda=6.626\times10^{-34}$ m. Its wavelength is far too small for ordinary macroscopic diffraction observation.

**Optional extension only:** for high-energy electrons, use $pc=\sqrt{K(K+2m_ec^2)}$ and $\lambda=h/p$. A relativistic derivation appears in the comparison paper, but it is not made a core derivation here.

## 6. Phase velocity and group velocity

A sinusoid $\cos(kx-\omega t)$ has constant phase when $kx-\omega t$ is constant. Its phase travels at

$$v_p=\frac{\omega}{k}=f\lambda.$$

Here $k=2\pi/\lambda$ is angular wavenumber in rad/m and $\omega=2\pi f$ is angular frequency in rad/s. A localized particle is better represented by a superposition of waves—a **wave packet**—rather than one infinite sinusoid. The envelope of a narrow-band packet travels at

$$v_g=\frac{d\omega}{dk}.$$

**Guided explanation:** add two nearby waves with $k\pm\Delta k/2$ and $\omega\pm\Delta\omega/2$. The product identity gives a rapid carrier multiplied by a slowly varying envelope. Constant envelope phase moves at $\Delta\omega/\Delta k$, which becomes the derivative as the differences shrink.

| Phase velocity | Group velocity |
|---|---|
| Speed of a constant-phase point of the carrier | Speed of packet envelope |
| $\omega/k$ | $d\omega/dk$ |
| Can exceed $c$ without transmitting information at that speed | For a free massive particle equals its particle velocity |

For a nonrelativistic free particle using **kinetic energy** in $\omega=E/\hbar$, $\omega=\hbar k^2/(2m)$, so $v_p=v/2$ and $v_g=v$. With relativistic **total energy**, $v_p=E/p=c^2/v$ and again $v_g=v$. Do not mix these energy conventions. In unusual dispersive/absorbing media, group velocity is not automatically signal velocity.

**Worked A:** Given a nondispersive relation $\omega=uk$ with $u=300$ m/s, $v_p=\omega/k=u$ and $v_g=d\omega/dk=u$: both 300 m/s.

**Worked B:** Given $\omega=Ak^2$, $A=2.0$ m²/s and $k=3.0$ m⁻¹, find velocities. $v_p=Ak=6.0$ m/s; differentiate first, then substitute: $v_g=2Ak=12.0$ m/s. Units check: m²/s multiplied by m⁻¹ gives m/s.

**Practice:** (1) $\omega=5k^2$ in consistent SI units, $k=2$ m⁻¹: find $v_p,v_g$. (2) A nonrelativistic free electron moves at $2\times10^6$ m/s; use the kinetic-energy convention to find both.

> [!success]- Answers
> (1) 10 m/s and 20 m/s. (2) $v_p=1\times10^6$ m/s, $v_g=2\times10^6$ m/s. State the convention explicitly.

## 7. Davisson–Germer experiment

![Electron diffraction experiment](assets/davisson-germer.png)

**Aim:** test whether electrons exhibit diffraction, as predicted by de Broglie.

**Apparatus:** electron gun with accelerating voltage, collimation, nickel crystal target, movable electron detector and vacuum enclosure. The diagram simplifies the enclosure and electrical connections.

**Procedure:** accelerate electrons to a known energy, direct the beam onto nickel, measure scattered intensity as detector angle changes, and repeat at different voltages.

**Observation:** intensity has sharp maxima at particular angles/energies, characteristic of diffraction from an ordered crystal. Near 54 V, the measured wavelength is about 0.165 nm, close to $1.227/\sqrt{54}=0.167$ nm from de Broglie.

**Conclusion:** agreement between diffraction-inferred wavelength and momentum-predicted wavelength supports electron wave behaviour. Do not equate a quoted scattering angle with the Bragg glancing angle without checking the diagram's convention.

**Question (suggested 5 marks): Describe the experiment and significance.** Organize the answer as aim, labelled apparatus, scanning procedure, diffraction maximum, quantitative agreement, conclusion. It is not the experiment used to establish the photon Compton shift.

## 8. Wave function, probability and normalization

The **wave function** $\psi(x,t)$ is a generally complex probability amplitude describing a quantum state. It is not itself a measurable probability. Born's interpretation gives

$$\rho(x,t)=|\psi(x,t)|^2=\psi^*\psi,\qquad
P(a\le x\le b)=\int_a^b|\psi(x,t)|^2\,dx.$$

In one dimension $\rho$ has units m⁻¹ and $\psi$ has units m⁻¹/²; in three dimensions they are m⁻³ and m⁻³/². Probability itself is dimensionless.

![Wave function and probability interpretation](assets/wavefunction.png)

**Normalization** means choosing the overall amplitude so that the total probability over all allowed space is one:

$$\int_{-\infty}^{\infty}|\psi|^2\,dx=1.$$

For a particle confined to a finite region, integrate over that region. Qualitatively, if an unnormalized square integrates to 4, halve the amplitude so the square integrates to 1. This does not mean forcing $\psi=1$ at every position.

For ordinary finite-potential problems a physically acceptable wave function is single-valued, finite, continuous, normalizable for a bound state, and has the required boundary behaviour. Derivative continuity has qualifications at singular potentials, so avoid stating it without conditions.

**Probability versus density:** a density can exceed 1 when expressed per metre; only an integrated probability must lie between 0 and 1. The probability at one exact point in a continuous position distribution is zero, even where the density is nonzero.

**Question (suggested 3 marks): What is the physical significance of $\psi$?** Explain probability amplitude, its modulus squared, interval probability and normalization. **Question (suggested 2 marks): Can negative $\psi$ mean negative probability?** No: $|\psi|^2$ is nonnegative. No normalization-integral derivations are required by the tracker.

## 9. Uncertainty principle and numericals

The standard deviations of position and the corresponding momentum component obey

$$\Delta x\,\Delta p_x\ge\frac{\hbar}{2}=\frac{h}{4\pi}.$$

This is an intrinsic constraint on quantum states, not merely poor instruments or clumsy measurement. A sharply localized wave packet requires a broad spread of wavenumbers/momenta. For a nonrelativistic particle of fixed mass, $\Delta p_x=m\Delta v_x$.

**Symbols:** $\Delta x$ in m, $\Delta p_x$ in kg·m/s. Their product has J·s, matching $\hbar$. An equality calculation gives the **minimum** allowed uncertainty; actual spreads may be larger.

The relation $\Delta E\Delta t\gtrsim\hbar/2$ is useful as an energy/lifetime or evolution-time scale statement; time is not simply another position-like observable in ordinary quantum mechanics. Focus on position–momentum numericals here.

**Worked A:** Given electron position spread $\Delta x=0.10$ nm $=1.0\times10^{-10}$ m, find minimum momentum spread. Use $\Delta p_{\min}=\hbar/(2\Delta x)=5.275\times10^{-25}$ kg·m/s. Then $\Delta v_{\min}=5.275\times10^{-25}/9.109\times10^{-31}=5.79\times10^5$ m/s. These are spreads, not an exact velocity.

**Worked B:** Given electron speed spread $\Delta v=1.0\times10^5$ m/s, find minimum position spread. $\Delta p=m_e\Delta v=9.109\times10^{-26}$ kg·m/s. Thus $\Delta x_{\min}=1.055\times10^{-34}/(2\times9.109\times10^{-26})=5.79\times10^{-10}$ m $=0.579$ nm. Smaller momentum uncertainty demands greater position uncertainty.

**Practice:** (1) Electron localized to $1.0$ nm: find minimum $\Delta v$. (2) A particle has $\Delta p=2.0\times10^{-24}$ kg·m/s: find minimum $\Delta x$.

> [!success]- Answers
> (1) $5.79\times10^4$ m/s. (2) $2.64\times10^{-11}$ m. Always use the matching coordinate/momentum components.

## 10. Schrödinger wave equation — statement only

For a nonrelativistic particle of mass $m$ in potential energy $V(x,t)$, the one-dimensional time-dependent equation is

$$i\hbar\frac{\partial\psi}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2}+V\psi.$$

For a stationary state in a time-independent potential, the spatial wave function satisfies

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+V(x)\psi=E\psi.$$

$i=\sqrt{-1}$; $V$ and $E$ are energies in J (here $V$ is **not voltage**). The first term represents kinetic energy acting on the state, and the second potential energy. Boundary conditions determine permitted states. State and identify the terms; the tracker does not request deriving or solving these equations.

## 11. Energy levels, states, phase space and counting

**Energy level:** an allowed energy value. **Energy state:** a complete specification of a quantum state. Several distinct states can share one energy level; this is **degeneracy**. Example: two electron spin states can have the same energy in a suitable zero-field model.

**Phase space:** the space of positions and momenta. A classical particle in three dimensions needs six coordinates $(x,y,z,p_x,p_y,p_z)$; $N$ particles need $6N$. A point in that space specifies a classical microstate. It is not simply ordinary three-dimensional space or an energy-axis diagram.

**Microstate:** detailed microscopic specification consistent with the model, such as individual particle states (classical) or quantum occupation numbers. **Macrostate:** bulk constraints or aggregate descriptions, such as total energy, volume and particle number, without individual microscopic details.

**Thermodynamic probability $W$:** number of microstates compatible with a macrostate. It is a count, not a number restricted to 0–1. Under the equal-a-priori-probability assumption for an isolated equilibrium system, a macrostate with more compatible microstates is more probable. The useful connection $S=k_B\ln W$ identifies entropy with multiplicity; no statistical derivation is needed.

### Simple counting illustration

Take three distinguishable particles A, B, C that can occupy a left or right compartment. The macrostate “two left, one right” has three microstates: AB|C, AC|B, BC|A. If all eight left/right assignments are equally likely, its probability is $3/8$, whereas its thermodynamic probability is $W=3$.

**Worked A:** For four distinguishable particles, exactly one on the right: choose which particle, $W=4$. Probability among equally likely assignments $=4/2^4=1/4$.

**Worked B:** For four distinguishable particles, exactly two on each side: $W={4\choose2}=4!/(2!2!)=6$, probability $6/16=3/8$. It exceeds the probability of all four on one specified side ($1/16$). This toy counting model illustrates multiplicity, not a full quantum gas derivation.

**Practice:** (1) Three distinguishable particles all on the left: $W$? (2) Five distinguishable particles, exactly two left: $W$?

> [!success]- Answers
> (1) $W=1$. (2) $W={5\choose2}=10$. Use these counting formulas only when the model treats particles/assignments as distinguishable.

## 12. MB, BE and FD statistics

**What to learn:** how particle identity and occupancy restrictions affect distributions. The tracker asks for qualitative comparison, not combinatorial derivations.

| Property | Maxwell–Boltzmann (MB) | Bose–Einstein (BE) | Fermi–Dirac (FD) |
|---|---|---|---|
| Regime/particles | Classical dilute limit; exchange effects negligible | Indistinguishable bosons | Indistinguishable fermions |
| Spin | No unique spin restriction in the classical approximation | Integer spin | Half-integer spin |
| Same complete single-particle state | No exclusion rule in classical model | Any number permitted | At most one identical fermion |
| Examples | Dilute nondegenerate gas | Photons; suitable bosonic atoms | Electrons, protons, neutrons |
| Physical significance | Classical thermal distributions | State sharing/bunching; radiation statistics | Exclusion; electron filling and Fermi surface |

**Bosons versus fermions:** photons have spin 1 and are bosons; electrons have spin $1/2$ and are fermions. Composite particles can fall into either class depending on total spin. “All atoms are bosons” is false.

Two electrons may occupy the same spatial orbital with opposite spins because those are two **different complete states**. Pauli exclusion prohibits identical complete-state occupation, not identical energy values.

For orientation, the mean occupation per state is

$$\bar n_{MB}=e^{-(E-\mu)/(k_BT)},\quad
\bar n_{BE}=\frac{1}{e^{(E-\mu)/(k_BT)}-1},\quad
\bar n_{FD}=\frac{1}{e^{(E-\mu)/(k_BT)}+1}.$$

$\mu$ is chemical potential; $T$ is absolute temperature. Keep $E,\mu,k_BT$ in the same energy units. These expressions summarize the comparison and are not derived here. For equilibrium photons, $\mu=0$ because their number is not fixed. FD occupation is a probability between 0 and 1; boson mean occupation can exceed 1.

### Classical limits

When $e^{(E-\mu)/(k_BT)}\gg1$, the $\pm1$ terms become negligible and both BE and FD approach MB. Physically, high temperature and low density can make the gas nondegenerate so exchange effects are unimportant. High temperature alone is not a universal guarantee; density matters.

**Question (suggested 5 marks): Compare the three statistics.** Include distinguishability/regime, spin, occupancy, examples and the classical limit. **Question (suggested 2 marks): Do bosons obey MB statistics?** In general they obey BE; MB is only an appropriate classical limit. This corrects an overgeneralization in the local SLAC lecture.

> [!tip] Remember
> **BE: bosons can bunch. FD: fermions face exclusion. MB: many states, sparse occupation.**

## 13. Fermi distribution and Fermi level

For electrons in thermal equilibrium,

$$f(E)=\frac{1}{1+\exp[(E-\mu)/(k_BT)]}.$$

The **Fermi level** is the chemical potential $\mu(T)$; introductory notation often calls it $E_F$. Strictly, **Fermi energy** refers to its zero-temperature value. A Fermi level need not be an actually occupied allowed state; it can lie in a semiconductor band gap.

![Zero and finite temperature Fermi distribution](assets/fermi.png)

At $T=0$, all available states below the Fermi energy are occupied and those above are empty: a step distribution. At nonzero temperature the step smooths: some electrons below the chemical potential gain energy and populate states above it. At $E=\mu$ and $T>0$, $f=1/2$ exactly. At $T=0$ the single step-edge value is understood by a limit; it is not a broad half-filled region.

Do not confuse occupation probability $f(E)$ with the **density of states** $g(E)$, the number of states per energy interval. Electron population in an interval depends on both: $g(E)f(E)dE$.

### Guided numerical examples — supporting application

**A:** Find occupation at $E=\mu+2k_BT$. Substitute the dimensionless energy offset directly: $f=1/(1+e^2)=0.1192$. No joule conversion is required. Since the state is above $\mu$, occupation must be below $1/2$.

**B:** At 300 K, find occupation 0.050 eV above $\mu$. First $k_BT=(8.617\times10^{-5})(300)=0.02585$ eV. Ratio $=0.050/0.02585=1.934$; $f=1/(1+e^{1.934})=0.1263$. Using eV for the numerator and J for $k_BT$ would be invalid.

**Practice:** (1) Find $f$ at $E=\mu$. (2) Find $f$ at $E=\mu-2k_BT$.

> [!success]- Answers
> (1) $1/2$ for $T>0$. (2) $1/(1+e^{-2})=0.8808$. At equal offsets above and below a fixed chemical potential, the occupations add to one.

**Question (suggested 4 marks): Explain the temperature effect with a graph.** Draw the zero-temperature step, a smoother finite-temperature curve and the halfway point. Label axes and explain thermal promotion near $\mu$, without claiming that every electron gains the same energy or that $\mu$ never changes with temperature.

## 14. Revision sheet and formula table

| Relation | Use and condition |
|---|---|
| $E=hf=hc/\lambda$ | Photon energy; vacuum wavelength |
| $K_{\max}=hf-\phi=eV_s$ | One-photon emission above threshold |
| $\Delta\lambda=(h/m_ec)(1-\cos\theta)$ | Initially stationary free electron |
| $\lambda=h/p$ | Matter wavelength; choose correct momentum |
| $\lambda=h/\sqrt{2m_eeV}$ | Nonrelativistic electron from rest |
| $v_p=\omega/k$, $v_g=d\omega/dk$ | State dispersion relation/energy convention |
| $P=\int \lvert\psi\rvert^2dx$ | Probability; normalized state |
| $\Delta x\Delta p_x\ge\hbar/2$ | Same coordinate and momentum component |
| $f=1/[1+e^{(E-\mu)/(k_BT)}]$ | Electron state occupation at equilibrium |

**Required explanation/derivation checklist:** [ ] photon reasoning; [ ] accelerated-electron wavelength; [ ] phase/group interpretation; [ ] uncertainty application. **Do not spend core revision time deriving:** photoelectric/Compton formulas, normalization integrals, Schrödinger equation, statistical distributions. **Diagram checklist:** [ ] blackbody curve; [ ] photon experiments; [ ] Davisson–Germer; [ ] probability density; [ ] Fermi curves.

### Active recall

1. What changes when intensity rises at fixed photon frequency?
2. Which photon angle gives maximum Compton shift?
3. Why is a macroscopic ball's diffraction unobservable ordinarily?
4. What is the difference between $\psi$ and $|\psi|^2$?
5. What is the difference between a level and a state?
6. Can $W$ exceed 1? Can a probability exceed 1?
7. Can two opposite-spin electrons share a spatial orbital?
8. When do BE and FD approach MB?

> [!success]- Answers
> 1. Photon arrival rate, not energy per photon. 2. $180^\circ$. 3. Its momentum is large and wavelength minute. 4. Amplitude versus density. 5. Energy value versus full state specification. 6. Yes for the count; no for probability. 7. Yes; they occupy different complete states. 8. Sparse occupation/nondegenerate limit, where the exponential dominates the $\pm1$.

### Mixed test — suggested 30 marks

1. Explain two classical failures and their quantum resolution. (4)
2. Incident wavelength 400 nm and threshold wavelength 500 nm: find stopping potential. (3)
3. Derive the nonrelativistic electron wavelength after acceleration through $V$ and find it at 200 V. (5)
4. Explain the Davisson–Germer test of matter waves. (4)
5. Define normalization; state both one-dimensional Schrödinger equations without derivation. (4)
6. Find minimum electron velocity spread for $\Delta x=0.20$ nm. (3)
7. Compare MB, BE and FD, then sketch the temperature dependence of FD. (7)

**Solutions:** 1: choose blackbody and photoelectric explanations in Section 1. 2: $V_s=1240/400-1240/500=0.620$ V. 3: electrical work → momentum → de Broglie; $\lambda=1.227/\sqrt{200}=0.08676$ nm. 4: gun, nickel, angular intensity maxima and wavelength agreement. 5: total $\int|\psi|^2dx=1$ plus Section 10 equations and symbol meanings. 6: $\Delta v_{\min}=\hbar/(2m_e\Delta x)=2.90\times10^5$ m/s. 7: compare particle rules, occupancy and examples; show step, smoothing and $f(\mu)=1/2$ for $T>0$.

| Priority | What to practise | Basis |
|---|---|---|
| First | Photon energy, emission, Compton, de Broglie, uncertainty | Explicit tracker numerical skills |
| Equally essential | Wave-function meaning, MB/BE/FD, Fermi curves | Large conceptual branch; cannot be replaced by formulas alone |
| Next | Phase/group, experiment, phase space and multiplicity | Supports explanations and short-answer accuracy |

Priorities reflect syllabus coverage, not a verified SurTech prediction.

## Sources

Young & Freedman §§38.1, 38.3, 39.1, 39.5–39.6, 40.1 and 42.5; selected printed pp.1261–1263, 1269–1270, 1286–1288, 1310–1315, 1328–1331 and 1418–1420 (PDF page number = printed page +26). Local Dowell SLAC lecture, PDF pp.1–3, used critically for the FD high-energy tail; its boson/MB wording is corrected. The local mathematics references support differentiation, exponential evaluation and probability-area interpretation. [[Sources and Coverage]] records inspection scope.
