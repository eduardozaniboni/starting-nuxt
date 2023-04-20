<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>

    <productDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
interface Product {
  title: string;
  price: string;
  id: string;
  description: string;
}

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch<Product>(uri, { key: id[0] });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
