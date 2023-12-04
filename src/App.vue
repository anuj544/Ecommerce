
<template>
  <!-- <div class="bg-red-400">Cool</div> -->
  <!-- <Onetwo /> -->
<main class="relative w-screen h-screen overflow-hidden">

  <header>
  <nav class="flex justify-center space-x-12 items-center my-0 bg-black text-gray-400 ">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/payment">Payment</router-link>
    <router-link to="/orderHistory">History</router-link>
    <router-link to="/signUp">signUp</router-link>
    <router-link to="/signIn">SignIn</router-link>
    <router-link to="/product">Product</router-link>
    <router-link to="/profile"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="green"><path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/></svg>
      </router-link>
    </nav>
  </header>
    <router-view />
</main>
  
  </template>
  <script setup lang="ts">
  
 import { RouterView } from 'vue-router'
 
 import Onetwo from './components/Onetwo.vue'

  // Import the functions you need from the SDKs you need

  
  </script>

  
