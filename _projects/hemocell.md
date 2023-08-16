---
layout: page
title: HemoCell development
description: A high-performance cellular blood flow simulation
img: assets/video/hemocell.gif
importance: 1
category: fundamental science
related_publications: zavodszky2017cellular, zavodszky2017hemocell, tarksalooyeh2018inflow, de2018numerical, czaja2018cell, zavodszky2019red, tarksalooyeh2019optimizing, van2019identifying, czaja2020influence 
---

![HemoCell - 2 mm3 of blood on a cellular level.](/assets/img/projects/hemocell.jpg)

HemoCell is a high-performance code aim at solving cellular flow problems with the help of supercomputers.
The defining features are high numerical stability at fast flows (i.e., sustained high shear rates), and outstanding computational performance, enabling macroscopic investigations. Good scaling was demonstrated up to 330 000 CPU cores (> 80% efficiency).

In order to achieve this level of performance we build on advanced computational solutions:
* Time-scale separation of the components
* Dynamic load-balancing
* Two-phase optimised communication pattern
* Fast dynamic octree for node searching

HemoCell, and the surrounding tools have been in development since 2015, involving more than a dozen core contributor.

HemoCell has a series of advanced boundary conditions that enable a broad range of applications:
* Periodic
* Continuous cellular inflow
* Rotating boundary
* Lees-Edwards

HemoCell has been used in various complex flow scenarios, for instance:
* Platelet aggregation in complex geometries
* Platelet margination in healthy and diabetic blood flows
* Stress on the wall of retinal micro-aneurysms
* Cellular conditions for high-shear thrombus formation

More information can be found on the website [www.hemocell.eu](https://www.hemocell.eu),
and in the [documentation](https://www.hemocell.eu/user_guide/index.html).

A recent (2023) bookchapter, describing HemoCell is out! Tthe author manuscript is available here: [**Link**](https://arxiv.org/abs/2305.02752).
