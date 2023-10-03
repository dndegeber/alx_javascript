#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movieData = JSON.parse(body);
  const charactersURLs = movieData.characters;

  charactersURLs.forEach(characterURL => {
    request.get(characterURL, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        return;
      }

      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  });
});
