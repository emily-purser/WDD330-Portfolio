//Local storage helpers
//Read from local stoarge
export function readLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

//Write to Local Storage
export function writeLS(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
}

//Bind Helper function
export function bindTouch(selector, callback){
    console.log("I am in the bind touch");
    const element = qs(selector);
    element.addEventListener("click", callback);
}

//QuerySelector helper function
export function qs(selector) {
    return document.querySelector(selector);
}