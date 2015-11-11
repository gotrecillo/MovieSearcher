'use strict';

let request = require('request');
let fs = require('fs');

let formatMovieWithImages = require('./utils/movie-utils.js').formatMovieWithImages;

//Chang the url to point your user and your list
request({
  method: 'GET',
  url: 'https://api-v2launch.trakt.tv/users/youruser/lists/yourlist/items?extended=full,images',
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': 'FOOKEY' // Use your own api key
  }}, function (error, response, body) {
    let movies = JSON.parse(body).map(formatMovieWithImages);
    let ws = fs.createWriteStream('moviesData.js');
    ws.write('export default ');
    let moviesData = {};
    movies.forEach(function(movie) {
      moviesData = Object.assign({}, moviesData, movie);
    });
    ws.write(JSON.stringify(moviesData, null, 2));
    ws.write(';\n');
    ws.end();
});
