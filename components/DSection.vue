<template>
  <section class="experience">
    <div class="container">
      <!-- <h2>Accomodation</h2> -->
      <div class="exper-wrapper">
        <div class="ex-title">
          <div class="overview">
            <h2>{{ section.title }}</h2>
            <p>
              {{ section.desc }}
            </p>
          </div>
          <div class="view">
            <nuxt-link :to="section.url">
              {{ section.link }}
              <hr class="lower-line"
            /></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Bishoftuslide :photos="section.photos" />
  </section>
</template>

<script>
export default {
  props: ["section"],
};
</script>

<style lang="scss">
.experience {
  // margin-top: 5rem;
  .container {
    .exper-wrapper {
      .ex-title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .overview {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          p {
            color: #808080;
            font-size: 1rem;
            line-height: 1.3rem;
          }
        }
        h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          @include responsive($md) {
            font-size: 2rem;
          }
        }
        .view {
          a {
            font-size: 0.8rem;
            color: $kuriftu-grey;
            text-transform: uppercase;
            // text-decoration: underline;
            .lower-line {
              opacity: 0.7;
              border-style: solid;
              width: 50%;
              margin: auto 0;
            }
          }
        }
      }
      @include responsive($md) {
        .ex-title {
          flex-direction: row;
          justify-content: space-between;
          align-content: center;
          // align-items: center;
          .overview {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
            p {
              color: #808080;
              font-size: 1rem;
              line-height: 1.3rem;
            }
          }
          h2 {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            @include responsive($md) {
              font-size: 2rem;
            }
          }
          .view {
            a {
              font-size: 0.8rem;
              color: $kuriftu-grey;
              text-transform: uppercase;

              .lower-line {
                opacity: 0.7;
                border-style: solid;

                @include responsive($md) {
                  width: 100%;
                }
              }
            }
          }
        }
      }
      @include responsive($lg) {
        .ex-title {
          .overview {
            width: 70%;
          }
        }
      }
      .exper-card {
        margin-top: 1.88rem;
        @include responsive($md) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @include responsive($lg) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .exper-single-card {
          margin-top: 2rem;
          .exper-img {
            position: relative;
            img {
              height: 15rem !important;
              min-width: 15rem;
              object-fit: cover;
              object-position: center center;
              @include responsive($xl) {
                height: 25rem !important;
                width: 30rem;
              }
            }
          }
          .exper-title {
            background: $kuriftu-green;
            padding: 0.8rem;
            width: 14rem;
            min-width: 11.31rem;
            position: absolute;

            margin-top: -3.24rem;
            @include responsive($lg) {
              margin-top: -3.23rem;
            }
            h3 {
              color: $kuriftu-white;
              @extend .caps;

              text-align: center;
            }
          }
          .exper-desc {
            width: 85%;
            background: #fff;
            padding: 1rem;
            @include responsive($md) {
              width: 90%;
            }
            p {
              @extend .text;

              color: $kuriftu-grey;
              font-size: 0.8rem;
              line-height: 1.3rem;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>