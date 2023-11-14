import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageEL = galleryItems
  .map(
    ({ description, original, preview }) => `
  <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
            />
    </a>
    </li>
`
  )
  .join("");

gallery.innerHTML = imageEL;

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionType: "attr",
    captionsData: "alt",
  });
}
