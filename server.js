// Set DEV environment vars
if(process.env.NODE_ENV != "production") {
	require('dotenv').config();
}


// Intantiate express app
var express = require('express');
var app = express();


// Respond to page requests
// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// })


// Send public assets
app.use(express.static('public'));


// Open port
app.listen(process.env.PORT, function() {
	if (process.env.PORT == undefined) {
		console.log("App running on localhost:3000");
	} else {
		console.log("App running on localhost:" + process.env.PORT);
	}

})
