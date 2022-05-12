<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/tana-logo.svg`)" />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Dbox :data="accData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      accData: [
        {
          title: "Presidential",
          desc: ` A spacious room with two kind sized beds, a private spa room and a dining table. Featuring garden and lakefront view.`,
          img: "tana/acc/1.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "tana/acc/2.webp",
          link: "/book",
        },
        {
          title: "Presidential1",
          desc: ` A spacious room with two kind sized beds, a private spa room and a dining table. Featuring garden and lakefront view.`,
          img: "tana/acc/3.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake ",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "tana/acc/4.webp",
          link: "/book",
        },
      ],
    };
  },
};
</script>



