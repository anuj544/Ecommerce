<!-- eslint-disable vue/multi-word-component-names -->
<template>
  {{ name }} ---{{ age }}
</template>

<script lang="ts">
import {defineComponent, reactive,toRefs} from 'vue';
export default defineComponent({
   setup(){
    const state=reactive({
      name:'Link',
      age:25 as string|number
    });
    return {...toRefs(state)}
   }
})
</script>
