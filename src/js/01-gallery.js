import {galleryItems} from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


let html = "";
let gallery = document.querySelector(".gallery")
for (const galleryItem of galleryItems) {
  html = html + `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
}

gallery.innerHTML = html;

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: "alt"
});
