<template>
  <div
    class="uppercase flex h-screen justify-center items-center m-[0,auto] md:w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"
  >
    <Modal
      v-if="modalActive"
      v-on:close-modal="closeModal"
      :mess="modalMessage"
    />
    <Loading v-if="loading" />
    <form
      action=""
      class="p-[0,10] w-full relative flex flex-col justify-center items-center"
    >
      <h2
        class="text-4xl font-bold text-gray-600 shadow-gray-700 drop-shadow-xl"
      >
        reset password
      </h2>
      <p class="font-thin text-gray-900">
        Forgot your password? Enter your email to reset it
      </p>
      <div class="my-4">
        <div class="flex py-4">
          <input
            type="email"
            placeholder="example@gmail.com"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 placeholder:text-gray-900 text-gray-900"
            v-model="email"
          />
          <EnvelopeIcon
            class="h-6 mt-1 md:h-8 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>
      </div>

      <Button
        @click.prevent="modalActive = !modalActive"
        class="drop-shadow-2xl uppercase bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white py-2 rounded-lg w-fit px-8"
        >reset</Button
      >
      <div class="angle"></div>
    </form>
    <div class="bg-transparent h-full w-full hidden md:flex"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import Loading from "./Loading.vue";
import { EnvelopeIcon } from "@heroicons/vue/24/outline";

const email = ref("");
const modalActive = ref(false);
const loading = ref(null);
const modalMessage = "";
function closeModal() {
  modalActive.value = !modalActive.value;
  email.value = "";
}
</script>
