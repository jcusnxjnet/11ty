---
title: Blog
eleventyNavigation:
    key: Blog
    parent: Home
    order: 3
---
<ul>
{% for item in collections.post | reverse %}
<li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>