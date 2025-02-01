<script setup lang="ts">
interface Props {
  label: string;
  whiteLabel?: boolean;
  bgColor?: 'light' | 'dark';
}

defineProps<Props>();
</script>

<template>
  <div class="sgvn-section w-full" :class="{ 'is-light': bgColor === 'light', 'is-dark': bgColor === 'dark' }">
    <h2 class="sgvn-title" :class="{ 'text-white': whiteLabel }">{{ label }}</h2>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sgvn-section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.is-light {
  background-color: #D1E7F9;
}

.is-dark {
  background-color: #00295B;
}

.sgvn-title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 12px;
  text-align: center;
}

.sgvn-title::before {
  content: "";
  position: absolute;
  left: calc(50% - 49px);
  bottom: 0;
  width: 100px;
  height: 4px;
  background-color: #F6A515;
}
</style>
