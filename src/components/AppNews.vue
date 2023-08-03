<template>
  <div class="row row-cols-1 row-cols-lg-2 g-4">
    <div class="col" v-for="item in data" :key="item.image">
      <div class="card mb-3" style="max-width: 828px; border: none">
        <div class="row g-0 d-flex">
          <div class="col-lg-4 align-items-lg-start ">
            <img
              :src="item.image"
              class=" image"
            />
          </div>
          <div class="col-lg-8">
            <div class="card-body">
              <h3 class="card-title">{{ item.name }}</h3>
              <div class="row-rate my-3 d-flex align-items-center">
                <vue3-star-ratings
                  v-model="item.rating"
                  :show-rating="true"
                  :star-size="20"
                  :number-of-stars="6"
                  :increment="0.1"
                  :showControl="false"
                />
                <span class="px-2" style="font-size: 20px">
                  {{ item.rating }}
                </span>
              </div>
              <a href="#" class="text-decoration-underline">Оставить отзыв</a>
              <p class="card-text mt-3" style="color: #1b1501; font-size: 24px">
                Производится верховым брожением, обладает тонким фруктовым
                привкусом и высоким содержание спирта.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue3StarRatings from "vue3-star-ratings";
import AppStarRate from "@/depricatedComponents/AppStarRate.vue";

import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "app-news",
  components: { AppStarRate, Vue3StarRatings },
  setup() {
    const data = ref([
      {name:'Эль (Ale)',image:require('@/assets/images/news1.png'), rating: 3.5,},
      {name:'Эль (Ale)',image:require('@/assets/images/news2.png'), rating: 4.5,},
      {name:'Эль (Ale)',image:require('@/assets/images/news3.png'), rating: 6.0,},
      {name:'Эль (Ale)',image:require('@/assets/images/news4.png'), rating: 4.9,},
      
    ]);
    return {
      data,
    };
  },
});
</script>
<style scoped>
.image{
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 37px;
}
@media(max-width:991px){
   .image{
      width: 50%;
   }
}
</style>
