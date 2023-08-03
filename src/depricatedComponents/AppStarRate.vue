<template>
  <vue3-star-ratings 
    v-model="rating"
    :show-rating="true"
    :star-size="20"
    :number-of-stars="6"
    :increment="0.1"
    :fixed-points="1"
    :showControl="false"
  />
</template>
    <!-- :clearable="true" -->

<script>
import {defineComponent, ref} from 'vue'
import Vue3StarRatings from "vue3-star-ratings";

export default defineComponent({
  name:'app-star-rate',
  components: {
    Vue3StarRatings,
  },
  setup() {
    const rating = ref(1);

    return {
      rating,
    }
  },
});
</script>