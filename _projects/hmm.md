---
layout: page
title: Heterogeneous multi-scale model
description: Dynamic coupling of high-performance computing models
img: /assets/img/projects/hmm.jpg
importance: 2
category: high-performance computing
impact: "Bridges micro and macro blood models so high-fidelity physics can inform full-domain predictions."
methods:
  - Multiscale modeling
  - Surrogate modeling
  - HPC coupling
related_publications: czaja2020heterogeneous
---

## Problem
Whole-blood simulations at organ scale cannot directly resolve every cell, yet microscale effects strongly influence rheology and transport. The project addresses how to couple both scales without making runtime prohibitive.

## Approach
- Combine a macroscale advection-diffusion blood model with local microscale cell-resolved simulations.
- Compute effective transport and viscosity coefficients from microscale runs.
- Reuse prior microscale results through a surrogate model over hematocrit and shear-rate space.
- Spawn new microscale simulations only where extrapolation uncertainty is high.

## Key finding
The heterogeneous multiscale formulation preserves key microscale-informed behavior while reducing the number of expensive local simulations needed over time.

## Why it matters
This coupling strategy brings high-fidelity blood mechanics into larger domains where direct cell resolution is otherwise infeasible.

## Outputs
- Publication details are listed in the **References** section below.
- Architecture and coupling overview are documented on this page.
