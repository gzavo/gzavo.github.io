---
layout: page
title: Load-balancing
description: Dynamic load-balancing of large-scale cellular simulations
img: /assets/video/load_balancing.gif
importance: 2
category: high-performance computing
impact: "Quantifies when load imbalance dominates runtime so HPC blood solvers can scale more predictably."
methods:
  - Performance modeling
  - Dynamic load balancing
  - Parallel overhead analysis
related_publications: alowayyed2018load, tarksalooyeh2019optimizing
---

## Problem
Large-scale cell-based blood simulations naturally produce uneven particle distributions, which can degrade parallel efficiency. I studied how much of total runtime overhead is attributable to load imbalance versus communication.

## Approach
- Define a fractional-overhead model for load imbalance in particle-rich flow simulations.
- Measure imbalance overhead in parallel lattice Boltzmann blood simulations.
- Compare measured imbalance against communication overhead across problem scales.
- Validate model predictions against observed performance data.

## Key finding
The analytical model matched measured overhead trends well. Communication dominated in tested configurations, but the model predicts imbalance becomes increasingly dominant as systems grow.

## Why it matters
Reliable imbalance prediction enables proactive runtime control and better scheduling decisions for high-cost biomedical HPC workloads.

## Outputs
- Publication details are listed in the **References** section below.
- Performance diagnostics and distribution visualizations are shown on this page.
