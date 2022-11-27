import tpl from '../tpl.hbs';
import refs from './refs.js';

function galleryMarkup(article) {
  const articleTpl = tpl(article.hits);

  refs.listRef.insertAdjacentHTML('beforeend', articleTpl);
}

export default galleryMarkup;
