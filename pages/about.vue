<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores maxime
      provident quis id rerum, explicabo iure quia itaque eos rem minima facilis
      accusamus assumenda amet labore accusantium fugit corporis error?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
