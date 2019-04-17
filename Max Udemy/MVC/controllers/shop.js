const Product = require('../models/product');


exports.getHome = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/index', {
			prods: products,
			pageTitle: 'Home',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	})
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			prods: products,
			pageTitle: 'Shop',
			path: '/product-list',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	})
};

exports.getCart = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/cart', {
			pageTitle: 'Cart',
			path: '/cart'
		});
	})
};

exports.getCheckout = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/cart', {
			pageTitle: 'Cart',
			path: '/cart'
		});
	})
};

exports.getOrders = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/orders', {
			pageTitle: 'Cart',
			path: '/orders'
		});
	})
};


