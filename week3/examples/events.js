// function doSomething(event){
//     console.log(event.type);
//     console.log(event.target);
//     console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`);
// }
// addEventListener('click', doSomething);

//One Click
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

//Double Click
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

//Mouse over and out
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

// Key up, down, and press
// addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

// Remove event listener
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

//Preventing Default Behavior
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

// Bubbling
// ulElement = document.getElementById('list');
// liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul') );

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li') );

// Capturing
// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

//Stop the bubbling phase
// liElement.addEventListener('click', (event) => {
//     console.log('clicked on li');
//     event.stopPropagation(); }, false);

// Event Delegation
ulElement.addEventListener('click',highlight);