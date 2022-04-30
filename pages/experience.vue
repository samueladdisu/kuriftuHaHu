<template>
  <div class="main">
    <HeaderApp :src="require(`../assets/image/exprience.jpg`)" />

    <!-- <div class="fixed-button">
      <a class="btn btn-outline-white" href="./contact">BOOK NOW</a>
    </div> -->
    <section class="experience">
      <div class="container">
        <!-- <p>Unforgettable, Memorable experiences</p> -->
        <div class="experience-wrapper">
          <div class="experi-desc">
            <h2>Experience</h2>
            <h4>Unforgettable, Memorable experiences</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam
              lectus at massa enim elementum varius dictumst. Nulla a, sed enim
              turpis non lacinia fusce. Quis volutpat sit ullamcorper vitae
              magna vel sit pharetra scelerisque magna vel sit pharetra
              scelerisque.
            </p>
          </div>
          <div class="experi-img">
            <img src="../assets/image/3D.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="experience-links">
      <div class="container">
        <div class="destination-links">
          <ul>
            <li>
              <a :class="{ active: entoto }" @click="showEntoto">Entoto</a>
            </li>
            <li>
              <a :class="{ active: waterpark }" @click="showWater">Waterpark</a>
            </li>
            <li>
              <a :class="{ active: tana }" @click="showTana">Lake Tana</a>
            </li>
            <li><a :class="{ active: awash }" @click="showAwash">Awash</a></li>
          </ul>
        </div>
        <div class="exper-wrapper">
          <article class="entoto" v-if="entoto">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Baking</h3>
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
                <img src="../assets/image/entoto-exper2.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Rock ClImBing</h3>
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
          </article>
          <article class="tana" v-if="tana">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Baking</h3>
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
                <img src="../assets/image/entoto-exper2.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Rock ClImBing</h3>
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
          </article>

          <article class="awash" v-if="awash">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Baking</h3>
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
                <img src="../assets/image/entoto-exper2.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Rock ClImBing</h3>
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
          </article>
          <article class="waterpark" v-if="waterpark">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/lazy.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Rides</h3>
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
                <img src="../assets/image/lazy.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>slide</h3>
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
          </article>
        </div>
        <div class="exper-wrapper">
          <article class="entoto" v-if="entoto">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper3.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Paintball</h3>
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
                <img src="../assets/image/entoto-exper4.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Horse Riding</h3>
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
          </article>

          <article class="tana" v-if="tana">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper3.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Paintball</h3>
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
                <img src="../assets/image/entoto-exper4.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Horse Riding</h3>
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
          </article>

          <article class="awash" v-if="awash">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/entoto-exper3.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Paintball</h3>
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
                <img src="../assets/image/entoto-exper4.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Horse Riding</h3>
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
          </article>
          <article class="waterpark" v-if="waterpark">
            <div class="exper-card" data-aos="slide-up">
              <div class="exper-img">
                <img src="../assets/image/lazy.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Rides</h3>
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
                <img src="../assets/image/lazy.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>slide</h3>
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
          </article>
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
      waterpark: false,
      tana: false,
      awash: false,
      entoto: true,
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
  methods: {
    showWater() {
      this.waterpark = true;
      this.tana = false;
      this.awash = false;
      this.entoto = false;
    },
    showEntoto() {
      this.waterpark = false;
      this.tana = false;
      this.awash = false;
      this.entoto = true;
    },
    showTana() {
      this.waterpark = false;
      this.tana = true;
      this.awash = false;
      this.entoto = false;
    },
    showAwash() {
      this.waterpark = false;
      this.tana = false;
      this.awash = true;
      this.entoto = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: $kuriftu-white;

  .fixed-button {
    background: $kuriftu-black;
    position: fixed;
    width: 100%;

    height: 10vh;
    z-index: 9999;

    // display: grid;
    text-align: center;
    .btn {
      margin: 1.3rem;
    }
  }
  @include responsive($lg) {
    .fixed-button {
      display: none;
    }
  }
  .experience {
    margin-top: 6.25rem;
    .container {
      .experience-wrapper {
        .experi-desc {
          h2 {
            color: $kuriftu-brown;
            @extend .title;
            margin-top: 0.94rem;
            text-align: left;
          }
          h4 {
            @extend .text;
            margin-top: 0.94rem;
            text-align: left;
            color: $kuriftu-grey;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            text-align: left;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .experience {
      .container {
        .experience-wrapper {
          display: flex;
          place-items: flex-end;
          // align-items: center;
          .experi-desc {
            width: 90%;

            background: $kuriftu-white;
            border-radius: 5rem;
            opacity: 0.6;
            z-index: 99;
            padding: 1rem;
            p {
              font-size: 0.8rem;
              line-height: 1.3rem;
              opacity: 100%;
            }
          }
          .experi-img {
            margin-left: -4rem;

            img {
              width: 50rem;
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .experience {
      .container {
        .experience-wrapper {
          .experi-desc {
            width: 90%;
            border-radius: 7rem;
            padding: 0.5rem;
            p {
              font-size: 1rem;
              line-height: 1.75rem;
            }
          }
          .experi-img {
            margin-left: -5rem;
            img {
              width: 50rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .experience {
      .container {
        .experience-wrapper {
          .experi-desc {
            width: 60%;
            border-radius: 13rem;

            h4 {
              margin-top: 2.88rem;
              // padding: 1rem;
            }
            p {
              // margin-top: 2.88rem;
              font-size: 1.13rem;
              padding-right: 1rem;
            }
          }
          .experi-img {
            margin-left: -8rem;
            img {
              width: 45rem;
            }
          }
        }
      }
    }
  }
  .experience-links {
    margin-top: 6.25rem;
    .container {
      .destination-links {
        ul {
          display: flex;
          justify-content: center;
          gap: 1rem;
          li {
            .active {
              color: $kuriftu-blue !important;
            }
            a {
              @extend .title;
              font-size: 0.9rem;
              text-transform: uppercase;
              color: $kuriftu-grey;
              cursor: pointer;
              &:hover {
                color: $kuriftu-blue;
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
            background: $kuriftu-purple;
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
    .experience-links {
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
          article {
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
              margin-top: 4.88rem;
              .exper-title {
                width: 10%;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .experience-links {
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
          article {
            .exper-card {
              margin-top: 1.88rem;
            }
            .exper-card1 {
              margin-bottom: -10rem;
              margin-top: 4rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .experience-links {
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
    .experience-links {
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