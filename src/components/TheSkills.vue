<script setup lang="ts">
import skills from '@/datas/skills.json'
</script>

<template>
  <TheSection id="skills" label="SKILLS">
    <div class="d-flex flex-column justify-content-center text-center">
      <div v-for="skill in skills" :key="skill.name">
        <span class="fw-bold">{{ skill.name }}: </span> {{ skill.skills.join(', ') }}
      </div>
    </div>
  </TheSection>
</template>

<style scoped></style>
