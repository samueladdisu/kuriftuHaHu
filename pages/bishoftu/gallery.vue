<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/bishoftu-logo.svg`)" />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <section class="top-gallery">
      <div class="container">
        <div class="image-wrapper">
          <div class="single-image" data-aos="zoom-in">
            <img loading="lazy" src="../../assets/image/dz-cover.jpg" alt="" />
          </div>
          <div class="single-image1 grid-top3" data-aos="zoom-in">
            <img
              loading="lazy"
              src="../../assets/image/waterpark2.jpg"
              alt=""
            />
          </div>
          <div class="single-image1 grid-top" data-aos="zoom-in">
            <img
              src="../../assets/image/kuriftu dec 22-5391-min (1).jpg"
              alt=""
            />
          </div>
          <div class="single-image grid-top2" data-aos="zoom-in">
            <img
              src="../../assets/image/kuriftu dec 22-5422-min (1).jpg"
              alt=""
            />
          </div>
          <div class="single-image grid-top" data-aos="zoom-in">
            <img
              loading="lazy"
              src="../../assets/image/_DSC5641 (2)-min.jpg"
              alt=""
            />
          </div>
          <div class="single-image1 grid-top3" data-aos="zoom-in">
            <img
              loading="lazy"
              src="../../assets/image/_DSC5351 (2)-min.jpg"
              alt=""
            />
          </div>
          <div class="single-image1 grid-top" data-aos="zoom-in">
            <img
              loading="lazy"
              src="../../assets/image/_DSC5820 (2)-min.jpg"
              alt=""
            />
          </div>

          <div class="single-image grid-top2" data-aos="zoom-in">
            <img
              loading="lazy"
              src="../../assets/image/_DSC5400 (2)-min.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="see-more">
          <hr class="see-line" />
          <p>Gallery</p>
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
  .top-gallery {
    margin-top: 5rem;
    display: grid;
    place-items: center;
    @include responsive($lg) {
      margin-top: 8rem;
    }
    .container {
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
      .see-more {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: 3rem;
        @include responsive($md) {
          margin-top: 5rem;
        }
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
          width: 6rem;
        }
      }
    }
  }
  .image-popup {
    // position: absolute;
    .container {
      .popup-wrapper {
        padding: 1rem;
        background: #fdfdf5;

        box-shadow: 10px 10px 15px rgba(194, 135, 74, 0.1);
        @include responsive($md) {
          padding: 2rem;
        }

        .close {
          display: flex;
          justify-content: space-between;
          place-items: center;
          .gallery-title {
            p {
              text-transform: uppercase;
              margin-top: 1rem;
              color: $kuriftu-grey;
              font-size: 0.8rem;
              font-weight: 700;
              line-height: 1.3rem;
              text-align: left;
            }
          }
          .close-btn {
            img {
              width: 1rem;
              @include responsive($md) {
                width: 1.5rem;
              }
            }
          }
        }
        .image {
          margin-top: 1rem;

          margin-right: 0.5rem;
          @include responsive($md) {
            margin-top: 1.5rem;
          }
          img {
            height: 60vh;
            object-fit: cover;
            @include responsive($md) {
              height: 40rem;
              width: 100%;
            }
          }
        }
        .next {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          @include responsive($md) {
            margin-top: 1.5rem;
          }
          .dest-title {
            p {
              text-transform: uppercase;

              color: $kuriftu-grey;
              font-size: 0.6rem;
              font-weight: 600;
              line-height: 1.3rem;
              text-align: left;
              @include responsive($md) {
                font-size: 0.7rem;
              }
            }
          }
          .next-btn {
            display: flex;
            gap: 0.5rem;
            align-content: center;
            img {
              width: 1.8rem;
              @include responsive($md) {
                width: 2.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
