<template>
  <form action="#" class="form" @submit.prevent="auth">
    <div class="form-content">
      <div class="form-header">
        <div class="form-row">
          <h4 class="form-title active">Вход</h4>
          <h4 class="form-title" @click="$router.push('/register')">
            Регистрация
          </h4>
        </div>
      </div>
      <div class="form-body">
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="text"
            name="name"
            id="name"
            autocomplete="off"
            v-model="login"
            required
          />
          <span class="form-label">Имя</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType">
            <i class="bi bi-eye-slash" v-if="!marker"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType"
            name="password"
            id="password"
            autocomplete="off"
            v-model="password"
            required
          />
          <span class="form-label">Пароль</span>
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
          style="margin-bottom: 49px"
        >
          Войти
        </button>
        <div class="form-reset-password">
          <a href="#">Забыли пароль?</a>
        </div>
      </div>
      <div class="form-footer">
        <login-by-social></login-by-social>
      </div>
    </div>
    <p>{{ message }}</p>
  </form>
</template>
<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import LoginBySocial from "./LoginBySocial.vue";
import { BASE_URL } from "@/HelperFunctions/BaseUrl";
export default {
  components: { LoginBySocial },
  name: "register-form",
  setup() {
    const login = ref("madbad_o");
    const password = ref("8dC96IOm");
    const message = ref("");
    const toProfile = useRouter();
    const marker = ref(false);
    const isChecked = ref(true);
    const getInputType = ref("password");
    const toggleType = () => {
      marker.value = !marker.value;
    };
    watch(marker, () => {
      getInputType.value = marker.value ? "text" : "password";
    });

    const auth = async () => {
      const authData = {
        login: login.value,
        password: password.value,
      };
      try {
        const response = await fetch(BASE_URL + "user/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authData),
        });
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          document.cookie = `token=${token}; path=/`;
          const profileResponse = await fetch(BASE_URL + "user/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();

            localStorage.setItem("user", JSON.stringify(profileData));
            toProfile.push("/profile");
          } else
            message.value = "Упс , что-то пошло не так. Попробуйте заново!";
        }
      } catch (error) {
        message.value =
          "Произошла ошибка при отправке запроса. Попробуйте заново!.";
        console.log(error);
      }
    };

    return {
      marker,
      isChecked,
      toggleType,
      getInputType,
      auth,
      message,
      login,
      password,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/auth.css";
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
  cursor: pointer;
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
}
.form-reset-password {
   margin-bottom: 49px;
   text-align: center;
}
.form-reset-password a{
   color:#000;
} */
</style>
