const db = require('../database/mysql');
const path = require('path');

async function findOneProduct(name) {
  try {
    const [rows, fields] = await db.query('SELECT * FROM products_table WHERE name = ?', [name]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function saveProduct(req, res, product) {
  try {
    const { name, price, information, category, timeUp } = product;

    // Tiếp tục thực hiện lưu sản phẩm với đường dẫn tệp ảnh
    db.query('INSERT INTO products_table (name, price, information, category, timeUp) VALUES (?, ?, ?, ?, ?, ?)', [name, price, information, category, timeUp], function (error) {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to save product' });
      }
      return res.status(200).json({ message: 'Product saved successfully' });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Failed to save product' });
  }
}


module.exports = {
  findOneProduct,
  saveProduct,
};
