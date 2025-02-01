<script setup lang="ts">
import experiences from '@/datas/experiences.json';
</script>

<template>
  <TheSection label="EXPERIENCES" id="experiences">
    <div v-for="experience in experiences" :key="experience.id">
      <h3>{{ experience.name }}</h3>
      <h6><span>{{ experience.company }}</span> | <span>{{ experience.time }}</span></h6>
      <ul class="description">
        <li v-for="description in experience.description" :key="description">{{ description }}</li>
      </ul>
    </div>
  </TheSection>
</template>

<style scoped></style>
