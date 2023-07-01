const db = require('../database/mysql');
const multer = require('multer');
const path = require('path');

// Khởi tạo middleware multer để xử lý tải lên tệp ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assest/image'); // Đường dẫn đến thư mục lưu trữ tệp ảnh
  },
  filename: function (req, file, cb) {
    // Đặt tên tệp ảnh
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Cấu hình middleware multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Giới hạn kích thước tệp ảnh (5MB)
  },
  fileFilter: function (req, file, cb) {
    // Kiểm tra loại tệp ảnh cho phép (vd: chỉ chấp nhận jpg, png)
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed.'));
    }
  }
}).single('image'); // Tên trường form chứa tệp ảnh

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
  
      // Thực hiện middleware upload trước khi lưu vào cơ sở dữ liệu
      await new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            // Xử lý lỗi của multer (vd: vượt quá giới hạn kích thước)
            console.log(err);
            reject(err);
          } else if (err) {
            // Xử lý lỗi khác
            console.log(err);
            reject(err);
          }
  
          // Lấy đường dẫn tệp ảnh đã tải lên
          const image = req.file ? req.file.path : null;
  
          // Tiếp tục thực hiện lưu sản phẩm với đường dẫn tệp ảnh
          db.query('INSERT INTO products_table (name, price, information, category, image, timeUp) VALUES (?, ?, ?, ?, ?, ?)', [name, price, information, category, image, timeUp], function (error) {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              resolve();
            }
          });
        });
      });
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  

module.exports = {
  findOneProduct,
  saveProduct,
  upload, // Export middleware upload
};
