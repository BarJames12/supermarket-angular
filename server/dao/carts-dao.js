let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

async function getCarts(userId) {
  const sql = `SELECT c.cart_id AS cartId,
   CASE 
   WHEN o.cart_id IS NOT NULL THEN 0
   ELSE 1
   END AS 'isOpenCart'
   FROM
   carts c
   LEFT JOIN 
   orders o on o.cart_id = c.cart_id
   WHERE
   c.user_id = ?`;
  const parameters = [userId];

  try {
    let cart = await connection.executeWithParameters(sql, parameters);
    return cart;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(cart), e);
  }
}

async function createCart(userId, date) {
  const sql = "INSERT INTO carts (user_id, created_date) VALUES (?,?)";
  const parameters = [userId, date];
  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(userId, date), e);
  }
}

async function addToCart(productData) {
  const sql = `INSERT INTO cart_products SET product_id = ?,amount = ?, total_price = ?,cart_id = ?`;
  const parameters = [productData.productId, productData.amount, productData.totalPrice, productData.cartId];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, e);
  }
}

async function updateAmountOnCart(productData) {
  const sql = `UPDATE cart_products
  SET amount=?, total_price=? 
  WHERE product_id =? AND cart_id = ?`;
  const parameters = [productData.amount, productData.totalPrice, productData.productId, productData.cartId];
  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, e);
  }
}

async function deleteFromCart(productId, cartId) {
  const sql = `DELETE cp.* FROM cart_products cp WHERE product_id=? AND cart_id=?`;
  const parameters = [productId, cartId];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, e);
  }
}

async function getCartData(cartId) {
  const sql = `SELECT p.product_name AS productName , p.product_price AS price, p.image, cp.amount, p.product_id AS productId
  FROM products p 
  LEFT JOIN 
  cart_products cp 
  on p.product_id = cp.product_id
  where cp.cart_id = ?`;
  const parameters = [cartId];

  try {
    let cartData = await connection.executeWithParameters(sql, parameters);
    return cartData;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(cartId), e);
  }
}

async function checkout(userId, cartId, userInfo) {
  const sql = `INSERT INTO orders SET user_id=?, cart_id=?, total_price=?, ship_city=?, ship_address=?, shipped_date=?, order_date=?, last_4_digit=? 
`;
const parameters = [
  userId,
  cartId,
  userInfo.totalPrice,
  userInfo.city,
  userInfo.address,
  userInfo.shippingDate,
  userInfo.orderDate,
  userInfo.creditNum,
];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, e);
  }
}

async function deleteCart(cartId) {
  const sql = `DELETE FROM carts WHERE cart_id=?`;
  const parameters = [cartId];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, e);
  }
}

async function getAllOrders() {
  const sql = `SELECT * FROM orders;`;
  try {
    let allOrders = await connection.execute(sql);
    return allOrders;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, allOrders, e);
  }
}

async function getOrderId(cartId) {
  const sql = `SELECT order_id AS orderId FROM orders
WHERE cart_id = ?`;
  const parameters = [cartId];
  try {
    let orderId = await connection.executeWithParameters(sql, parameters);
    return orderId;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, orderId, e);
  }
}


async function getShippingDates() {
  const sql = `SELECT DATE_FORMAT(shipped_date, "%Y-%m-%d") AS shippingDate FROM orders 
ORDER BY shippingDate ASC`;
  try {
    let shippingDates = await connection.execute(sql);
    console.log(shippingDates);
    return shippingDates;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, shippingDates, e);
  }
}

module.exports = {
  getCartData,
  getCarts,
  createCart,
  addToCart,
  deleteFromCart,
  updateAmountOnCart,
  checkout,
  deleteCart,
  getAllOrders,
  getOrderId,
  getShippingDates,
};
