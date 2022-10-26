<template>
  <div
    class="md:flex items-center justify-center bg-gradient-to-r from-orange to-yellow w-full"
  >
    <div class="flex items-center bg-white lg:rounded-3xl lg:p-16 p-4 m-4" data-aos="fade-up">
      <div class="">
        <img src="../assets/group-promotion.png" alt="Promoções e descontos" />
      </div>
      <div class="flex flex-col lg:ml-10">
        <Title class="lg:mb-6 font-bold"
          ><span class="text-red">P</span>romoções e descontos</Title
        >
        <Subtitle class="md:w-[505px]"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur
          tristique elit a facilisis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Morbi scelerisque felis
          ac ultricies sodales.</Subtitle
        >
        <label
          for="registration"
          class="btn sm:w-64 bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 mt-6 animate-pulse"
        >
          Faça parte do clube
          <!-- <img class="m-2 w-4" src="../assets/chevrons-down.svg" alt="" /> -->
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";

export default {
  components: {
    Title,
    Subtitle,
  },
};
</script>
