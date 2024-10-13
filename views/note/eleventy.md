---
title: Eleventy
eleventyNavigation:
    key: Eleventy
---
A few notes I took when setting up my eleventy website:

{{ collections.note | eleventyNavigation("Eleventy") | eleventyNavigationToHtml | safe }}
