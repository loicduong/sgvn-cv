<script setup lang="ts">
interface Props {
  icon: string;
  label: string;
  href: string;
}

defineProps<Props>()
</script>

<template>
  <div class="sgvn-nav-item d-flex flex-column align-items-center cursor-pointer">
    <RouterLink :to="href">
      <FontAwesomeIcon :icon="icon" />
      <span>{{ label }}</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.sgvn-nav-item {
  cursor: pointer;
  border-right: 1px #365670 dotted;
  flex: 1;
}

.sgvn-nav-item:last-child {
  border-right: none;
}

.sgvn-nav-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ccc;
  text-decoration: none;
  -webkit-transition: color 0.2s linear, background 0.2s linear;
  -moz-transition: color 0.2s linear, background 0.2s linear;
  -o-transition: color 0.2s linear, background 0.2s linear;
  transition: color 0.2s linear, background 0.2s linear;
  padding: 10px 15px 0px 15px;
  min-width: 13.4%;
}

.sgvn-nav-item a:hover {
  color: #F6A515;
}

.sgvn-nav-item a:hover span {
  background-color: #00295B;
}
</style>
