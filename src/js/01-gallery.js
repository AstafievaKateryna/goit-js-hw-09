
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

const ul = document.querySelector('.gallery')
const li = galleryItems.map(({original, preview, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
).join('');
ul.insertAdjacentHTML('beforeend', li);


const lightbox = new SimpleLightbox('.gallery a', { 
  captionDelay: 250,
  captionsData: 'alt'
});


ul.style.listStyleType = 'none';