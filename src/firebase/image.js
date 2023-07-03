import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Cấu hình của Firebase
  apiKey: "AIzaSyDlLRSGYItzLvt--iK_8SnBPHWUQF4ZhKc",
  authDomain: "store-vue3-e5d07.firebaseapp.com",
  projectId: "store-vue3-e5d07",
  storageBucket: "store-vue3-e5d07.appspot.com",
  messagingSenderId: "483229610226",
  appId: "1:483229610226:web:db711a1d1357433339e06b",
  measurementId: "G-NNKJ26EDXD"
};

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

// Lấy đối tượng Storage từ Firebase
const storage = getStorage(app);

export { storage };