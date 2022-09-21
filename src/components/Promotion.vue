<template>
  <div class="flex flex-col">
    <Title class="sm:ml-16 p-4 font-bold"
      ><span class="text-red">N</span>ossas promoções</Title
    >
    <div class="flex flex-row justify-between mt-4 overflow-x-scroll m-2 mb-10">
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

<script>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
import PromotionCard from "./PromotionCard.vue";
export default {
  components: {
    Title,
    Subtitle,
    PromotionCard,
  },
};
</script>
