export function searchPictures(searchTerm) {
    return fetch(`https://pixabay.com/api/?key=43779125-040e3030fad6a4afa34a77542&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}
