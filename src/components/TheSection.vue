<script setup lang="ts">
interface Props {
  label: string;
  white?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div>
    <div class="w-full" style="padding-top: 60px; padding-bottom: 60px;">
      <h2 class="stg-title" :class="{ 'text-white': white }">{{ label }}</h2>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stg-title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 12px;
  font-size: 18px;
  text-align: center;
  line-height: 1.2;
  font-weight: bold;
  color: #000;
}

.stg-title::before {
  content: "";
  position: absolute;
  left: calc(50% - 49px);
  bottom: 0;
  width: 100px;
  height: 4px;
  background-color: #F6A515;
}
</style>
