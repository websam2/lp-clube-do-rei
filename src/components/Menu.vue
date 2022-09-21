<template>
  <div class="fixed z-50 top-0 left-0 opacity-95 bg-white w-full shadow">
    <div class="flex justify-between items-center text-black m-4">
      <img
        @click="goTo('/')"
        class="pl-8 w-32 cursor-pointer"
        src="/src/assets/logoReiChurrasquinho.svg"
        alt="Rei do Churrasquinho"
      />
      <ul
        id="menu"
        class="hidden lg:flex items-center text-base font-semibold cursor-pointer"
      >
        <router-link
          @click="goTo(700)"
          class="hover:bg-yellow py-4 px-6 rounded-sm"
          to=""
          >Sobre o clube</router-link
        >

        <router-link
          @click="goTo(1300)"
          class="hover:bg-yellow py-4 px-6 rounded-sm"
          to=""
          >Benefícios</router-link
        >
        <router-link
          @click="goTo(2000)"
          class="hover:bg-yellow py-4 px-6 rounded-sm"
          to=""
          >Parceiros</router-link
        >
        <router-link
          @click="goTo(2300)"
          class="hover:bg-yellow py-4 px-6 rounded-sm"
          to=""
          >Seja um parceiro</router-link
        >
        <router-link
          @click="goTo(2900)"
          class="hover:bg-yellow py-4 px-6 rounded-sm"
          to=""
          >Promoções</router-link
        >

        <router-link class="hover:bg-yellow py-4 px-6 rounded-sm" 
        to="/login"
          >Entrar</router-link>

        <router-link
          class="btn sm:text-xs lg:text-sm bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0"
          to="/Register"
          >Faça parte do Clube</router-link>
      </ul>

      <!-- Menu mobile -->
      <button
        class="block lg:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-yellow group"
      >
        <div class="w-5 h-1 bg-red mb-1"></div>
        <div class="w-5 h-1 bg-red mb-1"></div>
        <div class="w-5 h-1 bg-red"></div>
        <div
          class="absolute top-0 -right-full h-screen w-8/12 bg-white shadow opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
        >
          <ul
            class="flex flex-col items-center w-full text-base cursor-pointer pt-10"
          >
            <li @click="goTo(0)" class="hover:bg-yellow py-4 px-6 w-full">
              Sobre o Clube
            </li>
            <!-- <li @click="goTo(1400)" class="hover:bg-yellow py-4 px-6 w-full">
              Benefícios
            </li> -->
            <li @click="goTo(700)" class="hover:bg-yellow py-4 px-6 w-full">
              Parceiros
            </li>
            <li @click="goTo(1200)" class="hover:bg-yellow py-4 px-6 w-full">
              Seja um parceiro
            </li>
            <li @click="goTo(1700)" class="hover:bg-yellow py-4 px-6 w-full">
              Promoções
            </li>
            <li @click="goTo('')" class="hover:bg-yellow py-4 px-6 w-full">
              <router-link to="../views/Login.vue">Entrar</router-link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
export default {
  name: "menu",
  components: {
    Login,
    Register,
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
