<script setup>
import NavBar from './components/navigation/NavBar.vue'
import MainContent from './components/main/MainContent.vue'
import Calendar from './components/calendar/Calendar.vue'
</script>
<template>
   <div class="grid grid-cols-12 gap-2 h-screen bg-red-50">
     <div class="col-span-12 xl:col-span-9 rounded-r-[37px] bg-stone-50 gap-2 md:divide-x-2 flex flex-col lg:flex-row">
       <div class="w-full lg:w-[250px] lg:h-full">
         <nav-bar />
       </div>
       <main-content class="flex-1" />
     </div>
     <div class="hidden xl:col-span-3 xl:block">
       <Calendar class="p-10" />
     </div>
   </div>
</template>
