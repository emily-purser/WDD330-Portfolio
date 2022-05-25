// Local storage helper functions

//Read from local stoarge
export function readLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

//Write to Local Storage
export function writeLS(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
}