<template>
  <div class="bg-silver flex flex-col w-full h-full">
    
    <Menu />

    <div class="flex justify-center mb-20">
      <Banner />
    </div>

    <div class="mb-20">
      <About />
    </div>

    <div class="mb-20">
      <PromotionDiscount />
    </div>

    <div class="mb-20">
      <Partners />
    </div>

    <div class="mb-20">
      <NewPartner />
    </div>

      <div class="mb-20">
      <Promotion />
    </div>

    <Footer />

    <ButtonUP />

    

  </div>

</template>

<style>
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #fdd015 #ececec;
}

/* Chrome, Edge, and Safari */
::-webkit-scrollbar-track {
  background-color: #ececec;
}
::-webkit-scrollbar {
  width: 6px;
  background: #ececec;
}
::-webkit-scrollbar-thumb {
  background: #fdd015;
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  background-color: #fdd015;
  border-radius: 10px;
  border: 3px none #ffffff;
}
</style>

<script>
import Menu from "./components/Menu.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import PromotionDiscount from "./components/PromotionDiscount.vue";
import Partners from "./components/Partners.vue";
import NewPartner from "./components/NewPartner.vue";
import Promotion from "./components/Promotion.vue";
import Footer from "./components/Footer.vue";
import ButtonUP from "./components/ButtonUP.vue";

export default {
  components: {
    Menu,
    Banner,
    About,
    PromotionDiscount,
    Partners,
    NewPartner,
    Promotion,
    Footer,
    ButtonUP,
  },
};
</script>
