import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
import PhotoSwipeDynamicCaption from '/assets/js/photoswipe-dynamic-caption-plugin.esm.js';
const lightbox = new PhotoSwipeLightbox({
  bgOpacity: 0.99,
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js'), // adjust path to your own

});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'auto', // the plugin will try to automatically determine the best position (depending on available space)
  captionContent: '.pswp-caption-content', // Will be used to retrieve caption content instead of alt.
});

lightbox.init();