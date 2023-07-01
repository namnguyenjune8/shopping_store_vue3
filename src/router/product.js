// router/product.js
const express = require('express');
const router = express.Router();
const {findOneProduct, saveProduct } = require('../schema_table/products');

// Endpoint POST /api/products
router.post('/addproduct', async (req, res) => {
  const { name, price, information, category, image } = req.body;

  // Kiểm tra xem sản phẩm có tồn tại trong cơ sở dữ liệu chưa
  const existingProduct = await findOneProduct(name);
  if (existingProduct) {
    return res.status(409).send('Tên sản phẩm đã tồn tại');
  }

  // Tạo đối tượng product để lưu vào cơ sở dữ liệu
  const product = {
    name,
    price,
    information,
    category,
    image,
  };

  // Gọi hàm saveProduct từ schema_table/products.js để lưu sản phẩm vào cơ sở dữ liệu
  const savedProduct = await saveProduct(req, res, product);

  if (savedProduct) {
    return res.status(201).send('Sản phẩm đã được lưu');
  } else {
    return res.status(500).send('Lỗi server');
  }
});

module.exports = router;
