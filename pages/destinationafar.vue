<template>
  <div class="main">
    <Destinationheader :src="require(`../assets/image/afar-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationafar"
                ><p>Afar</p>
                <img
                  class="drop-icon"
                  src="../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="afar/afaraccommodation"
                      >Accomodation</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="afar/afarexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afar/afarwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afar/afardining"
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afar/afarevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afar/afargallery"
                      >Gallery</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="/giftcard"
                      >Gift Card</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationafar"
                >Afar</nuxt-link
              ><img src="../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="afar/afaraccommodation"
                >Accomodation</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="a-link" to="afar/afarexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afar/afarwellness"
                >Wellness</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afar/afardining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="afar/afarevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afar/afargallery"
                >Gallery</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="/giftcard">Gift Card</nuxt-link>
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="../assets/image/KURIFTU Afar-0302-min.jpg" alt="" />
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
  .destination-links {
    display: none;
  }
  .destination-links2 {
    .container {
      .wrapper {
        .link-destination {
          display: grid;
          // place-content: center;
          margin-top: 4rem;
          gap: 3rem;
          position: relative;

          li {
            display: flex;
            align-items: flex-start;

            .a-link {
              color: $kuriftu-grey;
              font-size: 0.88rem;
              display: flex;
              align-items: center;
              .drop-icon {
                transform: rotate(90deg);
              }
            }

            .active {
              color: $kuriftu-black;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              top: 25px;
              left: 0px;
              // @include responsive($md){
              //   left: 15rem;
              // }
              border: 1px solid #efefef;
              background: $kuriftu-white;
              border-radius: 0.4em;
              min-width: 200px;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              padding: 12px 12px;
              z-index: 999;
              .drop-down-list {
                // display: grid;
                // grid-template-columns: 1fr 1fr 1fr;
                // gap: .3rem;
                li {
                  margin-left: 0.3rem;
                  margin-top: 0.5rem;

                  .a-link {
                    color: $kuriftu-grey;
                    font-size: 0.88rem;
                  }
                  .drop-icon {
                    transform: rotate(90deg);
                  }
                  .active {
                    color: $kuriftu-black;
                  }
                }
              }
            }
          }
          li:hover .dropdown-content {
            display: block;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .destination-links2 {
      display: none;
    }
    .destination-links {
      display: block;
      .container {
        .wrapper {
          .link-destination {
            display: flex;
            margin-top: 4rem;
            gap: 3rem;
            place-content: center;
            li {
              display: flex;
              align-items: center;
              .a-link {
                color: $kuriftu-grey;
                font-size: 0.88rem;
              }
              .active {
                color: $kuriftu-black;
              }
            }
          }
          .line {
            // border-style:solid ;
            color: $kuriftu-grey;
            @include responsive($xl) {
              width: 60rem;
            }
            margin-top: 0.6rem;
            opacity: 0.7;
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
