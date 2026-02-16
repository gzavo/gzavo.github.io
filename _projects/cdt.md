---
layout: page
title: Quantum gravity simulation
description: Causal Dynamical Triangulations
img: /assets/img/projects/sqg_net.jpg
importance: 1
category: other
impact: "Shows how quantum gravity ideas can be explored with transparent, reproducible simulation tools."
methods:
  - Monte Carlo
  - Causal triangulation
  - Statistical physics
related_publications:
---

## Problem
Quantum gravity is difficult to communicate because many approaches are mathematically dense and hard to experiment with. I wanted a simulation path that is scientifically rigorous but still approachable to readers who are new to the topic.

## Approach
- Model spacetime with Causal Dynamical Triangulations (CDT), enforcing causality at small scales.
- Reformulate the physical model as a discrete statistical mechanics problem.
- Use Hastings-Metropolis Monte Carlo sampling to evaluate geometric fluctuations efficiently.
- Keep the implementation lightweight enough to run from laptops up to larger compute systems.

## Key finding
The simulations recover large-scale behavior consistent with classical spacetime while still exposing nontrivial small-scale fluctuations. This makes CDT a practical computational bridge between abstract theory and measurable model behavior.

## Why it matters
This project demonstrates that frontier physics can be made experimentally accessible through simulation. That accessibility helps with both teaching and early-stage method validation.

## Outputs
- Source code: [CDT repository](https://github.com/sedadenboer/CDT)
- Project summary and visual outputs are documented on this page.
