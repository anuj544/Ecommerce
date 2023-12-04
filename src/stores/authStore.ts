

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted, ref } from "vue";

export default function useAuthStore(){

  const email :{value : string} = ref(' ');

  const auth = getAuth();
 

  onMounted(()=>{

    onAuthStateChanged(auth, (user)=>{
      email.value = user?.email || '';
      console.log('hlo', user);
    })
  })

  return {
    email
  }

}