<template>
  <div class="main">
    <Destinationheader :src="require(`@/assets/image/entoto-logo.svg`)" />
    <Destinav base="entoto/" home="entoto/" dir="Entoto" />
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <!-- <img src="../assets/image/entoto-bg2.jpg" alt="" /> -->
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/705084951?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1"
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
export default {
  data() {
    return {
      photos: [
        "entoto/firstSlider/1.webp",
        "entoto/firstSlider/2.webp",
        "entoto/firstSlider/3.webp",
        "entoto/firstSlider/4.webp",
        "entoto/firstSlider/5.webp",
        "entoto/firstSlider/6.webp",
        "entoto/firstSlider/7.webp",
      ],
      top: {
        title: "Entoto",
        desc: `This Adventure Park is the first of its kind in Ethiopia and has
              even been selected as one of the top destinations in the world by
              Conde Nast Traveler. Our park is absolutely beyond comparable and
              is a must for national park enthusiasts. You can come accros a
              variety of landscapes which offer some incredible hiking
              experiances.`,
      },
      acc: {
        title: "Accomodation",
        desc: `Find your choice of modern and thoughtful
      accommodations at Kuriftu Resort & Spa Bishoftu. Each elegantly appointed resort room and spacious suite at Kuriftu offers exceptional luxuries
      with locally inspired architectural spaces alongside premier resort amenities. Crafted experiences begin and end at Kuriftu.`,
        url: "entoto/entotoaccommodation",
        link: "View All Accomodation",
        photos: [
          "entoto/acc/1.webp",
          "entoto/acc/2.webp",
          "entoto/acc/3.webp",
          "entoto/acc/1.webp",
        ],
      },
      dinning: {
        title: "Dining",
        desc: ` Whether you’re celebrating a birthday, honeymoon, anniversary or a longmawaited family vacation, our team is delighted to create
        a personalized dining experience for you from intimate and
        romantic, to interactive and adventurous.`,
        url: "entoto/entotodining",
        link: "View All Dining",
        photos: [
          "bishoftu/dinning/Lake_Side_Cabana.webp",
          "bishoftu/dinning/Lake_Side_Main_Restaurant.webp",
          "bishoftu/dinning/Lequanda.webp",
          "bishoftu/dinning/waterpark.webp",
        ],
      },
      wellness: {
        title: "Wellness",
        desc: `Our spa is a unique haven of tranquilllity nestled on a restful architecture. it perpetuates the tradtion established by Ethiopian royal families who used to retreat to relax and indulge in beauty rituals.`,
        url: "entoto/entotowellness",
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
        url: "entoto/entotoevent",
        link: "View All Celebration & Events",
        photos: [
          "entoto0.jpg",
          "entoto9.jpg",
          "celebration.jpg",
          "bishoftu/firstSlider/6.webp",
          "bishoftu/firstSlider/7.webp",
        ],
      },
      exp: {
        title: "Experience",
        desc: `This Adventure Park is the first of its kind in Ehiopia and has even been selected as one of the top destinations in the world by Conde Nast Traveler. Our park is absolitely beyond cpmpare and is a must for national park enthusiasts. You can come accros a variety of landscapes which offer some incredible hiking experiances.`,
        url: "entoto/entotoexperience",
        link: "View All Experience",
        photos: [
          "entoto/exp/1.webp",
          "entoto/exp/2.webp",
          "entoto/exp/3.webp",
          "entoto/exp/4.webp",
          "entoto/exp/5.webp",
          "entoto/exp/6.webp",
          "entoto/exp/7.webp",
          "entoto/exp/8.webp",
          "entoto/exp/9.webp",
          "entoto/exp/10.webp",
          "entoto/exp/11.webp",
        ],
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
