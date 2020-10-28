---
layout: pages
title: Arrangements
location: arrangements
list_title: Free Arrangements
---

<html>
  <div class="white-space">
    {%- if site.arrangement.size > 0 -%}
        <ul class="post-list">
          {%- for post in site.arrangement reversed -%}
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
    {%- if site.free-arrangement.size > 0 -%}
        <h2 class="post-list-heading">{{ page.list_title }}</h2>
        <ul class="post-list">
          {%- for post in site.free-arrangement reversed -%}
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