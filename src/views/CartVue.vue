<template>
    <!-- <div v-for="item in useMyStore().itemdata" :key="item.i">  -->
   <div class="container mx-auto h-screen">
     <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
     <div v-for="item in useMyStore().itemdata" :key="item.i"> 
     <div class="flex flex-wrap -mx-4">
       <div class="w-full">
         <div class="p-4 bg-gray-100">
           <img class="w-20 h-20" :src="item.im" alt="Selected Item Image" />
           <button @click="increment">+</button>
           <button @click="decrement">-</button>
           <p v-if="count>=1">You are about to order{{ count}}quantity for {{ Math.round(item.ip*count )}}</p>

           <button @click="pch()">Proceed to checkout</button>
         </div>
       </div>
     </div>
   </div>
   </div> 
 </template>
 
 <script setup lang="ts">
 import { useMyStore} from '../stores/productStore'
 import router from '@/router';
import { ref } from 'vue';
  const count=ref(1);

 const increment=()=>{
   count.value+=1;
 }

 const decrement=()=>{
   count.value-=1;
 }

 const pch=()=>{
   router.push('/payment')
 }
 
 </script>
 
 <style>
 /* Add any additional styles here if needed */
 </style>