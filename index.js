var express = require("express");
const fs = require("fs");
const path = require("path");

var app = express();

app.get("/data", function (req, res) {
  console.log("有请求");
  fs.readFile(
    path.join(__dirname, "data.json"),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(data.toString());
    }
  );
});

app.listen(5000, function () {
  console.log(`复制到浏览器http:localhost:5000/data`);
});
