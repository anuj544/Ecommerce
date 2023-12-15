<!-- <template>
  <div class="flex flex-col">
  <img :src="productData.image" :alt="productData.title" class=" w-64 h-64 my-5">
  <h6>Price:{{ Math.round(productData.price) }}</h6>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="callParent">
   {{ status}}
</button>
</div>


</template>

<script setup lang="ts">
import { stat } from 'fs';
import router from '../router';
import { useMyStore } from '../stores/productStore';
import type { ProductTypes } from '../stores/types';
import { ref} from 'vue'


const store = useMyStore();


const props = defineProps({
  productData: { type: Object, required: true },

});


let status=ref('Add to cart')

const emit = defineEmits(['clicked'])

const gotoProduct = (id: number) => {
  emit('clicked', id)
}

const callParent = () => {
  // status.value="Added to cart";
  console.log("Going to parent");
  status.value="Added to cart"
  emit('clicked',props.productData);
  
};
</script> -->

<template>
  <div class="flex flex-col">
    <img :src="productData.image" :alt="productData.title" class="w-64 h-64 my-5">
    <h6>Price:{{ Math.round(productData.price) }}</h6>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="callParent" :disabled="productData.addedToCart">
      {{ productData.addedToCart ? 'Added To Cart' : 'Add To Cart' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMyStore } from '../stores/productStore';
import type { ProductTypes } from '../stores/types';
import { ref, computed } from 'vue';

const store = useMyStore();

const props = defineProps({
  productData: { type: Object, required: true },
});

// const status = ref('Add to cart');

// Use a computed property to make status reactive
// const computedStatus = computed(() => status.value);

const emit = defineEmits(['clicked']);

const gotoProduct = (id: number) => {
  emit('clicked', id);
}

const callParent = () => {
  console.log("Going to parent");
  // status.value = "Added to cart";
  if (!props.productData.addedToCart) {
    emit('clicked', props.productData);
  }
};
</script>
