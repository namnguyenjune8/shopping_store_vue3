const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const user_table = require(__dirname + '/src/schema_table/users');
const signInRouter = require(__dirname + '/src/router/signIn');
const signUpRouter = require(__dirname + '/src/router/signUp');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());
app.use(signInRouter);
app.use(signUpRouter);

//su dung db
app.use('/users', function(req, res, next) {
  user_table(req, res, next);
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });