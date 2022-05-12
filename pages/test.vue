<template>
  <div>
    <div class="event-wrapper2 swiper">
      <div class="swiper-wrapper">
        <div
          class="event-cards swiper-slide a"
          v-for="photo in photos"
          :key="photo"
        >
          <img :src="require('../assets/image/' + photo + '')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "bishoftu/firstSlider/1.webp",
        "bishoftu/firstSlider/2.webp",
        "bishoftu/firstSlider/3.webp",
        "bishoftu/firstSlider/4.webp",
        "bishoftu/firstSlider/5.webp",
        "bishoftu/firstSlider/6.webp",
        "bishoftu/firstSlider/7.webp",
        "bishoftu/firstSlider/8.webp",
      ],
    };
  },
  methods: {},
  mounted() {
    var swiper = new Swiper(".event-wrapper2", {
      // effect: "coverflow",
      grabCursor: true,
      // centeredSlides: true,
      slidesPerView: "auto",
      // loop: true,
      lazy: true,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 0,

        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.event-wrapper2 {
  margin-top: -1rem;
  // transform: translateX(5%);
  padding-left: 5%;
  .swiper-wrapper {
    .swiper-slide {
      // margin-left: 2rem;
      // margin-right: 2rem;

      max-width: 30rem;
      max-height: 20rem;
    }
  }
  .event-cards {
    margin-top: 2.88rem;
    margin-bottom: 5rem;

    .event-img {
      width: 100%;
    }
    h3 {
      color: $kuriftu-black;
      @extend .title;
      margin-top: 0.94rem;
      font-size: 1.2rem;
      text-align: center;
    }

    p {
      @extend .text;
      margin-top: 0.94rem;
      color: $kuriftu-grey;
      text-align: center;
    }
  }
}
@include responsive($xxl) {
  .event-wrapper2 {
    padding-left: 12%;
  }
}
</style>
