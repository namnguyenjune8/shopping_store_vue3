<template>
    <div class="signup">
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <div>
        <label for="user">User:</label>
        <input class="form-control" type="text" v-model="user" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input class="form-control"  type="password" v-model="password" required>
      </div>
      <div>
        <label for="repeatPassword">Repeat Password:</label>
        <input class="form-control" type="password" v-model="repeatPassword" required>
      </div>

        <button type="submit"  class="btn btn-primary">Sign Up</button>
      </form>
      <a href="/signin">Already have an account?</a>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert-danger">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
       
        user: '',
        password: '',
        repeatPassword: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
    async signup() {
       // Kiểm tra xem password và repeatPassword có khớp nhau không
    if (this.password !== this.repeatPassword) {
        this.errorMessage = 'Password and repeat password do not match';
        return;
    }
      // Gọi API đăng ký và xử lý kết quả
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          user: this.user,
          password: this.password
        })
        // Xử lý kết quả trả về ở đây
        if (response.status === 400 && response.data.message === 'Username already exists') {
          this.$toast.error('Username already used, please choose another name') ;
  return;
} else if (response.status === 200 && response.data.message === 'Sign Up Success!') {
  this.$toast.success('Sign Up Success');
  this.errorMessage = ''; // xóa thông báo lỗi nếu có
  return;
} else {
  throw new Error('Registration failed');
}
      } catch (error) {
        // Xử lý lỗi ở đây
        console.log(error)
        this.errorMessage = error.message
  
      }
    }
  }
  };
  </script>
  <style>
  .signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  input[type="password"],
  input[type="text"] {
    display: block;
    width: 200px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #495057;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin-top: 10px;
  }
  
  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
  .alert-danger {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
  .success {
    color: green;
  }
  </style>
  