const mongoose = require("mongoose"),
      url = "mongodb://localhost/warbler";
mongoose.set('debug', true);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    keepAlive: true
  };
   
mongoose.connect(url, options)
.catch(error => console.error(error));

mongoose.Promise = Promise;

module.exports.User = require("./user");

