<template>
  <div
    class="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 transition duration-700 ease-in-out"
  >
    <navigation
      v-if="!navigation.value"
      :class="{ fixed: isHeaderFixed }"
      class="header"
    />
    <main class=" ">
      <navbar v-if="!navbar.value && !navigation.value" />
      <router-view />
    </main>
    <Footer v-if="!navigation.value" />
  </div>
</template>
<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Navigation from "./components/Navigation.vue";
import { reactive, onMounted, watch, ref, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";

const navigation = reactive({ value: null });
const navbar = reactive({ value: null });
const router = useRouter();

function checkRoute() {
  if (
    router.currentRoute.value.name === "Register" ||
    router.currentRoute.value.name === "Login" ||
    router.currentRoute.value.name === "ForgotPassword"
  ) {
    navigation.value = true;
    return;
  }
  navigation.value = false;
}
function checkRouteNavbar() {
  if (
    router.currentRoute.value.name === "Contact" ||
    router.currentRoute.value.name === "About"
  ) {
    navbar.value = true;
    return;
  }
  navbar.value = false;
}

onMounted(() => {
  checkRoute();
  checkRouteNavbar();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
watch(router.currentRoute, () => {
  checkRoute();
  checkRouteNavbar();
});

const scrollPosition = ref(window.scrollY);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};
const isHeaderFixed = computed(() => {
  return scrollPosition.value > 200;
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
}
</style>
