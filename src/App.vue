<template>
<h1>Тестовый запуск</h1>
  <nav>
    <button class="btn btn-primary btn-sm" @click="toggleEye">
      <i class="bi bi-eye-slash" v-if="isToggle"></i>
      <i class="bi bi-eye" v-else></i>
    </button>
  </nav>
  <!-- <router-view/> -->
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    const isToggle = ref(false)
    const toggleEye = () => {
      isToggle.value = !isToggle.value
    }
    return{
      isToggle,
      toggleEye
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
