export function listPictures(gallery, pictures, lightbox) {
    gallery.innerHTML = ""; // Очищення поточного вмісту галереї
    const result = pictures.hits.map((picture) => { // Мапування масиву зображень на розмітку HTML
        return `<li class="gallery-item">
                    <a class="gallery-link" href="${picture.largeImageURL}">
                        <img class="gallery-image" src="${picture.webformatURL}" alt="${picture.tags}">
                    </a>
                    <ul class="info">
                        <li class="info-list">Likes: <span>${picture.likes}</span></li>
                        <li class="info-list">Views: <span>${picture.views}</span></li>
                        <li class="info-list">Comments: <span>${picture.comments}</span></li>
                        <li class="info-list">Downloads: <span>${picture.downloads}</span></li>
                    </ul>
                </li>`;
    });
    gallery.innerHTML = result.join("");
    // Оновлення SimpleLightbox після додавання нових елементів
    lightbox.refresh();
}