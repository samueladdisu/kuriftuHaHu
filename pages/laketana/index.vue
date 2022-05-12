<template>
  <div class="main">
    <Destinationheader :src="require(`@/assets/image/tana-logo.svg`)" />
    <Destinav base="laketana/" home="laketana/" dir="Lake Tana" />

    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <!-- <img src="../assets/image/tana.jpg" alt="" /> -->
          <!-- <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/705261600?h=dbf94e2334&autoplay=1&loop=1&title=0&byline=0&portrait=0"
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
          <script src="https://player.vimeo.com/api/player.js"></script> -->

          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/708087309?h=83a71333e6&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
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
export default {
  data() {
    return {
      photos: [
        "tana/firstSlider/1.webp",
        "tana/firstSlider/2.webp",
        "tana/firstSlider/3.webp",
        "tana/firstSlider/4.webp",
        "tana/firstSlider/5.webp",
        "tana/firstSlider/6.webp",
      ],
      top: {
        title: "Lake Tana",
        desc: `Your Ethiopian adventure is not complete until you make way to
              Lake Tana, the source of the legendary Blue Nile. Located in Bahir
              Dar, immerse yourself in the history of Ethiopia with landscapes
              of native architecture and cool shoreside weather all year round.`,
      },
      acc: {
        title: "Accomodation",
        desc: `Find your choice of modern and thoughtful
      accommodations at Kuriftu Resort & Spa Bishoftu. Each elegantly appointed resort room and spacious suite at Kuriftu offers exceptional luxuries
      with locally inspired architectural spaces alongside premier resort amenities. Crafted experiences begin and end at Kuriftu.`,
        url: "laketana/tanaaccommodation",
        link: "View All Accomodation",
        photos: [
          "tana/acc/1.webp",
          "tana/acc/2.webp",
          "tana/acc/3.webp",
          "tana/acc/4.webp",
          "tana/acc/5.webp",
        ],
      },
      dinning: {
        title: "Dining",
        desc: ` Whether you’re celebrating a birthday, honeymoon, anniversary or a longmawaited family vacation, our team is delighted to create
        a personalized dining experience for you from intimate and
        romantic, to interactive and adventurous.`,
        url: "laketana/tanadining",
        link: "View All Dining",
        photos: [
          "tana/dining/1.webp",
          "tana/dining/2.webp",
          "tana/dining/3.webp",
          "tana/dining/4.webp",
        ],
      },
      wellness: {
        title: "Wellness",
        desc: `Our spa is a unique haven of tranquilllity nestled on a restful architecture. it perpetuates the tradtion established by Ethiopian royal families who used to retreat to relax and indulge in beauty rituals.`,
        url: "laketana/tanawellness",
        link: "View All wellness",
        photos: [
          "entoto/well/1.webp",
          "entoto/well/2.webp",
          "entoto/well/3.webp",
          "entoto/well/4.webp",
          "entoto/well/5.webp",
          "entoto/well/6.webp",
          "entoto/well/7.webp",
          "entoto/well/8.webp",
          "entoto/well/9.webp",
          "entoto/well/10.webp",
          "entoto/well/11.webp",
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
        url: "laketana/tanaevent",
        link: "View All Celebration & Events",
        photos: [
          "tana/events/1.webp",
          "tana/events/2.webp",
          "tana/events/3.webp",
        ],
      },
      exp: {
        title: "Experience",
        desc: `This Adventure Park is the first of its kind in Ehiopia and has even been selected as one of the top destinations in the world by Conde Nast Traveler. Our park is absolitely beyond cpmpare and is a must for national park enthusiasts. You can come accros a variety of landscapes which offer some incredible hiking experiances.`,
        url: "laketana/tanaexperience",
        link: "View All Experience",
        photos: ["tana/exp/1.webp", "tana/exp/2.webp"],
      },
    };
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
              background: $kuriftu-blue;
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
