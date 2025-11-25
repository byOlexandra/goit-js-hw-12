import { getImagesByQuery } from './js/pixabay-api';
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
form.addEventListener("submit", e => {
    e.preventDefault();
    hideLoadMoreButton()
    const search = e.target.elements['search-text'].value.trim();
    if (!search) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.',
            position: 'topRight',
        });
        return;
    } 
    if (search !== prevSearch) {
        page = 1;
        prevSearch = search;
    }
    
    clearGallery()
    showLoader()
    getImagesByQuery(search, page)
    .then(data => {
        hideLoader();
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
            return;
        }
        createGallery(data.hits);
        page += 1;
        if (page > 1) {
            showLoadMoreButton()
        }
    })
    .catch(error => {
            hideLoader();
            iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again.' });
            console.error(error);
    });
})

loadMoreBtn.addEventListener("click", e => {
    showLoader()
    getImagesByQuery(prevSearch, page)
    .then (data => {
        hideLoader()
        if (data.hits.length === 0) {
            iziToast.info({
                title: 'Info',
                message: 'No more images to load.',
                position: 'topRight'
            });
            hideLoadMoreButton(); 
            return;
        }
        createGallery(data.hits)
        page = +1;
    })
    .catch(error => {
        hideLoader();
        iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again.' });
        console.error(error);
    })
})