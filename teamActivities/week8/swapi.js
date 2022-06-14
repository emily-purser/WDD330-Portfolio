const url = 'https://swapi.dev/api/people'
let people = document.getElementById('people');


function fetchPeople(url){ 
    return fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
  }})

 
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const results = jsonObject['results'];
    results.forEach((result) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
       
        h2.textContent = `${result.name}`;
        p.textContent = `Date of Birth: ${result.birth_year} `;
        p2.textContent = `Eye Color: ${result.eye_color} `;

     
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
       
        document.querySelector('div.cards').appendChild(card);
  });
//   if (results.next){
//       let next = document.getElementById('next');
//       next.addEventListener('click', () => {
//           console.log("Im in the event listener");
//           fetchPeople(results.next);
//       })
// //   }

    })
    .then(function newurl(jsonObject){
        let results = jsonObject['results'];
        let newurl = results.next;
        return newurl;
    })}
let oldFetch = fetchPeople(url);
let newurl = fetchPeople.newurl()
fetchPeople(newurl);

// let nextBtn = document.getElementById('next');
// nextBtn.addEventListener('click', () => {
//     let url = fetchPeople.nextUrl();
//     fetchPeople(url);
// });
