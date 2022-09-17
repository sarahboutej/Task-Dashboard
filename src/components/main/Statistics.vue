<template>
  <div class="space-y-7">
    <h3 class="text-2xl">Statistics</h3>
    <div class="flex flex-col md:flex-row gap-4">
      <div
        v-for="(stat, index) in stats"
        :key='index'
        class="bg-stone-200 rounded-xl p-4 flex-1 space-y-10">
          <p class="inline-block text-xl font-bold"> {{ stat.value}} </p>
          <h6 class="text-md"> {{stat.title}}</h6>
      </div>
      <button class="hover:bg-white transform transition hover:-translate-y-1 border border-dashed rounded-xl p-4 flex flex-col justify-between items-center">
        <mdicon name="plus" />
        <span class="text-md">New widget</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const stats = [
  {
    title: 'Tracked Time', 
    value: '28 h'
  },
  {
    title: 'Finished Tasks', 
    value: '18'
  }
]

</script>