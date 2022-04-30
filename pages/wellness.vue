<template>
  <div class="main">
    <HeaderApp :src="require(`../assets/image/wellness.jpg`)" />

    <section class="wellness-option">
      <div class="container">
        <div class="wellness-links">
          <ul>
            <li><a class="active" href="#">Boston Day Spa</a></li>
            <li><a href="#">Entoto</a></li>
            <li><a href="#">Bishoftu</a></li>
            <li><a href="#">Lake Tana</a></li>
            <li><a href="#">Awash</a></li>
            <li><a href="#">Semera</a></li>
          </ul>
        </div>
        <div class="wellness-wrapper">
          <div class="wellness-card" data-aos="slide-up">
            <div class="wellness-img">
              <img src="../assets/image/Spa.jpg" alt="" />
            </div>
            <h2>Massage</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
          <div class="wellness-card" data-aos="slide-up" data-aos-delay="500">
            <div class="wellness-img">
              <img src="../assets/image/spa2.jpg" alt="" />
            </div>
            <h2>Spa Day</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
          <div class="wellness-card" data-aos="slide-up" data-aos-delay="600">
            <div class="wellness-img">
              <img src="../assets/image/spa3.jpg" alt="" />
            </div>
            <h2>Sauana</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
          <div class="wellness-card" data-aos="slide-up">
            <div class="wellness-img">
              <img src="../assets/image/spa4.jpg" alt="" />
            </div>
            <h2>Manicure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
          <div class="wellness-card" data-aos="slide-up" data-aos-delay="500">
            <div class="wellness-img">
              <img src="../assets/image/Spa.jpg" alt="" />
            </div>
            <h2>Massage</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
          <div class="wellness-card" data-aos="slide-up" data-aos-delay="600">
            <div class="wellness-img">
              <img src="../assets/image/spa3.jpg" alt="" />
            </div>
            <h2>Sauana</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus
            </p>
            <div class="book-buttons">
              <a class="btn btn-blue" href="#">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="spa-special-offer">
      <div class="container">
        <div class="special-offer-all">
          <div class="special-slide" data-aos="slide-up">
            <div class="back-icon">
              <img src="../assets/image/Icons/spaback.svg" alt="" />
            </div>
            <div class="slide-card">
              <img src="../assets/image/spaspecial.jpg" alt="" />
            </div>
            <div class="next-icon">
              <img src="../assets/image/Icons/spanext.svg" alt="" />
            </div>
          </div>
          <div class="gift-desc" data-aos="slide-up">
            <h3>special offer</h3>
            <h4>Gift Vouchers</h4>
            <p class="header-title">
              Treat your loved ones to Ethiopia’s greatest family destination
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam
              lectus at massa enim elementum varius dictumst. Nulla a, sed enim
              turpis non lacinia fusce. Quis volutpat sit ullamcorper vitae
              magna vel sit pharetra scelerisque.
            </p>
            <div class="book-buttons">
              <a class="btn btn-outline-black" href="#">GET OFFERS</a>
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
import HeaderApp from "../components/HeaderApp.vue";

export default {
  components: {
    HeaderApp,
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
  .wellness-option {
    margin-top: 6.25rem;
    .container {
      .wellness-links {
        display: grid;
        place-items: center;

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-left: 3rem;
          gap: 1.3rem;

          li {
            a {
              @extend .title;
              font-size: 0.9rem;
              text-transform: uppercase;
              color: $kuriftu-grey;
              text-align: left;

              &:hover {
                color: $kuriftu-blue;
              }
              .active {
                color: $kuriftu-blue;
              }
            }
          }
        }
      }
      .wellness-wrapper {
        margin-top: 1.88rem;
        // display: grid;
        // place-items: center;
        .wellness-card {
          width: 18rem;
          margin: 0 auto;
          margin-top: 1.88rem;
          // .wellness-img {
          //   img {

          //   }
          // }
          h2 {
            color: $kuriftu-blue;
            @extend .caps;
            margin-top: 0.94rem;
            text-align: left;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 1rem;
            line-height: 1.3rem;
            text-align: left;
          }
          .book-buttons {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .wellness-option {
      .container {
        .wellness-links {
          ul {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-left: 0rem;
          }
        }
        .wellness-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          // gap: 1rem;
          .wellness-card {
            width: 18rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .wellness-option {
      margin-top: 8.13rem;
      .container {
        .wellness-wrapper {
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          .wellness-card {
            width: 18rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .wellness-option {
      .container {
        .wellness-wrapper {
          .wellness-card {
            width: 20rem;
          }
        }
      }
    }
  }
  .spa-special-offer {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .special-offer-all {
        display: grid;
        place-items: center;
        // margin: 0 auto;
        // width: 20rem;
        .special-slide {
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 0.5rem;
          .back-icon,
          .next-icon {
            img {
              width: 2rem;
            }
          }
        }
        .gift-desc {
          margin-top: 1.88rem;
          margin-left: 1rem;
          margin: 0 auto;
          width: 20rem;
          h3 {
            @extend .nav;
            margin-top: 0.94rem;
            font-size: 0.7rem;
            letter-spacing: 0.2rem;
            line-height: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            text-transform: uppercase;
            color: $kuriftu-grey;
          }
          h4 {
            @extend .title;
            margin-top: 1.88rem;
            color: $kuriftu-black;
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
    .spa-special-offer {
      // width: 100%;
      .container {
        .special-offer-all {
          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }
          }
          .gift-desc {
            width: 25rem;
            // margin-left: 5rem;
            // margin-right: 5rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .spa-special-offer {
      margin-top: 8.13rem;
      .container {
        .special-offer-all {
          display: flex;

          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }

            .next-icon,
            .back-icon {
              img {
                width: 2rem;
              }
            }
          }
          .gift-desc {
            margin-left: 1rem;
            margin-right: 1rem;
            margin: 0 auto;
            width: 25rem;
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
    .spa-special-offer {
      .container {
        .special-offer-all {
          display: flex;
          align-items: flex-start;
          .special-slide {
            .slide-card {
              img {
                width: 30rem;
              }
            }
          }
          .gift-desc {
            margin-left: 2rem;
            margin-right: 2rem;
            width: 30rem;
          }
        }
      }
    }
  }
}
</style>