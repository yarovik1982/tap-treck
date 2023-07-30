<template>
  <div class="wrapper">
    <header class="header">
      <app-header />
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <app-footer />
    </footer>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
  setup() {},
};
</script>
<style>
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1 auto;
}
</style>
