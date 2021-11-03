const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");
const port = require("./config/server");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(".hbs", exhbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/translate"));

app.listen(port.PORT, () =>
  console.log(`Server has been started on port: ${port.PORT}`)
);
