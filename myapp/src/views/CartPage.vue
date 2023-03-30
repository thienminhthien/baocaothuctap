<template>
  <div class="w-full h-full px-16">
    <h1 class="text-5xl py-4 text-center font-bold text-gray-800">
      Shopping cart
    </h1>
    <div class="grid grid-cols-1 gap-6">
      <div
        v-for="product in cartItems"
        :key="product.id"
        class="flex flex-row items-center justify-between p-6 rounded-lg shadow-lg bg-white backdrop-filter backdrop-blur-sm bg-opacity-70"
      >
        <div class="flex items-center">
          <img
            :src="product.imageUrl"
            alt=""
            class="w-20 h-20 object-cover rounded-lg shadow-lg mr-6"
          />
          <div class="flex flex-col">
            <div class="text-lg font-semibold">{{ product.name }}</div>
            <div class="text-gray-500">${{ product.price }}</div>
            <div class="text-gray-500">Created at: 28/March/2022</div>
            <div class="text-gray-500">Size: 40</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex flex-col mr-6">
            <MinusCircleIcon
              class="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-700"
            />
            <input
              type="number"
              class="border w-12 text-center mx-1 py-1 text-lg font-semibold"
              value="1"
            />
            <PlusCircleIcon
              class="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          </div>
          <Button
            class="bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded-lg font-semibold"
            @click="removeProduct"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center py-6">
      <h3 class="text-center text-3xl py-2 font-bold text-gray-800">
        Total : ${{ totalPrice }}
      </h3>
      <Button
        class="max-w-[350px] bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
      >
        Proceed to checkout
      </Button>
    </div>
  </div>
</template>
<script setup>
import { cartItems } from "@/fake-data";
import { computed, ref } from "vue";
import Button from "@/components/Button.vue";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";

const products = ref(cartItems);
const totalPrice = computed(() =>
  products.value.reduce((s, product) => s + Number(product.price), 0)
);

const removeProduct = (productId) => {
  const index = products.value.findIndex((item) => item.id === productId);
  if (index !== 1) {
    products.value.splice(index, 1);
  }
};
</script>
