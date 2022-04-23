const productsDao = require("../dao/products-dao");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

async function getAllProducts() {
  let allProducts = await productsDao.getAllProducts();
  return allProducts;
}

async function editProduct(newProductDetails) {
  await validateAdminManage(newProductDetails);
  newProductDetails = await productsDao.editProduct(newProductDetails);
  return newProductDetails;
}

async function addNewProduct(newProductToAdd) {
  await validateAdminManage(newProductToAdd);
  newProductToAdd = await productsDao.addNewProduct(newProductToAdd);
}

async function validateAdminManage(newProduct) {
  if (!newProduct.productName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!newProduct.categoryId) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!newProduct.price) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!newProduct.image) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
}

module.exports = {
  getAllProducts,
  editProduct,
  addNewProduct,
};
