<template>
  <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
    <Shopping_cart/>
    <div class="relative" @click="toggleDropdown">
      <a v-if="isLoggedIn" class="text-sm font-semibold leading-6 text-gray-900">
        <div class="w-8 h-8 rounded-full bg-gray-300">
          <img :src="avatarUrl" alt="Avatar" class="w-full h-full rounded-full" />
        </div>
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thông tin cá nhân</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đổi mật khẩu</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="logout">Đăng xuất</a>
        </div>
      </a>
      <a v-else href="/signin" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
import Shopping_cart from './Shopping_cart.vue'
export default {
  components: {
      Shopping_cart,
    },
  data() {
    
    return {
      isDropdownOpen: false,
      isLoggedIn: false,
      avatarUrl: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg' // Avatar mặc định
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userId');
      this.isDropdownOpen = false;
      window.location.href = '/';
    },
  },
  mounted() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      const decoded = jwt_decode(token);
      this.isLoggedIn = true;
      if (decoded.avatarUrl) {
        this.avatarUrl = decoded.avatarUrl; // Lấy URL của avatar từ thông tin đã lưu
      }
    }
  }
}
</script>

<style>

</style>
