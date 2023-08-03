<template>
  <swiper 
      :slidesPerView="5"
      :space-between="16"
      :centeredSlides="true"
      :loop="true"
      :navigation="true"
      :pagination="{
      clickable: true,
      }"
      :modules="modules" 
      class="mySwiper"
   >
    <swiper-slide v-for="reviewItem in reviewsList" :key="reviewItem.id">
      <div class="slide-image">
         <img :src="reviewItem.image" alt="BEER">
      </div>
      <div class="review">
         <p>
            Вкусный пивной напиток со вкусом персика. Garage hard peach drink. Пробка легко открывается при помощи открывашки.
         </p>
         <span>{{reviewItem.userName}}</span>
      </div>
    </swiper-slide>


  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation'
  import { Pagination, Navigation} from 'swiper/modules';
  import {ref} from 'vue'

  export default {
   name:'app-reviews',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const reviewsList = ref([
         {id: 1, userName:'Окунь Глушеный', review:'', image:require('@/assets/images/right-slide.png')},
         {id: 2, userName:'Таранька Вяленая', review:'', image:require('@/assets/images/center-slade.png')},
         {id: 3, userName:'Вобла Копченая', review:'', image:require('@/assets/images/left-slide.png')},
         {id: 4, userName:'Вилка Булочка', review:'', image:require('@/assets/images/right-slide.png')},
         {id: 5, userName:'Щука Подкоряжная', review:'', image:require('@/assets/images/center-slade.png')},
         {id: 6, userName:'Карась Пучеглазов', review:'', image:require('@/assets/images/left-slide.png')},
      ])
      return {
        modules: [Pagination, Navigation],
        reviewsList,
      };
    },
  };
</script>
<style scoped>
.swiper{
   padding-top: 50px;
   padding-bottom: 300px;
}
.swiper-slide{
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   transition: all .2s linear;
}
.swiper-slide .slide-image{
   opacity: .4;
}
.swiper-slide-active{
   transform: scale(1.8);
}
.swiper-slide-active .slide-image{
   opacity: 1;
}
.swiper-slide-next ,
.swiper-slide-prev {
   transform: scale(1.4);
}
.swiper-slide-next .slide-image,
.swiper-slide-prev .slide-image{
   opacity: .7;
}

.swiper-slide .review{
   display: none;
}
.swiper-slide.swiper-slide-active .review{
   display: block;
}
.slide-image {
   width: 120px;
   height: 120px;
}
.slide-image img{
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 50%;
}
.review {
   position: absolute;
   top: 100%;
   /* left: -50%;
   transform: translateX(50%); */
   max-width: 200%;
   text-align: center;
}

</style>
