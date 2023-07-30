<template>
    <div class="wrapper">
    <header class="header">
      <app-header />
    </header>

    <main class="main">
      <div class="container-full">
         <div class="main-content">
            <div class="main-item">
               <div class="item-body">
                  <div class="item-title">
                     Насладитесь красивым закатом или приятной компанией с Tap<span>Treck</span>
                  </div>
                  <div class="item-offer">
                     Попробуйте интересные и оригинальные сорта пива, которые можно найти у нас, и отметьте любой праздник с хорошей бутылкой пива.
                  </div>
                  <button class="read-As">Написать нам</button>
               </div>
            </div>
            <div class="main-item">
               <img class="item-img" src="@/assets/images/home.png" alt="BEER AT NATURE">
            </div>
         </div>
      </div>
    </main>

    <footer class="footer">
      <app-footer/>
    </footer>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter },
   name:'home-page',
   setup() {
      
   },
}
</script>

<style scoped>
.container-full {
   max-width: 1920px;
   padding-top: 46px;
   margin: 0 auto;
}
.main-content {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.main-item {
   color: #1E1E1E;
}
.item-body {
   padding-left: 120px;
   padding-top: 100px;
   padding-bottom: 163px;
   max-width: 700px;
}
.item-title {
   font-size: 48px;
   font-weight: bold;
   line-height: 133.5%;
   margin-bottom: 20px;
}
.item-title span{
   font-weight: 400;
}
.item-offer {
   font-size: 18px;
   line-height: 178%;
   margin-bottom: 120px;
}
.read-As {
   padding: 20px 35.5px;
   font-size: 24px;
   color: #342A03;
   background-color: #FFF1BB;
   border: 0;
   border-radius: 10px;
}
.item-img {
   max-width: 1090px;
   border-radius: 37px;
}
</style>