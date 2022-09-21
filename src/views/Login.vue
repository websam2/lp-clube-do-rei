<template>
  <!-- O botão para abrir o modal -->
  <label for="my-modal-6" class="btn modal-button">abrir o modal</label>

  <!-- Coloque esta parte antes </body> tag -->
  <input type="checkbox" id="login" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
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
              class="btn sm:w-full bg-red hover:bg-black rounded-3xl text-white hover:text-white border-0 mt-6"
            >
              Faça parte do clube
            </button>
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
