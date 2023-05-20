const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(process.env.ACCESS_TOKEN_SECRET);
      console.log('Error:', err.message);
      console.log('Token:', token);
      return res.sendStatus(403);
    };
    console.log('User:', user);
    req.user = user;
    next();
  });
}
 
module.exports = {  
  authenticateToken
}
