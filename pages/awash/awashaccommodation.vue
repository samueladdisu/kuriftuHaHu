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
              <nuxt-link class="a-link active" to="awashaccommodation"
                ><p>Awash</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link active" to="awashaccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="awashwellness"
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
              <nuxt-link class="a-link active" to="awashaccommodation">
                <p>Accomodation</p>
                <hr class="activeline" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="awashexperience"
                >Experiences</nuxt-link
              >
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
    <Dbox :data="accData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      accData: [
        {
          title: "Presidential",
          desc: ` A spacious room with two kind sized beds, a private spa room and a dining table. Featuring garden and lakefront view.`,
          img: "bishoftu/presidential/pre7.webp",
          link: "/book",
        },
        {
          title: "Loft",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "awash/accommodation/1.webp",
          link: "/book",
        },
        {
          title: "Top View",
          desc: ` Situated at the top of the resort with beautiful lakefront view. Available with king size or double bed option.`,
          img: "awash/accommodation/2.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `A spacious room with a lakefront view. Available with king size or double bed option.`,
          img: "awash/accommodation/3.webp",
          link: "/book",
        },
        {
          title: "Executive Suite",
          desc: `Uniquely designed with modern amenities and plenty of natural lighting. Available with king size or double bed option.`,
          img: "awash/accommodation/4.webp",
          link: "/book",
        },
        {
          title: "Garden View",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad expedita optio vel, recusandae deserunt! Dolorem nihil doloremque magnam sapiente?`,
          img: "awash/accommodation/5.webp",
          link: "/book",
        },
        {
          title: "Standard Classic",
          desc: `A room with a private backyard garden view. These spacious rooms enjoy a peaceful setting in the heart of the resort.`,
          img: "awash/accommodation/6.webp",
          link: "/book",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
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

