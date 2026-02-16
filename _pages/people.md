---
layout: page
permalink: /team/
title: Team
description: Colleagues working with me.
nav: true
nav_order: 2
---

{%- assign team = site.data.team -%}

<div class="team-page">
  <section class="team-section">
    <h2>Current Team</h2>
    <div class="row row-cols-1 row-cols-md-2 team-grid">
      {%- for member in team.current_team -%}
      <div class="col team-grid-item">
        <article class="card team-card team-card-member">
          <div class="team-member-layout">
            <div class="team-photo-wrap">
              <img class="team-photo" src="{{ member.image | relative_url }}" alt="{{ member.alt }}" loading="lazy" />
            </div>
            <div class="card-body">
              <h3 class="team-name">{{ member.name }}</h3>
              <p class="team-role">{{ member.role }}</p>
              <p class="team-focus">{{ member.focus }}</p>
            </div>
          </div>
        </article>
      </div>
      {%- endfor -%}
    </div>
  </section>

  <section class="team-section team-openings">
    <h2>Open Positions</h2>
    <div class="row row-cols-1 row-cols-md-2 team-grid">
      {%- for position in team.open_positions -%}
      <div class="col team-grid-item">
        <article class="card team-card team-opening-card">
          <div class="card-body">
            <h3 class="team-name">{{ position.title }}</h3>
            <p class="team-role">{{ position.topic }}</p>
            <p class="team-focus">{{ position.background }}</p>
            <p class="team-start">{{ position.start }}</p>
            {%- unless position.opening_url == blank -%}
            <a class="btn btn-sm btn-outline-primary team-opening-link" href="{{ position.opening_url }}" target="_blank" rel="noopener noreferrer">
              {{ position.opening_label | default: "Official opening" }}
            </a>
            {%- endunless -%}
          </div>
        </article>
      </div>
      {%- endfor -%}
    </div>
  </section>

  <section class="team-section">
    <h2>Alumni</h2>
    <div class="row row-cols-1 row-cols-md-2 team-grid">
      {%- for member in team.alumni -%}
      <div class="col team-grid-item">
        <article class="card team-card team-card-member">
          <div class="team-member-layout">
            <div class="team-photo-wrap">
              <img class="team-photo" src="{{ member.image | relative_url }}" alt="{{ member.alt }}" loading="lazy" />
            </div>
            <div class="card-body">
              <h3 class="team-name">{{ member.name }}</h3>
              <p class="team-role">{{ member.role }}</p>
              <p class="team-focus">{{ member.focus }}</p>
              {%- if member.thesis_url -%}
              <a class="btn btn-sm btn-outline-primary team-thesis-btn" href="{{ member.thesis_url }}" target="_blank" rel="noopener noreferrer">
                {{ member.thesis_label | default: "Thesis" }}
              </a>
              {%- endif -%}
            </div>
          </div>
        </article>
      </div>
      {%- endfor -%}
    </div>
  </section>
</div>
