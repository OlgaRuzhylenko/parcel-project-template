import {common} from './common';
import { createMarkup } from './helper/createMarcup';
import { createModal } from './helper/createModal';
import { instruments } from './helper/instruments';

import "basiclightbox/dist/basicLightbox.min.css";

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);

list.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target );
  createModal(product)
   }
}
function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id);
    return instruments.find(({ id }) => id === productId);
}