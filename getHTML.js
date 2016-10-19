var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

request('https://www.youtube.com/', function (err, res, body) {
  var $ = cheerio.load(body);
  var resultsObject = {};
  var resultsArray = [];
  var text;
  var path;

  var links = $('a');

  for (var key in links) {
    if (links[key].children) {
      
      if (links[key].children.length) {
        if (links[key].children.forEach) {
          links[key].children.forEach(function (tag) {
            if (tag.type = 'text' && tag.data && tag.data !== ' ' && tag.data.indexOf('\n') === -1 && tag.data !== '  ') {
              text = tag.data;
            }
          });
        }
      }

    }

    if (links[key].attribs) {
      path = links[key].attribs.href;

    }

    if (text && path) { 
      resultsObject[path] = text;
    }
  }

  for (var key in resultsObject) {
    if (key[0] === '/') {
      key = 'https://www.youtube.com' + key;
    }

    resultsArray.push({
      text: resultsObject[key],
      link: key,
    });
  }

  console.log(resultsArray);

  fs.writeFileSync('./results.json', JSON.stringify(resultsArray), 'utf8');
});

















