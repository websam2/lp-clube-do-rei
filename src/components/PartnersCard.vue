<template>
  <div class="bg-white shadow-xl rounded-2xl m-2 md:m-8">
    <figure>
      <img class="w-full sm:h-60 bg-silver rounded-t-2xl" src="https://via.placeholder.com/240" alt="" />
    </figure>
    <div class="flex flex-col">
      <h2 class="font-bold text-xl m-5">
        {{ name }}
      </h2>
      <div class="flex flex-col items-center md:flex-row md:justify-between w-44 md:w-80">
        <div class="badge badge-outline h-10 m-1 md:ml-5">
          <img class="mr-2 mb-2" src="../assets/map-pin.svg" alt="" />{{ city }}
        </div>
        <div class="badge badge-outline h-10 m-1 md:mr-5">
          <img class="mr-2" src="../assets/phone.svg" alt="" />{{ phone }}
        </div>
      </div>
      <a href=""
        ><p class="flex flex-row text-red justify-end m-4">Veja mais</p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    city: String,
    phone: Number,
  },
};
</script>
