<script setup>
import Button from "./Button.vue";

const prosp = defineProps({
  cate: {
    type: String,
  },
});
</script>
<template>
  <div
    v-for="(item, index) in cate"
    :key="index"
    class="overflow-hidden m-1 rounded-md"
  >
    <Button
      class="text-lg text-center font-semibold bg-white shadow-glassmorphism rounded-md w-full"
    >
      {{ item.name }}
    </Button>
  </div>
</template>
