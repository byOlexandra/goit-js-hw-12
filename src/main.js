import { getImagesByQuery, perPage } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn");

//* EVENT

let page = 1;
let prevSearch = "";
let totalLoaded = 0;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideLoadMoreButton();

    const search = e.target.elements['search-text'].value.trim();

    if (!search) {
        iziToast.info({
            message: 'Please type something to start searching.',
            position: 'topRight',
        });
        return;
    } 

    if (search !== prevSearch) {
        prevSearch = search;
        totalLoaded = 0;
        clearGallery()
    }    

    page = 1;

    showLoader()

    try {
        const data = await getImagesByQuery(search, page)
        if (page === 1 && data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
            return;
        }        

        createGallery(data.hits);
        totalLoaded += data.hits.length;

        if (totalLoaded >= data.totalHits) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            })
            hideLoadMoreButton()
            return;
        }

        showLoadMoreButton()
    }

    catch(error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.'
        });
    }

    finally {
        hideLoader();
    }
})

loadMoreBtn.addEventListener("click", async (e) => {
    page += 1;
    hideLoadMoreButton()
    showLoader()

    try {
        const data = await getImagesByQuery(prevSearch, page);    
        createGallery(data.hits)
        const firstCard = document.querySelector('.gallery-item');
        if (firstCard) {
            const cardHeight = firstCard.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth',
            });
        }
        totalLoaded += data.hits.length;
        if (totalLoaded < data.totalHits) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        }
    }   

    catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.'
        });
    }    

    finally {
        hideLoader();
    }
})