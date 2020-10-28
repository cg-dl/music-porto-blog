---
layout: pages
title: Blog
location: blog
---
<html>
<div class="white-space">
    {%- if site.blog.size > 0 -%}
        <h2 class="post-list-heading">Posts</h2>
        <ul class="post-list">
          {%- for post in site.blog -%}
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
              <a href="{{ post.url | relative_url }}">Read More...</a>
          </div>
          <br/>
          {%- endfor -%}
        </ul>
    {%- endif -%}
  </div>
</html>
