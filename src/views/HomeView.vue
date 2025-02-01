<script setup lang="ts">
import TheExperiences from '@/components/TheExperiences.vue';
import TheSummary from '@/components/TheSummary.vue'
import TheProjects from '@/components/TheProjects.vue'
import TheSkills from '@/components/TheSkills.vue'
import TheEducation from '@/components/TheEducation.vue'
import TheContact from '@/components/TheContact.vue'
import TheAbout from '@/components/TheAbout.vue'
</script>

<template>
  <main>
    <TheSummary />
    <TheExperiences />
    <TheProjects />
    <TheSkills />
    <TheEducation />
    <TheAbout />
    <TheContact />
  </main>
</template>
