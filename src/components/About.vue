<template>
  <div class="flex items-center max-w-7x1 m-4">
    <div class="flex flex-row items-center">
      <div class="flex flex-col justify-center lg:w-1/2">
        <Title class="font-bold"
          ><span class="text-red">S</span>obre o Clube do Rei
        </Title>
        <Subtitle class=""
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur
          tristique elit a facilisis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Morbi scelerisque felis
          ac ultricies sodales. Donec sit amet nunc semper, volutpat libero sit
          amet, sagittis metus.
        </Subtitle>
      </div>

      <div class="lg:w-1/2">
        <img src="../assets/about.png" alt="Sobre o Clube do Rei" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";

export default {
  components: {
    Title,
    Subtitle,
  },
};
</script>
