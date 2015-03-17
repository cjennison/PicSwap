
var express = require("express");
var router  = express.Router();

var mongoose = require("mongoose");

var Picture = require("../models/picture");



// ------- MODELS --------


// ------- ROUTES --------

//Test Route
router.route("/test")
  .get(function(req, res){
    res.send("Hey")
  })

//Pictures
router.route("/pictures")
  .get(function(req, res){
    Picture.find(function(err, pictures){
      if(err) console.log(err);

      res.json(pictures);
    })
  })
  .post(function(req, res){
    Picture.create({
      url:req.body.url,
      user_id:"1337",
      reply:null
    }, function(err, picture){
      if(err) console.log(err);

      res.json({success:true, messgae:"Picture Sent"});
    })
  })






module.exports = router;