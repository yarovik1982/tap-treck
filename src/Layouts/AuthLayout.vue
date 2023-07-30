<template>
   <div class="layout">
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   setup() {
      
   },
}
</script>
<style scoped>
.layout{
   /* padding: 50px 0; */
   min-height: 100vh;
   background-color: transparent;
   position: absolute;
   width: 100%;
   top: 0;
}
</style>