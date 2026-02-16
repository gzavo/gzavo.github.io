---
layout: page
title: Flow prediction in treated brain aneurysms
description: Blood flow simulation in patient brain arteries with virtual treatment.
img: /assets/video/cfd_comp.gif
importance: 2
category: clinical applications
impact: "Validates lattice Boltzmann treatment simulations against experiments for aneurysm care workflows."
methods:
  - Lattice Boltzmann
  - Experimental validation
  - Cerebral hemodynamics
related_publications: zavodszky2020novel, zavodszky2013validation, berg2019multiple
---

## Problem
Clinical use of aneurysm-treatment simulation requires confidence that predicted flow changes match both experiments and established solvers. I evaluated lattice Boltzmann variants for unsteady intracranial aneurysm hemodynamics.

## Approach
- Simulate pulsatile flow in complex patient-derived intracranial aneurysm geometries.
- Compare multiple LBM implementations against PIV/LDA measurements.
- Benchmark against a commercial finite-volume solver.
- Assess grid convergence and runtime characteristics, including GPU acceleration.

## Key finding
A calibrated LBM configuration reproduced experimental and finite-volume trends with competitive accuracy while reducing runtime substantially with GPU execution.

## Why it matters
Reliable and faster virtual-treatment flow prediction can make patient-specific planning more feasible in real clinical timelines.

## Outputs
- Publication details are listed in the **References** section below.
- Comparative CFD and validation visuals are provided on this page.
