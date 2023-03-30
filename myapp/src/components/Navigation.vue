<template>
  <header
    class="px-6 z-50 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-gray-200 shadow-lg rounded-b-lg w-full"
  >
    <nav class="max-w-full flex items-center py-6 justify-center">
      <div class="flex items-center">
        <router-link
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-500"
          :to="{ name: 'Home' }"
        >
          FootStyle
        </router-link>
      </div>
      <div
        class="text-2xl font-semibold hidden lg:flex relative justify-end items-center flex-1 py-4"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Products
        </router-link>
        <router-link
          :to="{ name: 'Contact' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Contact
        </router-link>
        <router-link
          :to="{ name: 'About' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          About
        </router-link>
        <router-link
          :to="{ name: 'Profile' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Account
        </router-link>
      </div>
    </nav>

    <Bars3Icon
      class="cursor-pointer top-8 right-6 h-8 md:h-12 w-auto absolute lg:hidden"
      @click="mobileNav = !mobileNav"
    />
    <transition name="mobile-nav" class="z-auto fixed">
      <ul
        v-if="mobileNav"
        class="p-5 w-full flex flex-row h-[100px] relative top-0 text-black left-0 text-sm font-semibold justify-center"
      >
        <router-link
          :to="{ name: 'Home' }"
          @click="mobileNav = !mobileNav"
          class="p-3"
        >
          Products</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'Contact' }"
          @click="mobileNav = !mobileNav"
          class="p-3"
        >
          Contact</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'About' }"
          @click="mobileNav = !mobileNav"
          class="p-3"
        >
          About</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'Profile' }"
          @click="mobileNav = !mobileNav"
          class="p-3"
        >
          Account</router-link
        >
      </ul>
    </transition>
  </header>
</template>
<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const mobileNav = ref(false);
</script>
<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.6s ease-in-out;
}

.mobile-nav-enter-from {
  transform: translateY(-250px);
}
.mobile-nav-enter-to {
  transform: translateY(0);
}
.mobile-nav-leave-to {
  transform: translateY(-250px);
}
</style>
