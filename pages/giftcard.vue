<template>
  <div class="main">
    <Destinationheader :src="require(`../assets/image/LOGO 2.svg`)" />

    <!-- Destination Navigation -->
    <!-- Mobile Destination Navigation -->
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationbishoftu"
                ><p>Gift Card</p>
                <img
                  class="drop-icon"
                  src="../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link
                      class="a-link"
                      to="bishoftu/bishoftuaccommodation"
                      >Accomodation</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="bishoftu/bishoftuexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftu/bishoftuwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftu/bishoftudining"
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftu/bishoftuevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftu/bishoftugallery"
                      >Gallery</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
                    >
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End of Mobile Destination Navigation -->

    <!-- Desktop Destination Navigation -->
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationbishoftu"
                >Bishoftu</nuxt-link
              ><img src="../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftuaccommodation"
                >Accomodation</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftuexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftuwellness"
                >Wellness</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftudining"
                >Dining</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftuevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftu/bishoftugallery"
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
    <!-- End of Desktop Destination Navigation -->
    <!-- End of Destination Navigation -->

    <!-- Hero Section  -->

    <!-- End of Hero Section  -->

    <!-- Top Section  -->
    <section class="spa-wellness"></section>
    <!-- End of Top Section  -->

    <Giftcardsection :section="water" />
    <Giftcardsection :section="entoto" />
    <Giftcardsection :section="bishoftu" />
    <Giftcardsection :section="awash" />
    <Giftcardsection :section="laketana" />
    <Giftcardsection :section="boston" />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Giftcardsection from "../components/Giftcardsection.vue";
export default {
  components: { Giftcardsection },
  data() {
    return {
      water: {
        title: "Water Park",

        url: "/destinationwaterpark",
        link: "View All",
        photos: [
          "gift1.svg",
          "gift2.svg",
          "gift3.svg",
          "gift4.svg",
          "gift5.svg",
          "gift1.svg",
        ],
      },
      entoto: {
        title: "Entoto",

        url: "/destinationentoto",
        link: "View All ",
        photos: [
          "gift4.svg",
          "gift5.svg",
          "gift2.svg",
          "gift3.svg",
          "gift1.svg",

          "gift1.svg",
        ],
      },
      bishoftu: {
        title: "Bishoftu",

        url: "/destinationbishoftu",
        link: "View All",
        photos: [
          "gift5.svg",
          "gift1.svg",
          "gift2.svg",
          "gift3.svg",
          "gift4.svg",

          "gift1.svg",
        ],
      },
      awash: {
        title: "Awash",

        url: "/destinationawash",
        link: "View All",
        photos: [
          "gift2.svg",

          "gift3.svg",
          "gift4.svg",
          "gift1.svg",
          "gift5.svg",
          "gift1.svg",
        ],
      },
      laketana: {
        title: "Lake Tana",

        url: "/destinationlaketana",
        link: "View All",
        photos: [
          "gift3.svg",

          "gift4.svg",
          "gift1.svg",
          "gift5.svg",
          "gift1.svg",
          "gift2.svg",
        ],
      },
      boston: {
        title: "Boston Day Spa",

        url: "/destinationboston",
        link: "View All",
        photos: [
          "gift4.svg",
          "gift1.svg",
          "gift2.svg",
          "gift3.svg",

          "gift5.svg",
          "gift1.svg",
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
