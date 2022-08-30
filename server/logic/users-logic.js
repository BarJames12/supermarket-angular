import usersDao from "../dao/users-dao.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import * as ErrorType from "../errors/error-type.js";
import * as ServerError from "../errors/server-error.js";
import cacheModule from "../logic/cache-module.js";

// Hash
const saltRight = "sdkjfhdskajh";
const saltLeft = "--mnlcfs;@!$ ";

async function addUser(registrationData) {
  await validateUserDetails(registrationData);
  registrationData.password = crypto
    .createHash("md5")
    .update(saltLeft + registrationData.password + saltRight)
    .digest("hex");

  registrationData.confirmPassword = crypto
    .createHash("md5")
    .update(saltLeft + registrationData.confirmPassword + saltRight)
    .digest("hex");

  const user = await usersDao.addUser(registrationData);
  if (user === 0) {
    throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
  }
}

async function validateUserDetails(registrationData) {
  console.log(registrationData.username);
  if (!registrationData.username) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.firstName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.lastName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.password) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }

  const user = await usersDao.isUserExistByUserName(registrationData);
  if (user.length != 0) {
    throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
  }
  if (registrationData.password.localeCompare(registrationData.confirmPassword) !== 0) {
    throw new ServerError(ErrorType.INVALID_PASSWORD);
  }
  if (registrationData.password.length < 4) {
    throw new ServerError(ErrorType.INVALID_INPUT);
  }
  if (registrationData.firstName.length < 2) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
  if (registrationData.lastName.length < 2) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
  if (registrationData.username.length < 2) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
}

async function validateLoginUserDetails(username, password) {
  if (!username) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!password) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
}

async function login(username, password) {
  await validateLoginUserDetails(username, password);
  password = crypto
    .createHash("md5")
    .update(saltLeft + password + saltRight)
    .digest("hex");
  let userDetails = await usersDao.login(username, password);

  if (!userDetails) {
    throw new ServerError(ErrorType.UNAUTHORIZED);
  }
  const token = jwt.sign({ sub: username }, process.env.JWT_KEY);

  cacheModule.set(token, { userType: userDetails.userType, userId: userDetails.userId });
  console.log(username);
  return { token, userType: userDetails.userType, username: username };
}

async function getUserInfo(userId) {
  let userPersonalInfo = await usersDao.getUserInfo(userId);
  return userPersonalInfo;
}

export default {
  addUser,
  login,
  getUserInfo,
};
