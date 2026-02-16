---
layout: page
title: Digital Twin of cellular blood
description: High-performance microscale simulations with HemoCell
img: /assets/video/hemocell.gif
importance: 1
category: fundamental biomedicine
impact: "Enables cell-resolved blood simulation at scales large enough to study clinically relevant flow domains."
methods:
  - Lattice Boltzmann
  - Cell-resolved simulation
  - Parallel HPC
related_publications: zavodszky2017cellular, zavodszky2017hemocell, tarksalooyeh2018inflow, de2018numerical, czaja2018cell, zavodszky2019red, tarksalooyeh2019optimizing, van2019identifying, czaja2020influence
---

## Problem
Cellular blood flow models often struggle to combine physical fidelity with large-domain performance. The goal of HemoCell is to simulate blood on a cell-resolved level without sacrificing scalability needed for practical biomedical studies.

## Approach
- Build on a high-performance lattice Boltzmann framework for fluid-cell coupling.
- Implement robust high-shear stability and efficient communication strategies.
- Use dynamic load balancing and optimized data structures for large core counts.
- Provide advanced boundary conditions for realistic physiological setups.

## Key finding
HemoCell demonstrates strong scalability (including very large core counts) while preserving detailed blood-cell dynamics. This makes it viable for both fundamental studies and translational simulation tasks.

## Why it matters
A performant cellular blood digital twin expands what can be studied in silico, from platelet mechanics to patient-relevant microscale transport phenomena.

## Outputs
- Project website: [hemocell.eu](https://www.hemocell.eu)
- Documentation: [HemoCell user guide](https://www.hemocell.eu/user_guide/index.html)
- Book chapter manuscript: [arXiv:2305.02752](https://arxiv.org/abs/2305.02752)
- Publications are listed in the **References** section below.
