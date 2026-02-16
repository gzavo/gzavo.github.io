---
layout: page
title: Turbulence in blood
description: Transient turbulence in a Fontan patient's circulation.
img: /assets/img/projects/fontan2.jpg
importance: 3
category: clinical applications
impact: "Shows where turbulence models miss clinically relevant small-scale flow structures in Fontan cases."
methods:
  - DNS
  - Lattice Boltzmann
  - LES comparison
related_publications:
---

## Problem
Most Fontan CFD studies rely on turbulence models that smooth out fine-scale flow structures. I examined whether those missing scales affect clinically relevant hemodynamic indicators linked to thrombosis.

## Approach
- Perform extreme-resolution direct numerical simulation (DNS) with LBM in a patient-specific TCPC.
- Compute wall shear stress, wall shear rate, elongation rate, and flow-type metrics.
- Run matched LES cases and compare metric distributions against DNS.
- Quantify where model-form assumptions alter risk interpretation.

## Key finding
LES and DNS produced meaningful differences in regions relevant to thrombosis indicators. In particular, LES tended to overestimate low-WSS regions and underrepresent elongation-dominated flow structures.

## Why it matters
High-fidelity simulation can change clinical interpretation of risk markers. The DNS setup also provides a benchmark for future Fontan hemodynamics research.

## Outputs
- MSc thesis: [M. Blom - Quantifying non-stationary inhomogeneous turbulence in flow fields](https://scripties.uba.uva.nl/search?id=record_54066)
- MSc thesis: [K. Wang - Modeling Turbulence in Fontan Circulation with Extreme Resolution](https://scripties.uba.uva.nl/search?id=record_54025)
