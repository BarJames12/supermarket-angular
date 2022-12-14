import connection from "./connection-wrapper.js";
import * as ErrorType from "../errors/error-type.js";
import ServerError from "../errors/server-error.js";

async function isUserExistByUserName(registrationData) {
  let sql = `SELECT * FROM Users WHERE username=? `;
  let parameters = [registrationData.username];
  const userNameResult = await connection.executeWithParameters(sql, parameters);
  return userNameResult;
}

async function addUser(registrationData) {
  console.log(registrationData);
  const sql = `INSERT INTO users (username ,password ,first_name ,last_name ,email ,city, address )
VALUES (?,?,?,?,?,?,?);`;

 let parameters = [
    registrationData.username,
    registrationData.password,
    registrationData.firstName,
    registrationData.lastName,
    registrationData.email,
    registrationData.city,
    registrationData.address,
  ];

  try {
    let userData = await connection.executeWithParameters(sql, parameters);
    console.log(userData);
    return userData.user_id;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(registrationData), e);
  }
}

async function login(username, password) {
  let sql = `SELECT user_id AS userId , first_name AS "firstName", user_type AS "userType" FROM users WHERE username=? and password =?
`;

  // console.log(loginData);
  let parameters = [username, password];

  let usersLoginResult;

  try {
    usersLoginResult = await connection.executeWithParameters(sql, parameters);
    console.log(usersLoginResult[0]);
    return usersLoginResult[0];
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(username, password), e);
  }
}

async function getUserInfo(userId) {
  let sql = `SELECT first_name as firstName, last_name AS lastName ,city,address 
FROM users
WHERE user_id=?`;

  // console.log(loginData);
  let parameters = [userId];

  try {
    let userPersonalInfo = await connection.executeWithParameters(sql, parameters);

    return userPersonalInfo;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(userId), e);
  }
}

export default {
  addUser,
  login,
  isUserExistByUserName,
  getUserInfo,
};
