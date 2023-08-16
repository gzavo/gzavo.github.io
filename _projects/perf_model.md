---
layout: page
title: Performance modeling
description: Predicting large-scale simulation performance and energy use
img: assets/img/projects/perf_model.jpg
importance: 1
category: high-performance computing
related_publications: van2022building
---

![Outline of the performance model.](/assets/img/projects/perf_model.jpg)

Analytical performance models are powerful for understanding and predicting the performance of large-scale simulations. As such, they can help identify performance bottlenecks, assess the effect of load imbalance, or indicate performance behavior expectations when migrating to larger systems. Existing automated methods either focus on broad metrics and/or problems - e.g., application scalability behavior on large scale systems and inputs - or use black-box models that are more difficult to interpret e.g., machine-learning models.

In this work we propose a methodology for building per-process analytical performance models relying on code analysis to derive a simple, high-level symbolic application model, and using empirical data to further calibrate and validate the model for accurate predictions.

We demonstrate our model-building methodology on HemoCell, a high-performance framework for cell-based bloodflow simulations. We calibrate the model for two large-scale systems, with different architectures. Our results show good prediction accuracy for four different scenarios, including load-balanced configurations (average error of 3.6%, and a maximum error below 13%), and load-imbalanced ones (with an average prediction error of 10% and a maximum error below 16%).