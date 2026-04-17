---
layout: page
title: Research
permalink: /research/
description: Overview of my current projects across fundamental biomedicine, clinical applications, high-performance computing, and exploratory work.
nav: true
nav_order: 1
display_categories: [fundamental biomedicine, clinical applications, high-performance computing, other]
horizontal: true
---

&emsp;<b>(I) High-Performance Computing </b> — I develop scalable computational frameworks like [HemoCell](https://www.hemocell.eu), an open-source cellular blood flow simulator that achieves exceptional parallel efficiency (>80% on 300,000+ CPU cores) and enables investigations at cellular resolution that exceed current experimental capabilities.

&emsp;<b>(II) Fundamental Biomedicine </b> — My work advances understanding of [blood rheology](https://pubs.aip.org/aip/pof/article/31/3/031903/260133), [platelet aggregation dynamics](https://doi.org/10.1016/j.compbiomed.2024.109010), and mechanosensitive processes in thrombosis through validated computational models that reproduce emergent transport characteristics of complex cellular systems.

&emsp;<b>(III) Clinical Applications </b> — I translate fundamental insights into actionable clinical tools, [including virtual medical device deployment simulations](https://onlinelibrary.wiley.com/doi/pdf/10.1002/cnm.3340) for endovascular aneurysm treatment and patient-specific models for stroke intervention planning.

This interdisciplinary approach unlocks insights inaccessible through single-domain methods, and enables solutions that are both _achievable_ (optimized for performance and energy efficiency) and _actionable_ (rigorously verified, validated, and uncertainty-quantified).
<br>
<br><br>

<div class="research-page projects">
  {%- if site.enable_project_categories and page.display_categories -%}
  <nav class="research-jump-nav" aria-label="Jump to research category">
    {%- for category in page.display_categories -%}
      {%- assign category_meta = site.data.research_categories | where: "key", category | first -%}
      {%- assign category_id = category | slugify -%}
      <a class="research-chip" href="#category-{{ category_id }}" data-target="category-{{ category_id }}">
        {{ category_meta.label | default: category }}
      </a>
    {%- endfor -%}
  </nav>

  {%- for category in page.display_categories -%}
    {%- assign category_meta = site.data.research_categories | where: "key", category | first -%}
    {%- assign categorized_projects = site.projects | where: "category", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "importance" -%}
    {%- assign category_id = category | slugify -%}

    <section id="category-{{ category_id }}" class="research-category-section">
      <header class="research-category-header">
        <h2 class="category">{{ category_meta.label | default: category }}</h2>
        {%- if category_meta.description -%}
        <p class="research-category-description">{{ category_meta.description }}</p>
        {%- endif -%}
      </header>

      {% if page.horizontal -%}
      <div class="container px-0">
        <div class="row row-cols-1 row-cols-lg-2 research-cards">
          {%- for project in sorted_projects -%}
            {% include projects_horizontal.html %}
          {%- endfor -%}
        </div>
      </div>
      {%- else -%}
      <div class="grid">
        {%- for project in sorted_projects -%}
          {% include projects.html %}
        {%- endfor -%}
      </div>
      {%- endif -%}
    </section>
  {%- endfor -%}
  {%- else -%}
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  {% if page.horizontal -%}
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-lg-2 research-cards">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.html %}
      {%- endfor -%}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor -%}
  </div>
  {%- endif -%}
  {%- endif -%}
</div>
