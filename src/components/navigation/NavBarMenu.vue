<template>
  <ul>
    <li
      class="p-3 flex items-center justify-start gap-3 cursor-pointer"
      :class="{'font-bold text-gray-500 bg-gradient-to-tl to-pink-200 from-orange-300 rounded-xl' : active === index }"
      v-for="(item, index) in items"
      :key="index"
      @click="setActive(index)" >
      <mdicon :name="item.icon" class="text-current" />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>
<script setup>
import {ref} from 'vue';

const active = ref(0);
const setActive = (index) => active.value = index;



const items = [
  {text: 'Dashboard', icon: 'home'},
  {text: 'Analytics', icon: 'chart-arc'},
  {text: 'Tracking', icon: 'format-list-checks'},
  {text: 'Setting', icon: 'cog'}
];
</script>
