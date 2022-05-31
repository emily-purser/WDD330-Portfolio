const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( Response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(Response.ok) {
            return Response;
        }
            throw Error(Response.statusText);
    })
    .then( Response => Response.text() )
    .then( text => outputDiv.innerHTML = text)
    .catch( error => console.log('There was an error: ', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( Response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(Response.ok) {
            return Response;
        }
        throw Error(Response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error: ', error))
}, false);