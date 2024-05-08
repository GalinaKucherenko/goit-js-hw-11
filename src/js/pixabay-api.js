import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const options = {
	method: "GET"
};

fetch("<https://pixabay.com/api/>")
  .then(response => {
    if (!response.ok) {
      iziToast.Error({message: 'Sorry, there are no images matching your search query. Please try again!'});
    }
    return response.json();
  })