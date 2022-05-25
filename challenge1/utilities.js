//DOM manipulation helper functions

export function qs(selector) {
    return document.querySelector(selector);
}

export function bindTouch(selector, callback){
    console.log("I am in the bind touch");
    const element = qs(selector);
    element.addEventListener("click", callback);
}