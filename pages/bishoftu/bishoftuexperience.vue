<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/bishoftu-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="bishoftuexperience"
                ><p>Bishoftu</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="bishoftuaccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftuexperience active"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftuwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftudining "
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftuevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="bishoftugallery"
                      >Gallery</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
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
              <nuxt-link class="a-link active" to="/destinationbishoftu"
                >Bishoftu</nuxt-link
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftuaccommodation">
                <p>Accomodation</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link active" to="bishoftuexperience"
                >Experiences
                <hr class="activeline"
              /></nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftuwellness"
                >Wellness</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftudining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftuevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="bishoftugallery">Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <!-- <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="../../assets/image/Home.jpg" alt="" />
        </div>
      </div>
    </section> -->

    <section class="accomondation">
      <div class="container">
        <div class="accomondation-room">
          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="../../assets/image/waterpark.jpg" alt="" />

            <div class="room-name">
              <h4>Water Park</h4>
            </div>
            <div class="room-desc">
              <p>
                our acquatic playgrounds with winding waterslides, suspended
                buckets of water, and interactive playscapes offer a fun way to
                beat the heat.
              </p>
            </div>
          </div>
          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              class="right-card"
              src="../../assets/image/dz-cover.jpg"
              alt=""
            />
            <div class="room-name">
              <h4>Kayaking</h4>
            </div>
            <div class="room-desc">
              <p>
                enjoy your stay with our Sunrise, Mid-day, and Sunset Kayaking
                on the lake of bishoftu.
              </p>
            </div>
          </div>
          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="../../assets/image/_DSC4621 (2)-min.jpg" alt="" />

            <div class="room-name">
              <h4>Cinema</h4>
            </div>
            <div class="room-desc">
              <p>
                lean back and enjoy an exclusive movie feeling with the latest
                films in our resort.
              </p>
            </div>
          </div>
          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              class="right-card"
              src="../../assets/image/_DSC4621 (2)-min.jpg"
              alt=""
            />
            <div class="room-name">
              <h4>Billiards & Table Tennis</h4>
            </div>
            <div class="room-desc">
              <p>
                Enjoy a bit of fun in the shade with our billiards and table
                tennis to try out your skill.
              </p>
            </div>
          </div>

          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="../../assets/image/_DSC4621 (2)-min.jpg" alt="" />
            <div class="room-name">
              <h4>Gift Shop</h4>
            </div>
            <div class="room-desc">
              <p>
                you will never fail to find something special for you or your
                loved ones in our locally sourced gift shops.
              </p>
            </div>
          </div>

          <div
            class="single-accomondation"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              class="right-card"
              src="../../assets/image/exprience.jpg"
              alt=""
            />
            <div class="room-name">
              <h4>Swimming Pool</h4>
            </div>
            <div class="room-desc">
              <p>
                Whether you’re looking for an early-morning workout or just for
                refreshment after your spa treatment, the pools at Kuriftu
                Bishoftu Resort and Spa do not disappoint offering an
                exceptional place for both rest and recreation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Event from "../../components/Event.vue";
export default {
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
                font-weight: 600;
              }
            }
            .activeline {
              margin-top: 0.6rem;
              margin-bottom: -1.1rem;
              color: $kuriftu-black;
              opacity: 1;
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
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
  .entoto-general {
    margin-top: 5rem;
    @include responsive($lg) {
      margin-top: 8rem;
    }
    .container {
      .main-title {
        display: grid;
        place-items: center;
        h2 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
        }
        p {
          text-align: center;
          color: $kuriftu-grey;
          width: 20rem;
          margin-top: 1rem;
          font-size: 0.8rem;
        }
        @include responsive($md) {
          h2 {
            font-size: 2rem;
          }
          p {
            width: 40rem;
            font-size: 1rem;
          }
        }
      }
      .tabs {
        margin: 1.88rem auto 6.25rem;
        // background: lightblue;
        display: grid;
        place-items: center;
        width: 100%;
        margin-top: 4rem;
        .tabs-container {
          display: flex;
          position: relative;
          .active {
            position: absolute;
            top: 0;
            height: 0.25rem;
            width: 5.94rem;
            transform: translate(100%, -30%);
            background: $kuriftu-black;
          }
          .tab {
            height: 0.13rem;
            width: 5.94rem;
            background: #c4c4c4;
          }
        }
      }
    }
  }
  .accomondation {
    .container {
      .recommended {
        display: flex;
        align-items: center;
        gap: 2rem;
        hr {
          border-style: solid;
          color: $kuriftu-grey;
          opacity: 0.5;

          width: 100%;
        }
        p {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: $kuriftu-grey;
        }
      }
      .accomondation-room {
        margin-top: 3rem;
        display: grid;
        @include responsive($md) {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @include responsive($xl) {
          // gap: 8rem;
        }
        .single-accomondation {
          margin-top: 2.88rem;
          img {
            @include responsive($md) {
              width: 20rem;
              height: 15rem;
              object-fit: cover;
            }

            @include responsive($lg) {
              width: 100%;
              height: 20rem;
            }

            @include responsive($xl) {
              height: 28rem;
            }
          }
          .room-name {
            h4 {
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 1.88rem;
              color: $kuriftu-black;
            }
          }
          .room-desc {
            p {
              @extend .text;
              margin-top: 0.94rem;
              color: $kuriftu-black;
              font-size: 0.88rem;
              text-align: left;
              @include responsive($md) {
                width: 20rem;
              }
              @include responsive($lg) {
                width: 26rem;
              }
              @include responsive($xl) {
                width: 30rem;
              }
            }
          }
          .book-buttons {
            margin-top: 1.88rem;
            @include responsive($lg) {
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>
