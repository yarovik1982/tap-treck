<template>
   <div class="text-center">
      <span class="title position-relative py-1">Профиль</span>
   </div>
</template>

<script>
export default {
   name:'profile-page',
   setup() {
      
   },
}
</script>

<style scoped>
.title{
   font-size: 48px;
   font-weight: bold;
}
.title::before{
   position: absolute;
   content: "";
   width: 50%;
   height: 6px;
   background-color: rgb(255,193,7);
   top: 100%;
   left: 0;
}
</style>
