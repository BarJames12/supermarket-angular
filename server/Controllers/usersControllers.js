import  express  from "express";
import usersLogic from "../logic/users-logic.js"
import cartLogic from "../logic/cart-logic.js"
import cacheModule from "../logic/cache-module.js"
const router = express.Router();


router.post("/", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY
  let registrationData = request.body;
  console.log(registrationData);
  try {
    await usersLogic.addUser(registrationData);
    response.json();
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY
  let username = request.body.username;
  let password = request.body.password;
  try {
    let userData = await usersLogic.login(username, password);
    response.json(userData);
  } catch (error) {
    return next(error);
  }
});

router.get("/", async (request, response, next) => {
  try {
    let userData = await cacheModule.extractUserDataFromCache(request);
    let userId = userData.userId;
    let userPersonalInfo = await usersLogic.getUserInfo(userId);
    response.json(userPersonalInfo);
    console.log(userPersonalInfo);
  } catch (error) {
    return next(error);
  }
});

export default router;
