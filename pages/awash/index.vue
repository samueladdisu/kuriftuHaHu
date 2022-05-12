<template>
  <div class="main">
    <Destinationheader :src="require(`@/assets/image/AWASH-Color side.svg`)" />
    <Destinav base="awash/" home="awash/" dir="Awash" />
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="@/assets/image/Awash-bg.jpg" alt="" />
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
        "awash/firstSlider/1.webp",
        "awash/firstSlider/2.webp",
        "awash/firstSlider/3.webp",
        "awash/firstSlider/4.webp",
        "awash/firstSlider/5.webp",
        "awash/firstSlider/6.webp",
        "awash/firstSlider/7.webp",
        "awash/firstSlider/8.webp",
        "awash/firstSlider/9.webp",
      ],
      top: {
        title: "Awash Falls",
        desc: `Located on the Southern tip of Awash National Park, our one of a kind 10 room boutique resort suspended over a waterfall, places guests at an elevation that is unique to our property. With views of crocodiles on the river bank, refreshing mist from the edge of the falls paired with unmatched scenery, we offer the ultimate experience to our visitors. There is nothing more refreshing than getting out of the city, feeling the breeze, and hearing the sound of the waterfall`,
      },
      acc: {
        title: "Accomodation",
        desc: ` Rooms showcase the lush and beautiful mountain backdrop that surrounds you.`,
        url: "awash/awashaccommodation",
        link: "View All Accomodation",
        photos: [
          "awash/accommodation/1.webp",
          "awash/accommodation/2.webp",
          "awash/accommodation/3.webp",
          "awash/accommodation/4.webp",
          "awash/accommodation/5.webp",
          "awash/accommodation/6.webp",
          "awash/accommodation/7.webp",
          "awash/accommodation/8.webp",
          "awash/accommodation/9.webp",
          "awash/accommodation/10.webp",
        ],
      },
      dinning: {
        title: "Dining",
        desc: `Designed to highlight our unparalleled view of the park, our Restaurant & Bar is decorated with natural light flooding the space with colorful accents, stone structures and brick elements, creating an organic vibrance for our guests to absorb. From a wide selection of international wines to signature cocktails and a set menu made-up of locally sourced ingredients, our dining experience fully encompasses our guests’ needs. `,
        url: "awash/awashdining",
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
        photos: [
          "awash/exp/1.webp",
          "awash/exp/2.webp",
          "awash/exp/3.webp",
          "awash/exp/4.webp",
          "awash/exp/5.webp",
          "awash/exp/6.webp",
          "awash/exp/7.webp",
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
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
