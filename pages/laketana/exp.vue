<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/tana-logo.svg`)" />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
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
