import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function makeModal(img) {
  const instance = basicLightbox.create(`
  <div class="modal-img-wrap">
    <img src=${img.dataset.source} class="modal-img" width='${img.naturalWidth}' height='${img.naturalHeight}'/>
	<p class="modal-text">${img.alt}</p>
  </div>
    `);
  instance.show();
}

export default makeModal;
