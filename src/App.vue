<template>
  
    <component :is="layout">
      <router-view />
    </component>
  
</template>
<script>
import AuthLayout from '@/Layouts/AuthLayout.vue';
import MainLayout from '@/Layouts/MainLayout.vue'
export default {
  components:{AuthLayout, MainLayout},
  computed: {
    layout() {
      return  (this.$route.meta.layout || 'auth') + '-layout' 
    },
  },
};
</script>

<style>
@import "@/assets/css/index.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
