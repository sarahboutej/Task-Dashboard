<template>
  <div class="rounded-xl flex flex-col text-white p-4 justify-between gap-7" :class="`bg-${project.color}`">
    <div class="flex justify-between items-center">
      <div class="flex -space-x-2">
         <img 
            v-for="(image,index) in images"
            :key="index"
            :src="image" 
            alt="person"
            class="rounded-full h-8 ring-2"
            :class="`ring-${project.color}`">
            <button class="bg-black w-8 h-8 rounded-full flex items-center justify-center">
              <span class="text-sm">+ {{ project.people }}</span>
            </button>
      </div>
      <button>
        <mdicon name="dots-vertical" />
      </button>
    </div>
    <h3 class="font-bold text-2xl">
      {{ project.name }}
    </h3>
    <div class="space-y-2">
      <p class="text-white">
        <span>{{ project.tasks }} tasks</span> | 
        <span>{{ project.percentage }}%</span>
      </p>
      <div class="relative bg-black bg-opacity-20 h-2 rounded-xl">
        <span 
          class="absolute top-0 left-0 bg-white h-2 rounded-xl"
          :style="`width: ${project.percentage}%`">

        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

const images = [
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
]

</script>
