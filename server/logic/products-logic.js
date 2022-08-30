import productsDao from "../dao/products-dao.js";
import * as ErrorType from "../errors/error-type.js";
import * as ServerError from "../errors/server-error.js";

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

export default {
  getAllProducts,
  editProduct,
  addNewProduct,
};
