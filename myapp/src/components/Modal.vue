<template>
  <div
    class="flex justify-center items-center z-[101] w-full h-full top-0 bg-modal absolute"
  >
    <div
      class="flex flex-col justify-center rounded-md h-[300px] w-[300px] bg-white"
    >
      <p class="text-center">{{ mess }}</p>
      <button @click="closeModal" class="self-center flex">Close</button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  mess: {
    type: String,
  },
});
const emits = defineEmits(["close-modal"]);
function closeModal() {
  emits("close-modal");
}
</script>
<style></style>
