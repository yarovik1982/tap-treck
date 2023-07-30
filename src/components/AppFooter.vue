<template>
  <div class="container">
    <div class="content">
      <div class="col-20">
        <a href="#" class="footer-logo">
          <img src="@/assets/images/Layer1.svg" alt="BEER" />
          <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
        </a>
        <div class="footer-copy">
         Copyrights ©2023 TapTreck
        </div>
      </div>
      <div class="col-40">
         <div class="breadcrumbs">
            <div class="prev-page page">Главная</div>
            <div class="current-page page">Популярные</div>
         </div>
         <div class="btns-store">
            <a href="#" class="apple-store">
               <img src="@/assets/images/App-Store.png" alt="">
            </a>
            <a href="#" class="google-play">
               <img src="@/assets/images/google-play.png" alt="">
            </a>
         </div>
      </div>
      <div class="col-30">
         <div class="contacts">Контакты</div>
         <div class="phone">+7(900)900-90-90</div>
         <div class="social-icons">
            <a href="" class="social-link">
               <img src="@/assets/images/WhatsApp.svg" alt="">
            </a>
            <a href="" class="social-link">
               <img src="@/assets/images/Telegram-Original.svg" alt="">
            </a>
            <a href="" class="social-link">
               <img src="@/assets/images/VK-Original.svg" alt="">
               </a>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-footer",
  setup() {},
};
</script>

<style scoped>
.content {
  padding: 118px 0;
  display: flex;
  justify-content: space-between;
}
.col-20 {
  width: 20%;
}
.footer-logo {
  text-decoration: none;
  color: #2e2406;
  font-size: 48px;
  display: flex;
  align-items: center;
}
.footer-copy {
   margin-top: 20px;
   color:#0A0909;
   font-size: 12px;
}
.col-40 {
  width: 40%;
}
.breadcrumbs {
   display: flex;
   margin-bottom: 102px;
}
.prev-page {
   margin-right: 66px;
}
.page {
   color: #1E1E1E;
   font-size: 18px;
   font-weight: bold;
}
.current-page {
}
.btns-store {
   display: flex;
}
.apple-store {
   margin-right: 22px;
}
.google-play {
}

.col-30 {
  width: 30%;
  color: #0A0909;
  font-size: 24px;
  font-weight: 600;
  padding-left: 260px;
}
.contacts {
   margin-bottom: 40px;
}
.phone {
   margin-bottom: 40px;
}
.social-icons {
   width: 238px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>
