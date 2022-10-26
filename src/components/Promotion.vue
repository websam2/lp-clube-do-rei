<template>
  <div class="flex flex-col">
    <Title class="sm:ml-16 p-4 font-bold"
      ><span class="text-red">N</span>ossas promoções</Title
    >
    <div
      id="promotion"
      class="flex flex-row justify-between mt-4 overflow-x-scroll m-2 mb-10"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
import PromotionCard from "./PromotionCard.vue";
import { onMounted } from "vue";

const getScroll = document.getElementById("promotion");


onMounted(() =>{

})

</script>
