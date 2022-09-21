<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:w-[50%] bg-white rounded-3xl p-4" data-aos="fade-up"
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

      <div class="card lg:ml-10 lg:w-96 bg-white shadow-xl m-4">
        <div class="flex flex-col card-body bg-yellow">
          <div class="card-actions">
            <div class="w-full">
              <FormKit
                type="form"
                :actions="false"
                @submit="register"
                message-class="ml-8 text-error text-xs"
                incomplete-message="Dados incompletos"
              >
                <FormKit
                  type="text"
                  label="Nome completo"
                  input-class="input input-bordered input w-full"
                  message-class="ml-2 text-error text-xs"
                  label-class="text-lg"
                  validation="required"
                  :validation-messages="{
                    required: 'O campo está vazio',
                  }"
                />
                <FormKit
                  type="email"
                  label="E-mail"
                  input-class="input input-bordered input w-full"
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
                <button
                  @click="register()"
                  class="btn lg:w-full bg-red hover:bg-black rounded-3xl text-white hover:text-white border-0 mt-6"
                >
                  Faça parte do clube
                </button>
              </FormKit>
            </div>
          </div>
        </div>
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
