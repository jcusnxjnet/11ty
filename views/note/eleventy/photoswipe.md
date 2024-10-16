---
title: PhotoSwipe
templateEngineOverride: md
eleventyNavigation:
    key: PhotoSwipe
    parent: Eleventy
    order: 6
---
#### Installation
```html
npm install photoswipe
```

#### PhotoSwipe CSS and js files
Copy the following files from `node_modules/photoswipe/dist`
- photoswipe.esm.js (to `/views/assests/js/`)
- photoswipe-lightbox.esm.js (to `/views/assests/js/`)
- photoswipe.css (to `/views/assests/css/`)

#### Create index.js with initialization in /views/assets/js/
```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; 
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js') 
});
lightbox.init();
```

#### Adjust basic layout base.njk
```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    ...
    <link rel="stylesheet" href="/assets/css/photoswipe.css">  
    ...
  </head>
  <body>
    <main>
       ...
    </main>
    <script type="module" src="/assets/js/index.js"></script> 
  </body>
</html>
```

#### Usage
```html
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>
```
Result:
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>