import { PRODUCTS, REVIEWS } from "./constants";

const ERROR = {code: "error", text: "You have a bad url"};

export let getProducts = url => new Promise( (resolve, reject) => {
    let timeout = Math.floor(Math.random() * 500 + 400)
    if (url === '/books') {
        setTimeout(() => resolve(PRODUCTS), timeout);
    } else {
        setTimeout(() => reject(ERROR), timeout);
    }
    console.log("Timeout:", timeout);
});

export let getBook = url => new Promise( (resolve, reject) => {
    let timeout = Math.floor(Math.random() * 500 + 400)
    if (url.match(/\/book\/[0-9]*/)) {
        let url_id = url.split("/").pop();
        setTimeout(() => resolve(PRODUCTS.find( book => book.id === parseInt(url_id))), timeout);
    } else {
        setTimeout(() => reject(ERROR), timeout);
    }
    console.log("Timeout:", timeout);
});


export let getReviews = url => new Promise( (resolve, reject) => {
    let timeout = Math.floor(Math.random() * 500 + 400)
    if (url === '/reviews/1') {
        setTimeout(() => resolve(REVIEWS), timeout);
    } else {
        setTimeout(() => reject(ERROR), timeout);
    }
    console.log("Timeout:", timeout);
});
