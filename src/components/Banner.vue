<template>
  <div class="md:flex flex-col items-center mt-24 m-4 max-w-7xl">
    <div class="flex flew-row items-center">
      <!-- Esquerdo -->
      <div class="flex flex-col">
        <Title class="m-6 font-bold lg:ml-20"
          >Venha para o Clube do Rei e descubra o
          <span class="text-red">sabor da vida!</span>
        </Title>

        <button
          @click="goTo(500)"
          class="btn w-48 lg:ml-20 bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 m-6 motion-safe:animate-bounce"
          data-aos="fade-right"
        >
          Ver benefícios
          <img
            class="hidden sm:flex m-2 w-4"
            src="../assets/chevrons-down.svg"
            alt=""
          />
        </button>
      </div>

      <!-- Direito -->
      <div class="flex flex-row items-end w-1/2 lg:mr-20" data-aos="fade-left">
        <div class="flex flex-row">
          <img src="../assets/hero.png" alt="hero" />
        </div>
        <div class="flex flex-row lg:mb-20">
          <a
            target="_blank"
            href="https://aiqfome.com/SP/registro/rei-das-refeicoes-e-marmitex"
            ><img
              class="m-4 w-2/4"
              src="../assets/logo_aiqfome.svg"
              alt="AiFome"
          /></a>
          <a
            target="_blank"
            href="https://pt-br.facebook.com/reidochurrasquinhooficial/"
            ><img
              class="m-4 w-2/4"
              src="../assets/logo_facebook-square.svg"
              alt="Facebook"
          /></a>
          <a
            target="_blank"
            href="https://www.instagram.com/reidochurrasquinho/"
            ><img
              class="m-4 w-2/4"
              src="../assets/logo_instagram.svg"
              alt="Instagram"
          /></a>
        </div>
      </div>
    </div>
    <!-- card inferior -->
    <div
      class="hidden md:flex flex-row items-center justify-center bg-gradient-to-r from-orange to-yellow sm:p-[2%] rounded-3xl lg:-mt-14 lg:p-16"
      data-aos="fade-up"
    >
      <div class="m-4">
        <img class="w-[10%]" src="../assets/1.svg" alt="" />
        <h2 class="sm:text-lg lg:text-2xl font-bold text-white mt-2 mb-4">
          Promoções no cardápio
        </h2>
        <p class="sm:text-xs lg:text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div class="m-4">
        <img class="w-[10%]" src="../assets/2.svg" alt="" />
        <h2 class="sm:text-lg lg:text-2xl font-bold text-white mt-2 mb-4">
          Descontos em eventos
        </h2>
        <p class="sm:text-xs lg:text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div class="m-4">
        <img class="w-[10%]" src="../assets/3.svg" alt="" />
        <h2 class="sm:text-lg lg:text-2xl font-bold text-white mt-2 mb-4">
          Benefícios de parceiros
        </h2>
        <p class="sm:text-xs lg:text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },

  methods: {
    goTo(y) {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
  },
};
</script>
