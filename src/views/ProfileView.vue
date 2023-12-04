<template>
  <h1>Myprofile</h1>
  <h2>Your are logged in as {{email}}</h2>
</template>

<script setup lang="ts">
import { useTaskStore } from '../stores/Taskstore';

import useAuthStore from '../stores/authStore';

const { email } = useAuthStore();
// export default {
  
//  setup(){
//    const taskStore=useTaskStore()

//    return{
//     taskStore,
//    }
//  }
// }
</script>

<style>

</style>