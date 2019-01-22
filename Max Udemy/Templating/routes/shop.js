const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	console.log('from the shop -> ', adminData.products);
	const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop', path: '/shop'})
});

module.exports = router;