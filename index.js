const express = require("express");
const path = require("path");

const port = 3000

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const indexRoutes = require("./routes/indexRoutes.js");

app.use("/", indexRoutes);
app.use((req, res, next) => res.status(404).render("layouts/main.ejs", { router:"./error.ejs" }));

app.listen(port, () => console.log("Ok"));