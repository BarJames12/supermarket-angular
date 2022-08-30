import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fileUpload from "express-fileupload";

import usersController from "./Controllers/usersControllers.js";
import productsControllers from "./Controllers/productsControllers.js";
import cartsControllers from "./Controllers/cartsController.js";
import errorHandler from './errors/error-handler.js';
import * as fs from "fs"

const server = express();
dotenv.config();
server.use(bodyParser.json({ limit: "30mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors({ origin: "http://localhost:4200" })); //angular


const __dirname = path.resolve();
server.use("../server/static/inovices", express.static(path.join(__dirname, "static")));


if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

server.use(fileUpload());
server.use(express.static("./uploads"));

server.use("/users", usersController);
server.use("/products", productsControllers);
server.use("/carts", cartsControllers);


server.get("/", (req, res) => {
  res.send("SERVER IS RUNNING. :]");
});

const PORT = process.env.PORT || 3001;
server.use(errorHandler);


server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
