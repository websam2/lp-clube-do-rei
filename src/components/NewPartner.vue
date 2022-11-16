<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:w-[50%] bg-white rounded-3xl p-4"
      data-aos="fade-up"
    >
      <div class="lg:ml-10">
        <Title class="mb-6 font-bold"
          ><span class="text-red">S</span>eja um parceiro do Clube!</Title
        >
        <Subtitle class="lg:w-[505px]"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur
          tristique elit a facilisis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Morbi scelerisque felis
          ac ultricies sodales.</Subtitle
        >
      </div>

      <div class="lg:ml-10 lg:w-96 shadow-xl m-4">
        <label
          for="registration"
          class="btn sm:w-64 bg-red hover:bg-yellow rounded-3xl text-white hover:text-black border-0 mt-6 animate-pulse"
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
