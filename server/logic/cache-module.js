let tokenToUserDetailsMap = new Map();

async function get(token) {
  if (token == null) {
    throw new Error("Invalid key, failed to retrieve data from cache");
  }
  return tokenToUserDetailsMap.get(token);
}

async function set(token, userData) {
  tokenToUserDetailsMap.set(token, userData);
}

function extractUserDataFromCache(request) {
  let authorizationString = request.headers["authorization"];
  let token = authorizationString.substring("Bearer ".length);
  let userData = get(token);
  console.log(userData);
  return userData;
}

module.exports = {
  set,
  get,
  extractUserDataFromCache,
};
