<template>
  <div
    class="hidden md:flex items-center justify-center bg-gradient-to-r from-orange to-yellow w-full p-16 mt-20 rounded-tl-[80px] rounded-tr-[80px]"
  >
    <div class="flex flex-row">
      <img src="../assets/mockup.png" alt="" />
      <div class="flex flex-col justify-center m-10">
        <Title class="text-white m-4">Baixe o App do Clube do Rei</Title>
        <Subtitle class="text-white m-4">Disponível para Android e iOS</Subtitle>
        <img class="m-4" src="../assets/googlePlay_appStore.png" alt="" />
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
