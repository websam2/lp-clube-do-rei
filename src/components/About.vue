<template>
  <div class="md:flex items-center justify-center w-full">
    <div class="flex items-center lg:rounded-3xl p-4">
      <div class="flex flex-col lg:ml-10">
        <Title class="lg:mb-6 font-bold"
          ><span class="text-red">S</span>obre o Clube do Rei</Title
        >
        <Subtitle class="md:w-[780px]"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur
          tristique elit a facilisis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Morbi scelerisque felis
          ac ultricies sodales.</Subtitle
        >
      </div>
      <div class="" data-aos="fade-left">
        <img src="../assets/about.png" alt="Promoções e descontos" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";

export default {
  components: {
    Title,
    Subtitle,
  },
};
</script>
