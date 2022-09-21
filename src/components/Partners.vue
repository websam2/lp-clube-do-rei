<template>
  <div class="flex flex-col ">
    <Title class="sm:ml-16 p-4 font-bold"
      ><span class="text-red ">N</span>ossos parceiros</Title
    >
    <div class="flex flex-row justify-between mt-4 overflow-x-scroll m-2 mb-10">
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>
      <Card name="Nome do Parceiro" city="Cidade" phone="13 99999-9999"></Card>

    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Card from "./PartnersCard.vue";
export default {
  components: {
    Title,
    Card,
  },
};
</script>
