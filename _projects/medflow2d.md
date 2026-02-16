---
layout: page
title: 2D LBM code
description: 2D open-source lattice Boltzmann simulation (C/Python)
img: /assets/video/karman_porous.gif
importance: 3
category: other
impact: "Provides an accessible, extensible LBM sandbox for rapid prototyping and simulation education."
methods:
  - Lattice Boltzmann
  - Porous flow
  - OpenMP
---

## Problem
Advanced flow solvers can be difficult to learn from because core ideas are hidden behind large production codebases. This project was built as a compact but capable environment for testing lattice Boltzmann methods and teaching simulation workflows.

## Approach
- Implement a modular 2D LBM solver in C/Python with a practical tooling workflow.
- Support multiple collision models, boundary conditions, and turbulence options.
- Include coupled transport and biomedical-oriented add-ons (e.g., margination models).
- Keep geometry setup simple by allowing image-based domain painting.

## Key finding
A lightweight solver can still expose many advanced LBM concepts and serve as a productive bridge between education, method prototyping, and early research experiments.

## Why it matters
Fast iteration in an understandable codebase helps students and researchers validate ideas before scaling to larger production frameworks.

## Outputs
- Source code: [medFlow2D on GitHub](https://github.com/gzavo/medFlow2D)
- Includes theory-oriented and practical usage documentation in the repository.
