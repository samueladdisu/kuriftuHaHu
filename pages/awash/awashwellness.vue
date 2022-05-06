<template>
  <div class="main">
    <Destinationheader
      :src="require(`../../assets/image/AWASH-Color side.svg`)"
    />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="awashwellness"
                ><p>Awash</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="awashaccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link active" to="awashwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashdining"
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashgallery "
                      >Gallery</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link
                      class="a-link"
                      to="https://versavvymedia.com/reservation_system/reserve.php"
                      >Reserve</nuxt-link
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
              <nuxt-link class="a-link active" to="/destinationawash"
                >Awash</nuxt-link
              >
              <img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="awashaccommodation">
                <p>Accomodation</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link" to="awashexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link active" to="awashwellness"
                >Wellness
                <hr class="activeline"
              /></nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="awashdining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="awashevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="awashgallery">Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="a-link"
                to="https://versavvymedia.com/reservation_system/reserve.php"
                >Reserve</nuxt-link
              >
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>

    <section class="top-gallery">
      <TabHeader :head="header" />
    </section>

    <Dbox :data="wellness" />

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Wellness",
        desc: `Our spa is a unique haven of tranquilllity nestled on a restful
            architecture. it perpetuates the tradtion established by Ethiopian
            royal families who used to retreat to relax and indulge in beauty
            rituals.`,
      },
      wellness: [
        {
          title: "Massage By The Falls",
          desc: `Our Spa offers unique massage rooms located on the banks of the Awash River where guests will have the opportunity to relax to the sound of the waterfall while receiving a well deserved massage.`,
          img: "entoto/well/10.webp",
        },
        {
          title: "Dipping Pool",
          desc: `We are excited to present our first Dipping Pool experience paired with our Bar & Grill on an elevated platform overlooking the landscape. The perfect destination for a romantic getaway with pictures - perfect views from sunrise to sunset.`,
          img: "awash/exp/2.webp",
        },
        {
          title: "Yoga ",
          desc: `Revive your senses and rejuvenate your body. Our Spa experiences are designed to invigorate, relax, restore and replenish body, mind and spirit.`,
          img: "entoto/well/9.webp",
        },
      ],
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
  .top-gallery {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
}
</style>
