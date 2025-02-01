<script setup lang="ts"></script>

<template>
  <div class="sgvn-nav-icon">
    <div />
    <div />
    <div />
  </div>
</template>

<style scoped>
.sgvn-nav-icon {
  width: 21px;
  height: 24px;
  padding-top: 3px;
  padding-bottom: 3px;
  flex-direction: column;
  justify-content: center;
  gap: 4.50px;
  display: inline-flex;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.sgvn-nav-icon div {
  width: 21px;
  height: 3px;
  background: white;
  border-radius: 50px;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.sgvn-nav-icon.is-open div:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.sgvn-nav-icon.is-open div:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.sgvn-nav-icon.is-open div:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
</style>
