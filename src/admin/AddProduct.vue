<template >
  <div class="mx-32 mt-12">
    <form @submit.prevent="saveProduct">
      <div class="mb-6">
        
  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
  <input v-model="name"  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
  <input v-model="price" type="number" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
  <label for="information" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thông tin sản phẩm</label>
  <input v-model="information" id="information" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại sản phẩm</label>
<select v-model="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>Chọn loại sản phẩm</option>
<option value="ANAM">Áo nam</option>
<option value="ANU">Áo nữ</option>
<option value="QNAM">Quần nam</option>
<option value="QNU">Quần nữ</option>
</select>
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6" for="multiple_files">Thêm ảnh sản phẩm</label>
<input ref="fileInput" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>

  <div class="mt-12 flex justify-center">
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Lưu
    </button>

  </div>
</form>
</div>
</template>
<script>
import axios from 'axios';
import { storage } from '../firebase/image';
export default {
data() {
  return {
    name: '',
    price: '',
    information: '',
    category: '',
    image: '',
  };
},
methods: {
    async saveProduct() {
      const currentTime = new Date().toISOString();
      // Tạo một đối tượng chứa dữ liệu từ form
      const productData = {
        name: this.name,
        price: this.price,
        information: this.information,
        category: this.category,
        timeUp: this.timeUp,
      };

      // Gửi yêu cầu POST đến server để lưu dữ liệu
      try {
        const response = await axios.post('/addproduct', productData);
        // Xử lý kết quả thành công
        this.$toast.success('Product saved successfully');
        console.log(response.data);

        // Tải ảnh lên Firebase Storage
        const imageFile = this.$refs.fileInput.files[0];
        const storageRef = storage.ref();
        const imageName = `${new Date().getTime()}-${imageFile.name}`;
        const imageRef = storageRef.child(imageName);
        const snapshot = await imageRef.put(imageFile);

        // Lấy URL của ảnh đã được tải lên và lưu vào dữ liệu sản phẩm
        const imageUrl = await snapshot.ref.getDownloadURL();
        productData.image = imageUrl;

        // Gửi yêu cầu POST lại để lưu thông tin sản phẩm có đường dẫn ảnh vào máy chủ
        await axios.post('/addproduct', productData);
        // Reset các trường dữ liệu sau khi lưu thành công
        this.name = '';
        this.price = '';
        this.information = '';
        this.category = '';
        this.image = '';
        this.timeUp = currentTime;
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        this.$toast.error('Failed to save product');
      }
    },
 
},
};
</script>

<style lang="scss">
  
</style>