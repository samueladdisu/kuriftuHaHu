<template>
  <div class="main">
    <Destinationheader :src="require(`../assets/image/LOGO 2.svg`)" />

    <section class="entoto-general">
      <div class="container">
        <div class="main-title">
          <h2>This page is under Construction</h2>

          <button class="btn btn-primary" @click="goBack">Go Back</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.main {
  .entoto-general {
    margin-top: 5rem;
    @include responsive($lg) {
      margin-top: 8rem;
    }
    .container {
      .main-title {
        display: grid;
        place-items: center;
        h2 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        p {
          text-align: center;
          color: $kuriftu-grey;
          width: 20rem;
          margin-top: 1rem;
          font-size: 0.8rem;
        }
        @include responsive($md) {
          h2 {
            font-size: 2rem;
          }
          p {
            width: 40rem;
            font-size: 1rem;
          }
        }
      }
      .tabs {
        margin: 1.88rem auto 6.25rem;
        // background: lightblue;
        display: grid;
        place-items: center;
        width: 100%;
        margin-top: 4rem;
        .tabs-container {
          display: flex;
          position: relative;
          .active {
            position: absolute;
            top: 0;
            height: 0.25rem;
            width: 5.94rem;
            transform: translate(100%, -30%);
            background: $kuriftu-black;
          }
          .tab {
            height: 0.13rem;
            width: 5.94rem;
            background: #c4c4c4;
          }
        }
      }
    }
  }
  .accomondation {
    .container {
      .recommended {
        display: flex;
        align-items: center;
        gap: 2rem;
        hr {
          border-style: solid;
          color: $kuriftu-grey;
          opacity: 0.5;

          width: 100%;
        }
        p {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: $kuriftu-grey;
        }
      }
      .accomondation-room {
        margin-top: 3rem;
        display: grid;
        @include responsive($md) {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @include responsive($xl) {
          gap: 8rem;
        }
        .single-accomondation {
          margin-top: 2.88rem;
          img {
            @include responsive($md) {
              width: 20rem;
              height: 15rem;
              object-fit: cover;
            }

            @include responsive($lg) {
              width: 100%;
              height: 20rem;
            }

            @include responsive($xl) {
              height: 28rem;
            }
          }
          .room-name {
            h4 {
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 1.88rem;
              color: $kuriftu-black;
            }
          }
          .room-desc {
            p {
              @extend .text;
              margin-top: 0.94rem;
              color: $kuriftu-black;
              font-size: 0.88rem;
              text-align: left;
              @include responsive($md) {
                width: 20rem;
              }
              @include responsive($lg) {
                width: 26rem;
              }
              @include responsive($xl) {
                width: 30rem;
              }
            }
          }
          .book-buttons {
            margin-top: 1.88rem;
            @include responsive($lg) {
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>