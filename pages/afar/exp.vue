<template>
  <div class="main">
    <Destinationheader :src="require(`../../assets/image/afar-logo.svg`)" />

    <Destinav base="" home="/afar" dir="Afar" />

    <Dbox :data="exp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: [
        {
          title: "Water Park",
          desc: `Our acquatic playgrounds with winding waterslides, suspended
                buckets of water, and interactive playscapes offer a fun way to
                beat the heat.`,
          img: "waterpark.jpg",
          link: "",
        },
        {
          title: "Kayaking",
          desc: `Enjoy your stay with our Sunrise, Mid-day, and Sunset Kayaking on the lake of bishoftu.`,
          img: "dz-cover.jpg",
        },
        {
          title: "Cinema",
          desc: `Lean back and enjoy an exclusive movie feeling with the latest films in our resort.`,
          img: "bishoftu/cinema.webp",
        },
        {
          title: "Billiards & Table Tennis",
          desc: `Enjoy a bit of fun in the shade with our billiards and table tennis to try out your skill.`,
          img: "_DSC4621 (2)-min.jpg",
        },
        {
          title: "Gift Shop",
          desc: `You will never fail to find something special for you or your loved ones in our locally sourced gift shops.`,
          img: "bishoftu/gift_shop.webp",
        },
        {
          title: "Swimming Pool",
          desc: ` Whether you’re looking for an early-morning workout or just for refreshment after your spa treatment, the pools at Kuriftu Bishoftu Resort and Spa do not disappoint offering an
          exceptional place for both rest and recreation.`,
          img: "bishoftu/Swimming_pool.webp",
        },
      ],
    };
  },
};
</script>

