<template>
  <div
    class="flex justify-between items-center p-4 bbackdrop-filter backdrop-blur-lg bg-opacity-10 bg-gray-200 z-50"
  >
    <router-link :to="{ name: 'Home' }">
      <h1 class="text-4xl font-bold text-gray-600">Products</h1>
    </router-link>
    <router-link
      :to="{ name: 'CartPage' }"
      class="flex rounded-md text-2xl font-semibold p-2"
    >
      <Button class="px-8 text-gray-600">
        Cart
        <ShoppingCartIcon class="h-8 w-8 ml-2" />
      </Button>
    </router-link>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
</script>
