<template>
  <div class="main">
    <Destinationheader
      :src="require(`../../assets/image/AWASH-Color side.svg`)"
    />

    <Destinav base="" home="/awash" dir="Awash" />
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
          img: "bishoftu/presidential/pre7.webp",
          link: "/book",
        },
        {
          title: "Loft",
          desc: `The ultimate luxury awaits you in our loft suite. Enjoy a lavish
                two-story living space with your family and friends. includes
                one king size and double bed with a swimming pool and garden
                view.`,
          img: "awash/accommodation/1.webp",
          link: "/book",
        },
        {
          title: "Top View",
          desc: ` Situated at the top of the resort with beautiful lakefront view. Available with king size or double bed option.`,
          img: "awash/accommodation/2.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `A spacious room with a lakefront view. Available with king size or double bed option.`,
          img: "awash/accommodation/3.webp",
          link: "/book",
        },
        {
          title: "Executive Suite",
          desc: `Uniquely designed with modern amenities and plenty of natural lighting. Available with king size or double bed option.`,
          img: "awash/accommodation/4.webp",
          link: "/book",
        },
        {
          title: "Garden View",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad expedita optio vel, recusandae deserunt! Dolorem nihil doloremque magnam sapiente?`,
          img: "awash/accommodation/5.webp",
          link: "/book",
        },
        {
          title: "Standard Classic",
          desc: `A room with a private backyard garden view. These spacious rooms enjoy a peaceful setting in the heart of the resort.`,
          img: "awash/accommodation/6.webp",
          link: "/book",
        },
      ],
    };
  },
};
</script>
