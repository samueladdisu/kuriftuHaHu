<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/tana-logo.svg`)" />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
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
        desc: `Whether you’re celebrating a birthday, honeymoon, anniversary or a
            longmawaited family vacation, our team is delighted to create a
            personalized dining experience for you from intimate and romantic,
            to interactive and adventurous.`,
      },
      dinning: [
        {
          title: "Cabana Restaurant",
          desc: `enjoy your meal by the lakeside laying on the kabanas with a beautiful scenery of the lake and aquatic birds.`,
          img: "tana/dining/1.webp",
        },
        {
          title: "Lake View Main Restaurant",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "tana/dining/2.webp",
        },
        {
          title: "Lequanda",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "tana/dining/3.webp",
        },
        {
          title: "Water park Restaurant",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse.`,
          img: "tana/dining/4.webp",
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
  .top-gallery {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
}
</style>

