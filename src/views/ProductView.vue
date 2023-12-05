<template>
  <div class="container mx-auto h-auto ">
    <h1 class="text-2xl font-bold mb-4">Product List</h1>
    <div class="flex flex-col md:flex-row flex-wrap -mx-4 overflow-y-auto flex-1">
      <button @click="ptc">Proceed to cart</button>
      <div v-for="item in store.data" :key="item.id" class="w-full   sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4">
        <div>
          <button @click.prevent="addtocart(item)">{{item.cartstatus}}</button>
          <!-- <button @click="ptc">Proceed to cart</button> -->
          <a :href="item.image" @click.prevent>
            <img class="relative shadow-md my-5 bg-gray-100 " :src="item.image" alt="Item Image" />
          </a>
          <p>{{item.price }}</p>
        </div>
      </div>
    </div>
    <!-- <button @click="ptc">Proceed to cart</button> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useMyStore } from '../stores/Productstore'
import { ProductTypes } from '../stores/types/index'
import {ref} from 'vue'
import router from '../router'
const store = useMyStore()




onMounted(async () => {
  await store.fecthData()

  store.data.forEach(item => {
    item.cartstatus = ref('Addtocart');
  })

})




const addtocart=(item)=>{
  item.cartstatus="Addedtocart"
  store.itemsadded(item.id,item.image, item.price);
  // store.setselectedprice(item.price)
  //  router.push('/cart');
}

const ptc=()=>{
  router.push('/cart')
}



</script>

<style>



</style>
