<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/afar-logo.svg`)" />
    <Destinav base="" home="/afar" dir="Afar" />

    <section class="top-gallery">
      <TabHeader :head="header" />
    </section>

    <Dbox :data="wellness" />

    <section class="spa-special-offer">
      <div class="container">
        <div class="special-offer-all">
          <div class="special-slide" data-aos="slide-up">
            <!-- <div class="back-icon">
              <img src="../../assets/image/Icons/spaback.svg" alt="" />
            </div> -->
            <div class="slide-card">
              <img src="../../assets/image/spaspecial.jpg" alt="" />
            </div>
            <!-- <div class="next-icon">
              <img src="../../assets/image/Icons/spanext.svg" alt="" />
            </div> -->
          </div>
          <div class="gift-desc" data-aos="slide-up">
            <h3>special offer</h3>
            <h4>Gift Vouchers</h4>
            <p class="header-title">
              Treat your loved ones to Ethiopia’s greatest family destination
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam
              lectus at massa enim elementum varius dictumst. Nulla a, sed enim
              turpis non lacinia fusce. Quis volutpat sit ullamcorper vitae
              magna vel sit pharetra scelerisque.
            </p>
            <div class="book-buttons">
              <a class="btn btn-outline-black" href="#">GET OFFERS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Wellness",
        desc: `Our spa is a unique haven of tranquilllity nestled on a restful
          architecture. it perpetuates the tradtion established by Ethiopian
          royal families who used to retreat to relax and indulge in beauty
          rituals.`,
      },
      wellness: [
        {
          title: "Sauna/Steam & Jacuzzi",
          desc: `Enjoy our aromatic oils and natural essences used in our sauna and steam to enhance and revitalize your wellbeing`,
          img: "bishoftu/wellness/spa.webp",
        },
        {
          title: "Hair Salon",
          desc: ` Whether a girls' getaway, your wedding day, or just because it's Tuesday, look your best with stunning hair dos.`,
          img: "bishoftu/wellness/hair salon.webp",
        },
        {
          title: "Massage",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil sint assumenda illo! Nulla obcaecati blanditiis cumque,
          consectetur non in?`,
          img: "bishoftu/wellness/massage.webp",
        },
        {
          title: "Swimming Pool",
          desc: `Whether you’re looking for an early-morning workout or just for refreshment after your spa treatment, the pools at Kuriftu Bishoftu Resort and Spa do not disappoint offering an
          exceptional place for both rest and recreation.`,
          img: "bishoftu/Swimming_pool2.webp",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  .top-gallery {
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }
  .spa-special-offer {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .special-offer-all {
        display: grid;
        place-items: center;
        // margin: 0 auto;
        // width: 20rem;
        .special-slide {
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 0.5rem;
          .back-icon,
          .next-icon {
            img {
              width: 2rem;
            }
          }
        }
        .gift-desc {
          margin-top: 1.88rem;
          margin-left: 1rem;
          margin: 0 auto;
          width: 20rem;
          h3 {
            @extend .nav;
            margin-top: 0.94rem;
            font-size: 0.7rem;
            letter-spacing: 0.2rem;
            line-height: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            text-transform: uppercase;
            color: $kuriftu-grey;
          }
          h4 {
            @extend .title;
            margin-top: 1.88rem;
            color: $kuriftu-black;
          }
          .header-title {
            color: $kuriftu-grey;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 0.88rem;
            text-align: left;
          }
          .book-buttons {
            display: flex;
            justify-content: left;

            margin-top: 1.88rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .spa-special-offer {
      // width: 100%;
      .container {
        .special-offer-all {
          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }
          }
          .gift-desc {
            width: 25rem;
            // margin-left: 5rem;
            // margin-right: 5rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .spa-special-offer {
      margin-top: 8.13rem;
      .container {
        .special-offer-all {
          display: flex;

          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }

            .next-icon,
            .back-icon {
              img {
                width: 2rem;
              }
            }
          }
          .gift-desc {
            margin-left: 1rem;
            margin-right: 1rem;
            margin: 0 auto;
            width: 25rem;
            .book-buttons {
              display: flex;
              justify-content: left;

              margin-top: 1.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .spa-special-offer {
      .container {
        .special-offer-all {
          display: flex;
          align-items: flex-start;
          .special-slide {
            .slide-card {
              img {
                width: 30rem;
              }
            }
          }
          .gift-desc {
            margin-left: 2rem;
            margin-right: 2rem;
            width: 30rem;
          }
        }
      }
    }
  }
  .spa-menu {
    margin-top: 5rem;
    @include responsive($md) {
      margin-top: 8rem;
    }
    .container {
      .menu-wrapper {
        h3 {
          @extend .title;
          font-size: 1.5rem;
          text-transform: uppercase;
        }
        .menu-card {
          display: grid;
          @include responsive($md) {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          @include responsive($lg) {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 3rem;
          }
          .menu-single {
            position: relative;
            margin-top: 2rem;

            .menu-img {
              position: relative;
              img {
                width: 100%;
                height: 18rem;
                object-fit: cover;
              }
              &::after {
                content: " ";
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                z-index: 998;
                background: rgba(25, 30, 25, 0.6);
              }
            }
            .menu-title {
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              z-index: 999;
              display: grid;
              place-items: center;
              h4 {
                font-size: 1.5rem;
                text-transform: uppercase;
                color: $kuriftu-white;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
