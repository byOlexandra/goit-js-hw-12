import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector(".load-more-btn");


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(img => {
            return `
        <li class="gallery-item">
            <a href="${img.largeImageURL}">
                <img src="${img.webformatURL}" alt="${img.tags}" />
                <ul class="desc-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${img.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${img.views}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${img.comments}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${img.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`;
        })
        .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh()
}

export function clearGallery() { 
    gallery.innerHTML = "";
}

//* LOADER

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() { 
    loader.classList.add('hidden');
}

//* LOAR MORE BUTTON

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove("hidden")
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.add("hidden")
}