<template>
  <div>
    <Nuxt />
    <Fixed />
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
import Fixed from "../components/Fixed.vue";

export default {
  components: {
    FooterApp,
    Fixed,
  },

  data() {
    return {
      showNav: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" >
body {
  background: $kuriftu-white;
}
</style>