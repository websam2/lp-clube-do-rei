<template>
  <div class="bg-white shadow-xl rounded-2xl m-2 md:m-8 md:w-full">
    <figure>
      <img class="w-full sm:h-60 bg-silver rounded-t-2xl" src="https://via.placeholder.com/240" alt="" />
    </figure>
    <div class="flex flex-col">
      <h2 class="font-bold text-xl m-5">
        {{ name }}
      </h2>
      <div class="flex flex-row justify-center w-44 md:w-80">
        <div class="badge badge-outline h-10 ml-5 mb-10">
          <img class="mr-2" src="../assets/desconto.svg" alt="" />{{ real }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    real: Number,
  },
};
</script>
