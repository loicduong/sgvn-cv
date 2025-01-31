<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
  <h2 class="stg-title">{{ label }}</h2>
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
