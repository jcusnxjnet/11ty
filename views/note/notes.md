---
title: jcusnxj
permalink: "/index.html"
eleventyNavigation:
    key: Home
---
<br>

Welcome to my personal website. It's sort of a digital garden but in my own way. The site is generated with [11ty](https://www.11ty.dev) and hosted on [Cloudflare](https://www.cloudflare.com). Source repository can be found on [GitHub](https://github.com/jcusnxjnet/11ty). 
<br><br>
Basic navigation:
{% set navPages = collections.note | eleventyNavigation("Home") %}
<ul>
{%- for entry in navPages %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{%- endfor %}
</ul>



