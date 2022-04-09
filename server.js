const express = require("express");
const app = express();

//Import connection mongoDB
const connectionBD = require("./connection");

// import routes and user model
const routeclient = require("./routes/client");

//import body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use("/api/cliente", routeclient);

app.get("/", (req, res) => {
  res.end("hola estas en el servidor backend");
});

//basic server config
app.listen(5000, () => {
  console.log("el servidor sharpso18 esta corriendo correctamente");
});
