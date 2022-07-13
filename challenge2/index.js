import Comics from './comics.js';

const list = document.getElementById('comicsList');
const myComics = new Comics(list);
myComics.showComics();