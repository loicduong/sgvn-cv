<script setup lang="ts">
import education from '@/datas/education.json'
</script>

<template>
  <TheSection id="education" label="EDUCATION" bg-color="light">
    <div v-for="item in education" class="d-flex justify-content-center text-center">
      <div>
        <span class="fw-bold">{{ item.degree }} | </span>
        <span>{{ item.school }} | {{ item.year }}</span>
      </div>
    </div>
  </TheSection>
</template>

<style scoped></style>
