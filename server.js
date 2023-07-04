const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const user_table = require(__dirname + '/src/schema_table/users');
const user_admin_table = require(__dirname + '/src/schema_table/user_Admin');
const products_table = require(__dirname + '/src/schema_table/products');
const products_image = require(__dirname + '/src/schema_table/products_image');

const signInAdminRouter = require(__dirname + '/src/router/signIn_Admin');
const signInRouter = require(__dirname + '/src/router/signIn');
const signUpRouter = require(__dirname + '/src/router/signUp');
const signUpAdminRouter = require(__dirname + '/src/router/signUp_Admin');
const productsRouter = require(__dirname + '/src/router/product');
const productsImageRouter = require(__dirname + '/src/router/product_img');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(signInAdminRouter);
app.use(signInRouter);
app.use(signUpRouter);
app.use(signUpAdminRouter);
app.use(productsRouter);
app.use(productsImageRouter);

//su dung db
app.use('/users', function(req, res, next) {
  user_table(req, res, next);
});
app.use('/user_Admin', function(req, res, next) {
  user_admin_table(req, res, next);
});
app.use('/products', function(req, res, next) {
  products_table(req, res, next);
});
app.use('/products_image', function(req, res, next) {
  products_image(req, res, next);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });