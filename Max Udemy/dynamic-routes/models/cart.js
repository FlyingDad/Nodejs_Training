const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {

	static addProduct(id, productPrice) {
		// Fetch the previous cart
		fs.readFile(p, (err, fileContent) => {
			let cart = {products: [], totalPrice: 0}
			if (!err) {
				cart = JSON.parse(fileContent);
			}
			// Analyze cart => find existing products
			const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
			console.log('product index: ', existingProductIndex)
			let updatedProduct;
			// add new product or increase quantity
			if (existingProductIndex >= 0) {
				console.log('updating product')
				updatedProduct = cart.products[existingProductIndex];
				updatedProduct.qty += 1;
				cart.products = [...cart.products];		
				cart.products[existingProductIndex] = updatedProduct;		
			} else {
				updatedProduct = {id: id, qty: 1}
				console.log('adding product')
				console.log(updatedProduct)
				cart.products = [...cart.products, updatedProduct]
			}
			cart.totalPrice += +productPrice;
			fs.writeFile(p, JSON.stringify(cart), err => {
				console.log(err)
			});
		});
	}
}