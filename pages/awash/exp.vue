<template>
  <div class="main">
    <Destinationheader
      :src="require(`../../assets/image/AWASH-Color side.svg`)"
    />
    <Destinav base="" home="/awash" dir="Awash" />
    <Dbox :data="exp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: [
        {
          title: "Crocodile Viewing",
          desc: `Kuriftu Awash is the perfect destination for people who want to pair their exhilarating adventures with creature comforts. On the banks of the river you can watch lazy crocodiles snoozing in the sun or floating in the river like dead logs of wood You can spend an enjoyable few hours marveling at their strong jaws, scaly backs and large nostrils lurking just beneath the water surface.`,
          img: "awash/exp/5.webp",
          link: "",
        },
        {
          title: "Camel Riding",
          desc: `Head out into the sunset as part of a camel caravan as you take in the breath-taking beauty`,
          img: "awash/exp/3.webp",
        },
        {
          title: "Birdwatching ",
          desc: `Witness the so many truly amazing birds with exceptional appearances`,
          img: "awash/exp/6.webp",
        },
        {
          title: "Safari Tours",
          desc: ` If you are a nature lover and wish to experience some of the culture and history that surrounds us, then have a look at our safari tour. Awash has unique landscapes making ita wonder to experinace.`,
          img: "awash/exp/1.webp",
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
}
</style>
