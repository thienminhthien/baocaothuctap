<template>
  <div
    class="uppercase flex h-screen justify-center items-center m-[0,auto] md:w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"
  >
    <form
      @submit.prevent="onSubmit"
      action=""
      class="p-[0,10] w-full relative flex flex-col justify-center items-center"
    >
      <p class="">Dont have account ?</p>
      <router-link
        :to="{ name: 'Register' }"
        class="mb-8 font-semibold hover:text-gray-600 flex underline"
        >Register now
        <ArrowLongRightIcon class="w-6 h-4 mt-1 hidden md:flex" />
      </router-link>
      <h2
        class="text-4xl font-bold text-gray-600 shadow-gray-700 drop-shadow-xl"
      >
        login to footstyle
      </h2>
      <div class="my-4">
        <div class="flex py-4">
          <input
            type="email"
            placeholder="example@gmail.com"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-gray-900 placeholder:text-gray-900"
            v-model="email"
          />
          <EnvelopeIcon
            class="h-6 mt-1 md:h-8 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>
        <div class="flex">
          <input
            type="password"
            placeholder="********"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-gray-900 placeholder:text-gray-900"
            v-model="password"
          />
          <LockClosedIcon
            class="h-6 mt-1 md:h-8 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>
      </div>
      <router-link
        :to="{ name: 'ForgotPassword' }"
        class="text-sm my-2 hover:text-gray-500"
        >forgot password</router-link
      >
      <div class="flex flex-col">
        <Button
          v-if="!isPending"
          type="submit"
          class="drop-shadow-2xl uppercase bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white px-8 py-2 rounded-lg"
          >sign in</Button
        >
        <Button
          v-else
          type="submit"
          class="drop-shadow-2xl uppercase bg-gradient-to-r from-gray-400 via-purple-200 to-slate-400 text-white px-8 py-2 rounded-lg"
          >loading...</Button
        >
      </div>
      <div v-if="error" class="text-red-500 text-center mt-4">
        <span>{{ error }}</span>
      </div>
    </form>
    <div class="bg-transparent h-full w-full hidden md:flex"></div>
  </div>
</template>
<script setup>
import {
  ArrowLongRightIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/logic/useSignIn";

const router = useRouter();
const { error, isPending, signIn } = useSignIn();
const email = ref("");
const password = ref("");
async function onSubmit() {
  await signIn(email.value, password.value);
  if (!error.value) router.push({ name: "Profile", params: {} });
}
</script>
