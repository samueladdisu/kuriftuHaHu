<template>
  <div class="main">
    <Destinationheader :src="require(`../assets/image/entoto-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/event">
                <p>Celebration & Events</p>
                <img
                  class="drop-icon"
                  src="../assets/image/Icons/next2.svg"
                  alt=""
                />
              </nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link
                      class="a-link"
                      to="/destinationevent/bishoftuevent"
                    >
                      <p>Bishoftu</p>
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="/destinationevent/waterpark"
                      >Water park</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="/destinationevent/entoto">
                      <p>Entoto</p>
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="/destinationevent/tana"
                      >Lake Tana</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="/destinationevent/awash"
                      >Awash</nuxt-link
                    >
                  </li>

                  <li>
                    <nuxt-link class="a-link" to="/destinationevent/afar"
                      >Afar</nuxt-link
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
              <nuxt-link class="a-link active" to="/event"
                >Clebration & Events</nuxt-link
              ><img src="../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="/destinationevent/bishoftuevent">
                <p>Bishoftu</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link" to="/destinationevent/waterpark"
                >Water Park</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="a-link" to="/destinationevent/entoto"
                >Entoto
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link" to="/destinationevent/tana"
                >Lake Tana</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="/destinationevent/awash"
                >Awash</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="a-link" to="/destinationevent/afar"
                >Afar</nuxt-link
              >
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>

    <section class="general-experience">
      <div class="container">
        <div class="all-wrapper">
          <div class="all-cards">
            <div
              class="single-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="../assets/image/friststory.jpg" alt="" />
              <h3>Bishoftu</h3>
              <p>
                listening to tropical and the gentle nature from the privacy of
                your luxurious villa , there is simply no more romantic or
                exotic setting for your special occasion. Whether you are
                planning a honeymoon or celebrating a wedding, an anniversary,
                or a birthday, we can take care of all the details, so you will
                return home relaxed, rejuvenated and with memories you’ll
                cherish for a lifetime.
              </p>
            </div>
            <div
              class="single-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                class="right-card"
                src="../assets/image/kuriftu dec 22-5422-min (1).jpg"
                alt=""
              />
              <h3>Water Park</h3>
              <p>
                Whether you want to enjoy a big splash or a relaxing float,
                Kuriftu Waterpark Resort offers ample facilities to keep you
                entertained. The day will go by in a blur but memories that last
                a lifetime will be made. Take a plunge and dive on in, we can’t
                wait to show you what you’ve been missing! Join us for a day
                full of memories and fun things to do in Kuriftu Waterpark.
              </p>
            </div>
            <div
              class="single-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="../assets/image/entoto.jpg" alt="" />
              <h3>Entoto</h3>
              <p>
                Luxurious Glamping Tents placed under tree branches will give
                you a chance to discover the pristine and peaceful nature and
                fill your lungs with oxygen, that is tirelessly produced by the
                surrounding forest. Kuriftu Entoto Resort is the place to be for
                all who want to be in touch with nature and experience the best
                of what Entoto Forest have to offer.
              </p>
            </div>
            <div class="single-card" data-aos="fade-up">
              <img class="right-card" src="../assets/image/tana.jpg" alt="" />
              <h3>Lake Tana</h3>
              <p>
                Make a stunning impression no matter the type of meetings or
                events you're planning to bring to life at Kuriftu Resorts &
                Spa.
              </p>
            </div>
            <div
              class="single-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="../assets/image/awashfalls.jpg" alt="" />
              <h3>Awash Falls</h3>
              <p></p>
            </div>
            <div
              class="single-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                class="right-card"
                src="../assets/image/KURIFTU Afar-0195-min.jpg"
                alt=""
              />
              <h3>Afar</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
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
  .display-video {
    margin-top: 4rem;
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
  .general-experience {
    margin-top: 5rem;
    @include responsive($md) {
      margin-top: 8rem;
    }
    .container {
      .all-wrapper {
        .see-more {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
          @include responsive($md) {
            margin-top: 5rem;
          }
          hr {
            border-style: solid;
            color: $kuriftu-grey;
            opacity: 0.5;

            width: 100%;
          }
          p {
            font-size: 0.7rem;
            text-transform: uppercase;
            color: $kuriftu-grey;
            width: 6rem;
          }
        }
        .all-cards {
          @include responsive($md) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          @include responsive($lg) {
            gap: 5rem;
          }

          .single-card {
            margin-top: 3rem;

            .right-card {
              margin-top: 6rem;
            }
            img {
              width: 20rem;
              height: 25rem;
              object-fit: cover;
              @include responsive($lg) {
                width: 100%;
                height: 35rem;
              }
            }
            h3 {
              @extend .title;
              font-size: 1rem;
              margin-top: 0.98rem;
              text-transform: uppercase;
            }
            p {
              @extend .text;
              margin-top: 0.98rem;
              width: 20rem;
              font-size: 0.95rem;
              @include responsive($lg) {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
