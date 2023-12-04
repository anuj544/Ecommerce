<template>
    <div class=" p-5 mx-auto max-w-sm my-10 bg-yellow-500 rounded-xl">
    <h1>Login to your Account</h1>
    <p><input type="email" placeholder="E-mail" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="SignInwithGoogle">Sign in with Google</button></p>
    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent,ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useTaskStore } from '../stores/Taskstore'
  import router from '../router'
  
  export default defineComponent({
    setup() {
        const email = ref('');
        const password = ref('');
        const register = () => {
            signInWithEmailAndPassword(getAuth(), email.value, password.value)
                .then(() => {
                console.log('Successfully signed in');
                router.push('/product');
            })
                .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
        };
        const SignInwithGoogle = () => {
        };
        return {
            email,
            password,
            register,
            SignInwithGoogle
        };

        
    
  }
})
  </script>

function updateStore() {
  throw new Error('Function not implemented.')
}
