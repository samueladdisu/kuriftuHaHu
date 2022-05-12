<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/bishoftu-logo.svg`)" />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
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
          img: "bishoftu/loft/loft1.webp",
          link: "/book",
        },
        {
          title: "Top View",
          desc: ` Situated at the top of the resort with beautiful lakefront view. Available with king size or double bed option.`,
          img: "bishoftu/topview/top1.webp",
          link: "/book",
        },
        {
          title: "Deluxe Lake Front",
          desc: `A spacious room with a lakefront view. Available with king size or double bed option.`,
          img: "bishoftu/deluxe/1.webp",
          link: "/book",
        },
        {
          title: "Executive Suite",
          desc: `Uniquely designed with modern amenities and plenty of natural lighting. Available with king size or double bed option.`,
          img: "bishoftu/presidential/pre5.webp",
          link: "/book",
        },
        {
          title: "Garden View",
          desc: `Our garden view rooms let you take in serene greenery and swaying trees right outside your window. Available with king size or double bed option.`,
          img: "bishoftu/garden/1.webp",
          link: "/book",
        },
        {
          title: "Village Loft",
          desc: `Our newly constructed kuriftu village loft rooms are a two-story living spaces elegantly furnished with handmade furnitures. located near the water park and pool area. includes one king size and double bed.`,
          img: "bishoftu/standard/1.webp",
          link: "/book",
        },
        {
          title: "Village Deluxe",
          desc: `located in the kuriflu village area, these spacious rooms are just right outside the waterpark and look out to the pool. Available in king size or double bed option.`,
          img: "bishoftu/standard/1.webp",
          link: "/book",
        },
        {
          title: "Standard Classic",
          desc: `A room with a private backyard garden view. These spacious rooms enjoy a peaceful setting in the heart of the resort.`,
          img: "bishoftu/standard/1.webp",
          link: "/book",
        },
      ],
    };
  },
};
</script>


