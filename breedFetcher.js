const request = require('request');
const breed = process.argv.slice(2);

const breedFetcher = (searchBreed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {
    if (error) {
      console.error("Error: ", error);
    } else {
      const data = JSON.parse(body);
      const catBreed = data[0];
      if (!catBreed) {
        console.log(`${searchBreed} breed not found.`);
      } else {
        console.log(catBreed.description);
      }
    }
  });
};

breedFetcher(breed[0]);