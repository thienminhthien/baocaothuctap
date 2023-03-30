<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="rounded-xl overflow-hidden my-4 shadow-glassmorphism opacity-90 hover:opacity-100"
  >
    <img
      :src="item.imageUrl"
      alt=""
      class="object-cover w-full transform hover:scale-105 transition duration-500 ease-in-out"
    />
    <div class="text-2xl text-center pt-4 font-bold text-gray-600">
      {{ item.name }}
    </div>
    <div class="text-xl text-center pb-4 font-semibold text-gray-600">
      {{ item.averageRating }}
    </div>
    <div class="text-xl text-center pb-4 font-bold text-gray-600">
      ${{ item.price }}
    </div>
    <div class="flex py-2 justify-evenly">
      <router-link :to="{ path: `/products/${item.id}` }"
        ><Button class=""> Detail </Button></router-link
      ><Button
        class="text-white bg-gradient-to-r from-purple-400 to-pink-400 rounded-md"
        @click="addProductToCart(item)"
        >Buy now</Button
      >
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import { cartItems } from "@/fake-data";
import { ref } from "vue";
const { props } = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
const cart = ref(cartItems);
function addProductToCart(product) {
  cart.value.push(product);
  console.log(cart.value);
}
</script>
<style>
.shadow-glassmorphism {
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
