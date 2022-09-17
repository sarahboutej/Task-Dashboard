<script setup>

import NavBarMenu from "./NavBarMenu.vue";

import {ref} from 'vue'

const MOBILE_BREAKPOINT = 1024; // tailwind :lg

const  width = ref(document.body.offsetWidth)

const isMenuActive = ref(width.value > MOBILE_BREAKPOINT)

const toggleMenu = () => isMenuActive.value = !isMenuActive.value

window.addEventListener('resize', function() {
  width.value = document.body.offsetWidth;
  isMenuActive.value = width.value > MOBILE_BREAKPOINT;
})

</script>
<template>
  <div class="lg:space-y-10 lg:block relative grid grid-cols-12">
    <div class="col-span-6 flex justify-center items-center gap-4 p-2">
      <div class="bg-gradient-to-tl from-st-orange to-pink-500 rounded-xl p-2 text-white">
        <mdicon name="order-bool-ascending-variant" />
      </div>
      <strong>SmarTask</strong>
    </div>
    <div class="lg:hidden flex col-span-6 justify-end items-center p-2">
      <button class="bg-stone-300 rounded-lg p-2" @click="toggleMenu">
        <mdicon name="menu" />
      </button>
    </div>
    <div class="col-span-12 hidden lg:block">
      <div class="relative w-full h-24 flex flex-col items-center gap-4">
        <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Sara" class="w-24 h-24 rounded-full">
        <p class="absolute bg-white -bottom-2 left-1/2 text-orange-500 text-xs px-2 transform -translate-x-1/2 flex items-center gap-1 rounded-full">
          <mdicon name="clock" width="15px" />
          <span class="font-bold">10h</span>
        </p>
      </div>
      <div class="text-center mt-7">
        <h1 class="font-bold text-black">Sara Connor</h1>
        <a href="mailto:sara@gmail.com" class="text-gray-500">sara@gmail.com</a>
      </div>
    </div>
    <div class="col-span-12 p-10" v-if="isMenuActive">
      <nav-bar-menu />
    </div>
  </div>
  <div class="hidden lg:block absolute left-0 bottom-0 w-[250px]">
    <img src="../../assets/images/task.svg" role="presentation" loading="lazy">
  </div>
</template>