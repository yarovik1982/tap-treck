<template>
  <header class="header">
    <div class="container">
      <div class="header-row">
        <a href="#" class="header-logo">
          <img src="@/assets/images/Layer1.svg" alt="BEER" />
          <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
        </a>
        <form action="#" class="header-search">
          <input
            class="header-input radius-l2"
            type="text"
            placeholder="Введите запрос"
            name="search"
          />
          <button
            class="btn-yellow radius-r2"
            style="
              height: 52px;
              width: 65px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
            "
          >
            <i class="bi bi-search" style="color: #fff"></i>
          </button>
        </form>
        <button
          class="btn-yellow btn-normal radius-10"
          id="register"
          style="margin-right: 40px"
          @click="$router.push('/register')"
        >
          Регистрация
        </button>
        <button 
          class="btn-yellow btn-normal radius-10" 
          id="login"
          @click="$router.push('/login')"
        >
          Вход
        </button>
      </div>
      <div class="header-row">
        <ul class="header-list">
          <li class="header-list-item">
            <router-link to="/" class="header-list-link">Главная</router-link>
          </li>
          <li class="header-list-item">
            <router-link to="/favorite" class="header-list-link"
              >Популярные места</router-link
            >
          </li>
          <li class="header-list-item">
            <router-link to="/news" class="header-list-link">Новинки</router-link>
          </li>
          <li class="header-list-item">
            <router-link to="/reviews" class="header-list-link">Отзывы</router-link>
          </li>
          <li class="header-list-item">
            <router-link to="/beer" class="header-list-link">Пиво</router-link>
          </li>
          <li class="header-list-item">
            <router-link to="/breweries" class="header-list-link">Пивоварни</router-link>
          </li>
          <li class="header-list-item">
            <router-link to="/feedback" class="header-list-link"
              >Написать нам</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
   name:'app-header',
   setup() {
      
   },
}
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
