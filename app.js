// Importing Core Packages
const express = require("express");
const is_ = require("is-base64");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

// Images Directory
const directoryPath = path.join(__dirname, 'images/');

// Initializing Application
const app = express();
const port = process.env.PORT || 5000;

// Express Things
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

// Body

// Returns all the image in the directory
app.get('/', (req, res) => {
  let arrayOfFiles = [];
  fs.readdir(directoryPath, function (err, files) {
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } 
      files.forEach(function (file) {
          arrayOfFiles.push(file)
      });
      res.json(arrayOfFiles);
  });
})

// Gets the specific image
app.get('/:file', (req, res) => {
  const filePath = req.params.file
  res.sendFile(directoryPath + filePath);
})

// Saves the image
app.put('/file', (req, res) => {
  let { title, base64 } = req.body;
  if(fs.existsSync(directoryPath + title)){
    const titleArray = title.split('.')
    title = `${titleArray[0]}_${Math.floor(Math.random() * 100)}.${titleArray[1]}`
  }
  if(is_(base64)){
    fs.writeFile(directoryPath + title, base64, 'base64', (err) => {
      if(err) return res.json({"status": "failure... oniiichan messed up >///<"});
      res.json({"status": "success... owo"})
    })
  }else{
    res.json({"status": "senpai it's not a base64 image."})
  }
})


// Starting Application
app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Server started! Say hey at http://localhost:' + port + '/')
});