function tryLocalStorage() {
    try {
        if (localStorage) {
            return true;
        }
    } catch(err) {
        return false;
    }
}

export function getLocalData() {
    if (tryLocalStorage()) {
        let data = JSON.parse(localStorage.getItem("cart"));
        return data ? data :[] ;
    } else {
        return [];
    }
}

export function setLocalData(data) {
    if (tryLocalStorage()) {
        localStorage.setItem("cart", JSON.stringify(data));
        return localStorage.getItem("cart");
    } else {
        return [];
    }
}

export function clearLocalData() {
    if (tryLocalStorage()) {
        return localStorage.setItem("cart", JSON.stringify([]));
    }
}
