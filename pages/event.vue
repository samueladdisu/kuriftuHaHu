<template>
  <div class="main">
    <HeaderApp :src="require(`../assets/image/event-bg.jpg`)" />

    <section class="event-links">
      <div class="container">
        <div class="destination-links">
          <ul>
            <li><a class="active" href="#">Wedding</a></li>
            <li><a href="#">Corporate events</a></li>
            <li><a href="#">Brithday</a></li>
          </ul>
        </div>
        <div class="exper-wrapper">
          <div class="exper-card" data-aos="slide-up">
            <div class="exper-img">
              <img src="../assets/image/celeb1.jpg" alt="" />
            </div>
            <div class="exper-title">
              <h3>Concerts</h3>
            </div>
            <div class="exper-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="explore">
                <a href="#"
                  >EXPLORE
                  <hr
                /></a>
              </div>
            </div>
          </div>

          <div class="exper-card1" data-aos="slide-up" data-aos-delay="500">
            <div class="exper-img">
              <img src="../assets/image/lequanda.jpg" alt="" />
            </div>
            <div class="exper-title">
              <h3>Lequada fest</h3>
            </div>
            <div class="exper-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="explore">
                <a href="#"
                  >EXPLORE
                  <hr
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="exper-wrapper">
          <div class="exper-card" data-aos="slide-up">
            <div class="exper-img">
              <img src="../assets/image/celeb3.jpg" alt="" />
            </div>
            <div class="exper-title">
              <h3>Valentines day</h3>
            </div>
            <div class="exper-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="explore">
                <a href="#"
                  >EXPLORE
                  <hr
                /></a>
              </div>
            </div>
          </div>

          <div class="exper-card1" data-aos="slide-up" data-aos-delay="500">
            <div class="exper-img">
              <img src="../assets/image/celeb4.jpg" alt="" />
            </div>
            <div class="exper-title">
              <h3>Kebela</h3>
            </div>
            <div class="exper-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="explore">
                <a href="#"
                  >EXPLORE
                  <hr
                /></a>
              </div>
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
import HeaderApp from "../components/HeaderApp.vue";
export default {
  components: {
    HeaderApp,
  },
  data() {
    return {
      corporate: [
        {
          id: 1,
          title: "Concerts",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/image/celeb1.jpg",
        },
        {
          id: 2,
          title: "Lequada fest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/image/lequanda.jpg",
        },
        {
          id: 3,
          title: "Valentines day",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/image/celeb3.jpg",
        },
        {
          id: 4,
          title: "Kebela",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/image/celeb4.jpg",
        },
      ],
    };
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
.main {
  background: $kuriftu-white;

  .event-links {
    margin-top: 6.25rem;
    .container {
      .destination-links {
        ul {
          display: flex;
          justify-content: center;
          gap: 1rem;
          li {
            a {
              @extend .title;
              font-size: 0.9rem;
              text-transform: uppercase;
              color: $kuriftu-grey;

              &:hover {
                color: $kuriftu-green;
              }
              .active {
                color: $kuriftu-green;
              }
            }
          }
        }
      }
      .exper-wrapper {
        display: grid;
        place-items: center;

        .exper-card,
        .exper-card1 {
          margin-top: 1.88rem;
          .exper-img {
            img {
              width: 20rem;
            }
          }
          .exper-title {
            background: $kuriftu-green;
            padding: 0.8rem;
            width: 50%;
            min-width: 11.31rem;
            position: absolute;
            // bottom: 0;

            // margin-top: 15.2rem;
            margin-top: -3.23rem;

            h3 {
              color: $kuriftu-white;
              @extend .caps;
              font-size: 0.9rem;

              text-align: center;
            }
          }
          .exper-desc {
            width: 85%;
            background: #fff;
            padding: 1rem;
            p {
              @extend .text;

              color: $kuriftu-grey;
              font-size: 0.8rem;
              line-height: 1.3rem;
              text-align: left;
            }
            .explore {
              margin-top: 1rem;
              display: grid;
              place-items: left;
              a {
                font-size: 0.8rem;
                color: $kuriftu-grey;
                hr {
                  color: $kuriftu-grey;
                  width: 4rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .event-links {
      .container {
        .destination-links {
          ul {
            gap: 2rem;
            li {
              a {
                font-size: 1rem;
              }
            }
          }
        }
        .exper-wrapper {
          display: flex;
          gap: 5rem;
          justify-content: center;
          .exper-card {
            .exper-title {
              width: 10%;
            }
          }
          .exper-card1 {
            margin-bottom: -10rem;
            .exper-title {
              width: 10%;
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .event-links {
      margin-top: 8.13rem;
      .container {
        .destination-links {
          ul {
            gap: 5rem;
          }
        }
        .exper-wrapper {
          // margin-left: 5rem;
          // margin-right: 5rem;
          gap: 3rem;

          .exper-card {
            margin-top: 4rem;
          }
          .exper-card1 {
            margin-top: 4rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .event-links {
      .container {
        .destination-links {
          ul {
            gap: 6rem;
          }
        }
        .exper-wrapper {
          // margin-left: 5rem;
          // margin-right: 5rem;
          gap: 10rem;

          .exper-card {
            margin-top: 4.88rem;
            .exper-img {
              img {
                width: 25rem;
              }
            }
            .exper-desc {
              width: 75%;
              p {
                font-size: 1rem;
              }
              .explore {
                a {
                  font-size: 1rem;
                  hr {
                    width: 5rem;
                  }
                }
              }
            }
          }
          .exper-card1 {
            margin-top: 4.88rem;
            .exper-img {
              img {
                width: 25rem;
              }
            }
            .exper-desc {
              width: 75%;
              p {
                font-size: 1rem;
              }
              .explore {
                a {
                  font-size: 1rem;
                  hr {
                    width: 5rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($xxl) {
    .event-links {
      .container {
        .exper-wrapper {
          // margin-left: 5rem;
          // margin-right: 5rem;
          // gap: 6rem;
          margin-top: 6rem;
          .exper-card {
            .exper-img {
              img {
                width: 25rem;
              }
            }
          }
          .exper-card1 {
            .exper-img {
              img {
                width: 25rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>