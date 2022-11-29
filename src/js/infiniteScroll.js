import galleryService from './galleryService.js';
import galleryMarkup from './galleryMarkup.js';

function infiniteScroll(item) {
  const options = {
    rootMargin: '200px',
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        galleryService.fetchGallery().then(galleryMarkup);
      }
    });
  }, options);

  io.observe(item);
}

export default infiniteScroll;
