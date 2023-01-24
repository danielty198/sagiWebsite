const { urlencoded } = require("body-parser");
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');



app.get("/", (req, res) => {
  res.render("main")
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});