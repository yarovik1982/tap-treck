<template>
   <div class="layer">
      <register-form></register-form>
   </div>
</template>
<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
   components:{RegisterForm},
   setup() {
      
   },
}
</script>

<style scoped>
.layer{
   background-color: rgba(0,0,0,.5);
   padding: 20px 0;
   min-height: 100vh;
}
</style>
