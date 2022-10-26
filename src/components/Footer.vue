<template>
  <div
    class="flex flex-col items-center justify-between bg-gradient-to-r from-orange to-yellow w-full p-16 rounded-tl-[80px] rounded-tr-[80px]"
    data-aos="fade-up"
  >
    <div class="flex flex-row">
      <img src="../assets/mockup.png" alt="" />
      <div class="flex flex-col justify-center m-10">
        <Title class="text-white m-4">Baixe o App do Clube do Rei</Title>
        <!-- <Subtitle class="text-white m-4"
          >Disponível para Android e iOS</Subtitle
        > -->
        <a href="#" target="_blank">
          <img class="m-4 w-52" src="../assets/google-play-badge.png" alt="Baixe na Google Play" />
        </a>
      </div>
    </div>

    <div class="text-xs text-white mt-10 text-center">
      <p>
        Todos os direitos reservados para MARAGNI REI DO CHURRASQUINHO LTDA -
        {{ year }}
      </p>
      <p>CNPJ - 31.887.415/0001-52</p>
      <p>João Batista Pocci Júnior n°32, Centro em Registro-SP, 11.900-000</p>
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
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
