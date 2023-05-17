const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const breed = data[0];
      if (!breed) {
        callback(error, null);
      } else {
        callback(null, breed.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };