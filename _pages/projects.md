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
