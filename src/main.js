import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formElem = document.querySelector(".form");
const galleryElem = document.querySelector(".gallery");
const loaderElem = document.querySelector(".loader");

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
                renderTicker(data);
            } else {
                iziToast.warning({
                    title: "",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topCenter',
                });
            }
        }).catch(error => {
            console.log(error);
        });
        event.target.reset();
    }
    
}

function getImgByQuery(userQuery) {
    const BASE_URL = "https://pixabay.com/api/";
    const KEY = "?key=42441384-ae09b834f94a4016fb8b80a97";
    const Q = `&q=${userQuery}`;
    const IMAGE_TYPE = "&image_type=photo";
    const ORIENTATION = "&orientation=horizontal";
    const SAFESEARCH = "&safesearch=true";
    const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

    const options = {
        headers: {
        },
    };
    return fetch(url, options).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(res.status);
        }
    });
}

function imgTemplate(img) {
    return `<li class="gallery-item">
        <a class="gallery-link"
            href="${img.largeImageURL}">
            <img class="gallery-image"
                src="${img.webformatURL}"
                alt="${img.tags}" />
        </a>
        <div class = "gallery-item-info">
                <ul>Likes<li>${img.likes}</li></ul>
                <ul>Views<li>${img.views}</li></ul>
                <ul>Comments<li>${img.comments}</li></ul>
                <ul>Downloads<li>${img.downloads}</li></ul>
        </div>
    </li>`
}

function renderTicker(obj) {
    const markup = obj.hits.map(imgTemplate).join("");
    galleryElem.innerHTML = markup;
    lightbox.refresh();
}

const lightbox = new SimpleLightbox(".gallery-link", { captionsData: "alt", captionDelay: 250 });


