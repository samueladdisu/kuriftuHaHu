<template>
  <div class="main">
   <Destinationheader />
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
                 <nuxt-link  class="a-link active" to="/destinationentoto">Entoto</nuxt-link 
              >
              <img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link  class="a-link " to="entotoaccommodation"> <p>Accomodation</p> </nuxt-link > 
            </li>
             <li><nuxt-link  class="a-link "   to="entotogallery">Gallery</nuxt-link ></li>
            <li><nuxt-link  class="a-link "  to="entotoexperience">Experiences</nuxt-link ></li>
            <li><nuxt-link  class="a-link  active"  to="entotowellness">Wellness <hr class="activeline"
              /></nuxt-link></li>
                <li><nuxt-link  class="a-link "  to="entotodining">Dining</nuxt-link ></li>
            <li>
              <nuxt-link  class="a-link " to="entotoevent">Celebration & Events</nuxt-link >
              </li>
            <li>
              <nuxt-link  class="a-link " to="/reserve">Reserve</nuxt-link >
              </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>

    <section class="top-gallery">
      <div class="container">
        <div class="main-title">
          <h2>Wellness</h2>
          <p>
            Our spa is a unique haven of tranquilllity nestled on a restful
            architecture. it perpetuates the tradtion established by Ethiopian
            royal families who used to retreat to relax and indulge in beauty
            rituals.
          </p>
        </div>

        <div class="image-wrapper">
          <div class="single-image" data-aos="zoom-in">
            <img src="../../assets/image/wellness.jpg" alt="" />
          </div>
          <div class="single-image1 grid-top3" data-aos="zoom-in">
            <img src="../../assets/image/Icons/kuriftuentoto2.jpg" alt="" />
          </div>
          <div class="single-image1 grid-top" data-aos="zoom-in">
            <img src="../../assets/image/_DSC1724-min.jpg" alt="" />
          </div>
          <div class="single-image grid-top2" data-aos="zoom-in">
            <img src="../../assets/image/Icons/kuriftuentoto.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="spa-special-offer">
      <div class="container">
        <div class="special-offer-all">
          <div class="special-slide" data-aos="slide-up">
            <!-- <div class="back-icon">
              <img src="../../assets/image/Icons/spaback.svg" alt="" />
            </div> -->
            <div class="slide-card">
              <img src="../../assets/image/spaspecial.jpg" alt="" />
            </div>
            <!-- <div class="next-icon">
              <img src="../../assets/image/Icons/spanext.svg" alt="" />
            </div> -->
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
    <section class="spa-menu">
      <div class="container">
        <div class="menu-wrapper">
          <h3>Menu</h3>
          <div class="menu-card">
            <div class="menu-single">
              <div class="menu-img">
                <img src="../../assets/image/Icons/kuriftuentoto2.jpg" alt="" />
              </div>
              <div class="menu-title">
                <h4>SAUNNA</h4>
              </div>
            </div>

            <div class="menu-single">
              <div class="menu-img">
                <img src="../../assets/image/_DSC1724-min.jpg" alt="" />
              </div>
              <div class="menu-title">
                <h4>massage</h4>
              </div>
            </div>
            <div class="menu-single">
              <div class="menu-img">
                <img src="../../assets/image/entoto11.jpg" alt="" />
              </div>
              <div class="menu-title">
                <h4>Spa day</h4>
              </div>
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
  components: {
    Event,
  },
  data() {
    return {
      checkIn: "",
      checkOut: "",
      location: "",
      data: "",
      showNav: false,
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
  @include responsive($lg) {
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
  .top-gallery {
    margin-top: 5rem;
    display: grid;
    place-items: center;
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
      .image-wrapper {
        display: grid;
        place-items: center;
        @include responsive($md) {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @include responsive($xl) {
          gap: 3rem;
        }
        .single-image {
          margin-top: 2rem;
          img {
            width: 20rem;
            height: 30rem;
            object-fit: cover;
            @include responsive($lg) {
              width: 30rem;
              height: 40rem;
            }
            @include responsive($xl) {
              width: 55rem;
              height: 40rem;
            }
          }
        }
        .single-image1 {
          margin-top: 2rem;
          img {
            width: 20rem;
            height: 20rem;
            object-fit: cover;
            @include responsive($lg) {
              width: 30rem;
              height: 30rem;
            }
            @include responsive($xl) {
              width: 55rem;
              height: 30rem;
            }
          }
        }
        @include responsive($md) {
          .grid-top {
            margin-top: 1rem;
          }
          .grid-top2 {
            margin-top: -9rem;
          }
          .grid-top1 {
            margin-top: -1rem;
          }
          .grid-top3 {
            margin-top: -8rem;
          }
        }
        @include responsive($xl) {
          .grid-top {
            margin-top: 1rem;
          }
          .grid-top2 {
            margin-top: -9rem;
          }
          .grid-top3 {
            margin-top: -8rem;
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
  .spa-menu {
    margin-top: 5rem;
    @include responsive($md) {
      margin-top: 8rem;
    }
    .container {
      .menu-wrapper {
        h3 {
          @extend .title;
          font-size: 1.5rem;
          text-transform: uppercase;
        }
        .menu-card {
          display: grid;
          @include responsive($md) {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          @include responsive($lg) {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 3rem;
          }
          .menu-single {
            position: relative;
            margin-top: 2rem;

            .menu-img {
              position: relative;
              img {
               width:100%;
                height: 18rem;
                object-fit: cover;
              }
              &::after {
                content: " ";
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                z-index: 998;
                background: rgba(25, 30, 25, 0.6);
              }
            }
            .menu-title {
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
               z-index: 999;
              display: grid;
              place-items: center;
              h4 {
                font-size: 1.5rem;
                text-transform: uppercase;
                color: $kuriftu-white;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
