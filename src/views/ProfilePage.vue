<template>
   <app-popup v-show="!isVisible"
      @click.self="isVisible = !isVisible"
   >
   </app-popup>
  <div class="text-center mb-5">
    <span class="title position-relative py-1">Профиль</span>
  </div>
  <div class="app-container">
    <div class="link-group d-flex align-items-center justify-content-between">
      <div class="link-wrapper">
        <router-link to="/profile/profile-favorites" class="profile-link"
          >Избранное</router-link
        >
      </div>
      <div class="link-wrapper">
        <router-link to="/profile/profile-reviews" class="profile-link"
          >Мои отзывы</router-link
        >
      </div>
      <div class="link-wrapper">
        <router-link to="/profile/profile-beweries" class="profile-link"
          >Мои пивоварни</router-link
        >
      </div>
      <div class="link-wrapper">
        <router-link to="/profile/profile-shops" class="profile-link"
          >Мои точки продаж</router-link
        >
      </div>
    </div>
  </div>
  <div class="app-container">
   <div class="row">
      <div class="col-8">
         <router-view></router-view>
      </div>
      <div class="col-4">
         <div class="mt-5 text-end">
            <img src="@/assets/images/ellipsis-vertical.svg" 
               class="verticalDotes" 
               alt="VERTICAL DOTES"
               @click="showEditProfileForm"
            >
         </div>
         <div class="d-flex flex-column align-items-center">
            <div class="avatar mt-5">
               <img src="@/assets/images/avatar.png" alt="AVATAR">
               <i class="quotes bi bi-quote"></i>
            </div>
            <div class="data">
               <div class="data-row">
                  <input 
                     type="text"
                     class="data-input"
                     name="name"
                     v-model="name"
                  >
                  <span class="data-span">Имя</span>
               </div>
               <div class="data-row">
                  <input 
                     type="text"
                     class="data-input"
                     name="login"
                     v-model="login"
                  >
                  <span class="data-span">Логин</span>
               </div>
               <div class="data-row">
                  <input 
                     type="text"
                     class="data-input"
                     name="email"
                     v-model="email"
                  >
                  <span class="data-span">Email</span>
               </div>
            </div>
         </div>
      </div>
   </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {GetDataProfile} from '@/HelperFunctions/GetDataProfile.js'
import AppPopup from '@/components/AppPopup.vue';
import AppFormEditProfile from '@/components/AppFormEditProfile.vue';
export default {
  components: { AppPopup, AppFormEditProfile },
  name: "profile-page",
  setup() {
   const isVisible = ref(true)
   const showEditProfileForm = () => {
      isVisible.value = !isVisible.value
   }
   const dataProfile = GetDataProfile()
   const name= ref(dataProfile?.userName ?? 'empty')
   const login = ref(dataProfile?.login ?? 'empty')
   const email = ref(dataProfile?.mail ?? "empty")
   return{
      isVisible,
      showEditProfileForm,
      name,login,email
   }
  },
  
};
</script>

<style scoped>
.title {
  font-size: 48px;
  font-weight: bold;
}
.title::before {
  position: absolute;
  content: "";
  width: 50%;
  height: 6px;
  background-color: rgb(255, 193, 7);
  top: 100%;
  left: 0;
}
.profile-link {
  padding: 8px 24px;
  font-size: 32px;
  background-color: #a6a18e;
  color: #fff;
  border-radius: 10px;
   position: relative;
}
.profile-link::before {
   content:"";
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(0, -50%);
  width: 30px;
  height: 2px;
  background-color: #a6a18e;
}
.profile-link::after {
   content:"";
  position: absolute;
  top: 50%;
  left: -52px;
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #a6a18e;
}
.profile-link.router-link-active {
  background-color: #faca10;
}
.profile-link.router-link-active::before{
   background-color: #faca10;
}
.profile-link.router-link-active::after{
   background-color: #faca10;
}
.avatar {
   width: 300px;
   height: 300px;
   border-radius: 50%;
   position: relative;
}
.avatar img{
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.quotes {
   position: absolute;
   transform: rotate(180deg);
   color: #ccc;
   font-size: 70px;
   bottom: 0;
   right: 0;
}
.verticalDotes{
   padding: 0 4px;
   cursor: pointer;
}
.data {
   margin-top: 106px;
   padding: 0 71px;
}
.data-row {
   position: relative;
   margin-bottom: 40px;
}
.data-input {
   width: 100%;
   border-bottom: 1px solid #000;
   padding-left: 16px;
}
.data-span {
   position: absolute;
   top: -25px;
   left: 16px;
}
</style>
