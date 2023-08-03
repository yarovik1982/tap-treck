<template>
  <form action="#" class="form" @submit.prevent="submitForm">
    <div class="form-content">
      <div class="form-header">
        <div class="form-row">
          <h4 class="form-title"
            @click="$router.push('/login')"
          >Вход</h4>
          <h4 class="form-title active">Регистрация</h4>
        </div>
      </div>
      <div class="form-body">
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="text"
            name="userName"
            id="userName"
            autocomplete="off"
            v-model="userName"
            required
          />
          <span class="form-label">Имя</span>
        </div>
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="text"
            name="login"
            id="login"
            autocomplete="off"
            v-model="login"
            required
          />
          <span class="form-label">Логин</span>
        </div>
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="email"
            name="mail"
            id="email"
            autocomplete="off"
            v-model="mail"
            required
          />
          <span class="form-label">Email</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType(0)">
            <i class="bi bi-eye-slash" v-if="!marker[0]"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType(0)"
            name="password"
            id="password"
            autocomplete="off"
            v-model="password"
            required
          />
          <span class="form-label">Пароль</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType(1)">
            <i class="bi bi-eye-slash" v-if="!marker[1]"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType(1)"
            name="passwordConfirm"
            id="passwordConfirm"
            autocomplete="off"
            required
          />
          <span class="form-label">Подтвердить пароль</span>
        </div>
        <div class="form-row-check">
          <input
            class="form-input-check-fake"
            type="checkbox"
            name="check"
            id="check"
            v-model="isChecked"
          />

          <label class="form-label-check" for="check">
            <div class="icon-checked" v-if="isChecked">
              <img src="@/assets/images/check-square-fill.svg" alt="" />
            </div>
            <div class="icon-unchecked" v-else></div>
            Запомнить меня
          </label>
        </div>

        <button
          class="btn-big radius-10"
          type="submit"
          style="margin-bottom: 89px"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="form-footer">
        <login-by-social></login-by-social>
        <div class="form-footer-check-agree">
          <div class="form-row-check">
            <input
              class="form-input-check-fake"
              type="checkbox"
              name="checkPolicy"
              id="checkPolicy"
              v-model="isCheckedPolicy"
            />

            <label class="form-label-check" for="checkPolicy">
              <div class="icon-checked" v-if="isCheckedPolicy">
                <img src="@/assets/images/check-square-fill.svg" alt="" />
              </div>
              <div class="icon-unchecked" v-else></div>
            </label>
            <div class="form-footer-policy">
              Продолжая, вы соглашаетесь с
              <a href="#"><strong> Политика конфиденциальности </strong></a>
              и
              <a href="#"><strong> Условия использования </strong></a>
            </div>
          </div>
        </div>
        <p>{{message}}</p>
      </div>
    </div>
  </form>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter} from "vue-router"
import LoginBySocial from './LoginBySocial.vue';
import {BASE_URL} from '@/HelperFunctions/BaseUrl'
export default {
  components: { LoginBySocial },
  name: "register-form",
  setup() {
    const marker = ref([false, false]);
    const isChecked = ref(true);
    const isCheckedPolicy = ref(true);
    const toggleType = (index) => {
      marker.value[index] = !marker.value[index];
    };
    const getInputType = computed(() => {
      return function (index) {
        return marker.value[index] ? "text" : "password";
      };
    });
    const userName = ref('')
    const login    = ref('')
    const mail     = ref('')
    const password = ref('')
    const message  = ref('')
    const router = useRouter()
    const submitForm = async () => {
      
      // const URL = 'https://jsonplaceholder.typicode.com/posts'

      // const BASE_URL =   //___ базовый адрес сервера спрятать в глобал   
      const registerData = {
        userName:userName.value,
        login   :login.value,
        mail    :mail.value,
        password:password.value
      }

      try{
        const response = await fetch((BASE_URL + 'user/create'), {
          // const response = await fetch( URL,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        })
          if(response.ok){
            message.value = "Регистрация прошла успешно, через несколько секунд вы будете перенаправлены на страницу входа в свой аккаунт!"

            setTimeout(() => {
              router.push('/login')
            }, 5000)
          }else {
          message.value = 'Ошибка регистрации. Попробуйте еще раз.';
        }
      }catch(error){
         message.value = 'Произошла ошибка при отправке запроса. Попробуйте позже.';
        console.error(error);
      }
    }
    return {
      marker, isChecked,isCheckedPolicy,
      toggleType, getInputType, userName,
      login, mail, password, message, 
      submitForm, router
    };
  },
};
</script>

<style scoped>
@import '@/assets/css/auth.css';
/* .form {
  width: 509px;
  background-color: #fff;
  border-radius: 16px;
  margin: 0 auto;
}
.form-content {
  width: 100%;
  padding: 100px 50px;
}
.form-header {
  font-size: 29px;
  font-weight: bold;
  margin-bottom: 9px;
}
.form-row {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.form-title{
  position: relative;
}
.form-title.active::after{
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: #FBCC04;
}
.form-body .form-row {
  width: 409px;
  height: 63px;
  background-color: #f7f0d4;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.form-label {
  position: absolute;
  top: 17px;
  left: 16px;
  color: #403a4b;
  transition: top 0.3s linear;
}
input {
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: 0;
  background-color: transparent;
  padding-bottom: 8px;
}
input:focus ~ .form-label {
  top: 0;
}
.form-icon {
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  cursor: pointer;
}
.form-row-check {
  margin-top: 12px;
  margin-bottom: 14.5px;
  display: flex;
  align-items: center;
}
.form-label-check {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.form-input-check-fake {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.icon-checked {
  width: 28.5px;
  height: 28.5px;
  margin-right: 16px;
}
.icon-unchecked {
  width: 28.5px;
  height: 28.5px;
  border-radius: 4px;
  border: 2px solid #64520a;
  margin-right: 16px;
}
.icon-checked img {
  width: 100%;
  object-fit: cover;
}
.form-footer-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.line {
  width: 60px;
  height: 1px;
  background-color: #969698;
}
.text {
  color: #969698;
  font-size: 11px;
}
.form-footer-social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
}
.form-footer-policy {
  font-size: 12px;
  color: #969698;
  margin-left: 40px;
} */
</style>