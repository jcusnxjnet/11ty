---
title: Digital Garden
permalink: "/index.html"
eleventyNavigation:
    key: Home
---
<br>

This is my personal website created in [11ty](https://www.11ty.dev). Sort of digital garden but in my own way.

{% set navPages = collections.note | eleventyNavigation("Home") %}
<ul>
{%- for entry in navPages %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{%- endfor %}
</ul>

