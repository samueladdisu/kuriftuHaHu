<template>
  <div class="main">
    <Destinationheader :src="require(`@/assets/image/afar-logo.svg`)" />

    <Destinav base="afar/" home="afar/" dir="Afar" />

    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <!-- <img src="../assets/image/KURIFTU Afar-0302-min.jpg" alt="" /> -->
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/708087309?h=83a71333e6&autoplay=1&loop=1&title=0&byline=0&portrait=0"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </section>

    <!-- Top Section  -->
    <section class="spa-wellness">
      <Dtop :top="top" />
      <Bishoftuslide :photos="photos" />
    </section>
    <!-- End of Top Section  -->

    <DSection :section="acc" />
    <DSection :section="dinning" />
    <DSection :section="wellness" />
    <DSection :section="event" />
    <DSection :section="exp" />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
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
      top: {
        title: "Afar Region",
        desc: `A must visit hot desert climate located in the northern part of Ethiopia, Afar is one of the lowest points in Africa having an amazing sceneries ranging from sulphur springs in Dallol to active volcano in Erta ale, it is one of the best destinations in Ethiopia for adrenaline seekers looking for a warm-weather getaways.`,
      },
      acc: {
        title: "Accomodation",
        desc: `Find your choice of modern and thoughtful
      accommodations at Kuriftu Resort & Spa Bishoftu. Each elegantly appointed resort room and spacious suite at Kuriftu offers exceptional luxuries
      with locally inspired architectural spaces alongside premier resort amenities. Crafted experiences begin and end at Kuriftu.`,
        url: "afar/afaraccommodation",
        link: "View All Accomodation",
        photos: [
          "KURIFTU Afar-0728-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
          "KURIFTU Afar-0059-min.jpg",
          "KURIFTU Afar-0077-min.jpg",
          "KURIFTU Afar-0302-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
        ],
      },
      dinning: {
        title: "Dining",
        desc: `our fine dining restaurants with local ingredients and authentic recipes featuring a unique dining experience that evokes the rich flavours of Middle-Eastern cuisine. A place where you can make your stay memorable with our private dining space and VIP restaurant.`,
        url: "afar/afardining",
        link: "View All Dining",
        photos: [
          "KURIFTU Afar-0728-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
          "KURIFTU Afar-0059-min.jpg",
          "KURIFTU Afar-0077-min.jpg",
          "KURIFTU Afar-0302-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
        ],
      },
      wellness: {
        title: "Wellness",
        desc: `Restore calm and balance to your body and mind with our luxury massage therapy treatments, steam/sauna and enjoy an open air terrace for a refreshing scenery`,
        url: "afar/afarwellness",
        link: "View All wellness",
        photos: [
          "KURIFTU Afar-0728-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
          "KURIFTU Afar-0059-min.jpg",
          "KURIFTU Afar-0077-min.jpg",
          "KURIFTU Afar-0302-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
        ],
      },
      event: {
        title: "Celebration and Events",
        desc: `listening to tropical and the gentle nature from the privacy of
                your luxurious villa , there is simply no more romantic or
                exotic setting for your special occasion. Whether you are
                planning a honeymoon or celebrating a wedding, an anniversary,
                or a birthday, we can take care of all the details, so you will
                return home relaxed, rejuvenated and with memories you’ll
                cherish for a lifetime.`,
        url: "afar/afarevent",
        link: "View All Celebration & Events",
        photos: [
          "KURIFTU Afar-0728-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
          "KURIFTU Afar-0059-min.jpg",
          "KURIFTU Afar-0077-min.jpg",
          "KURIFTU Afar-0302-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
        ],
      },
      exp: {
        title: "Experience",
        desc: `Our resort arranges sightseeing tours so you can relax and enjoy the colorful sulphur springs of Danakil Depression, hot springs of Dallol and active volcano in Erta ale.`,
        url: "afar/afarexperience",
        link: "View All Experience",
        photos: [
          "KURIFTU Afar-0728-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
          "KURIFTU Afar-0059-min.jpg",
          "KURIFTU Afar-0077-min.jpg",
          "KURIFTU Afar-0302-min.jpg",
          "KURIFTU Afar-0195-min.jpg",
        ],
      },
    };
  },
  mounted() {
    AOS.init({
      duration: 1500,
      offset: 120,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  },
};
</script>

<style lang="scss" scoped>
.main {
  .display-video {
    margin-top: 4rem;
    .container {
      .video-wrapper {
        display: grid;
        place-items: center;
      }
    }
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
  .spa-wellness {
    margin-top: 5rem;
  }
  @include responsive($md) {
    .spa-wellness {
      margin-top: 2rem;
    }
  }
  @include responsive($lg) {
    .spa-wellness {
      margin-top: 2rem;
    }
  }
}
</style>
