// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }