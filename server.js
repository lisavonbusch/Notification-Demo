var express = require('express');
var cors = require("cors")
var app = express();
var fs = require("fs");
const http = require("http");
app.use(cors())

http
  .createServer(app)
  .listen(80, ()=>{
    console.log('server is running at port 80')
  });

app.get('/notifications/:userId', (req, res, next) =>  {
   fs.readFile( __dirname + "/" + "notifications.json", 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        next(err)
      } else {
        var all = JSON.parse(data)
        var matching = all.find((item) => {
          if (item.userId === req.params.userId) {
            return item
          }
        })
        console.log( matching.notifications );
        res.type('application/json')
        res.status(200).send( matching.notifications );
      }
   });
})
