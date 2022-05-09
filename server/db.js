var mongoose = require('mongoose');
var gridfsEasy = require('gridfs-easy');
require('dotenv').config();
//establish the connection with mongoose
var dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri);

//export the gridfsEasy so that you can use it everywhere
module.exports = new Promise(function (resolve, reject) {
  //make sure you've successfully connected
  mongoose.connection.on('connected', function () {
    //initialize the gridfs-easy
    var gfsEasy = new gridfsEasy(mongoose);
    resolve(gfsEasy);
  });
});
