---
layout: pages
title: Compositions
location: compositions
---

<html>
  <div class="white-space">
    {%- if site.composition.size > 0 -%}
        <ul class="post-list">
          {% assign sorted = site.composition | sort: 'date_release' | reverse %}
          {%- for post in sorted -%}
          <li>
            {%- assign date_format = "%b %-d, %Y" -%}
            <span class="post-meta">{{ post.date_release | date: date_format }}</span>
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