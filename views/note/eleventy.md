---
title: Eleventy
eleventyNavigation:
    key: Eleventy
    parent: Notes
---
A few notes I took when setting up my eleventy website:

{{ collections.note | eleventyNavigation("Eleventy") | eleventyNavigationToHtml | safe }}
