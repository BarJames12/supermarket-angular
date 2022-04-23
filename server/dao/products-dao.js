let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

async function getAllProducts() {
  const sql = `SELECT p.product_id AS productId ,p.product_name AS productName ,p.product_price AS price, p.category_id AS categoryId , c.category_name AS categoryName ,p.image 
FROM products p
INNER JOIN categories c ON p.category_id=c.category_id;`;
  try {
    let allProducts = await connection.execute(sql);
    return allProducts;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(allProducts), e);
  }
}

async function editProduct(newProductDetails) {
  console.log(newProductDetails);
  let sql = "UPDATE products SET product_name=?, product_price=?, category_id=?, image=? WHERE product_id=?; ";
  let parameters = [
    newProductDetails.productName, 
    newProductDetails.price,
    newProductDetails.categoryId,
    newProductDetails.image,
    newProductDetails.productId,
  ];
  try {
    let updatedProductData = await connection.executeWithParameters(sql, parameters);
    return updatedProductData;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(updatedProductData), e);
  }
}

async function addNewProduct(newProductToAdd) {
  console.log(newProductToAdd);
  const sql = `INSERT INTO products (product_name, category_id, product_price, image)
VALUES (?,?,?,?);`;

  let parameters = [
    newProductToAdd.productName,
    newProductToAdd.categoryId,
    newProductToAdd.price,
    newProductToAdd.image,
  ];

  try {
    let newProductDetails = await connection.executeWithParameters(sql, parameters);
    console.log(newProductDetails);
    return newProductDetails;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(newProductToAdd), e);
  }
}


module.exports = {
  getAllProducts,
  editProduct,
  addNewProduct,
};
