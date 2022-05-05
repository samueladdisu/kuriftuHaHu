<template>
  <div class="container">
    <h2>
      Kuriftu Resort & Spa <span class="bold">{{ top.title }}</span>
    </h2>
    <p>
      {{ top.desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["top"],
};
</script>

<style lang="scss">
.spa-wellness {
  .container {
    h2 {
      text-align: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      .bold {
        font-weight: 700;
      }
    }
    p {
      text-align: center;
      color: $kuriftu-grey;
      width: 20rem;
      // margin-top: 1rem;
      margin: 1rem auto 0;
      font-size: 0.8rem;
    }
    .gallery-wrapper {
      margin-top: 2rem;
      .gallery-frist-img {
        margin-top: 0.94rem;
      }
      .gallery-imgs {
        .gallery-img {
          margin-top: 0.94rem;
        }
      }
    }
  }
}

@include responsive($md) {
  .spa-wellness {
    .container {
      h2 {
        font-size: 2rem;
      }
      p {
        width: 40rem;
        color: #808080;
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }
  }
}
@include responsive($lg) {
  .spa-wellness {
    .container {
      p {
        width: 50rem;
      }
    }
  }
}
</style>