---
layout: page
title: webLBM
description: (opens new page) webGL-based interactive 2D lattice Boltzmann simulation
img: /assets/img/projects/weblbm.jpg
redirect: /assets/weblbm/index.html
importance: 3
category: other
impact: "Makes fluid simulation interactive in-browser so users can explore LBM dynamics in real time."
methods:
  - WebGL
  - Interactive simulation
  - Lattice Boltzmann
---

## Problem
Many people interested in computational fluid dynamics never get hands-on access because setup friction is high. I wanted a browser-native LBM demo that runs instantly and still exposes meaningful flow behavior.

## Approach
- Implement a WebGL-based 2D lattice Boltzmann solver for real-time interaction.
- Keep rendering and update steps lightweight enough for consumer hardware.
- Add controls that let users change initial conditions and observe vortex evolution.
- Package the project as a standalone static demo for direct hosting.

## Key finding
A minimal WebGL implementation can produce intuitive, responsive flow behavior in the browser while preserving core LBM dynamics for educational use.

## Why it matters
Interactive simulation lowers the barrier to entry for fluid mechanics, making methods and concepts easier to communicate to broader audiences.

## Outputs
- Live demo: [webLBM interactive page](/assets/weblbm/index.html)
- Card CTA opens the external demo directly.
