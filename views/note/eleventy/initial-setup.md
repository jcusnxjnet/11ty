---
title: Initial Setup
templateEngineOverride: md
eleventyNavigation:
    key: Initial Setup
    parent: Eleventy
---
### 1. Create package.json
```html
npm init -y
```

### 2. Use ESM and not commonJS
```js
npm pkg set type="module" // Modifies package.json
```

### 3. Eleventy installation
```js
npm install @11ty/eleventy
```

### 4. Create index.md
```js
echo '# My Eleventy Project' > index.md
```

### 5. Create .gitignore
```js
dist          // output directory defined in eleventy.config.js
node_modules
.DS_Store
```

### 6. Create eleventy.config.js
```js
export default function(eleventyConfig) {
	// Configure Eleventy
};
```

### 7. Modify scripts in package.json
```json
"scripts": {
     "start": "eleventy --serve",
     "build": "eleventy"
}
```

### 8. Define default directories in eleventy.config.js
```js
export default function(eleventyConfig) {
	// Configure Eleventy
};

export const config = {
    dir: {
      input: "views",  
      layouts: "_layouts",
      output: "dist"
    }
  };
```

### 9. Define default template engine in eleventy.config.js
```js
export default function(eleventyConfig) {
	// Configure Eleventy
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
```

### 10. Create directories
```js
└── views                   // default override (defined in configuration)
│    ├── _data              // default
│    ├── _includes          // default
│    │      └── partials    // custom folder       
│    ├── _layouts           // default override (defined in configuration)
│    ├── assets             // custom folder 
│    │     ├── css          // custom folder 
│    │     ├── img          // custom folder 
│    │     └── js           // custom folder 
│    ├── page               // custom folder 
│    │     └── page.json    // default Front Matter Data 
│    ├── note               // custom folder 
│    │     └── note.json    // default Front Matter Data 
│    ├── post               // custom folder 
│    │     └── post.json    // default Front Matter Data 
│    └── index.md           // landing page
├── .eleventy.js            // stays in root
├── .gitignore              // stays in root
├── package.json            // stays in root
└── package-lock.json       // stays in root
```

### 11. addPassthroughCopy in eleventy.config.js
```js
export default function(eleventyConfig) {

    // method creates a file/folder copy in the output directory
	eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");
};
```

### 12. Create basic layout base.njk
```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }}</title> 
  </head>
  <body>
    <main>
      {{ content | safe }}    
    </main>
  </body>
</html>
```

### 13. Define default Fron Matter Data, i.e. create folder specific json files
```json
{
    "layout": "base" 
  }
```

### 14. Create and reference CSS stylesheet
```html
<head>
   <link href="/assets/css/style.css" rel="stylesheet"> 
</head>
```

### 15. Define permalink for index.md (if moved to a subfolder)
```yaml
---
permalink: "/index.html"
---
```