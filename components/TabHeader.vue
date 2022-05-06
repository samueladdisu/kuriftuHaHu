<template>
  <div class="container">
    <div class="main-title">
      <h2>{{ head.title }}</h2>
      <p>
        {{ head.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["head"],
};
</script>

<style lang="scss">
.container {
  .main-title {
    display: grid;
    place-items: center;
    h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
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
  .image-wrapper {
    display: grid;
    place-items: center;
    @include responsive($md) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    @include responsive($xl) {
      gap: 3rem;
    }
    .single-image {
      margin-top: 2rem;
      img {
        width: 20rem;
        height: 30rem;
        object-fit: cover;
        @include responsive($lg) {
          width: 30rem;
          height: 40rem;
        }
        @include responsive($xl) {
          width: 55rem;
          height: 40rem;
        }
      }
    }
    .single-image1 {
      margin-top: 2rem;
      img {
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        @include responsive($lg) {
          width: 30rem;
          height: 30rem;
        }
        @include responsive($xl) {
          width: 55rem;
          height: 30rem;
        }
      }
    }
    @include responsive($md) {
      .grid-top {
        margin-top: 1rem;
      }
      .grid-top2 {
        margin-top: -9rem;
      }
      .grid-top1 {
        margin-top: -1rem;
      }
      .grid-top3 {
        margin-top: -8rem;
      }
    }
    @include responsive($xl) {
      .grid-top {
        margin-top: 1rem;
      }
      .grid-top2 {
        margin-top: -9rem;
      }
      .grid-top3 {
        margin-top: -8rem;
      }
    }
  }
}
</style>