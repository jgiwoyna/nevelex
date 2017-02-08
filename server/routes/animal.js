var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'https://animalrestapi.azurewebsites.net/',
  path: '/Animal/Authenticate',
  //since we are listening on a custom port, we need to specify it by hand
  port: '3000',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  //This is what changes the request to a POST request
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
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  method: 'GET',
  host: 'https://animalrestapi.azurewebsites.net/',
  path: '/Animal/List'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
