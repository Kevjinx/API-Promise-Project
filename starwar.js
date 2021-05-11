const fetch = require('node-fetch');


console.log(fetch('https://swapi.dev/api/people/1/'));


const fetchPpl = fetch('https://swapi.dev/api/people/1', {})
  .then(res => res.json())
  .then(json => fetch(json.homeworld), {})

const fetchHomeworld = (homeworld) => {
  fetch(homeworld, {})
    .then(res => res.json())
    .then(json => console.log(json))
}
