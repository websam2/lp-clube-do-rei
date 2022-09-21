<template>
  <a @click="goTo(0)" href="" class="btn"></a>
</template>

<script>
export default {
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

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: rgb(63, 63, 63);
  text-decoration: none;
}
.btn::after {
  content: "↑";
  font-size: 32px;
  font-weight: bold;
  color: #fdd015;
  transition: margin-top 250ms;
}
.btn:hover::after {
  margin-top: -8px;
}
</style>
