<template>
  <div class="space-y-5">
    <div class="flex justify-between items-center">
      <h3 class="text-xl font-bold">Calendar</h3>
      <button class="relative rounded-xl bg-white p-2">
        <mdicon name="bell" />
        <span class="absolute top-2 right-2 bg-red-400 h-2 w-2 rounded-full"></span>
      </button>
    </div>
    <div class="space-y-7">
      <div v-for="i in 3" :key="i" class="space-y-7">
        <div class="flex justify-between">
          <h5 class="font-bold text-gray-600">December 17, 2022</h5>
          <mdicon name="dots-horizontal" />
        </div>
        <div class="flex flex-between items-center gap-4">
          <p class="w-24 text-xl">10:00</p>
          <div class="h-10 w-1 rounded-xl" :class="`bg-color-${i}`"></div>
          <div class="flex-1">
            <p class="text-gray-800 text-lg">Design</p>
            <p class="text-gray-500">Task Management</p>
          </div>
        </div>
        <div class="flex flex-between items-center gap-4">
          <p class="w-24 text-xl">14:30</p>
          <div class="h-10 w-1 rounded-xl" :class="`bg-color-${i}`"></div>
          <div class="flex-1">
            <p class="text-gray-800 text-lg">Dribble shot</p>
            <p class="text-gray-500">Facebook Brand</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
