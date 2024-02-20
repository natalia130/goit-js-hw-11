import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImgByQuery } from './js/pixabay-api';
import { renderTicker } from './js/render-functions';

const formElem = document.querySelector(".form");
const galleryElem = document.querySelector(".gallery");
const loaderElem = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery-link", { captionsData: "alt", captionDelay: 250 });

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    galleryElem.innerHTML = "";
    const userQuery = event.target.elements.query.value.trim();
    if (userQuery === "") {
        iziToast.warning({
            title: "",
            message: "Please enter a search query",
            position: 'topCenter',
        });
    } else {
        loaderElem.classList.remove("visually-hidden");
        getImgByQuery(userQuery).then(data => {
            loaderElem.classList.add("visually-hidden");
            if (data.hits.length > 0) {
                galleryElem.innerHTML = renderTicker(data);
                lightbox.refresh();
            } else {
                iziToast.warning({
                    title: "",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topCenter',
                });
            }
        }).catch(error => {
            iziToast.warning({
                title: "",
                message: error,
                position: 'topCenter',
            });
        });
        event.target.reset();
    }
}