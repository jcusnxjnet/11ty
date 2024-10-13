---
title: Eleventy
eleventyNavigation:
    key: Eleventy
---
Here are a few notes I took when setting up my eleventy website.

{{ collections.note | eleventyNavigation("Eleventy") | eleventyNavigationToHtml | safe }}
