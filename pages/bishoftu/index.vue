<template>
  <div class="main">
    <Destinationheader :src="require(`@/assets/image/bishoftu-logo.svg`)" />

    <Destinav base="bishoftu/" home="bishoftu/" dir="Bishoftu" />
    <NuxtChild />
    <!-- Hero Section  -->
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="@/assets/image/Kuriftu_Bishoftu_Exerior.png" alt="" />
        </div>
      </div>
    </section>
    <!-- End of Hero Section  -->

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
        title: "Bishoftu",
        desc: ` Bishoftu is home to 7 crater lakes and is a renowed resort town which
      serves as an amazing getaway from the hustle and bustle of the city life.
      The ideal getaway. With achingly perfect panoramas, Kuriftu Bishoftu is
      where luxury reaches its pinnacle and service is simultaneously warm,
      genuine and sensational. Information & Amenities 45-minute drive from
      Addis Ababa 89 rooms (Four-Presidential Suites)Two Restaurants Four
      Conference Halls Spa & Wellness Center`,
      },
      acc: {
        title: "Accomodation",
        desc: `Find your choice of modern and thoughtful
      accommodations at Kuriftu Resort & Spa Bishoftu. Each elegantly appointed resort room and spacious suite at Kuriftu offers exceptional luxuries
      with locally inspired architectural spaces alongside premier resort amenities. Crafted experiences begin and end at Kuriftu.`,
        url: "bishoftu/bishoftuaccommodation",
        link: "View All Accomodation",
        photos: [
          "bishoftu/deluxe/1.webp",
          "bishoftu/presidential/pre7.webp",
          "bishoftu/presidential/pre10.webp",
          "bishoftu/presidential/pre6.webp",
          "bishoftu/standard/1.webp",
          "bishoftu/garden/1.webp",
        ],
      },
      dinning: {
        title: "Dining",
        desc: ` Whether you’re celebrating a birthday, honeymoon, anniversary or a longmawaited family vacation, our team is delighted to create
        a personalized dining experience for you from intimate and
        romantic, to interactive and adventurous.`,
        url: "bishoftu/bishoftudining",
        link: "View All Dining",
        photos: [
          "bishoftu/dinning/Lake_Side_Cabana.webp",
          "bishoftu/dinning/Lake_Side_Main_Restaurant.webp",
          "bishoftu/dinning/Lequanda.webp",
          "bishoftu/dinning/waterpark.webp",
        ],
      },
      wellness: {
        title: "Wellness",
        desc: `Our spa is a unique haven of tranquilllity nestled on a restful architecture. it perpetuates the tradtion established by Ethiopian royal families who used to retreat to relax and indulge in beauty rituals.`,
        url: "bishoftu/bishoftuwellness",
        link: "View All wellness",
        photos: [
          "bishoftu/wellness/1.webp",
          "bishoftu/wellness/2.webp",
          "bishoftu/wellness/3.webp",
          "bishoftu/wellness/hair salon.webp",
          "bishoftu/wellness/massage.webp",
          "bishoftu/wellness/spa.webp",
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
        url: "bishoftu/bishoftuevent",
        link: "View All Celebration & Events",
        photos: [
          "entoto0.jpg",
          "entoto9.jpg",
          "celebration.jpg",
          "bishoftu/firstSlider/6.webp",
          "bishoftu/firstSlider/7.webp",
        ],
      },
      exp: {
        title: "Experience",
        desc: `Kuriftu Resort & Spa Bishoftu offers all inclusive experiences. ranging from the best kayaking experience to a day well spent at the waterpark, you'll never fail to have fun, unwind and relax at our resort.`,
        url: "bishoftu/bishoftuexperience",
        link: "View All Experience",
        photos: [
          "bishoftu/firstSlider/5.webp",
          "bishoftu/firstSlider/6.webp",
          "bishoftu/firstSlider/7.webp",
          "bishoftu/cinema.webp",
          "bishoftu/gift_shop.webp",
          "bishoftu/Swimming_pool.webp",
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
  header {
    width: 100%;
    height: 10vh;
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0, 6, 27);
    }
    nav {
      z-index: 999;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      .top-nav {
        position: sticky;
        top: 0;
        bottom: 0;
        width: 90%;
        margin: 0 auto;
      }
      .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .menu-line {
          margin-top: 1rem;
          cursor: pointer;
          .line {
            hr {
              margin: auto;
              margin-top: 1rem;
              color: $kuriftu-black;
              // height: 10rem;
              width: 2.35rem;
            }
          }
        }
        .logo {
          margin-top: 1rem;
          width: 9rem;
          @include responsive($md) {
            width: 11rem;
          }
        }
        .nav-book-button {
          display: none;
        }
      }
    }
  }
  @include responsive($lg) {
    header {
      nav {
        .container {
          align-items: center;

          .nav-book-button {
            margin-top: 1rem;
            display: block;
            .wrapper {
              display: flex;
              gap: 1rem;
              .social {
                display: flex;
                gap: 0.5rem;
                .icon {
                  width: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
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
