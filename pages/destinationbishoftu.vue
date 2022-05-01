<template>
  <div class="main">
    <Destinationheader :src="require(`../assets/image/bishoftu-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationbishoftu"
                ><p>Bishoftu</p>
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
              <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="../assets/image/Home.jpg" alt="" />
        </div>
      </div>
    </section>
    <section class="main-page-desc">
      <div class="container">
        <div class="wrapper">
          <div class="main-title">
            <h2>Bishoftu & The 7 Crater Lakes</h2>
            <p>
              Bishoftu is home to 7 crater lakes and is a renowed resort town
              which serves as an amazing getaway from the hustle and bustle of
              the city life.
            </p>
          </div>
          <Bishoftuslide />

          <div class="tabs">
            <div class="tabs-container" @click="tabs">
              <div class="tab a"></div>
              <div class="tab b"></div>
              <div class="tab c"></div>
              <div class="active"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stay-offer">
      <div class="container">
        <div class="stay-offer-all">
          <div class="stay-slide" data-aos="slide-up">
            <div class="slide-card">
              <img src="../assets/image/welcome.jpg" alt="" />
            </div>
          </div>
          <div class="stay-desc" data-aos="slide-up">
            <h4>Resort</h4>
            <p class="header-title"></p>
            <p>
              The ideal getaway. With achingly perfect panoramas, Kuriftu
              Bishoftu is where luxury reaches its pinnacle and service is
              simultaneously warm, genuine and sensational.
              <br />
              <b>Information & Amenities </b><br />
              45-minute drive from Addis Ababa<br />
              89 rooms (Four-Presidential Suites)<br />
              Two Restaurants<br />
              Four Conference Halls<br />
              Spa & Wellness Center<br />
            </p>
            <div class="book-buttons">
              <nuxt-link to="bishoftu/bishoftuaccommodation" class="view"
                >View Accomodation
                <hr class="lower-line" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <div class="gallery-wrapper">
          <nuxt-link to="bishoftu/bishoftugallery">
            <div class="gallery-frist-img">
              <img src="../assets/image/dz-cover.jpg" alt="" />
            </div>
          </nuxt-link>

          <div class="gallery-imgs">
            <nuxt-link to="bishoftu/bishoftugallery">
              <div class="gallery-img">
                <img src="../assets/image/_DSC5641 (2)-min.jpg" alt="" />
              </div>
            </nuxt-link>
            <nuxt-link to="bishoftu/bishoftugallery">
              <div class="gallery-img">
                <img src="../assets/image/_DSC5400 (2)-min.jpg" alt="" />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="spa-wellness">
      <div class="container">
        <h2>Kuriftu Resort & Spa Bishoftu</h2>
        <p>
          Our spa is a unique haven of tranquilllity nestled on a restful
          architecture. it perpetuates the tradtion established by Ethiopian
          royal families who used to retreat to relax and indulge in beauty
          rituals.
        </p>
        <div class="gallery-wrapper">
          <nuxt-link to="bishoftu/bishoftuwellness">
            <div class="gallery-frist-img">
              <img src="../assets/image/Spa.jpg" alt="" />
            </div>
          </nuxt-link>
          <div class="gallery-imgs">
            <nuxt-link to="bishoftu/bishoftuwellness">
              <div class="gallery-img">
                <img src="../assets/image/_DSC5400 (2)-min.jpg" alt="" />
              </div>
            </nuxt-link>

            <nuxt-link to="bishoftu/bishoftuwellness">
              <div class="gallery-img">
                <img src="../assets/image/_DSC5351 (2)-min.jpg" alt="" />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <div class="experience">
      <div class="container">
        <div class="exper-wrapper">
          <div class="ex-title">
            <h2>Experience</h2>
            <div class="view">
              <nuxt-link to="bishoftu/bishoftuexperience"
                >View Experience
                <hr class="lower-line"
              /></nuxt-link>
            </div>
          </div>
          <div class="exper-card" data-aos="slide-up">
            <nuxt-link to="bishoftu/bishoftuexperience">
              <div class="exper-single-card">
                <div class="exper-img">
                  <img src="../assets/image/waterpark.jpg" alt="" />
                </div>
                <div class="exper-title">
                  <h3>Water Park</h3>
                </div>
                <div class="exper-desc">
                  <p>
                    our acquatic playgrounds with winding waterslides, suspended
                    buckets of water, and interactive...
                  </p>
                </div>
              </div></nuxt-link
            >
            <nuxt-link to="bishoftu/bishoftuexperience">
              <div class="exper-single-card">
                <div class="exper-img">
                  <img src="../assets/image/exprience.jpg" alt="" />
                </div>
                <div class="exper-title">
                  <h3>Swimming Pool</h3>
                </div>
                <div class="exper-desc">
                  <p>
                    Whether you’re looking for an early-morning workout or just
                    for refreshment after
                  </p>
                </div>
              </div></nuxt-link
            >
            <nuxt-link to="bishoftu/bishoftuexperience">
              <div class="exper-single-card">
                <div class="exper-img">
                  <img src="../assets/image/dz-cover.jpg" alt="" />
                </div>
                <div class="exper-title">
                  <h3>Kayaking</h3>
                </div>
                <div class="exper-desc">
                  <p>
                    enjoy your stay with our Sunrise, Mid-day, and Sunset
                    Kayaking on the lake of bishoftu...
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
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
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
  .main-page-desc {
    margin-top: 5rem;
    .container {
      .wrapper {
        .main-title {
          display: grid;
          place-items: center;
          h2 {
            text-align: center;
            font-size: 1.5rem;
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
  }
  .stay-offer {
    margin-top: 6.25rem;

    .container {
      display: grid;
      place-content: center;
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .stay-offer-all {
        display: flex;

        flex-direction: column;
        .stay-slide {
          margin-top: 1.88rem;
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 0.5rem;
        }
        .stay-desc {
          margin-top: 1.88rem;
          margin-left: 1rem;
          margin-right: 1rem;
          h4 {
            @extend .title;
            font-size: 1.5rem;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            text-transform: uppercase;
            text-align: left;
          }
          .header-title {
            color: $kuriftu-grey;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 0.88rem;

            text-align: left;
          }
          .book-buttons {
            display: grid;
            place-items: left;
            margin-top: 3rem;
            .view {
              color: $kuriftu-grey;
              font-size: 0.8rem;
              .lower-line {
                opacity: 0.7;
                border-style: solid;

                width: 8rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .stay-offer {
      .container {
        .stay-offer-all {
          .stay-desc {
            p {
              width: 30rem;
            }
          }
          .stay-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .stay-offer {
      margin-top: 8.13rem;
      .container {
        .stay-offer-all {
          flex-direction: row;
          gap: 2rem;
          .stay-slide {
            margin-top: 4.37rem;
            .slide-card {
              img {
                width: 50rem;
              }
            }
          }
          .stay-desc {
            margin-top: 4.5rem;
            h4 {
              margin-top: 0rem;
            }
            p {
              margin-top: 2rem;
            }
            .book-buttons {
              display: flex;
              justify-content: left;

              margin-top: 6rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .stay-offer {
      .container {
        .stay-offer-all {
          .stay-slide {
            .slide-card {
              img {
                width: 30rem;
              }
            }
          }
        }
      }
    }
  }
  .gallery {
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
      }
      .gallery-wrapper {
        .gallery-frist-img {
          margin-top: 0.94rem;
        }
        .gallery-imgs {
          .gallery-img {
            margin-top: 0.94rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .gallery {
      .container {
        .gallery-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          .gallery-frist-img {
            margin-top: 1rem;
            img {
              width: 50rem;
              height: 38rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 1rem;
              img {
                width: 30rem;
                height: 18rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .gallery {
      margin-top: 8.13rem;
      .container {
        .gallery-wrapper {
          gap: 2rem;

          margin-top: 4.37rem;
          .gallery-frist-img {
            margin-top: 2rem;
            img {
              width: 55rem;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 2rem;
              img {
                width: 55rem;
              }
            }
          }
        }
      }
    }
  }
  .spa-wellness {
    margin-top: 5rem;

    .container {
      display: grid;
      place-items: center;
      h2 {
        text-align: center;
        font-size: 1.5rem;
      }
      p {
        text-align: center;
        color: $kuriftu-grey;
        width: 20rem;
        margin-top: 1rem;
        font-size: 0.8rem;
      }
      .gallery-wrapper {
        margin-top: 2rem;
        .gallery-frist-img {
          margin-top: 0.94rem;
        }
        .gallery-imgs {
          .gallery-img {
            margin-top: 0.94rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .spa-wellness {
      margin-top: 8rem;
      .container {
        h2 {
          font-size: 2rem;
        }
        p {
          width: 40rem;
        }
        .gallery-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;

          .gallery-frist-img {
            margin-top: 1rem;
            img {
              width: 50rem;
              height: 29.68rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 1rem;
              img {
                width: 30rem;
                height: 14.3rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .spa-wellness {
      margin-top: 8.13rem;
      .container {
        .gallery-wrapper {
          gap: 2rem;

          margin-top: 4.37rem;
          .gallery-frist-img {
            margin-top: 2rem;
            img {
              width: 55rem;
              height: 42rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 2rem;
              img {
                width: 40rem;
                height: 20rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  .experience {
    margin-top: 5rem;
    .container {
      .exper-wrapper {
        .ex-title {
          display: flex;
          justify-content: space-between;
          align-content: center;
          h2 {
            text-align: center;
            font-size: 1.5rem;
            @include responsive($md) {
              font-size: 2rem;
            }
          }
          .view {
            a {
              font-size: 0.8rem;
              color: $kuriftu-grey;
              .lower-line {
                opacity: 0.7;
                border-style: solid;

                @include responsive($md) {
                  width: 8rem;
                }
              }
            }
          }
        }
        .exper-card {
          margin-top: 1.88rem;
          @include responsive($md) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          @include responsive($lg) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .exper-single-card {
            margin-top: 2rem;
            .exper-img {
              position: relative;
              img {
                height: 15rem !important;
                min-width: 15rem;
                object-fit: cover;
                object-position: center center;
                @include responsive($xl) {
                  height: 25rem !important;
                  width: 30rem;
                }
              }
            }
            .exper-title {
              background: $kuriftu-green;
              padding: 0.8rem;
              width: 14rem;
              min-width: 11.31rem;
              position: absolute;

              margin-top: -3.24rem;
              @include responsive($lg) {
                margin-top: -3.23rem;
              }
              h3 {
                color: $kuriftu-white;
                @extend .caps;

                text-align: center;
              }
            }
            .exper-desc {
              width: 85%;
              background: #fff;
              padding: 1rem;
              @include responsive($md) {
                width: 90%;
              }
              p {
                @extend .text;

                color: $kuriftu-grey;
                font-size: 0.8rem;
                line-height: 1.3rem;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
