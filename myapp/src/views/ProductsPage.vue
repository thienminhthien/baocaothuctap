<template>
  <main class="min-h-screen">
    <div class="container mx-auto pt-8 pb-16">
      <div
        class="bg-white rounded-lg overflow-hidden shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30"
      >
        <div
          class="flex items-center justify-center p-4 border-b-2 border-gray-300"
        >
          <form class="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search products"
              class="pl-12 pr-4 py-2 block w-full rounded-md bg-transparent border-2 border-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              v-model="text"
            />
            <button
              type="submit"
              class="absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
            </button>
          </form>
          <Button
            class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white py-2 mx-4 rounded-md shadow-glassmorphism hover:shadow-2xl w-full max-w-xs"
            >Apply</Button
          >
        </div>

        <div class="p-8">
          <h3 class="text-lg font-semibold text-gray-700">Category</h3>
          <div
            class="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 backdrop-filter"
          >
            <CategoryCard :cate="cate" />
          </div>
        </div>

        <div class="p-8 backdrop-filter">
          <h3 class="text-lg font-semibold text-gray-700">Color</h3>
          <div class="flex justify-between mt-4">
            <Button
              class="bg-red-300 hover:bg-red-400 text-gray-600 py-2 px-4 rounded-md flex-1 mr-4"
              >Red</Button
            >
            <Button
              class="bg-green-300 hover:bg-green-400 text-gray-600 py-2 px-4 rounded-md flex-1 mr-4"
              >Green</Button
            >
            <Button
              class="bg-yellow-300 hover:bg-yellow-400 text-gray-600 py-2 px-4 rounded-md flex-1 mr-4"
              >Yellow</Button
            >
            <Button
              class="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-md flex-1 mr-4"
              >Gray</Button
            >
            <Button
              class="bg-pink-300 hover:bg-pink-400 text-gray-600 py-2 px-4 rounded-md flex-1"
              >Pink</Button
            >
          </div>
        </div>
      </div>

      <div
        class="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 backdrop-filter backdrop-blur-md bg-opacity-50"
      >
        <Card :items="items" />
      </div>
    </div>
  </main>
</template>
<script setup>
import CategoryCard from "@/components/CategoryCard.vue";
import Button from "../components/Button.vue";
import Card from "@/components/Card.vue";
import { products, category } from "@/fake-data";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const items = products;
const cate = category;
</script>
<Style scoped>

</Style>
