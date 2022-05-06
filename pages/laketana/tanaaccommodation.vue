<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/tana-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="tanawellness"
                ><p>Lake Tana</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="tanaaccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="tanaexperience"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link active" to="tanawellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="tanadining">Dining</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="tanaevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="tanagallery "
                      >Gallery</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
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
              <nuxt-link class="a-link active" to="/destinationlaketana"
                >Tana</nuxt-link
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link active" to="tanaaccommodation">
                <p>Accomodation</p>
                <hr class="activeline" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="tanaexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="tanawellness">Wellness</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="tanadining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="tanaevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="tanagallery">Gallery</nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
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
          img: "tana/acc/1.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "tana/acc/2.webp",
          link: "/book",
        },
        {
          title: "Presidential",
          desc: ` A spacious room with two kind sized beds, a private spa room and a dining table. Featuring garden and lakefront view.`,
          img: "tana/acc/3.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "tana/acc/4.webp",
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

