const express = require("express");
const router = express.Router();
const productsLogic = require("../logic/products-logic");
const cacheModule = require("../logic/cache-module");

router.get("/", async (request, response, next) => {
  try {
    let products = await productsLogic.getAllProducts();
    response.json(products);
    console.log(products);
  } catch (error) {
    return next(error);
  }
});

router.put("/", async (request, response, next) => {
  try {
    let newProductDetails = request.body;
    
    await productsLogic.editProduct(newProductDetails);
    console.log("product Updated!");
    response.json();
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    let newProduct = request.body;
    console.log(newProduct);
    await productsLogic.addNewProduct(newProduct);
    response.json();
  } catch (error) {
    return next(error);
  }
});


// router.post("/upload-image", async (request, response, next) => {
//   try {
//     let sampleFile;
//     let uploadPath;
//     if (!request.files || Object.keys(req.files).length === 0) {
//       return response.status(400).send("No files were uploaded.")
// }

//     sampleFile = req.files.sampleFile
//     uploadPath = __dirname + '/uploads/' + sampleFile.name

//     console.log(sampleFile);
//     sampleFile.mv(uploadPath, function (err){
//       if (err) return res.status(500).send(err);

// res.send("File Uploaded!")




//     })

    




module.exports = router;
