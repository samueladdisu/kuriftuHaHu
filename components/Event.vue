<template>
  <div class="event-wrapper2 swiper">
    <div class="swiper-wrapper">
      <div class="event-cards swiper-slide a">
        <img src="../assets/image/event.jpg" alt="" />
        <h3>Outside 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          tincidunt nisl elementum ultrices luctus habitasse. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl
          elementum ultrices luctus habitasse.
        </p>
      </div>

      <div class="event-cards swiper-slide b">
        <img src="../assets/image/event.jpg" alt="" />
        <h3>Outside 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          tincidunt nisl elementum ultrices luctus habitasse. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl
          elementum ultrices luctus habitasse.
        </p>
      </div>

      <div class="event-cards swiper-slide c">
        <img src="../assets/image/event.jpg" alt="" />
        <h3>Outside 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          tincidunt nisl elementum ultrices luctus habitasse. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl
          elementum ultrices luctus habitasse.
        </p>
      </div>
      <div class="event-cards swiper-slide c">
        <img src="../assets/image/event.jpg" alt="" />
        <h3>Outside 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          tincidunt nisl elementum ultrices luctus habitasse. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl
          elementum ultrices luctus habitasse.
        </p>
      </div>
      <div class="event-cards swiper-slide c">
        <img src="../assets/image/event.jpg" alt="" />
        <h3>Outside 5</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          tincidunt nisl elementum ultrices luctus habitasse. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl
          elementum ultrices luctus habitasse.
        </p>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var swiper = new Swiper(".event-wrapper2", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 50,
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
  .swiper-wrapper {
    .swiper-slide {
      max-width: 39.19rem;
    }
  }
  .event-cards {
    margin-top: 2.88rem;
    margin-bottom: 2.88rem;

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
</style>