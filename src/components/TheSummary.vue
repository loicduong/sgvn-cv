<script setup lang="ts">
import intro from '@/datas/intro.json'
</script>

<template>
  <header class="sgvn-summary vh-100 w-100 d-flex flex-column justify-content-between text-white position-relative">
    <div class="sgvn-summary__bg position-absolute top-0 start-0 w-100 vh-100">
      <img src="@/assets/bg.webp" alt="logo" class="w-100 h-100 object-fit-cover">
    </div>
    <div class="container z-1">
      <div class="sgvn-summary__content w-100">
        <h1>{{ intro.name }}</h1>
        <h3>{{ intro.title }}</h3>
        <h5 class="pt-4"> {{ intro.summary }} </h5>
      </div>
    </div>
    <TheHeader />
  </header>
</template>

<style lang="scss" scoped>
.sgvn-summary__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.sgvn-summary__content {
  padding-top: 20vh;

  h5 {
    max-width: 600px;
  }
}
</style>
