<template>
  <div class="whole-nav">
    <div class="nav-menu">
      <div class="menu-close" @click="closeNav">
        <div class="line">
          <hr class="frist-line" />
          <hr class="second-line" />
        </div>
      </div>
      <div class="logo">
        <nuxt-link to="/">
          <img src="../assets/image/LOGO 2.svg" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div class="container">
      <div class="three-col">
        <div class="main-links first" v-if="showFirst">
          <ul class="nav-links">
            <li>
              <a @click="openDesti">Destinations</a>
            </li>
            <li>
              <a @click="openResorts">Resorts</a>
            </li>
            <li>
              <a @click="openExp">Experiences</a>
            </li>
            <li>
              <a @click="openWell">Wellness</a>
            </li>
            <li>
              <nuxt-link to="/event"> Celebration & Events</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/giftcard">Gift Card </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/book">
                <!-- <a href="https://versavvymedia.com/reservation_system/reserve.php"
                >Reservation</a
              > -->
                Reservation
              </nuxt-link>
            </li>
            <li class="bottom-nav">
              <nuxt-link to="/aboutus" class="bottom-link">
                About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="bottom-link">
                Contact Us
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div><hr /></div>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div class="main-links second" v-if="showNext">
            <img
              src="../assets/image/left.svg"
              class="back"
              @click="openDesti"
              alt=""
            />
            <ul class="nav-links">
              <div v-if="desti">
                <li>
                  <a @click="openAddis">Addis Abeba</a>
                </li>
                <li>
                  <nuxt-link to="/afar"> Afar </nuxt-link>
                </li>
                <li>
                  <a @click="openAwash"> Awash</a>
                </li>
                <li>
                  <a @click="openBish"> Bishoftu</a>
                </li>
                <li>
                  <a @click="openBahirdar"> Bahirdar</a>
                </li>
              </div>

              <div v-if="resorts">
                <li>
                  <nuxt-link to="/bishoftu"
                    >Kuriftu Resort & Spa Bishoftu</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/laketana"
                    >Kuriftu Resort & Spa Lake Tana</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/awash"
                    >Kuriftu Resort & Spa Awash Falls</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/afar">Kuriftu Resort & Spa Afar</nuxt-link>
                </li>
              </div>
              <div v-if="exp">
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/waterpark">Kuriftu Water Park</nuxt-link>
                </li>
              </div>
              <div v-if="well">
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/destinationboston">Boston Day Spa</nuxt-link>
                </li>
              </div>
            </ul>
          </div>
        </transition>
        <!-- <div><hr /></div> -->
        <div class="main-links second" v-if="showThird">
          <img
            src="../assets/image/left.svg"
            class="back"
            @click="openSecond"
            alt=""
          />

          <ul class="nav-links">
            <div v-if="addis">
              <li>
                <nuxt-link to="/destinationboston">Boston Day Spa</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/entoto"> Entoto </nuxt-link>
              </li>
            </div>

            <div v-if="awash">
              <li>
                <nuxt-link to="/awash"> Awash Falls</nuxt-link>
              </li>
            </div>

            <div v-if="bish">
              <li>
                <nuxt-link to="/bishoftu">Bishoftu</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/waterpark">Water Park</nuxt-link>
              </li>
            </div>

            <div v-if="bahirdar">
              <li>
                <nuxt-link to="/laketana">Lake Tana</nuxt-link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="destination-links" v-if="showFeatured">
        <div class="dest-box">
          <div class="desti-img">
            <h3>Find Your Ideal Destination</h3>
            <img src="../assets/image/entoto.jpg" alt="" />
          </div>
          <div class="desti-desc">
            <h4>Entoto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nis
            </p>
            <div class="explore">
              <nuxt-link to="/entoto">
                Discover More
                <hr />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      // main three navs
      showNext: false,
      showFirst: true,
      showThird: false,
      showFeatured: true,

      // destination
      addis: false,
      awash: false,
      bish: false,
      bahirdar: false,

      // first nav booleans
      desti: false,
      resorts: false,
      exp: false,
      well: false,
    };
  },
  methods: {
    closeNav() {
      this.$emit("close");
    },
    openAddis() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.addis = true;
        this.bish = false;
        this.awash = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;

        this.addis = true;
        this.bish = false;
        this.awash = false;
        this.bahirdar = false;
      }
    },
    openSecond() {
      this.showThird = false;
      this.showNext = true;
    },
    openAwash() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.awash = true;
        this.addis = false;
        this.bish = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;

        this.awash = true;
        this.addis = false;
        this.bish = false;
        this.bahirdar = false;
      }
    },
    openBish() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.bish = true;
        this.awash = false;
        this.addis = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;

        this.bish = true;
        this.awash = false;
        this.addis = false;
        this.bahirdar = false;
      }
    },
    openBahirdar() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.bahirdar = true;
        this.bish = false;
        this.awash = false;
        this.addis = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;

        this.bahirdar = true;
        this.bish = false;
        this.awash = false;
        this.addis = false;
      }
    },
    openDesti() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.desti = true;
        this.resorts = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.desti = true;
        this.resorts = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = true;
        this.showThird = false;
      }
    },
    openResorts() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.resorts = !this.resorts;
        this.desti = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.resorts = true;
        this.desti = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = true;
        this.showThird = false;
      }
    },
    openExp() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.exp = !this.exp;
        this.resorts = false;
        this.desti = false;
        this.well = false;

        this.showFeatured = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.exp = true;
        this.resorts = false;
        this.desti = false;
        this.well = false;

        this.showFeatured = true;
        this.showThird = false;
      }
    },
    openWell() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.well = !this.well;
        this.exp = false;
        this.resorts = false;
        this.desti = false;

        this.showFeatured = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.well = true;
        this.exp = false;
        this.resorts = false;
        this.desti = false;

        this.showFeatured = true;
        this.showThird = false;
      }
    },
    beforeEnter(el) {
      console.log("before enter ");
      el.style.transform = "translateX(-100%)";
    },

    enter(el, done) {
      console.log("starting to enter");
      gsap.to(el, {
        duration: 1,
        x: 0,
        ease: "circ.out",
        onComplete: done,
      });
    },
    beforeLeave(el) {
      console.log("before leave ");
      el.style.transform = "translateX(0)";
    },

    leave(el, done) {
      console.log("starting to leave");
      gsap.to(el, {
        duration: 1,
        x: -100 + "%",
        ease: "expo.out",
        onComplete: done,
      });
    },
    afterLeave() {
      console.log("after leave");
    },
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
.whole-nav {
  background: #f5f5f2;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9999;
  .nav-menu {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin-bottom: 1rem;
    .menu-close {
      margin-top: 1rem;
      cursor: pointer;
      .line {
        margin-top: 1rem;
        .frist-line {
          margin: auto;

          color: $kuriftu-white;
          // height: 10rem;
          width: 2.35rem;

          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .second-line {
          margin: auto;
          // margin-top: 1rem;
          color: $kuriftu-white;
          // height: 10rem;
          width: 2.35rem;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
    }
    .logo {
      margin-top: 1rem;
      width: 10rem;
      @include responsive($md) {
        width: 11rem;
      }
    }
  }
  .container {
    .three-col {
      // position: relative;
      width: 100%;
      height: 100%;

      .main-links {
        margin-top: 5rem;
        margin-bottom: 2rem;
        .nav-links {
          li {
            margin-top: 1rem;
            a {
              color: $kuriftu-grey;
              @extend .nav;
              font-size: 1.13rem;
              text-transform: uppercase;
              cursor: pointer;
              text-align: center;
              // font-weight: normal;
              &:hover {
                color: $kuriftu-brown;
              }
            }
          }
          .bottom-nav {
            margin-top: 3rem;
          }
          .bottom-link {
            font-size: 0.88rem;
          }
        }
      }

      .second-link {
        .second-nav-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          li {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            a {
              color: $kuriftu-grey;
              @extend .nav;
              font-size: 0.9rem;
              font-weight: normal;

              text-align: center;
              &:hover {
                color: $kuriftu-brown;
              }
            }
          }
        }
      }
    }
    .destination-links {
      padding: 1rem;
      background: $kuriftu-white;
      transition: all 300ms ease-in-out;
      .dest-box {
        display: flex;
        align-items: flex-end;
        .desti-img {
          img {
            width: 30rem;
          }
          h3 {
            @extend .nav;
            // margin-top: 0.94rem;
            font-size: 0.6rem;
            letter-spacing: 0.2rem;
            line-height: 0.5rem;
            margin-bottom: 0.5rem;
            color: $kuriftu-grey;
          }
        }
        .desti-desc {
          background: #fff;
          height: 10.4rem;

          h4 {
            @extend .h4;
            // margin-top: 0.94rem;
            font-size: 1rem;
            margin-left: 0.5rem;
          }
          p {
            @extend .nav;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            line-height: 1rem;
            text-align: left;
            font-size: 0.7rem;
            margin-left: 0.5rem;
          }
          .explore {
            margin-top: 1.88rem;
            display: grid;
            place-items: left;
            font-size: 0.7rem;
            margin-left: 1rem;
            a {
              font-size: 0.8rem;
              color: $kuriftu-grey;
              hr {
                color: $kuriftu-grey;
                width: 5.5rem;
              }
            }
          }
        }
      }
    }
  }
}
@include responsive($md) {
  .whole-nav {
    .container {
      .three-col {
        display: flex;
        gap: 6rem;
        .second {
          .back {
            display: none;
          }
        }
        .main-links {
          margin-top: 5rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
              .bottom-link {
                font-size: 1rem !important;
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }
        div {
          hr {
            height: 25rem;
            margin-top: 7rem;
          }
        }
        .second-link {
          margin-top: 6rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              a {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
      .destination-links {
        padding: 2rem;
        .dest-box {
          .desti-img {
            img {
              width: 20rem;
            }
            h3 {
              font-size: 0.8rem;
            }
          }
          .desti-desc {
            height: 14.3rem;
            h4 {
              margin-top: 1.94rem;
              font-size: 1.2rem;
            }
            p {
              font-size: 1rem;
              margin-top: 2rem;
            }
            .explore {
              margin-top: 2.88rem;

              font-size: 0.8rem;
              margin-left: 1rem;
              a {
                font-size: 1rem;

                hr {
                  width: 6.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
@include responsive($lg) {
  .whole-nav {
    width: 90%;

    .nav-menu {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      .three-col {
        display: flex;
        gap: 6rem;
        .main-links {
          margin-top: 10rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }
        div {
          hr {
            height: 30rem;
            margin-top: 12rem;
          }
        }
        .second-link {
          margin-top: 12rem;
          margin-right: 2rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
      .destination-links {
        padding: 3rem;

        .dest-box {
          display: grid;
          margin-top: 10rem;
          .desti-img {
            img {
              width: 30rem;
            }
            h3 {
              font-size: 0.6rem;
            }
          }
          .desti-desc {
            height: 15rem;
            h4 {
              margin-top: 1.94rem;
            }
          }
        }
      }
    }
  }
}
@include responsive($xl) {
  .whole-nav {
    width: 70%;
    height: 100vh;
    .nav-menu {
      margin-left: 4rem;
      margin-right: 4rem;
      margin-bottom: 3rem;
    }
    .container {
      display: flex;
      gap: 1rem;
      .three-col {
        display: flex;
        gap: 6rem;
        .main-links {
          margin-top: 7rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }
        div {
          hr {
            height: 30rem;
            margin-top: 9rem;
          }
        }
        .second-link {
          margin-top: 8rem;
          margin-right: 2rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
      .destination-links {
        padding: 3rem;

        .dest-box {
          display: grid;
          margin-top: 5rem;
          .desti-img {
            img {
              width: 20rem;
            }
            h3 {
              font-size: 0.6rem;
            }
          }
          .desti-desc {
            height: 11rem;
            width: 20rem;
            h4 {
              margin-top: 0.94rem;
            }
            .explore {
              margin-top: 2rem;
            }
          }
        }
      }
    }
  }
}
@include responsive($xxl) {
  .whole-nav {
    width: 70%;
    height: 100vh;
  }
}
</style>
