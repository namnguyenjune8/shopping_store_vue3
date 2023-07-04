const express = require('express');
const router = express.Router();
const { saveProductImage } = require('../schema_table/products_image');

router.post('/addimage', async (req, res) => {
  try {
    const { productId, imageURL } = req.body;

    // Gọi hàm saveProductImage để lưu URL của ảnh vào bảng products_image
    await saveProductImage(productId, imageURL);

    // Gửi phản hồi thành công
    res.status(200).json({ message: 'Product image saved successfully' });
  } catch (error) {
    console.error(error);

    // Gửi phản hồi lỗi
    res.status(500).json({ error: 'Failed to save product image' });
  }
});

module.exports = router;
