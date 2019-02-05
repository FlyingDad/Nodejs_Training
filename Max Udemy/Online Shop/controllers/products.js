const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
		docTitle: "Add Product", 
		path: "/admin/add-product",
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
}

exports.postAddProduct = (req, res, next) => {
	console.log(req.body);
	products.push({title: req.body.title})
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
	console.log('from the shop -> ', products);
  res.render('shop', {
		prods: products, 
		docTitle: 'Shop', 
		path: '/shop',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	})
}