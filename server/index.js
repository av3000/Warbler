const express = require("express"),
      app     = express(),
      cors    = require("cors"),
      bodyParser = require("body-parser"),
      PORT    = 3001;

app.use(cors());
app.use(bodyParser.json());

// routes
app.get("/", function(req, res, next){
    res.send("Hello World");
})


app.use(function(req, res, next) {
    let err = new Error("Not found...");
    err.status = 404;
    next(err);
});

app.listen(PORT, function(){
    console.log(`Express running on port ${PORT}`);
});