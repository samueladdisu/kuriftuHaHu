<template>
  <section class="accomondation">
    <div class="container">
      <div class="accomondation-room">
        <div
          class="single-accomondation"
          data-aos="fade-up"
          data-aos-duration="1500"
          v-for="item in data"
          :key="item.title"
        >
          <img :src="require('../assets/image/' + item.img + '')" alt="" />
          <div class="room-name">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="room-desc">
            <p>
              {{ item.desc }}
            </p>
          </div>
          <div class="book-buttons" v-if="item.link">
            <nuxt-link class="btn btn-primary" :to="item.link"
              >BOOK NOW</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.accomondation {
  .container {
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
            color: #808080;
            font-size: 1.1rem;
            line-height: 1.5rem;
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
</style>