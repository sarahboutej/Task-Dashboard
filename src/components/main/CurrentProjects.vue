<template>
<div class="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
  <project
    v-for="(project, index) in projects"
    :key="index" 
    class="w-full md:w1/3 p-4"
    :project="project" />
</div>
</template>
<script setup>
import Project from './Project.vue';

const projects = [
  {
    name: 'Web Development',
    tasks: 10,
    percentage: 96,
    people: 3,
    color: 'st-purple'
  },
  {
    name: 'Mobile App Mobile',
    tasks: 12,
    percentage: 50,
    people: 9,
    color: 'st-blue'
  },
  {
    name: 'Facebook Brand UI Kit',
    tasks: 22,
    percentage: 73,
    people: 3,
    color: 'st-orange'
  }
];

</script>
