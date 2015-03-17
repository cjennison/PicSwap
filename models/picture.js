module.exports = function(){

  var Picture = mongoose.model('Picture', {
    url:String, //url to the image in /submissions
    user_id:String, //id of the submitted user
    reply:String, //user reply, if any
    seen:Boolean,
    flag:Number
  });

}  