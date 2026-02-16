---
layout: page
title: Performance modeling
description: Predicting large-scale simulation performance and energy use
img: /assets/img/projects/perf_model.jpg
importance: 1
category: high-performance computing
impact: "Gives interpretable runtime predictions that help plan simulations and reduce wasted HPC resources."
methods:
  - Analytical modeling
  - Performance calibration
  - Scalability prediction
related_publications: van2022building
---

## Problem
Running large biomedical simulations without performance foresight can waste allocation time and energy. I investigated whether interpretable analytical models can accurately predict runtime behavior across hardware and load-balance scenarios.

## Approach
- Derive per-process symbolic performance models from code-level execution structure.
- Calibrate model parameters with targeted empirical measurements.
- Validate predictions across balanced and imbalanced execution scenarios.
- Compare behavior on multiple large-scale compute architectures.

## Key finding
The calibrated analytical model achieved strong prediction quality across tested cases while retaining interpretable bottleneck structure.

## Why it matters
Accurate, understandable performance forecasts improve experiment planning, hardware migration decisions, and energy-aware simulation strategy.

## Outputs
- Publication details are listed in the **References** section below.
- Model structure and validation examples are summarized on this page.
