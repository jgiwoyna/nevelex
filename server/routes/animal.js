var http = require('http');

var options = {
  host: 'https://animalrestapi.azurewebsites.net/',
  path: '/Animal/Authenticate',
  port: '3000',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  method: 'POST'
};

var postData = {
	candidateID: 'c11b6475-0d0d-4bac-aece-2e12d42980ed'
}

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);

req.write("hello world!");
req.end();


var options = {
  method: 'GET',
  host: 'https://animalrestapi.azurewebsites.net/',
  path: '/Animal/List'
};

callback = function(response) {
  var str = '';


  response.on('data', function (chunk) {
    str += chunk;
  });

  
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
