<template>
  <div class="wrapper">
    <header class="header">
      <app-header />
    </header>
    <main class="main">
      <section id="intro">
        <div class="app-container">
          <div class="row align-items-center justify-content-center">
            <div class="col-7 col-lg-5 pb-lg-0 pb-3">
              <div class="section-body">
                <h2 class="section-title" style="font-weight: bold">
                  Насладитесь красивым закатом или приятной компанией с Tap<span
                    style="font-weight: normal"
                    >Treck</span
                  >
                </h2>
                <div class="section-offer mb-3">
                  Попробуйте интересные и оригинальные сорта пива, которые можно
                  найти у нас, и отметьте любой праздник с хорошей бутылкой
                  пива.
                </div>
                <button class="btn btn-secondary px-3 btn-sm">
                  Написать нам
                </button>
              </div>
            </div>
            <div class="col-10 col-lg-7">
              <img
                src="@/assets/images/home.png"
                class="w-100"
                alt="BEER AT NATURE"
                style="border-radius: 37px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="favorite" >
        <div class="text-center">
          <h2 class="title d-inline-block">Популярные места</h2>
        </div>
        <div class="app-container">
          <app-slider-plices/>
        </div>
      </section>

      <section id="news" >
        <div class="text-center">
          <h2 class="title d-inline-block">Новинки</h2>
        </div>
        <div class="app-container">
         <app-news/>
        </div>
      </section>

      <section id="reviews" >
         <div class="text-center">
          <h2 class="title d-inline-block">Отзывы</h2>
        </div>
        <div class="app-container">
         <app-reviews/>
        </div>
      </section>

      <section id="offers">
        <app-offers/>
      </section>
    </main>

    <footer class="footer">
      <app-footer />
    </footer>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSliderPlices from '@/components/AppSliderPlices.vue';
import AppNews from '@/components/AppNews.vue';
import AppReviews from '@/components/AppReviews.vue';
import AppOffers from '@/components/AppOffers.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    AppSliderPlices,
    AppNews,
    AppReviews,
    AppOffers,
  },
  name: "home-page",
  setup() {
    
  },
};
</script>

<style scoped>
.title {
  position: relative;
  margin-bottom: 55px;
}
.title::after {
  position: absolute;
  width: 50%;
  height: 6px;
  top: 100%;
  left: 0;
  content: "";
  background-color: #fbcc04;
}
</style>
