// const url = 'https://swapi.dev/api/people'
// let people = document.getElementById('people');


// function fetchPeople(url){ 
//     return fetch(url)
//   .then(function (response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     } else {
//       return response.json();
//   }})

 
//   .then(function (jsonObject) {
//     console.log(jsonObject);  // temporary checking for valid response and data parsing
//     const results = jsonObject['results'];
//     results.forEach((result) => {
//         let card = document.createElement('section');
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//         let p2 = document.createElement('p');
       
//         h2.textContent = `${result.name}`;
//         p.textContent = `Date of Birth: ${result.birth_year} `;
//         p2.textContent = `Eye Color: ${result.eye_color} `;

     
//         card.appendChild(h2);
//         card.appendChild(p);
//         card.appendChild(p2);
       
//         document.querySelector('div.cards').appendChild(card);
//   });
// //   if (results.next){
// //       let next = document.getElementById('next');
// //       next.addEventListener('click', () => {
// //           console.log("Im in the event listener");
// //           fetchPeople(results.next);
// //       })
// // //   }

//     })
//     .then(function newurl(jsonObject){
//         let results = jsonObject['results'];
//         let newurl = results.next;
//         return newurl;
//     })}
// let oldFetch = fetchPeople(url);
// let newurl = fetchPeople.newurl()
// fetchPeople(newurl);

// // let nextBtn = document.getElementById('next');
// // nextBtn.addEventListener('click', () => {
// //     let url = fetchPeople.nextUrl();
// //     fetchPeople(url);
// // });
function getJSON(url) {
  return fetch(url)
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
function getPeople(url) {
  return getJSON(url);
}

function renderPeopleList(people, listElement) {
  listElement.innerHTML = '';
  people.forEach(function(person) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <h2><a href="${person.url}">${person.name}</h2>
    <p>Date Of Birth: ${person.birth_year}</p>
    <p>Eye Color: ${person.eye_color}</p>
    `;

    listItem.addEventListener('click', function(event) {
      event.preventDefault();
      getPersonDetails(ship.url);
    });

    listElement.appendChild(listItem);
  });
}

function renderPeopleDetails(peopleData) {
  console.log(peopleData);
}

function showPeople(url = 'https://swapi.dev/api/people') {
  getPeople(url).then(function(data) {
    console.log(data);
    const results = data.results;

    const listElement = document.getElementById('peopleList');
    renderPeopleList(results, listElement);

    if (data.next) {
      const next = document.getElementById('next');
      next.ontouchend = () => {
        console.log("I'm in the next button");
        showPeople(data.next);
      };
    }
    if (data.previous) {
      const prev = document.getElementById('previous');

      prev.ontouchend = () => {
        console.log("I'm in the previous button");
        showPeople(data.previous);
      };
    }
  });
}

function getPeopleDetails(url) {
  getPeople(url).then(function(data) {
    renderPeopleDetails(data);
  });
}

showPeople();