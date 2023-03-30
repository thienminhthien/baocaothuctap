<template>
  <div class="h-screen">
    <!-- info user -->
    <div class="flex flex-col">
      <div class="container mx-auto p-8">
        <div class="text-center">
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
            <img
              src="https://scr.vn/wp-content/uploads/2020/08/Nh%C3%B3c-Maruko-d%E1%BB%85-th%C6%B0%C6%A1ng-1024x1024.jpeg"
              alt="User's profile avatar"
              class="w-full h-auto object-cover"
              sizes="xs"
            />
          </div>
          <div v-if="user">
            <div
              class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"
            >
              {{ user.displayName }}
            </div>
            <P class="font-semibold mt-1 text-gray-600">
              {{ user.email }}
            </P>
          </div>
        </div>
      </div>
    </div>
    <!-- menu -->
    <div class="row">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1">
          <h1
            class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500"
          >
            General
          </h1>
        </div>
        <div class="grid grid-cols-1">
          <div class="col-span-1">
            <ul>
              <li
                class="text-gray-800 border-b-2"
                v-for="(profileOption, index) in profileOptions"
                :key="profileOption.name"
              >
                <router-link
                  :to="profileOption.route"
                  class="flex justify-between items-center py-4"
                >
                  <div
                    class="flex text-left items-center"
                    :class="{
                      'text-red-600': index === profileOptions.length - 1,
                    }"
                  >
                    <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                    <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                  </div>
                  <div class="text-right">
                    <i class="t2ico t2ico-arrow-right"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUser } from "../logic/useUser";
import { PROFILE_OPTION } from "../constants/index";
import { reactive } from "vue";
const { getUser } = useUser();
const { user } = getUser();
const profileOptions = reactive(PROFILE_OPTION);
</script>

<style></style>
