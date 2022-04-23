const { request } = require("express");
const expressJwt = require("express-jwt");
const config = require("../logic/config.json");

// Extracting the text from the secret's JSON
let { secret } = config;

let whiteListUrls = new Set();
whiteListUrls.add("users/login");
whiteListUrls.add("users/");


function authenticateJwtRequestToken() {
  // Load secret into
  return expressJwt({ secret, algorithms: ["sha1", "RS256", "HS256"] }).unless((request) => {
    if (request == "POST" && request.url.endWith("/users/")) {
      console.log("It's true");
      return true;
    }

    if (whiteListUrls.has(request.url)) {
      return true;
    }
  });
}



module.exports = authenticateJwtRequestToken;
