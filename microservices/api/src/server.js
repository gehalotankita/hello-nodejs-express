var express = require('express');
var axios = require('axios');
var app = express();
var router = express.Router();

var server = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('Hello World-Ankita');
});

app.get("/setcookie", function(req, res){
  res.cookie('name', 'ankita');
  res.cookie('age',25);
  res.end();
});

app.get("/getcookie", function(req,res){
   console.log(req.headers.cookie);
   res.send(req.headers.cookie);
});

app.get("/robots.txt", function(req, res){
  res.status(403).end();
})

app.get("/html", function(req,res){
  res.send(
      `
      <html>
          <body>
              <div>
                  <h1>First Page</h1>
                  <p>This is my first paragraph in html</p>
              </div>
          </body>
      </html>
      `
      )
});

app.get("/input",function(req,res){
  res.send(
     ` 
      <html>
      <body>
          <h1>Form Submission</h1>
          <form  method="post">
              <input name="UserName" type="text"/>
              <input type="submit" value="OK"/>
          </form>
      </body>
      </html>
     `);
});

app.post("/input",function(req,res){
  res.send(
     ` 
      <html>
      <body>
          <h1>Recieved</h1>
      </body>
      </html>
     `);
  console.log(req.body.UserName);
});

app.get("/authors", function(req,res){
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function(usersResponse) {
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(postsResponse){
          console.log(usersResponse.data);
          console.log(postsResponse.data);
          var users = usersResponse.data;
          var posts = postsResponse.data;

          var authors = '';
          for(i = 0; i < users.length; i++) {
              var currentUser = users[i];

              var count = 0;
              for(k = 0; k < posts.length; k++) {
                  if(posts[k].userId == currentUser.id) {
                      count = count + 1;
                  }
              }

              authors = authors + '\r\n' + currentUser.name + ' ' +  count;
              
          }

          res.send(authors);
      });
  })
})

// Uncomment to add a new route which returns hello world as a JSON
app.get('/api/winloss', function(req, res) {
  res.json({
    "rcb": {
      win: 5,
      loss: 12,
      draw: 2
    },
    "mumbai indians": {
      win: 5,
      loss: 12,
      draw: 2
    },
    "Sunrisers Hyderabad": {
      win: 2,
      loss:19,
      draw:8
    },
    "Rising Pune Supergiant": {
      win:4,
      loss: 19,
      draw:6
    },
    "Kings XI Punjab": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Gujarat Lions": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Delhi Daredevils": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Deccan Chargers": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Rajasthan Royals": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Chennai Super Kings": {
      win: 5,
      loss: 20,
      draw: 8
    },
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
