---
title: Breadcrumb Navigation
templateEngineOverride: md
eleventyNavigation:
    key: Breadcrumb Navigation
    parent: Eleventy
---
#### Partials breadcrumb.njk
```js
{% set navPages = collections.all | eleventyNavigationBreadcrumb(eleventyNavigation.key, { includeSelf: true }) %}
{% for crumb in navPages %}
	{% if loop.first %}<nav aria-label="breadcrumb"><ol>{% endif %}

			{% if page.url == crumb.url %}<li>{{ crumb.title }}</li>
            {% else %}<li><a href="{{ crumb.url }}">{{ crumb.title }}</a></li>
            {% endif %}

	{% if loop.last %}</ol></nav>{% endif %}
{% endfor %}
```
#### CSS stylesheet
```css
nav[aria-label=breadcrumb] ol {
    margin: 0;
    padding-bottom: 2rem;
    font-size: smaller;
  }
nav[aria-label=breadcrumb] li {
    display: inline;
  }
nav[aria-label=breadcrumb] li:not(:last-child)::after {
    content: " >"
  }
```