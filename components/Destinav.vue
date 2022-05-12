<template>
  <div>
    <!-- Destination Navigation -->
    <!-- Mobile Destination Navigation -->
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <a class="a-link active"
                ><p>{{ dir }}</p>
                <img
                  class="drop-icon"
                  src="../assets/image/Icons/next2.svg"
                  alt=""
              /></a>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li v-if="viewAcc">
                    <nuxt-link class="a-link" :to="base + 'acc'"
                      >Accomodation</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" :to="base + 'exp'"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li v-if="viewAcc">
                    <nuxt-link class="a-link" :to="base + 'well'"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" :to="base + 'dining'"
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" :to="base + 'event'"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" :to="base + 'gallery'"
                      >Gallery</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="/giftcard"
                      >Gift Card</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End of Mobile Destination Navigation -->

    <!-- Desktop Destination Navigation -->
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" :to="home"> {{ dir }} </nuxt-link
              ><img src="../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li v-if="viewAcc">
              <nuxt-link class="a-link" :to="base + 'acc'"
                >Accomodation</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="a-link" :to="base + 'exp'"
                >Experiences</nuxt-link
              >
            </li>
            <li v-if="viewAcc">
              <nuxt-link class="a-link" :to="base + 'well'">Wellness</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" :to="base + 'dining'">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" :to="base + 'event'"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" :to="base + 'gallery'"
                >Gallery</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="/giftcard">Gift Card</nuxt-link>
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <!-- End of Desktop Destination Navigation -->
    <!-- End of Destination Navigation -->
  </div>
</template>

<script>
export default {
  props: ["base", "home", "dir"],
  data() {
    return {
      viewAcc: true,
    };
  },
  mounted() {
    if (this.home == "waterpark/" || this.home == "/waterpark") {
      this.viewAcc = false;
    }
  },
};
</script>

<style lang="scss">
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
</style>
