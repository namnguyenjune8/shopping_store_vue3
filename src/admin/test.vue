<template>
  <div>
    <input type="file" ref="myfile">
    <button @click="upload">Tải lên ảnh</button>
  </div>
</template>

<script>
import { storage } from '../firebase/image';
import { ref, uploadBytes } from 'firebase/storage';

export default {
  name: 'App',
  methods: {
    generateRandomName: function() {
      const randomString = Math.random().toString(36).substring(7); // Tạo chuỗi ngẫu nhiên
      const date = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại
      return randomString + '_' + date;
    },
    upload: function() {
      const file = this.$refs.myfile.files[0];
      const fileName = this.generateRandomName();
      const storageRef = ref(storage, 'folder/' + fileName);
      uploadBytes(storageRef, file)
        .then(() => {
          console.log('Ảnh đã được tải lên thành công!');
        })
        .catch((error) => {
          console.error('Lỗi khi tải lên ảnh:', error);
        });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
