#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const filmsData = JSON.parse(body).results;
  const filmsWithWedgeAntilles = filmsData.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));

  console.log(filmsWithWedgeAntilles.length);
});
