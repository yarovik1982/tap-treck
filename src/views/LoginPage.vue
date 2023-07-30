<template>
   <div class="layer">
      <login-form></login-form>
   </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  components: { LoginForm },
   name:'login-page',
   setup() {
      
   },
}
</script>

<style scoped>
.layer{
   background-color: rgba(0,0,0,.5);
   padding: 20px 0;
}
</style>