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
              <nuxt-link class="a-link active" to="awashexperience"
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
                    <nuxt-link class="a-link" to="awashexperience active"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashdining "
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashgallery"
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
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="awashaccommodation">
                <p>Accomodation</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link active" to="awashexperience"
                >Experiences
                <hr class="activeline"
              /></nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="awashwellness">Wellness</nuxt-link>
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
    <Dbox :data="exp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: [
        {
          title: "Crocodile Viewing",
          desc: `Kuriftu Awash is the perfect destination for people who want to pair their exhilarating adventures with creature comforts. On the banks of the river you can watch lazy crocodiles snoozing in the sun or floating in the river like dead logs of wood You can spend an enjoyable few hours marveling at their strong jaws, scaly backs and large nostrils lurking just beneath the water surface.`,
          img: "awash/exp/5.webp",
          link: "",
        },
        {
          title: "Camel Riding",
          desc: `Head out into the sunset as part of a camel caravan as you take in the breath-taking beauty`,
          img: "awash/exp/3.webp",
        },
        {
          title: "Birdwatching ",
          desc: `Witness the so many truly amazing birds with exceptional appearances`,
          img: "awash/exp/6.webp",
        },
        {
          title: "Safari Tours",
          desc: ` If you are a nature lover and wish to experience some of the culture and history that surrounds us, then have a look at our safari tour. Awash has unique landscapes making ita wonder to experinace.`,
          img: "awash/exp/1.webp",
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
}
</style>
