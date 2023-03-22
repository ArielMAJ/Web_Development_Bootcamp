const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(express.static(__dirname + "/../public/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const bmi = (weight / height / height).toFixed(2);

  let data = fs.readFileSync(__dirname + "/../public/index.html", "utf8");

  if (data)
    res.send(
      data
        .replace("<h1>BMI Calculator</h1>", "<h1>Your BMI is:</h1><!--")
        .replace(
          "</form>",
          "</form>--><h2>" +
            bmi +
            "</h2>" +
            '<input type="button" value="Go Back" class="btn" onclick="document.location.href=\'/\';"/>'
        )
    );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 (http://localhost:3000/)");
});
