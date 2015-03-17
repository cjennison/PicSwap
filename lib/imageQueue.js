
var mongoose = require("mongoose");
var Picture = require("../models/picture");


//Starts the queue for destroying seen images
//The queue pulls all seen images whom are not flagged and sets a timer. Delete the image from the database
//Each time we load it in.
//Every time, the timer updates and once it reaches 0, the image is deleted from the server and queue
var queue = [];

function startQueue(){
  queue = [];

  setInterval(function(){
    tick();
  },1000)
}

//Every second, load all unseen images and delete them from the database
function tick(){
  //TODO
}

//Sends a random image to the user and marks it as seen
function sendRandomImage(cb){
  cb({
    message:"test"
  })
}



startQueue();

exports.sendRandomImage = sendRandomImage;