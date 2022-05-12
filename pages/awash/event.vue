<template>
  <div class="main">
    <Destinationheader
      :src="require(`../../assets/image/AWASH-Color side.svg`)"
    />
    <Destinav base="" home="/awash" dir="Awash" />

    <section class="top-gallery">
      <TabHeader :head="header" />
    </section>

    <Dbox :data="event" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Celebration & Events",
        desc: `From your big day to birthdays, anniversaries, or a special gesture to your partner - your celebration is our priority`,
      },
      event: [
        {
          title: "Wedding",
          desc: `Dreaming of a wedding destination that's as pure, wild and gentle as your love? At our resort you and your guests will find the adventure of a lfetime, sourrounded by nature. Suited for all guests  our venue is the perfect setting for an intimate celebration filled with romance.`,
          img: "entoto0.jpg",
        },
        {
          title: "Conferences",
          desc: `Your next group huddle should be at this exclusive property which offers luxury, adventure, exquisite dining and drinks galore for a well deserved team retreat.`,
          img: "entoto9.jpg",
        },
        {
          title: "Retreats",
          desc: `Known for our hospitality in an all-inclusive setting, we set the stage for an unforgettable retreat`,
          img: "celebration.jpg",
        },
        {
          title: "Birthdays",
          desc: `Birtdays come and go wny not make them memorable by connecting to where we come from, nature.`,
          img: "bishoftu/dinning/waterpark.webp",
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
