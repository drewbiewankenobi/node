// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var videos = [
	{
		name: "Drewbacca",
		url: "https://www.youtube.com/embed/k_2Y6yHhYdI",
		title: "Mayhem - Deathcrush",
		description: "Brutatlity from one of the originals!",
		votes: 0

	}
]

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html');
  res.sendFile(index.html)
});

app.get('/api/videos', function(req, res){
		res.send(videos)

})

app.post('/api/videos', function(req, res){
	// Our data will live in req.body
	console.log('Body ->', req.body)
	videos.push({
		name : req.body.name,
		url : req.body.url,
		title : req.body.title,
		description: req.body.description,
		votes: 0

	})

	res.send(videos)

})

app.post('/api/videos/votes', function(req, res){
 
 	for (i=0; i<videos.length; i++){
 		if (req.body.name === videos[i].name){
 			videos[i].votes +=1
 		}
 	}
 	res.send(videos)
})

// Creating Server and Listening for Connections \\
var port = 1234
app.listen(port, function(){
  console.log('Server running on port ' + port);

})