const db = require('../database/mysql');

async function saveProductImage(productId, imageURL) {
    try {
      await db.query(
        'INSERT INTO products_image (product_id, image_url) VALUES (?, ?)',
        [productId, imageURL]
      );
      console.log('Product image saved successfully');
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save product image');
    }
  }
  module.exports = {
    saveProductImage,
  };  