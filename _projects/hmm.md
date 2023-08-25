---
layout: page
title: Heterogenous multi-scale model
description: Coupling of high-performance computing models
img: assets/img/projects/hmm.jpg
importance: 2
category: high-performance computing
related_publications: czaja2020heterogeneous
---

![Outline of the performance model.](/assets/img/projects/hmm.jpg)


This research focuses on developing a heterogeneous multi-scale model (HMM) for blood flow. Two separate scales are considered in this study, a Macro-scale, which models whole blood as a continuous fluid and tracks the transport of hematocrit profiles through an advection diffusion solver. And a Micro-scale, which computes directly local diffusion coefficients and viscosities using cell resolved simulations. The coupling between these two scales also includes the use of a surrogate model, which saved local viscosity and diffusion coefficients from previously simulated local hematocrit and shear rate combinations. As the HMM model progresses fewer micro models will be spawned. This is accomplished through the surrogate by interpolating from previously computed viscosities and diffusion coefficients. The benefit of using the HMM method for blood flow is that it, along with resolving the rheology of whole blood, can be extended with other types computational models to model physiological processes like thrombus formation.