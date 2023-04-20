<template>
  <div>
    <productDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
interface Product {
  title: string;
  price: string;
  id: string;
}

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch<Product>(uri, { key: id[0] });

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
