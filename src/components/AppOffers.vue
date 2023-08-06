<template>
  <div class="app-container">
      
    <div class="inner">
      <div class="inner-item">
        <div class="inner-content">
         <div class="inner-col">
            <div class="inner-col-wrap">
               <div class="inner-col-item mb-3 text-center">
                  <img src="@/assets/images/reviews.svg" alt="ICON">
                  <h4 class="px-auto mt-3 mb-3">
                     Наши отзывы
                  </h4>
                  <p class="px-auto">
                     Важный инструмент для принятия решения
                  </p>
               </div>
            </div>
            <div class="inner-col-wrap justify-content-end">
               <div class="inner-col-item mt-3 text-center">
                  <img src="@/assets/images/seo.svg" alt="ICON">
                  <h4 class="px-auto mt-3 mb-3">
                        SEO 
                  </h4>
                  <p class="px-auto">
                     Поисковая оптимизация
                  </p>
               </div>
            </div>
         </div>
         <div class="inner-col">
            <div class="inner-col-wrap justify-content-end">
               <div class="inner-col-item text-center">
                  <img src="@/assets/images/partners.svg" alt="ICON">
                  <h4 class="px-auto mt-3 mb-3">
                     Партнеры
                  </h4>
                  <p class="px-auto">
                     Компании с которыми мы сотрудничаем с целью достижения общей цели
                  </p>
               </div>
            </div>
         </div>
        </div>
        <div class="inner-decor">
          <div class="div1">
            <div class="ellipse"></div>
          </div>
          <div class="div2">
            <div class="ellipse"></div>
          </div>
          <div class="div3">
            <div class="ellipse"></div>
          </div>
          <div class="div4">
            <div class="ellipse"></div>
          </div>
        </div>
      </div>
      <div class="inner-item">
         <div class="inner-title text-center">
         <h2 class="title">
            Идеальное решение для
            <br>
            Вашего бизнеса
         </h2>
      </div>
      <div class="text">
         Мы пространство для общения с целевой аудиторией и развития сообщества вокруг вашего продукта - пива.
         <br><br>
         В нашей социальной сети пользователи могут:
         <br><br>
         - Делиться своими впечатлениями о разных сортах пива и обсуждать их с другими пользователями.
         <br><br>
         - Оставлять отзывы о различных пивных заводах, ресторанах и барах и делиться советами о том, где можно попробовать лучшие сорта пива.
         <br><br>
         - Получать уведомления о скидках, акциях или новых сортах пива от любимых заведений или брендов.
         <br><br>
         Наша социальная сеть может помочь вам привлечь внимание к вашему бренду пива и установить связь с целевой аудиторией - людьми, увлеченными пивом и пивной культурой.

      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-offers",
  setup() {},
};
</script>

<style scoped>
.inner {
  display: flex;
}

.title {
   text-align: start;
   margin-left: -80px;
   font-weight: bold;
   margin-top: 60px;
   margin-bottom: 66px;
   font-size: 40px;
   letter-spacing: 3px;
   position: relative;
}
.title::before{
   position: absolute;
   content:"";
   width: 209px;
   height: 6px;
   background-color: #FBCC04;
   top: 100px;
   left: 0;
}
.text {
   padding-left: 56px;
}
.inner-item:first-child {
   width: 40%;
   height: 817px;
   position: relative;
}
.inner-item:last-child {
  width: 60%;
}
.inner-decor {
  display: grid;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  z-index: -1;
}
.div1 {
  grid-area: 1 / 2 / 2 / 3;
  justify-content: center;
  align-items: end;
}
.div1 .ellipse{
   width: 64px;
   height: 64px;
   background-color: #C4C4C4;
   border-radius: 50%;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
  align-items: center;
}
.div2 .ellipse{
   width: 84px;
   height: 84px;
   background-color: #FFF0B6;
   border-radius: 50%;
}
.div3 {
  grid-area: 3 / 2 / 4 / 3;
  justify-content: center;
  align-items: center;
}
.div3 .ellipse{
   width: 64px;
   height: 64px;
   background-color: #C4C4C4;
   border-radius: 50%;
}
.div4 {
   grid-area: 3 / 3 / 4 / 4;
   justify-content: center;
   align-items: start;
}
.div4 .ellipse{
   width: 64px;
   height: 64px;
   background-color: #C4C4C4;
   border-radius: 50%;

}
.inner-decor > div{
   display: flex;
}
.inner-content {
   display: flex;
}
.inner-col {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 50%;
}
.inner-col-wrap {
   display: flex;
   width: 100%;
}
.inner-col-item {
   border-radius: 30px;
   box-shadow: 0 0 2px 2px #ccc;
   width: 285px;
   height: 352px;
   background-color: #fff;
   padding-top: 50px;
}
</style>
