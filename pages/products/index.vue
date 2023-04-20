<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Products {
  id: string;
  title: string;
}

definePageMeta({
  layout: "products",
});

// fetch the products
const { data: products } = await useFetch<Products[]>(
  "https://fakestoreapi.com/products"
);
</script>

<style scoped></style>
