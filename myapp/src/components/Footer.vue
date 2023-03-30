<template>
  <footer class="px-6 z-50 shadow-lg rounded-b-lg w-full">
    <div
      class="w-full container shadow-glassmorphism rounded-t-2xl mx-auto p-4 md:px-6 md:py-8"
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://www.facebook.com/profile.php?id=100029796562774"
          class="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >FootStyle</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <router-link
              :to="{ name: 'About' }"
              href="#"
              class="mr-4 hover:underline md:mr-6"
              >About</router-link
            >
          </li>

          <li>
            <router-link :to="{ name: 'Contact' }" class="hover:underline"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >©
        <a
          href="https://www.facebook.com"
          class="hover:underline"
          >thien@gmail.com</a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
