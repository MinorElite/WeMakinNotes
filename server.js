
const express = required('express');
const inquirer = required('inquirer');
var PORT = process.env.PORT || 3001;


var app = express();
var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routing/html-routes")(app);
require("./routing/api-routes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//need variable to archive and json parse
// fs.readfilesync
// express is app.use and app.get
// might need const path = require () "path"
// function that handles request and response
// app.post function that create new variables for notes 
// write filesync uses db as database

// listener sets everything off so leave at bottom!!
