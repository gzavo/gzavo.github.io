---
layout: page
title: load-balancing
description: Dynamic load-balancing of large-scale cellular simulations
img: assets/video/load_balancing.gif
importance: 2
category: high-performance computing
related_publications: alowayyed2018load, tarksalooyeh2019optimizing
---

![Outline of the performance model.](/assets/img/projects/h_load_imbalance.jpg)

The non-homogeneous distribution of computational costs is often challenging to handle in highly parallel applications. Using a methodology based on fractional overheads, we studied the fractional load imbalance overhead in a high-performance biofluid simulation aiming to accurately resolve blood flow on a cellular level. In general, the concentration of particles in such a suspension flow is not homogeneous. Usually, there is a depletion of cells close to walls, and a higher concentration towards the centre of the flow domain. We perform parallel simulations of such suspension flows. The emerging non-homogeneous cell distributions might lead to strong load imbalance, resulting in deterioration of the parallel performance. We formulate a model for the fractional load imbalance overhead, validate it by measuring this overhead in parallel lattice Boltzmann based cell-based blood flow simulations, and compare the arising load imbalance with other sources of overhead, in particular the communication overhead. We find a good agreement between the measurements and our load imbalance model. We also find that in our test cases, the communication overhead was higher than the load imbalance overhead. However, for larger systems, we expect load imbalance overhead to be dominant. Thus, efficient load balancing strategies should be developed.