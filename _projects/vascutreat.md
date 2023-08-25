---
layout: page
title: CFD of brain aneurysms
description: Blood flow simulation in patient brain arteries.
img: /assets/video/cfd_comp.gif
importance: 2
category: clinical applications
related_publications: zavodszky2020novel, zavodszky2013validation, berg2019multiple
---


![Flow simulation in an aneurysm.](/assets/img/projects/medflow3d.jpg)

The unsteady fluid flow inside the complex geometry of an intracranial aneurysm during a cardiac cycle was simulated. The results obtained by several versions of a lattice Boltzmann based code were compared with the results of PIV and LDA measurements and with those of a commercial finite volume solver. The best version from the tested lattice Boltzmann codes was chosen for further comparisons and grid convergence measurement. It was shown that the lattice Boltzmann method is capable of producing results with an accuracy comparable to the finite volume solver in a 3D unsteady flow and also that the results are in good agreement with the experimental results. It was also shown that using a GPU implementation of the lattice Boltzmann method it is possible to significantly reduce the run-time length compared to the CPU only implementation of the lattice Boltzmann method.

