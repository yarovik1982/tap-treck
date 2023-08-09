<template>
   <div class="popup">
      <app-form-edit-profile></app-form-edit-profile>
   </div>
</template>

<script>
import AppFormEditProfile from './AppFormEditProfile.vue'
export default {
  components: { AppFormEditProfile },
   name:'app-popup',
   setup() {
      
   },
}
</script>

<style scoped>
.popup{
   position: fixed;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,.1);
   z-index: 10;
   display: flex;
   justify-content: center;
}
</style>