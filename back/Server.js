const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/*', function (request , response){
  response.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.post("/post", function(req, res){
 
   const naam =req.body.fName;  

    console.log("Connected to React" )
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
