---
title: Eleventy
eleventyNavigation:
    key: Eleventy
    parent: Home
---
<br>
{% set navPages = collections.note | eleventyNavigation("Eleventy") %}
<ul>
{%- for entry in navPages %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{%- endfor %}
</ul>

