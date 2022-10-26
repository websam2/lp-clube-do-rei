<template>
  <div
    class="fixed z-50 top-0 left-0 opacity-95 bg-white w-full shadow"
    data-aos="flip-up"
  >
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

        <label
          for="login"
          class="hover:bg-yellow py-4 px-6 rounded-sm cursor-pointer"
          >Entrar</label
        >

        <label
          for="registration"
          class="btn sm:text-xs lg:text-sm bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 ml-2"
          >Faça parte do Clube</label
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
            <li @click="goTo(900)" class="hover:bg-yellow py-4 px-6 w-full">
              Parceiros
            </li>
            <li @click="goTo(1600)" class="hover:bg-yellow py-4 px-6 w-full">
              Seja um parceiro
            </li>
            <li @click="goTo(2100)" class="hover:bg-yellow py-4 px-6 w-full">
              Promoções
            </li>

            <label for="login" class="hover:bg-yellow py-4 px-6 w-full"
              >Entrar</label
            >

            <label for="registration" class="hover:bg-yellow py-4 px-6 w-full"
              >Faça parte do clube</label
            >
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
        @submit="login"
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
          @click="login()"
          class="btn sm:w-full bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 mt-6"
        >
          Entrar
        </button>
      </FormKit>
      <div class="flex flex-col justify-center items-center">
        <div class="m-4">________ ou ________</div>
        <div>Ainda não possui uma conta?</div>
        <label for="registration" class="text-red underline cursor-pointer"
          >Registre-se</label
        >
      </div>
    </div>
  </div>

  <!-- Modal Cadastro -->
  <input type="checkbox" id="registration" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="flex flex-col rounded-xl p-10 bg-white">
      <div class="flex justify-end">
        <label for="registration" class="btn btn-circle btn-outline">
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
      <!-- <div class="flex justify-center">
        <img
          class="w-24 m-6 cursor-pointer"
          src="/src/assets/logoReiChurrasquinho.svg"
          alt="Rei do Churrasquinho"
        />
      </div> -->

      <div class="font-bold text-xl m-6">
        Preencha os campos para fazer o cadastro!
      </div>
      <FormKit
        type="form"
        :actions="false"
        @submit="register"
        message-class="ml-8 text-error text-xs"
        incomplete-message="Dados incompletos, por favor preencher corretamente"
      >
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full"
          type="text"
          label-class="text-lg"
          label="Nome completo"
          validation="required"
          placeholder="Nome completo"
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            required: 'O campo está vazio',
          }"
        />
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full"
          type="email"
          label-class="text-lg"
          label="E-mail"
          validation="required|email"
          placeholder="email@exemplo.com"
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            required: 'O campo está vazio',
            email: 'E-mail informado é inválido',
          }"
        />
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full "
          type="select"
          label-class="text-lg"
          label="Cidade"
          validation="required"
          placeholder="Cidade"
          message-class="ml-2 text-error text-xs"
          :options="['Registro', 'Sete Barras', 'Jacupiranga']"
          :validation-messages="{
            required: 'O campo está vazio',
          }"
        />
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full"
          type="select"
          label-class="text-lg"
          label="Estado"
          validation="required"
          placeholder="Estado"
          message-class="ml-2 text-error text-xs"
          :options="['São Paulo']"
          :validation-messages="{
            required: 'O campo está vazio',
          }"
        />
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full"
          label-class="text-lg"
          type="password"
          name="password"
          label="Senha"
          validation="required"
          placeholder="****************"
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            required: 'O campo está vazio',
          }"
        />
        <FormKit
          outer-class="mx-5 mb-2"
          input-class="input input-bordered rounded-md w-full"
          label-class="text-lg"
          type="password"
          name="password_confirm"
          label="Confirmar a senha"
          validation="required|confirm"
          validation-visibility=""
          validation-label="Confirmação de senha"
          placeholder="****************"
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            required: 'O campo está vazio',
            confirm: 'Senha não confere',
          }"
        />
        <FormKit
          outer-class="ml-6"
          wrapper-class="w-full flex flex-row "
          label-class="ml-2"
          type="checkbox"
          label="Termos de uso e privacidade"
          name="terms"
          validation="accepted"
          validation-visibility=""
          message-class="ml-2 text-error text-xs"
          :validation-messages="{
            accepted: 'Você precisa aceitar os termos de uso e privacidade ',
          }"
        />

        <button
          @click="register()"
          class="btn sm:w-full bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 mt-6"
        >
          Cadastrar
        </button>
      </FormKit>
      <!-- <div class="flex flex-col justify-center items-center">
        <div class="m-4">________ ou ________</div>
        <div>Possui uma conta?</div>
        <label for="login" class="text-red underline">Fazer o Login</label>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  components: {},

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
