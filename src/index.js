import 'normalize.css';
import './scss/main.scss';
import 'material-design-icons/iconfont/material-icons.css';

import galleryService from './js/galleryService.js';
import galleryMarkup from './js/galleryMarkup.js';
import notifications from './js/notifications.js';
import refs from './js/refs.js';
import makeModal from './js/modal.js';
import { error } from '@pnotify/core';
import infiniteScroll from './js/infiniteScroll.js';

galleryService.fetchGallery().then(galleryMarkup);

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();

  if (event.currentTarget.elements.query.value === '') {
    error({
      text: 'Input is empty.',
    });
    return;
  }
  galleryService.query = event.currentTarget.elements.query.value;
  event.currentTarget.elements.query.value = '';

  refs.listRef.innerHTML = '';
  galleryService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');

  galleryService
    .fetchGallery()
    .then(data => {
      if (data.hits.length > 11) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      }
      galleryMarkup(data);
      return data;
    })
    .then(notifications);
});

refs.loadMoreBtn.addEventListener('click', () => {
  galleryService.fetchGallery().then(data => {
    if (data.hits.length < 12) {
      refs.loadMoreBtn.classList.add('is-hidden');
    }
    galleryMarkup(data);
  });
});

refs.loadMoreBtn.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

refs.listRef.addEventListener('click', event => {
  const img = event.target.previousElementSibling;
  if (!img || img.nodeName !== 'IMG') {
    return;
  }
  makeModal(img);
});

// infinite scroll

// infiniteScroll(refs.loadMoreBtn);
