const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");
const pdfkit = require("pdfkit");
const fs = require("fs");

async function newInvoice(orderId, userInfo, cartDetails, path) {
  let document = new pdfkit({ margin: 50 });
  document.fillColor("#444444").fontSize(20).text("Instacart Inc.", 50, 50).fontSize(10);

  document
    .text(`Invoice ID: ${orderId}`, 50, 100)
    .text(`Invoice Date: ${new Date().toDateString()}`, 50, 115)
    .text(`For: ${userInfo.firstName} ${userInfo.lastName}`, 50, 130)
    .text(`Shipping Address: ${userInfo.address}, ${userInfo.city}, Israel.`, 50, 145)
    .text(`Shipping Date: ${userInfo.shippingDate}`, 50, 160)
    .moveDown();

  const invoiceTableTop = 180;
  let totalPriceTop = invoiceTableTop;
  generateTableRow(document, invoiceTableTop, "Product", "Unit Price", "Quantity", "Total");

  document
    .strokeColor("#6fae1d")
    .lineWidth(1)
    .moveTo(50, invoiceTableTop + 15)
    .lineTo(550, invoiceTableTop + 15)
    .stroke();

  let items = cartDetails.map((x) => x.items);
  let productName = items[0].map((x) => x.productName);
  let unitPrice = items[0].map((x) => x.price);
  let itemAmount = items[0].map((x) => x.amount);

  for (i = 0; i < items[0].length; i++) {
    let totalPrice = 0;
    totalPrice = unitPrice[i] * itemAmount[i];
    const item = productName[i];
    const position = invoiceTableTop + (i + 1) * 30;
    totalPriceTop = position;
    generateTableRow(document, position, item, "$" + unitPrice[i], itemAmount[i] + "pc", "$" + totalPrice);
  }

  generateTableRow(document, totalPriceTop + 50, "", "", "Total price:", "$" + userInfo.totalPrice);

  document.end();
  document.pipe(fs.createWriteStream(path)); 
  // document.pipe(fs.createWriteStream(path2));
}

function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
  doc
    .fontSize(10)
    .text(c1, 50, y)
    .text(c2, 150, y)
    .text(c3, 280, y, { width: 90 })
    .text(c4, 370, y, { width: 90 })
    .text(c5, 0, y);
}

module.exports = {
  newInvoice,
};
