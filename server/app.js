const express = require("express");
const server = express();
server.use(express.json());
const path = require("path");

server.use("../server/static/inovices", express.static(path.join(__dirname, "static")));

const usersController = require("./controllers/usersControllers");
const productsControllers = require("./Controllers/productsControllers");
const cartsControllers = require("./Controllers/cartsController");

const cors = require("cors");
const errorHandler = require("./errors/error-handler");

const fs = require("fs");
const fileUpload = require("express-fileupload");
const { request, response } = require("express");

if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

// server.use(cors({ origin: "http://localhost:3000" })); //react
server.use(cors({ origin: "http://localhost:4200" })); //angular

server.use(fileUpload());
server.use(express.static("./uploads"));

server.use("/users", usersController);
server.use("/products", productsControllers);
server.use("/carts", cartsControllers);

server.use(errorHandler);



server.listen(3001, () => console.log("Listening on http://localhost:3001"));
