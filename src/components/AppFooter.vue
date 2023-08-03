<template>
  <div class="app-container">
    <div class="row justify-content-between py-1 border-top" style="margin-top:32px;">
      <div class="col-6 col-md-3 mb-1">
        <img src="@/assets/images/Layer1.svg" alt="BEER" />
        <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
        <p class="text-body-secondary mt-4" style="font-size:12px;">Copyrights ©2023 TapTreck</p>
      </div>
      <div class="col-6 mb-1 text-end text-md-center">
        <ul class="nav flex-column">
          <li class="header-list-item mb-2">
            <router-link to="/" class="header-list-link">Главная</router-link>
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/favorite" class="header-list-link"
              >Популярные места</router-link
            >
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/news" class="header-list-link">Новинки</router-link>
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/reviews" class="header-list-link">Отзывы</router-link>
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/beer" class="header-list-link">Пиво</router-link>
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/breweries" class="header-list-link">Пивоварни</router-link>
          </li>
          <li class="header-list-item mb-2">
            <router-link to="/feedback" class="header-list-link"
              >Написать нам</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-3 mb-1 text-center text-md-end">
        <h5 class="mb-2">Контакты</h5>
        <div class="flex-column">
          <a href="tel:+7(900)900-90-90" style="color:#0A0909;font-size:18px;">+7(900)900-90-90</a>
          <div class="pt-3">
            <a href="" class="social-link">
              <img src="@/assets/images/WhatsApp.svg" alt="" />
            </a>
            <a href="" class="social-link" style="margin-left:16px;">
              <img src="@/assets/images/Telegram-Original.svg" alt="" />
            </a>
            <a href="" class="social-link" style="margin-left:16px;">
              <img src="@/assets/images/VK-Original.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap mt-2 justify-content-center">
      
        <a href="#" class="p-1">
          <img src="@/assets/images/App-Store.png" alt="" width="282px">
        </a>
        <a href="#" class="p-1">
          <img src="@/assets/images/google-play.png" alt="" width="282px">
        </a>
      
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "app-footer",
  setup() {},
};
</script>

<style scoped>
.header-list-link {
  color: #1e1e1e;
  font-weight: bold;
  font-size: 18px;
  padding: 4px 0;
  position: relative;
  /* width: 171px;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.header-list-link::after {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  height: 3px;
  background-color: #f2e534;
  content: "";
  opacity: 0;
  transition: all 0.3s linear;
}
.header-list-link.router-link-active::after {
  opacity: 1;
}
</style>
