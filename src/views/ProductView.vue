
  <template>
  <div class="bg-white">
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>
      <div
        class="flex h-auto flex-col md:flex-row flex- justify-around flex-wrap items-center space-y-6 p-2"
      >
        <div
          v-for="item in store.data"
          :key="item.id"
          class="flex flex-col md:flex-row flex-wrap space-y-2 justify-evenly md:space-x-4 items-center"
        > 
        
          <ProductContainer :productData="item" :addedToCart="item.addedToCart" @clicked="addtocart"  />
          
          </div>
        </div>
      </div>
    </div>

</template>



<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useMyStore } from '../stores/Productstore'

import type { ProductTypes } from '../stores/types/index'

import {ref} from 'vue'
import router from '../router'
import ProductContainer from '../components/ProductContainer.vue'
const store = useMyStore()



onMounted(async () => {
  await store.fecthData()

  //  store.data.forEach((item) => {
  //   let cartstatus = ref('Addtocart')
  //  })
  
  store.data.forEach((item) => {
    
    item.addedToCart = false;
  });
  })

const addtocart = (item: ProductTypes) => {
  store.itemsadded(item.id, item.image, item.price)
  // store.setselectedprice(item.price)
  item.addedToCart = true;
   router.push('/cart');
}

const ptc = () => {
  router.push('/cart')
}

defineExpose({
  exposeaddtocart:addtocart
})
</script>

<style></style>
