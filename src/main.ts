import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdfGjYcw5ccN5SvzN_sG-OtwZxTWalUGU",
  authDomain: "fuel-done.firebaseapp.com",
  projectId: "fuel-done",
  storageBucket: "fuel-done.appspot.com",
  messagingSenderId: "474496203953",
  appId: "1:474496203953:web:8d17142b3e9f2d1562f690"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
