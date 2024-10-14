---
title: Syntax Highlighting
templateEngineOverride: md
eleventyNavigation:
    key: Syntax Highlighting
    parent: Eleventy
---
### 1. Installation
```html
npm install @11ty/eleventy-plugin-syntaxhighlight
```
### 2. Configuration (ESM)
```js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
};
```
### 3. CSS stylesheet
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
_Note: Repository with [CSS files](https://github.com/PrismJS/prism-themes)._

### 4. Template engine override
```yaml
---
templateEngineOverride: md
---
```

### 5. Usage (Markdown)
Triple backtick ``` indicate start/end of the code. Language must be specified after first triple backtick.

