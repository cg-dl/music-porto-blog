---
layout: pages
title: Compositions | Davin Leonardo
type: compositions
list_title: Free Compositions
---

<html>
  <div class="white-space">
    {%- if site.composition.size > 0 -%}
        <ul class="post-list">
          {%- for post in site.composition reversed -%}
          <li>
            {%- assign date_format = "%b %-d, %Y" -%}
            <span class="post-meta">{{ post.date | date: date_format }}</span>
            <h3>
              <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
              </a>
            </h3>
            <p>
              {{ post.content | strip_html | truncatewords: 50 }}
            </p>
          </li>
          <div class="button">
              <a href="{{ post.url | relative_url }}">Learn More...</a>
          </div>
          <br/>
          {%- endfor -%}
        </ul>
    {%- endif -%}
    {%- if site.free-composition.size > 0 -%}
        <h2 class="post-list-heading">{{ page.list_title }}</h2>
        <ul class="post-list">
          {%- for post in site.free-composition reversed -%}
          <li>
            {%- assign date_format = "%b %-d, %Y" -%}
            <span class="post-meta">{{ post.date | date: date_format }}</span>
            <h3>
              <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
              </a>
            </h3>
            <p>
              {{ post.content | strip_html | truncatewords: 50 }}
            </p>
          </li>
          <div class="button">
              <a href="{{ post.url | relative_url }}">Learn More...</a>
          </div>
          <br/>
          {%- endfor -%}
        </ul>
    {%- endif -%}
  </div>
</html>