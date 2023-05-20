<template>
  <div class="signin">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="user">User:</label>
        <input type="text" id="user" v-model="user" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <a href="./sign-up">Sign Up now!</a>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </div>
</template>
<script>
import axios from 'axios'
import jwt_decode from 'jwt-decode';

export default {
  data() {
    return {
      user: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/signin', {
          user: this.user,
          password: this.password,
        });
        
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('accessToken', response.data.token);
          
          // Giải mã token và lưu thông tin người dùng vào localStorage
          const tokenData = response.data.token.split(' ')[1];
          const decodedToken = jwt_decode(tokenData);
          localStorage.setItem('userId', decodedToken.id);
          this.successMessage = 'Logged in successfully';
          this.$router.push('/');
          
        } else {
          throw new Error('Invalid login');
        }
      } catch (error) {
        console.log(error)
        this.errorMessage = 'User or password is incorrect'
      }
    }
  }
}
</script>
<style scoped>
.signin {
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

button[type="submit"] {
  margin-top: 10px;
  align-self: center;
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
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.error {
  color: red; 
}
.success {
  color: green;
}

</style>

