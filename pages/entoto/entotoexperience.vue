<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/entoto-logo.svg`)" />
    <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="entotoexperience"
                ><p>Entoto</p>
                <img
                  class="drop-icon"
                  src="../../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                  <li>
                    <nuxt-link class="a-link" to="entotoaccommodation">
                      <p>Accomodation</p>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="entotoexperience active"
                      >Experiences</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="entotowellness"
                      >Wellness</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="entotodining "
                      >Dining</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="entotoevent"
                      >Celebration & Events</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link class="a-link" to="entotogallery"
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
              <nuxt-link class="a-link active" to="/destinationentoto"
                >Entoto</nuxt-link
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link" to="entotoaccommodation">
                <p>Accomodation</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link active" to="entotoexperience"
                >Experiences
                <hr class="activeline"
              /></nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotowellness">Wellness</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotodining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotoevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="entotogallery">Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="/book">Reserve</nuxt-link>
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
          title: "Zipline",
          desc: `A zipline is used as a cable that is suspended above an incline to which a pulley and harness 
are attached to a rider. The incline of a zipline allows the rider to be pulled by gravity along 
the line. Mostly zip lines are used for recreation purposes. `,
          img: "entoto/exp/3.webp",
        },
        {
          title: "Rope Course",
          desc: `A Rope Course is team based activity whereby two counter teams go up and down hanging on a rope.The lower part might be touching the ground while the highest on trees or poles. It’s a great team bonding activity for the masses`,
          img: "entoto/exp/13.webp",
        },
        {
          title: "Paintball",
          desc: `Paintball is a competitive team shooting sport in which players eliminate opponents from play by hitting them with spherical dye filled gelatin capsules(“paintballs”) that break upon impact. Paintballs are usually shot using a low energy at weapon called paintball marker that is powered by compressed air(nitrogen) or carbon dioxide`,
          img: "entoto/exp/8.webp",
        },
        {
          title: "Archery",
          desc: `Archery is the art,sport ,practice or skill of using a bow to shoot arrows. It’s mainly a competitive sport and recreatiional activity.`,
          img: "entoto/exp/5.webp",
        },
        {
          title: "Horse Riding",
          desc: `Horseback riding is an enjoyable pAastime for many people. It is a way to enjoy nature and appreciate the majesty and beauty of horses. For people who are new to horseback riding it is not only important to learn how to ride, but to also learn discipline and self control that can broaden their knowledge while ridingAC`,
          img: "entoto-exper4.jpg",
        },
        {
          title: "Go Karts",
          desc: `A electronice go- kart is a type of open-wheel car.Go karts come in all shapes and forms. From motherless models to high powered racing machines.The electronic go kart is environmentally friendly and has no noise pollution.`,
          img: "entoto/exp/7.webp",
        },
        {
          title: "Pedal Karts",
          desc: `A pedal go karting is a fun outdoors activity for children. Not only is it safe but its also a great exercise since it requires the driver to manually pedal. These karts can be driven on and off road, or shine and are the perfect way for children to explore the natural beauty of Entoto.`,
          img: "entoto/exp/10.webp",
        },
        {
          title: "Trampoline World",
          desc: `Trampoline exercises are a convenient and enjoyable way to boost cardiovascular health, improve endurance, and relieve stress and tension.Also helps in developing better balance, and coordination skills.`,
          img: "entoto/exp/11.webp",
        },
        {
          title: "Rock Climbing",
          desc: `Not that long ago, most people took their first climbing steps on real rock, but these days it’s
much more likely to be on an indoor wall. Wall Climbing is an enjoyable recreational activity 
that has the basics movement foundation with grip of hands and legs, that makes the climber 
able to climb until reaching the highest peak.`,
          img: "entoto/exp/12.webp",
        },
        {
          title: "Yoga",
          desc: `Every detail at our spa resort is meticulously tailored to create the ultimate destination for wellness and tranquility, starting with the basics like yoga.`,
          img: "entoto/exp/2.webp",
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
  .display-video {
    margin-top: 4rem;
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
}
</style>
