---
layout: page
title: Computational model credibility
description: Inverse Uncertainty Quantification of RBC mechanics in HemoCell
img: /assets/img/projects/uq.jpg
importance: 3
category: fundamental biomedicine
impact: "Improves confidence in blood-cell model parameters by combining Bayesian calibration with fast surrogates."
methods:
  - Inverse UQ
  - Gaussian process surrogate
  - Sensitivity analysis
related_publications: de2020inverse
---

## Problem
Cell-resolved blood models depend on membrane-parameter choices that are expensive to calibrate directly with full simulations. I addressed how to estimate parameter uncertainty and identifiability without prohibitive compute cost.

## Approach
- Formulate inverse uncertainty quantification with Bayesian Annealed Sequential Importance Sampling.
- Train a Gaussian process surrogate to emulate expensive simulation outputs.
- Use Sobol indices to assess parameter identifiability.
- Calibrate against shear-driven RBC elongation behavior.

## Key finding
The surrogate-accelerated pipeline recovered identifiable parameter groups efficiently and improved agreement with measurements compared with baseline parameter sets.

## Why it matters
Credible uncertainty-aware calibration strengthens trust in predictive simulation results and clarifies which parameters need better experimental constraints.

## Outputs
- Publication details are listed in the **References** section below.
- Calibration and identifiability workflow summary is presented on this page.
