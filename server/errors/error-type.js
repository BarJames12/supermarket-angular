let ErrorType = {
  GENERAL_ERROR: {
    id: 1,
    httpCode: 600,
    message:
      "A big fuck up which we'll never tell you of had just happend. And now : A big fat lie....'A general error ....'",
    isShowStackTrace: true,
  },

  USER_NAME_ALREADY_EXIST: {
    id: 2,
    httpCode: 601,
    message: "User name already exist",
    isShowStackTrace: false,
  },

  UNAUTHORIZED: {
    id: 3,
    httpCode: 601,
    message: "Login failed, invalid user name or password",
    isShowStackTrace: false,
  },

  EMPTY_FIELD: {
    id: 4,
    httpCode: 602,
    message: "You cannot provide an empty field",
    isShowStackTrace: false,
  },

  INVALID_DATE: {
    id: 5,
    httpCode: 603,
    message: "Start date cannot be bigger then End date",
    isShowStackTrace: false,
  },

  INVALID_PASSWORD: {
    id: 6,
    httpCode: 604,
    message: "password not match",
    isShowStackTrace: false,
  },

  INVALID_INPUT: {
    id: 7,
    httpCode: 605,
    message: "password must be bigger then 4 characters",
    isShowStackTrace: false,
  },
  INVALID_NAME: {
    id: 8,
    httpCode: 606,
    message: "Input must be bigger then 2 characters",
    isShowStackTrace: false,
  },
  USER_NAME_DOESNT_EXIST: {
    id: 9,
    httpCode: 607,
    message: "Invalid username",
    isShowStackTrace: false,
  },
  INVALID_CREDIT_CARD: {
    id: 10,
    httpCode: 608,
    message: "Invalid credit Card",
    isShowStackTrace: false,
  },
  INVALID_CREDIT_CARD: {
    id: 11,
    httpCode: 609,
    message: "Sry but this shipping date is full , Please choose another date",
    isShowStackTrace: false,
  },
};

export default ErrorType;
