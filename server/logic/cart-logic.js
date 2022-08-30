import cartsDao from "../dao/carts-dao.js";
import * as ErrorType from "../errors/error-type.js";
import * as ServerError from "../errors/server-error.js";

async function getCartId(userId) {
  let carts = await cartsDao.getCarts(userId);
  let cartId = null;
  let cartData = [];
  let cartProducts = [];

  for (let i = 0; i < carts.length; i++) {
    if (carts[i].isOpenCart == 1) {
      cartId = carts[i].cartId;
      console.log(cartId);
      cartData = await cartsDao.getCartData(cartId);
      cartProducts = [{ cartId: cartId, items: [] }];
      for (let i = 0; i < cartData.length; i++) {
        cartProducts[0].items[i] = {
          image: cartData[i].image,
          productName: cartData[i].productName,
          amount: cartData[i].amount,
          price: cartData[i].price,
          productId: cartData[i].productId,
        };
      }
    }
  }
  if (cartId == null) {
    cartId = await createCart(userId);
    console.log(cartId);
    cartProducts = [{ cartId: cartId, products: [] }];
  }
  return cartProducts;
}

async function createCart(userId) {
  let date = await getDate();
  await cartsDao.createCart(userId, date);
  let carts = await cartsDao.getCarts(userId);
  for (let i = 0; i < carts.length; i++) {
    if (!carts[i].isOpenCart==1) {
      cartId = carts[i].cartId;
    }
  }
  return cartId;
}

async function getDate() {
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let hour = today.getHours();
  let min = today.getMinutes();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  today = yyyy + "-" + mm + "-" + dd;
  now = hour + ":" + min;

  const fixedDate = today + " " + now;
  return fixedDate;
}

async function addToCart(productData) {
  console.log(productData);
  await cartsDao.addToCart(productData);
}

async function deleteFromCart(productId, cartId) {
  await cartsDao.deleteFromCart(productId, cartId);
}

async function updateAmountOnCart(productData) {
  await cartsDao.updateAmountOnCart(productData);
}

async function checkout(userId, cartDetails, userInfo) {
  console.log(userInfo.shippingDate);

  userInfo.creditNum = userInfo.creditNum.replace(/\s/g, "");
  let unavilableDates = await getShippingDates();
  await validateUserInfo(userInfo, unavilableDates);

  //Finding the cartId from the carts Objects
  let cartId = await Promise.all(cartDetails.map(async (x) => x.cartId));
  cartId = cartId[0];
  console.log(cartId);

  //cutting the last 4 Credit card number
  userInfo.creditNum = userInfo.creditNum.slice(userInfo.creditNum.length - 4);
  await cartsDao.checkout(userId, cartId, userInfo);
}

async function getAllOrders() {
  let totalOrders = await cartsDao.getAllOrders();
  return totalOrders.length;
}

async function getOrderId(cartDetails) {
  let cartId = await Promise.all(cartDetails.map(async (x) => x.cartId));
  cartId = cartId[0];

  let orderId = await cartsDao.getOrderId(cartId);
  orderId = orderId[0].orderId;
  return orderId;
}

async function validateUserInfo(userInfo, unavilableDates) {
  if (!userInfo.firstName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!userInfo.lastName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!userInfo.city) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!userInfo.address) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!userInfo.shippingDate) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (userInfo.shippingDate.year) {
    userInfo.shippingDate =
      `${userInfo.shippingDate.year}` + "-" + `${userInfo.shippingDate.month}` + "-" + `${userInfo.shippingDate.day}`;
  }

  if (!userInfo.creditNum) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (userInfo.creditNum.length != 16) {
    console.log(userInfo.creditNum.length);
    throw new ServerError(ErrorType.INVALID_CREDIT_CARD);
  }
  if (unavilableDates.includes(userInfo.shippingDate)) {
    throw new ServerError(ErrorType.INVALID_CREDIT_CARD);
  }
}

async function getShippingDates() {
  let allShippingDates = await cartsDao.getShippingDates();
  let unavilableDates = await checkIfOrderAvailabale(allShippingDates);
  return unavilableDates;
}

async function checkIfOrderAvailabale(allShippingDates) {
  let unavilableDates = [];
  for (i = 0; i < allShippingDates.length - 2; i++) {
    if (
      allShippingDates[i].shippingDate == allShippingDates[i + 1].shippingDate &&
      allShippingDates[i + 1].shippingDate == allShippingDates[i + 2].shippingDate
    ) {
      unavilableDates.push(allShippingDates[i].shippingDate);
    }
  }
  return unavilableDates;
}

export default {
  getCartId,
  createCart,
  addToCart,
  updateAmountOnCart,
  deleteFromCart,
  checkout,
  getAllOrders,
  getOrderId,
  getShippingDates,
};
