---
title: Syntax Highlighting
templateEngineOverride: md
eleventyNavigation:
    key: Syntax Highlighting
    parent: Eleventy
    order: 5
---
#### Installation
```html
npm install @11ty/eleventy-plugin-syntaxhighlight
```
#### Configuration (ESM)
```js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
};
```
#### CSS stylesheet
_Note: Repository with [CSS files](https://github.com/PrismJS/prism-themes)._
```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...  
    <link href="/assets/css/code.css" rel="stylesheet">
    ...
  </head>
  <body>
   ...
  </body>
</html>
```

#### Template engine override
```yaml
---
templateEngineOverride: md
---
```

#### Usage (Markdown)
Triple backtick ``` indicate the start/end of the code. Language must be specified after first triple backtick.

