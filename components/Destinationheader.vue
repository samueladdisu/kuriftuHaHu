<template>
  <div>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <NavMenu v-if="showNav" @close="closeNav" />
    </transition>
    <header>
      <nav>
        <div class="top-nav">
          <div class="container">
            <div class="menu-line" @click="toggleNav">
              <div class="line">
                <hr />
                <hr />
              </div>
            </div>
            <div class="logo">
              <nuxt-link to="/">
                <img :src="src" alt="" />
              </nuxt-link>
            </div>

            <div class="nav-book-button">
              <div class="wrapper">
                <div class="social">
                  <img
                    class="icon"
                    src="../assets/image/Icons/faceblack.svg"
                    alt=""
                  />
                  <img
                    class="icon"
                    src="../assets/image/Icons/instablack.svg"
                    alt=""
                  />
                  <img
                    class="icon"
                    src="../assets/image/Icons/youtubeblack.svg"
                    alt=""
                  />
                </div>
                <!-- <a class="btn btn-outline-black" @click="redirect">BOOK NOW</a> -->
                <nuxt-link to="/book" class="btn btn-outline-black">
                  BOOK NOW
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: ["src"],
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    redirect() {
      window.open(
        "https://versavvymedia.com/reservation_system/reserve.php",
        "_blank"
      );
    },
    closeNav() {
      this.showNav = !this.showNav;
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
};
</script>

<style lang="scss" scoped>
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
      background: $kuriftu-white;
      //  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      bottom: 0;
      height: 10vh;
      width: 100vw;
      margin: 0 auto;
      @include responsive($lg) {
        height: 13vh;
      }
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
          img {
            width: 11rem;
          }
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
</style>
