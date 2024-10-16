---
title: jcusnxj
permalink: "/index.html"
eleventyNavigation:
    key: Home
---
{% set navPages = collections.note | eleventyNavigation("Home") %}
<ul>
{%- for entry in navPages %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{%- endfor %}
</ul>



