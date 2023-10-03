// const {add} = require("./other.js")
const http = require('http');

//third party module -> underscore.

const _ = require('underscore');

// local server create
// const server = http.createServer(function(req, res){

//     console.log(10+10);

//     console.log(`Server is running`);
  
//   });
  
  // server.listen(5900); 

  

// console.log(add(10,20));


var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

const name = "n";
console.log(name)

const res =_.pluck(stooges, `${name}`);
console.log(res)

