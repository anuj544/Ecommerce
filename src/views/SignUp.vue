<template>
  <div class=" h-50 w-25 p-3 mx-auto max-w-sm bg-yellow-400 rounded-xl my-10">
  <h1>Create an Account</h1>
  <p ><input type="email" placeholder="E-mail" v-model="email"></p>
  <p><input type="password" placeholder="Password" v-model="password"></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="SignInwithGoogle">Sign in with Google</button></p>
</div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'

export default defineComponent({

    setup(){
        const email = ref('')
        const password = ref('')
        const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
       .then(() => {
        alert('Successfully registered')
        router.push('/')
    })

    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
  }
    const SignInwithGoogle = () => {
        
    }
    return{
        email,
        password,
        register,
        SignInwithGoogle
    }
    }
})
// const email = ref('')
// const password = ref('')
// const register = () => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then(() => {
//       console.log('Successfully registered')
//       router.push('/')
//     })

//     .catch((error) => {
//       console.log(error.code)
//       alert(error.message)
//     })
// }
// const SignInwithGoogle = () => {

// }
</script>
