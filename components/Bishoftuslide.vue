<template>
  <div class="event-wrapper2 swiper">
    <div class="swiper-wrapper">
      <div class="event-cards swiper-slide a">
        <img src="../assets/image/_DSC5820 (2)-min.jpg" alt="" />
    
      </div>

      <div class="event-cards swiper-slide b">
        <img src="../assets/image/_DSC5806 (2)-min.jpg" alt="" />
     
      </div>

      <div class="event-cards swiper-slide c">
        <img src="../assets/image/_DSC5351 (2)-min.jpg" alt="" />
      
      </div>
      <div class="event-cards swiper-slide c">
        <img src="../assets/image/_DSC5400 (2)-min.jpg" alt="" />
       
      </div>
      <div class="event-cards swiper-slide c">
        <img src="../assets/image/_DSC4667 (2)-min.jpg" alt="" />
     
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
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
    margin-top: 2rem;
  .swiper-wrapper {
    .swiper-slide {
   margin-left: 2rem;
      margin-right: 2rem;
  
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
</style>