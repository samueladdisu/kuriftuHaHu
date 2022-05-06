<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/afar-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="afaraccommodation"
                ><p>Afar</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="afaraccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afarexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afarwellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afardining">Dining</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afarevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="afargallery"
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
              <nuxt-link class="a-link active" to="/destinationafar"
                >Afar</nuxt-link
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="afaraccommodation"
                ><p>Accomodation</p></nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afarexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afarwellness">Wellness</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="afardining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link active" to="afarevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="afargallery">Gallery</nuxt-link>
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

    <Dbox :data="event" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Celebration & Events",
        desc: `listening to tropical and the gentle nature from the privacy of your
            luxurious villa , there is simply no more romantic or exotic setting
            for your special occasion. Whether you are planning a honeymoon or
            celebrating a wedding, an anniversary, or a birthday, we can take
            care of all the details, so you will return home relaxed,
            rejuvenated and with memories you’ll cherish for a lifetime.`,
      },
      event: [
        {
          title: "Wedding",
          desc: `Dreaming of a wedding destination that's as pure, wild and gentle as your love? At our resort you and your guests will find the adventure od a lfetime, sourrounded by____________. Suited for _____ guests  our venue is the perfect setting for an intimate celebration filled with romance.`,
          img: "entoto0.jpg",
        },
        {
          title: "Conferences",
          desc: `Invite your guests to experience the once in a lifetime discoveries and natural surroundings of Kuriftu Bishoftu. Our resort hold the key to endless exploration and provide unique ways to team build and connect. `,
          img: "entoto9.jpg",
        },
        {
          title: "Retreats",
          desc: `Known for our hospitality in an all-inclusive setting, we set the stage for an unforgettable retreat`,
          img: "celebration.jpg",
        },
        {
          title: "Birthdays",
          desc: `Celebrate your birthday at our resort in an amazing scenery and our scrumptious cake prepared by our staff with love to offer you a memorable birthday.`,
          img: "bishoftu/dinning/waterpark.webp",
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
  .top-gallery {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
}
</style>
