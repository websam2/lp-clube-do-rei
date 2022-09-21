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

        <label for="login" class="hover:bg-yellow py-4 px-6 rounded-sm"
          >Entrar</label
        >

        <router-link
          class="btn sm:text-xs lg:text-sm bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0"
          to=""
          >Faça parte do Clube</router-link
        >
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
<!-- Modal Login -->
  <input type="checkbox" id="login" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="flex flex-col rounded-xl p-10 bg-white">
      <div class="flex justify-end">
        <label for="login" class="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>
      <div class="flex justify-center">
        <img
          class="w-24 m-6 cursor-pointer"
          src="/src/assets/logoReiChurrasquinho.svg"
          alt="Rei do Churrasquinho"
        />
      </div>

      <div class="font-bold text-xl mb-6">
        Preencha os campos e acesse sua conta!
      </div>
      <FormKit
        type="form"
        :actions="false"
        @submit="register"
        message-class="ml-8 text-error text-xs"
        incomplete-message="Dados incompletos"
      >
        <FormKit
          type="email"
          label="E-mail"
          input-class="input input-bordered w-full"
          validation-visibility="live"
          message-class="ml-2 text-error text-xs"
          label-class="text-lg"
          placeholder="email@exemplo.com"
          validation="email|required"
          :validation-messages="{
            required: 'O campo está vazio',
            email: 'E-mail informado é inválido',
          }"
        />
        <FormKit
          type="password"
          label-class="text-lg"
          input-class="input input-bordered w-full"
          validation-visibility="live"
          name="password"
          label="Senha"
          validation="required"
          placeholder="****************"
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            required: 'O campo está vazio',
          }"
        />

        <button
          @click="register()"
          class="btn sm:w-full bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 mt-6"
        >
          Entrar
        </button>
      </FormKit>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "menu",
  components: {
   
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
