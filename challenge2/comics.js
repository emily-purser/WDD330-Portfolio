import { bindTouch, qs } from "./util.js";

const url = 'http://gateway.marvel.com/v1/public/comics?';

//Helper Functions
function addFavorites(){
    let newList = [];
    let items = document.querySelectorAll('input.comicItem');
    console.log( "items: " , items);
    items.forEach(element => {
        if (element.checked) {
            let elementText = element.value;
            newList.push(elementText);
        }
    })
    return newList;
}
//Model Code
function getComics(url){
    const timeStamp = new Date().getTime();
    const hash = md5(timeStamp + "8cec55aedd753ec0dac128e7fdaa1951ff14a8af" + "7ec3d972d2a586ae7ef3447cc544446f");
    console.log(timeStamp);
    console.log(hash);
    return fetch(url + new URLSearchParams({
        "apikey" : "7ec3d972d2a586ae7ef3447cc544446f",
        "ts": timeStamp,
        "hash": hash
    }))
    .then(function(response) {
        if(!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}
//View Code
function renderComicsList(data, listElement) {
    listElement.innerHTML = '';
    console.log("renderComicsList data: ", data);

    data.forEach(element => {
        let listItem = document.createElement("form");
        listItem.innerHTML = `
        <input type="checkbox" class="comicItem" value="${element.title}">${element.title}
        `;
        listElement.appendChild(listItem);
        
    });
    console.log(listElement);
}
function renderFaveComics (data, listElement) {
    listElement.innerHTML = '';
    console.log("renderFaveComics data: ", data);

    data.forEach(element => {
        let listItem = document.createElement('form');
        listItem.innerHTML = `
        <input type="checkbox" class="comicItem" value="${element}" checked="true">${element}
        `;
        listElement.appendChild(listItem);
    })
}

//Controller
export default class Comics {
    constructor(listElement) {
        this.listElement = listElement;
        this.url = url;
        bindTouch('#addFav', this.addToFavorties.bind(this));
        bindTouch('#showFav', this.showComics.bind(this));
    }
    showComics(comicsListElement){
        getComics(this.url).then(function(data) {
            console.log("Show Comics Data: ", data);
            const results = data.data.results;
            console.log("show Comics results: ", results);
            const comicsListElement = document.getElementById('comicsList');
            renderComicsList(results, comicsListElement);
        })
    }
    addToFavorties() {
        let list = addFavorites();
        renderFaveComics(list, this.listElement);
    }
}