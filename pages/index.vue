<template>
  <div class="main">
    <LazyHeaderApp :src="require(`../assets/image/Home.jpg`)" v-if="video" />

    <section class="welcome">
      <div class="container">
        <div class="welcome-wrapper">
          <div class="welcome-img" data-aos="slide-up">
            <img loading="lazy" src="../assets/image/welcome2.jpg" alt="" />
          </div>
          <div class="welcome-desc" data-aos="slide-up">
            <h4>WELCOME TO KURIFTU RESORT & SPA</h4>
            <p>
              We are very pleased to welcome you to Kuriftu Resort & Spa. Our
              intention is to provide each guest with the level of personal
              service found only in the finest resorts. To achieve this, we
              endeavor to anticipate your needs as much as possible with a wide
              variety of services and our team which is ready to attend to your
              most pressing requests. Your comfort is our most important
              concern. The Management
            </p>
            <div class="book-buttons">
              <nuxt-link class="btn btn-primary" to="/book">BOOK NOW</nuxt-link>
              <a class="btn btn-outline-brown" href="#">VIEW GALLERY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="destinations">
      <div class="container">
        <h2>DESTINATIONS</h2>

        <div class="top-2">
          <div class="bishoftu" data-aos="slide-up">
            <div class="bishoftu-img">
              <img
                loading="lazy"
                class="bit_small"
                src="../assets/image/Kuriftu_Bishoftu_Exerior.png"
                alt=""
              />
            </div>
            <div class="bishoftu-desc">
              <h4>Bishoftu</h4>
              <p>
                With achingly perfect panoramas, Kuriftu Bishoftu is where
                luxury reaches its pinnacle and service is
                <!-- simultaneously warm,
                genuine and sensational. -->
              </p>
              <div class="explore">
                <nuxt-link to="/bishoftu">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="bishoftu1" data-aos="slide-up">
            <div class="bishoftu-img">
              <img
                src="../assets/image/water-cover.jpg"
                loading="lazy"
                alt=""
              />
            </div>
            <div class="bishoftu-desc">
              <h4>Waterpark</h4>
              <p>
                The Kuriftu Water Park is East Africa’s Largest Water Park and
                Ethiopia’s first.
                <!-- Boasting over 30,000 square meters of fun -->
                <!-- while featuring a wide range of activities, such as:Boomerang
                Slide, Triple Spiral Slide, 2 Water Houses, Wave Pool with a
                Performance Stage, Fekat Circus and a Food Court. -->
              </p>
              <div class="explore">
                <nuxt-link to="/waterpark">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-3">
          <div class="bishoftu" data-aos="slide-up">
            <div class="bishoftu-img">
              <img src="../assets/image/entoto-bg.jpg" loading="lazy" alt="" />
            </div>
            <div class="bishoftu-desc">
              <h4>Entoto</h4>
              <p>
                This unique park was created within a record time of 9 months.
                This Adventure Park is the first of its kind in
                <!-- Ethiopia and has... -->
                <!-- even been selected as one of the top destinations in the world
                by Conde Nast Traveler (2021) -->
              </p>
              <div class="explore">
                <nuxt-link to="/entoto">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="bishoftu" data-aos="slide-up">
            <div class="bishoftu-img">
              <img
                loading="lazy"
                src="../assets/image/KURIFTU Afar-0302-min.jpg"
                alt=""
              />
            </div>
            <div class="bishoftu-desc">
              <h4>Afar</h4>
              <p>
                This luxury resort is set in the tranquil region of Afar and is
                the new gateway to Eastern Ethiopia. Within
                <!-- driving distance of -->
                <!-- attractions, such as, Allolobad (Natural Hot Spring), Dalol and
                Erte Ale, this property will be your ideal starting point for a
                desert adventure. -->
              </p>
              <div class="explore">
                <nuxt-link to="/afar">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="bishoftu" data-aos="slide-up">
            <div class="bishoftu-img">
              <img loading="lazy" src="../assets/image/tana.jpg" alt="" />
            </div>
            <div class="bishoftu-desc">
              <h4>Lake Tana</h4>
              <p>
                The ideal getaway. Relax at the source of the Nile. Immerse
                yourself in the rich history of Ethiopia with landscapes of
                <!-- Bahir Dar's native architecture and monolithic churches. -->
              </p>
              <div class="explore">
                <nuxt-link to="/laketana">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="top-2">
          <div class="bishoftu" data-aos="slide-up">
            <div class="bishoftu-img">
              <img loading="lazy" src="../assets/image/awashfalls.jpg" alt="" />
            </div>
            <div class="bishoftu-desc">
              <h4>Awash</h4>
              <p>
                Part of the Kuriftu Boutique collection, Awash Falls allows
                guests to immerse themselves in the beauty of nature while
                <!-- giving them the chance to see wildlife and experience the
                wonders of this amazing national park -->
              </p>
              <div class="explore">
                <nuxt-link to="/awash">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="bishoftu1" data-aos="slide-up">
            <div class="bishoftu-img">
              <img loading="lazy" src="../assets/image/wellness.jpg" alt="" />
            </div>
            <div class="bishoftu-desc">
              <h4>Boston Day Spa</h4>
              <p>
                Experience our luxurious full service spa and salon located in
                the heart of Addis Ababa’s entertainment district.
              </p>
              <div class="explore">
                <nuxt-link to="/destinationboston">
                  EXPLORE
                  <hr />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="harmony">
      <div class="container">
        <div class="harmony-text">
          <h4>Harmony at its Finest</h4>
          <p>An endless variety of experiences await you.</p>
          <div class="explore">
            <nuxt-link to="/experience">
              EXPLORE
              <hr />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="special-offer">
      <div class="container">
        <h2>Gift Voucher</h2>
        <div class="special-offer-all" style="overflow-x: hidden">
          <div class="card-title">
            <h3>Destination Voucher</h3>
            <a href="">See All</a>
          </div>

          <div class="special-slide" data-aos="fade-in">
            <img loading="lazy" src="../assets/image/gift1.svg" alt="" />
            <img loading="lazy" src="../assets/image/gift2.svg" alt="" />
            <img loading="lazy" src="../assets/image/gift3.svg" alt="" />
          </div>
        </div>
        <div class="special-offer-all" style="overflow-x: hidden">
          <div class="card-title">
            <h3>Gift Card</h3>
            <a href="">See All</a>
          </div>
          <div class="special-slide" data-aos="fade-in">
            <img loading="lazy" src="../assets/image/gift4.svg" alt="" />
            <img loading="lazy" src="../assets/image/gift5.svg" alt="" />
            <img loading="lazy" src="../assets/image/gift6.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      checkIn: "",
      checkOut: "",
      location: "",
      data: "",
      showCarousel: false,
      video: false,
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
    this.showCarousel = true;
    this.video = true;
  },
  methods: {
    redirect() {
      window.open(
        "https://versavvymedia.com/reservation_system/reserve.php",
        "_blank"
      );
    },
  },
};
</script>

<style lang="scss">
.main {
  .welcome {
    margin-top: 6.25rem;
    .container {
      width: 100%-30%;
      .welcome-wrapper {
        display: grid;
        place-items: center;
        .welcome-img {
          img {
            width: 17rem;
          }
        }
        .welcome-desc {
          h4 {
            font-family: "Neue Helvetica Bold";
            font-size: 2rem;
            margin-top: 0.94rem;
            text-align: center;
            font-weight: 600;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            text-align: center;
          }
          .book-buttons {
            display: flex;
            gap: 0.5rem;
            margin-top: 1.88rem;
            width: 100%;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .welcome {
      .container {
        .welcome-wrapper {
          .welcome-img {
            img {
              width: 20rem;
            }
          }
          .welcome-desc {
            h4 {
              margin-top: 3.94rem;
              font-size: 3rem;
              text-transform: capitalize;
            }
            .book-buttons {
              justify-content: center;
              gap: 1rem;
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .welcome {
      margin-top: 8.13rem;
      .container {
        width: 100%-10%;
        .welcome-wrapper {
          display: flex;
          justify-content: center;
          gap: 3rem;
          .welcome-img {
            img {
              width: 23rem;
            }
          }
          .welcome-desc {
            width: 100%-60%;
            h4 {
              margin-top: 0rem;
              text-align: left;
            }
            p {
              margin-top: 1.88rem;
              text-align: left;
            }
            .book-buttons {
              justify-content: flex-start;
              gap: 1rem;
              margin-top: 2.88rem;
            }
          }
        }
      }
    }
  }

  .destinations {
    margin-top: 6.25rem;
    .container {
      display: grid;
      place-items: center;
      h2 {
        color: $kuriftu-brown;
        @extend .title;
        margin-top: 0.94rem;
        text-align: center;
      }
      p {
        margin-top: 0.94rem;
        color: $kuriftu-grey;
        font-size: 0.88rem;
        text-align: center;
      }
      .top-2,
      .bottom-3 {
        .bishoftu,
        .bishoftu1 {
          margin-top: 1.88rem;
          .bishoftu-img {
            img {
              width: 100%;
              height: 20rem;
              object-fit: cover;
            }
          }
          .bishoftu-desc {
            h4 {
              @extend .caps;
              margin-top: 0.94rem;
            }
            p {
              @extend .text;
              margin-top: 0.94rem;
              color: $kuriftu-black;
              text-align: left;
            }
            .explore {
              margin-top: 1.88rem;
              display: grid;
              place-items: left;
              a {
                font-size: 1rem;
                color: $kuriftu-grey;
                hr {
                  color: $kuriftu-grey;
                  width: 5rem;
                  border-style: solid;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .destinations {
      .container {
        .top-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-start;
          gap: 1rem;
        }
        .bottom-3 {
          display: grid;
          align-items: flex-start;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }
      }
    }
  }
  @include responsive($lg) {
    .destinations {
      margin-top: 8.13rem;
      .container {
        .top-2 {
          margin-top: 2.88rem;
          .bishoftu,
          .bishoftu1 {
            .bishoftu-desc {
              h4,
              p {
                margin-top: 1.88rem;
              }
            }
          }
        }
        .bottom-3 {
          margin-top: 2.88rem;
          .bishoftu {
            .bishoftu-desc {
              h4,
              p {
                margin-top: 1.88rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .destinations {
      .container {
        .top-2 {
          margin-top: 2.88rem;

          .bishoftu,
          .bishoftu1 {
            .bishoftu-img {
              img {
                width: 40rem;
              }
            }
            .bishoftu-desc {
              h4,
              p {
                margin-top: 1.88rem;
              }
            }
          }
        }
        .bottom-3 {
          margin-top: 2.88rem;
          .bishoftu {
            .bishoftu-img {
              img {
                width: 30rem;
                height: 30rem;
              }
            }
            .bishoftu-desc {
              h4,
              p {
                margin-top: 1.88rem;
              }
            }
          }
        }
      }
    }
  }
  .harmony {
    background: url("../assets/image/harmony.jpg") no-repeat;
    background-position: center center;
    background-size: cover;
    background-blend-mode: overlay;
    height: 40vh;
    width: 100%;
    // background-attachment: fixed;
    margin-top: 6.25rem;
    .container {
      position: relative;
      .harmony-text {
        // background: $kuriftu-white;
        justify-content: flex-end;
        width: 50%;
        position: absolute;
        right: 0;
        background: #fff;
        padding: 1rem;
        h4 {
          @extend .title;

          font-size: 1.2rem;
          color: $kuriftu-brown;
          font-weight: 700;
        }
        p {
          @extend .text;
          margin-top: 0.94rem;
          color: $kuriftu-black;
          font-size: 0.88rem;
          text-align: left;
        }
        .explore {
          margin-top: 1rem;
          display: grid;
          place-items: left;
          a {
            font-size: 0.7rem;
            color: $kuriftu-grey;
            hr {
              color: $kuriftu-grey;
              width: 5rem;
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .harmony {
      height: 50vh;

      .container {
        .harmony-text {
          width: 30%;
          .explore {
            a {
              font-size: 0.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .harmony {
      // background: url(../assets/image/harmony-min.jpg) no-repeat;

      margin-top: 8.13rem;
      .container {
        .harmony-text {
          h4 {
            font-size: 1.3rem;
          }
          p {
            font-size: 1rem;
          }
          width: 30%;
          .explore {
            a {
              font-size: 0.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .harmony {
      // background: url(../assets/image/harmony-min.jpg) no-repeat;
      height: 70vh;
      .container {
        .harmony-text {
          h4 {
            font-size: 2rem;
            line-height: 2rem;
          }
          p {
            font-size: 1.3rem;
          }
          width: 25%;
          .explore {
            a {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xxl) {
    .harmony {
      background: url(../assets/image/harmony2.jpg) no-repeat;
      background-position: center top;
    }
  }

  .memory {
    margin-top: 6.25rem;
    .container {
      display: grid;
      place-items: center;

      h2 {
        color: $kuriftu-brown;
        @extend .title;
        line-height: 1.2;
        margin-top: 0.94rem;
        text-align: center;
        text-transform: uppercase;
      }
      p {
        margin-top: 0.94rem;
        color: $kuriftu-grey;
        text-align: center;
      }
      .memory-slide {
        margin-top: 4.37rem;
        display: flex;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        gap: 1rem;
        width: 100%;
        &::-webkit-scrollbar {
          display: none;
        }
        .memory-slide-card {
          min-width: 100%;
          margin-bottom: 1rem;
          .owlImg {
            min-height: 26.25rem;
            object-fit: cover;
          }
          .img-bottom {
            background: $kuriftu-brown;
            padding: 1rem 0.75rem 1.19rem;
            h3 {
              @extend .caps;
            }
            .bottom-content {
              display: flex;
              justify-content: space-between;
              p {
                width: 15.94rem;
                color: $kuriftu-white;
                line-height: 1.3rem;
                text-align: left;
              }
              .arrow {
                width: 2rem !important;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .memory {
      .container {
        .memory-slide {
          gap: 2rem;
          .memory-slide-card {
            min-width: 21.69rem;
            margin-bottom: 1rem;
            .img-bottom {
              // h3 {
              // }
              .bottom-content {
                display: flex;
                justify-content: space-between;
                p {
                  width: 15.94rem;
                  color: $kuriftu-white;
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
  @include responsive($lg) {
    .memory {
      margin-top: 8.13rem;
    }
  }

  .wellness {
    margin-top: 6.25rem;
    overflow: hidden;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;

        margin-top: 0.94rem;
        text-align: left;
        // text-transform: uppercase;
      }
    }
    .wellness-slide {
      display: flex;
      margin-top: 1.88rem;
      gap: 2rem;
      margin-left: 1rem;
      width: 100vw;
      // height: 100vh;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .well-1 {
        min-width: 100%;
        width: 100%;
        height: 100%;
        transform: translateX(0%);
        position: relative;

        .image-name {
          position: absolute;
          background: $kuriftu-brown;
          margin-top: -2.7rem;

          padding: 0.5rem 1rem;

          h5 {
            // width: 90%;
            color: $kuriftu-white;
            @extend .text;
            margin-top: 0rem;
            text-align: left;
          }
        }
      }
    }
    .container {
      .wellness-button {
        margin-top: 1.88rem;
        display: flex;
        gap: 1rem;
        transform: translateX(30%);
      }
    }
  }
  @include responsive($md) {
    .wellness {
      .wellness-slide {
        // margin-left: 13rem;

        .well-1 {
          transform: translateX(50%);
          // min-width: none;
          .image-name {
            margin-top: -2.78rem;

            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      }
      .container {
        .wellness-button {
          margin-top: 4.37rem;
          transform: translateX(50%);
        }
      }
    }
  }
  @include responsive($lg) {
    .wellness {
      margin-top: 8.13rem;
      .wellness-slide {
        margin-top: 4.37rem;
        .well-1 {
          transform: translateX(100%);
          min-width: auto;
          img {
            width: 100%;
          }
          .image-name {
            margin-top: -3rem;
          }
        }
      }
      .container {
        .wellness-button {
          transform: translateX(30%);
        }
      }
    }
  }
  @include responsive($xl) {
    .wellness {
      margin-top: 8.13rem;
      .wellness-slide {
        margin-top: 4.37rem;

        .well-1 {
          .image-name {
            margin-top: -3rem;
          }
        }
      }
      .container {
        .wellness-button {
          margin-top: 4.37rem;
        }
      }
    }
  }
  @include responsive($xxl) {
    .wellness {
      // .wellness-slide {
      // }
      .container {
        .wellness-button {
          gap: 3rem;
          img {
            width: 3.5rem;
          }
        }
      }
    }
  }
  .special-offer {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .special-offer-all {
        // display: grid;
        // place-items: center;
        .card-title {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          h3 {
            color: $kuriftu-brown;
            margin-top: 2rem;
            font-size: 1.3rem;
          }
          a {
            margin-top: 2rem;
            color: $kuriftu-brown;
          }
        }
        .special-slide {
          margin-top: 1.88rem;
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 0.5rem;

          // .slide-card {
          //   img {
          //   }
          // }

          // .next-icon {
          //   // margin-left: -1rem;
          // }
        }
        .gift-desc {
          margin-top: 1.88rem;
          max-width: 29.9rem;
          h4 {
            @extend .title;
            margin-top: 0.94rem;
            color: $kuriftu-brown;
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
            display: flex;
            justify-content: left;

            margin-top: 1.88rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .special-offer {
      .container {
        .special-offer-all {
          .special-slide {
            .slide-card {
              img {
                width: 30rem;
              }
            }
          }
          .gift-desc {
            margin-left: 7rem;
            margin-right: 7rem;

            .book-buttons {
              display: flex;
              justify-content: left;

              margin-top: 1.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .special-offer {
      margin-top: 8.13rem;
      .container {
        .special-offer-all {
          grid-template-columns: 1fr 1fr;
          .special-slide {
            margin-top: 4.37rem;
            .slide-card {
              img {
                width: 70rem;
              }
            }

            .next-icon,
            .back-icon {
              img {
                width: 5rem;
              }
            }
          }
          .gift-desc {
            margin-left: 1rem;
            margin-right: 1rem;

            .book-buttons {
              display: flex;
              justify-content: left;

              margin-top: 1.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .special-offer {
      .container {
        .special-offer-all {
          .special-slide {
            .slide-card {
              img {
                width: 50rem;
              }
            }
          }
        }
      }
    }
  }
  .construction {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .construction-all {
        display: grid;
        place-items: center;
        margin-top: 1.88rem;
        .construction-img {
          img {
            width: 17rem;
          }
        }
        .constr-desc {
          max-width: 29.9rem;
          h4 {
            @extend .title;
            margin-top: 0.94rem;
            text-align: center;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            text-align: center;
            color: $kuriftu-grey;
          }
          .book-buttons {
            display: flex;
            justify-content: center;
            margin-top: 1.88rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .construction {
      .container {
        .construction-all {
          .construction-img {
            img {
              width: 20rem;
            }
          }
          // .constr-desc {
          //   margin-left: 5rem;
          //   margin-right: 5rem;
          // }
        }
      }
    }
  }
  @include responsive($lg) {
    .construction {
      margin-top: 8.13rem;
      .container {
        .construction-all {
          margin-top: 4.37rem;
          grid-template-columns: 1fr 1fr;
          .construction-img {
            img {
              width: 23rem;
            }
          }
          .constr-desc {
            h4 {
              margin-top: 0rem;
              text-align: left;
              font-size: 1.5rem;
            }
            p {
              margin-top: 1.88rem;
              text-align: left;
            }
            .book-buttons {
              justify-content: flex-start;
              gap: 1rem;
              margin-top: 2.88rem;
            }
          }
        }
      }
    }
  }
  .footer {
    background: $kuriftu-black;
    margin-top: 6.25rem;

    .container {
      .footer-wrapper {
        .footer-link-container {
          .upper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;

            .desti {
              .desti-title {
                color: $kuriftu-brown;
                @extend .title;
                margin-top: 4.37rem;
                text-align: center;
                font-size: 1rem;
                text-transform: uppercase;
              }
              .desti-list {
                text-align: center;
                margin-top: 1.88rem;
                margin-bottom: 1.88rem;
                // margin-left: 2rem;
                // gap: 3.31rem;
                div {
                  display: grid;
                  place-items: left;
                  gap: 1rem;
                  margin-top: 0.8rem;
                  .footer-link {
                    a {
                      color: $kuriftu-white;
                      font-size: 0.8rem;
                    }
                  }
                }
              }
            }
          }
        }
        .social {
          h3 {
            color: $kuriftu-brown;
            @extend .title;

            margin-top: 4.37rem;
            text-align: center;
            font-size: 1rem;
            text-transform: uppercase;
          }
          .icon-container {
            display: flex;
            justify-content: center;
            gap: 1.88rem;
            margin-top: 1.88rem;
            // width: 2rem;
          }
        }
      }
      hr {
        margin-top: 4.37rem;
        color: $kuriftu-brown;
      }
      .lower {
        display: grid;
        place-items: center;
        margin-top: 4.37rem;
        margin-bottom: 5rem;
        img {
          width: 10rem;
        }
        p {
          color: $kuriftu-white;
          font-size: 0.88rem;
          margin-top: 1.88rem;
          line-height: 1.3rem;
          text-align: center;
          a {
            color: $kuriftu-blue;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .footer {
      .container {
        .footer-wrapper {
          .footer-link-container {
            .upper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              place-items: center;

              .desti {
                .desti-title {
                  text-align: left;
                }
                .desti-list {
                  text-align: left;
                  margin-top: 0.98rem;
                  margin-bottom: 0.98rem;

                  div {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.3rem;
                    margin-top: 0.98rem;
                    .footer-link {
                      a {
                        color: $kuriftu-white;
                        font-size: 1rem;
                        text-align: left;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .lower {
          margin-bottom: 6.3rem;
          img {
            width: 15rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .footer {
      margin-top: 8.13rem;
      .container {
        .footer-wrapper {
          .footer-link-container {
            place-items: center;
            .upper {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 5rem;
              .desti {
                .desti-title {
                  text-align: left;
                }
                .desti-list {
                  text-align: left;
                  margin-top: 0.98rem;
                  margin-bottom: 0.98rem;
                }
              }
            }
          }
        }

        .lower {
          margin-bottom: 0rem;
          display: flex;
          justify-content: space-between;
          img {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .footer {
      .container {
        .footer-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 8rem;
          .footer-link-container {
            .upper {
              gap: 8rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xxl) {
    .footer {
      .container {
        .footer-wrapper {
          gap: 10rem;
          .footer-link-container {
            .upper {
              gap: 10rem;
            }
          }
        }
      }
    }
  }
  // @media screen and (min-width: 768px) {
  //   .footer .container .desti .desti-list div {
  //     flex-direction: column;
  //     margin-bottom: 1.13rem;
  //     gap: 1.13rem;
  //     margin-left: 0;
  //     align-items: flex-start;
  //   }

  //   .footer .container .desti {
  //     margin-bottom: 2.19rem;
  //   }

  //   .desti {
  //     text-align: right;
  //   }

  //   .footer-link-container {
  //     max-width: 29.5rem;
  //     margin: 0 auto;
  //     margin-top: 3.56rem;
  //   }

  //   .footer-link-container .upper {
  //     display: flex;
  //     justify-content: space-between;
  //   }

  //   .social {
  //     margin-bottom: 2.25rem;
  //   }

  //   .lower img {
  //     text-align: center;
  //     margin: 0 auto;
  //   }
  // }

  // @media screen and (min-width: 1024px) {
  //   .footer-link-container {
  //     display: flex;
  //     max-width: 90rem;
  //     margin: 0;
  //     flex: 1;
  //   }

  //   .footer-link-container .upper {
  //     flex: 1;
  //     justify-content: space-around;
  //   }

  //   .footer .container .footer-wrapper {
  //     display: flex;
  //   }

  //   .footer .lower {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     margin-bottom: 2rem;
  //   }

  //   .footer .lower img {
  //     margin: 0;
  //   }

  //   .footer .lower p {
  //     max-width: 30.38rem;
  //     text-align: right;
  //   }
  // }
}
</style>
