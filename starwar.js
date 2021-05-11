const fetch = require('node-fetch');


// console.log(fetch('https://swapi.dev/api/people/1/'));


// const fetchPpl = fetch('https://swapi.dev/api/people/1/', {})
//   .then(res => res.json())
//   .then(json => fetchHomeworld(json.homeworld))

// const fetchHomeworld = (homeworld) => {
//   fetch(homeworld, {})
//     .then(res => res.json())
//     .then(json => console.log(json))
// }


const printFetch = res => {
  res.forEach(filmUrl => {
    return fetch(filmUrl, {})
      .then((res) => res.json())
      .then((json) => {
        console.log(json.title)
      })
  })
}
const fetchFilms = () => {
  return fetch("https://swapi.dev/api/people/1/", {})
    .then((res) => res.json())
    .then((json) => {
      return json.films
    })
    .catch((error) => console.log(error))
}

fetchFilms().then((res) => {printFetch(res)})


// Promise.all(fetchFilms(), {})
//   .then((res) => res.json())
//   .then(json =>console.log(json))
