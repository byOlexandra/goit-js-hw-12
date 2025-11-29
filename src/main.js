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


let page = 0;
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
        page = 0;
        prevSearch = search;
        totalLoaded = 0;
        clearGallery()
    }    
    page += 1;
    showLoader()

    try {
        const data = await getImagesByQuery(search, page)
        hideLoader();
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
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.'
        });
    };
})

loadMoreBtn.addEventListener("click", async (e) => {
    showLoader()
    hideLoadMoreButton()
    page += 1;
    
    try {
        const data = await getImagesByQuery(prevSearch, page);    
        hideLoader()
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
    catch (error) {
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.'
        });
    }    
})