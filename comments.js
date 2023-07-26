// Create web server
// Run: node comments.js
// Test: curl -X POST -d "comment=This is a comment" http://localhost:3000/api/comments
//       curl http://localhost:3000/api/comments

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser())// 1. Create a web server









