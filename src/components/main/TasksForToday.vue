<template>
  <div class="space-y-7">
    <h3 class="text-2xl">Tasks For Today</h3>
    <div class="flex flex-col space-y-4">
      <task
        v-for="(task,index) in tasks"
        :key="index" 
        :task="task" />
    </div>
  </div>
</template>

<script setup>
import Task from './Task.vue'

const tasks = [
   {
     name: 'Mobile App',
     description: 'Prepare Figma file',
     active: true,
     color: 'st-orange'
   },
   {
     name: 'Ux Wireframes',
     description: 'Design UX wireframes',
     active: false,
     color: 'st-purple'
   },
   {
     name: 'Mobile App',
     description: 'Research',
     active: false,
     color: 'st-blue'
   }
]
</script>