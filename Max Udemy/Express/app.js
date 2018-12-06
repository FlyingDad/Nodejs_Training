const http = require('http');
const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Error 404 page
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'error404.html'))
	// res.status(404).send('<h1>Page not found</h1>');
})


app.listen(3000);