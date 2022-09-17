<template>
  <div class="flex flex-col gap-10 p-7">
    <welcome-bar />
    <current-projects />
    <div class="grid grid-cols-12 grid-rows-2 gap-10">
      <tasks-for-today class="row-span-2 col-span-12 md:col-span-6" />
      <statistics class="row-span-1 col-span-12 md:col-span-6" />
      <pro-plan class="col-span-12 md:col-span-6" />
    </div>
  </div>
</template>
<script setup>
import WelcomeBar from './WelcomeBar.vue'
import CurrentProjects from './CurrentProjects.vue'
import TasksForToday from './TasksForToday.vue'
import Statistics from './Statistics.vue'
import ProPlan from './ProPlan.vue'

</script>
