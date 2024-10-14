import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; 
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js') 
});
lightbox.init();