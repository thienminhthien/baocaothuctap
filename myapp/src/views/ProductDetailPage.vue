<template>
  <div v-if="product" class="">
    <div class="flex justify-evenly items-center">
      <div class="flex flex-col">
        <div>
          <h3 class="text-3xl font-semibold">Color</h3>
          <div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-3">
            <Button class="justify-center hover:bg-red-300 mt-1 mr-1"
              >Red</Button
            >
            <Button class="justify-center hover:bg-green-300 mt-1 mr-1"
              >Green</Button
            >
            <Button class="justify-center hover:bg-yellow-300 mt-1 mr-1"
              >Yellow</Button
            >
            <Button class="justify-center hover:bg-gray-300 mt-1 mr-1"
              >Gray</Button
            >
            <Button class="justify-center hover:bg-pink-300 mt-1 mr-1"
              >Pink</Button
            >
            <Button class="justify-center hover:bg-purple-300 mt-1 mr-1"
              >Purple</Button
            >
            <Button class="justify-center hover:bg-cyan-300 mt-1 mr-1"
              >Cyan</Button
            >
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-semibold">Size: {{ size }}</h3>
          <div class="flex">
            <MinusSmallIcon
              class="h-6 w-6 cursor-pointer"
              @click="size--"
            /><input type="range" v-model="size" max="50" min="35" />
            <PlusSmallIcon class="h-6 w-6 cursor-pointer" @click="size++" />
          </div>
        </div>
      </div>
      <div>
        <hr class="border-2" />
      </div>
      <div
        class="block md:grid grid-cols-3 max-w-screen-lg border-2 py-8 px-4 rounded-lg"
      >
        <div class="overflow-hidden">
          <img
            :src="data.imageUrl"
            alt=""
            class="w-full hover:scale-110 object-cover px-4 cursor-zoom-in"
          />
        </div>
        <div
          class="col-span-2 border-l-2 p-2 bg-gradient-to-r from-gray-300 to-white"
        >
          <div class="font-semibold text-5xl">{{ data.name }}</div>
          <div class="text-3xl">{{ data.averageRating }}</div>
          <div class="text-3xl">${{ data.price }}</div>
          <div class="text-xl">Inventory: 184</div>
          <div class="text-3xl">Overview</div>
          <div>{{ data.description }}</div>
          <div class="flex justify-end">
            <Button
              >Add to
              <ShoppingCartIcon class="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-4xl font-semibold">Recommend</h3>
      <div
        class="flex flex-wrap gap-8 ml-0 lg:ml-8 w-fit justify-center rounded-md my-4"
      >
        <Card :items="recommend" />
      </div>
    </div>
  </div>

  <NotFoundPage v-else />
</template>
<script setup>
import { products } from "@/fake-data";
import { useRoute } from "vue-router";
import Button from "@/components/Button.vue";
import NotFoundPage from "./NotFoundPage.vue";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import Card from "@/components/Card.vue";
import { ref, watch, computed } from "vue";

const route = useRoute();
let productId = route.params.id;
let data = ref(products.find((p) => p.id === productId));

const product = computed(() => {
  return data.value ? { ...data.value } : null;
});

const recommend = products.slice(6);

watch(
  () => route.params.id,
  (newId) => {
    productId = newId;
    data.value = products.find((p) => p.id === newId);
  }
);
const size = ref(39);
</script>
