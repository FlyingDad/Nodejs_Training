const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbars = require('express-handlebars')
const app = express();

// app.engine('handlebars', expressHbars());
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", {docTitle: "Page Not Found"})//sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);