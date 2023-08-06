<template>
  <div class="app-container">
    <nav class="navbar navbar-expand">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/Layer1.svg" alt="BEER" />
        <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
      </a>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <div class="w-50" style="margin-left: auto; margin-right: 16px">
          <form
            role="search"
            class="d-flex justify-content-center align-items-center"
          >
            <input
              class="form-control form-control-sm"
              type="search"
              placeholder="Поиск"
              style="
                border: 2px solid yellow;
                border-radius: 22px 0 0 22px;
                outline: none;
                box-shadow: none;
              "
            />
            <button
              class="btn btn-warning btn-sm"
              style="
                border-radius: 0px 22px 22px 0px;
                box-shadow: 0 0 0 1px #ffc107;
              "
            >
              <i class="bi bi-search" style="color: #fff"></i>
            </button>
          </form>
        </div>
        <button
          class="btn btn-warning btn-sm px-5 d-none d-md-block"
          @click="$router.push('/login')"
        >
          Вход
        </button>
        <button
          class="btn btn-warning btn-sm px-5 d-none d-md-block"
          style="margin-left: 16px"
          @click="$router.push('/register')"
        >
          Регистрация
        </button>
        <i 
          class="bi bi-box-arrow-in-right d-block d-md-none" 
          style="color:rgb(255,193,7);font-size:32px;cursor:pointer;"
          @click="$router.push('/login')"
        ></i>
        <i 
          class="bi bi-person-square d-block d-md-none" 
          style="color:rgb(255,193,7);font-size:30px;cursor:pointer;margin-left:16px;"
          @click="$router.push('/register')"
        ></i>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg" aria-label="Fifth navbar example">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#burger"
        aria-controls="burger"
        aria-expanded="false"
        aria-label="Переключить навигацию"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="burger">
        <div
          class="row d-flex w-100 justify-content-between align-items-center"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="header-list-item px-2">
              <router-link to="/" class="header-list-link">Главная</router-link>
            </li>
            <li class="header-list-item px-2">
              <router-link to="/favorite" class="header-list-link"
                >Популярные места</router-link
              >
            </li>
            <li class="header-list-item px-2">
              <router-link to="/news" class="header-list-link"
                >Новинки</router-link
              >
            </li>
            <li class="header-list-item px-2">
              <router-link to="/reviews" class="header-list-link"
                >Отзывы</router-link
              >
            </li>
            <li class="header-list-item px-2">
              <router-link to="/beer" class="header-list-link"
                >Пиво</router-link
              >
            </li>
            <li class="header-list-item px-2">
              <router-link to="/breweries" class="header-list-link"
                >Пивоварни</router-link
              >
            </li>
            <li class="header-list-item px-2">
              <router-link to="/feedback" class="header-list-link"
                >Написать нам</router-link
              >
            </li>
          <li class="header-list-item px-2">
            <router-link to="/profile" class="header-list-link"
              >Профиль</router-link
            >
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "app-header",
  setup() {},
};
</script>

<style scoped>
.header {
  padding-top: 40px;
}
.header-row {
  display: flex;
  align-items: center;
}
.header-row:last-child {
  margin-top: 60px;
}
.header-input {
  width: 605px;
  height: 52px;
  border: 1px solid #f2e534;
  outline: none;
  padding: 0 16px;
}
.header-logo {
  text-decoration: none;
  color: #2e2406;
  font-size: 48px;
  display: flex;
  align-items: center;
}
.header-search {
  display: flex;
  margin-left: auto;
  margin-right: 90px;
}
.header-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
}
.header-list-item:last-child {
  margin-left: auto;
}
.header-list-link {
  color: #1e1e1e;
  font-weight: bold;
  font-size: 18px;
  padding: 4px 0;
  position: relative;
}
.header-list-link::after {
  position: absolute;
  width: 50%;
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
