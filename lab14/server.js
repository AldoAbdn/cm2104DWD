var express = require("express");
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '6Ft1pIy6lvQehU54D4nDdU0gC',
    consumer_secret: 'jOJbnxQ2oFfm5XrorWqEcdIHJm1c0doOSpmBFrkuK7NkC16Oui',
    access_token_key: '853735939730010112-fl4BtAY41BN2g7uU6HBNQUKCeH5q8BI',
    access_token_secret: 'hpdwNNHHBjLQI3HqVXhuYH3iAIngdR0feHcSyJISteymK'
});

var params = {screen_name: 'nodejs'};

app.use(express.static("public"));

app.get('/', function(req,res){
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error){
            var output = "";
            for (var t = 0; t < tweets.length; t++){
                output += "<div>";
                output += "<h2>" + tweets[t].user.screen_name + "</h2>";
                output += "<p>" + tweets[t].text + "</p>";
                output += "</div>";
            }
            res.send(output);
        }
        else {
            console.log(error);
            console.log(response);
        }
    });
});

app.listen(8080);