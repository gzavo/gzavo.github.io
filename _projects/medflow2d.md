---
layout: page
title: 2D LBM code
description: 2D open-source lattice Boltzmann simulation (C/Python) 
img: assets/video/karman_porous.gif
importance: 3
category: 
---

![medflow2D](/assets/video/karman_porous.gif)

A custom 2D LBM solver capable of handling porous materials and turbulence. The main objective was to learn some of the advanced techniques of the lattice Boltzmann method.
The code is also useful for education, as geometries can be easily "painted" in any image editor.

The features in more detail:
* Dynamics: BGK, MRT
* Smagorinsky turbulence model
* Boundaries: Zou-He, Regularized
* Macroscopic porous material modeling
* Non-Newtonian blood model
* Coupled passive scalar field
* Macroscopic margination modeling
* Thrombus formation model
* Platelet margination model
* Fluid age calculation
* Particle path tracing
* Fractal analysis
* Parallel execution (OpenMP)
* Complete toolsuite (Pre/Solver/Monitor/Post)
* Cross-platform (Windows/Mac/Linux)

You can get the source code from the [github repository](https://github.com/gzavo/medFlow2D).

The documentation contains a _theory guide_ for the equations behind the implementation, and a _Manual_ to help set up a simulation.