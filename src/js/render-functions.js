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

export function renderTicker(obj) {
    const markup = obj.hits.map(imgTemplate).join("");
    return markup;
}