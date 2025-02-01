<script setup lang="ts">
import nav from '@/datas/nav.json'
</script>

<template>
  <div class="d-flex align-items-center justify-content-between flex-grow-1">
    <TheNavItem v-for="item in nav" :key="item.label" :icon="item.icon" :label="item.label" :href="item.href" />
  </div>
</template>

<style scoped></style>
