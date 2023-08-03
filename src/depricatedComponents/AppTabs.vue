<template>
   
</template>

<script>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
export default {
   setup() {
      const goToLogin = () => {
         useRouter().push('/login')
      }
      return{
         goToLogin,
      }
   },
}
</script>