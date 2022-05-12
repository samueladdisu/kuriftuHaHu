<template>
  <div class="main">
    <Destinationheader
      :src="require(`../../assets/image/AWASH-Color side.svg`)"
    />
    <Destinav base="" home="/awash" dir="Awash" />
    <section class="top-gallery">
      <TabHeader :head="header" />
    </section>
    <Dbox :data="dinning" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Dining",
        desc: `Designed to highlight our unparalleled view of the park, our Restaurant & Bar is decorated with natural light flooding the space with colorful accents, stone structures and brick elements, creating an organic vibrance for our guests to absorb. From a wide selection of international wines to signature cocktails and a set menu made-up of locally sourced ingredients, our dining experience fully encompasses our guests’ needs.`,
      },
      dinning: [
        {
          title: "Cabana Restaurant",
          desc: `enjoy your meal by the lakeside laying on the kabanas with a beautiful scenery of the lake and aquatic birds.`,
          img: "awash/dining/1.webp",
        },
        {
          title: "Lake View Main Restaurant",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "awash/dining/4.webp",
        },
        {
          title: "Lequanda",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "awash/dining/5.webp",
        },
        {
          title: "Water park Restaurant",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "awash/dining/6.webp",
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
  .top-gallery {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
}
</style>

