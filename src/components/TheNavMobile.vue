<script setup lang="ts">
import { ref } from 'vue';
import TheNavIcon from './TheNavIcon.vue'

const navItems = [
  { icon: 'fa-briefcase', label: 'Experiences', href: '/#experiences' },
  { icon: 'fa-laptop', label: 'Projects', href: '/#projects' },
  { icon: 'fa-code', label: 'Skills', href: '/#skills' },
  { icon: 'fa-graduation-cap', label: 'Education', href: '/#education' },
  { icon: 'fa-envelope', label: 'Contact', href: '/#contact' },
]


const isOpen = ref(false);
</script>

<template>

  <div class="nav-mobile" :class="{ 'is-active': isOpen }" style="margin-right: -12px;">
    <div class="d-flex justify-content-center align-items-center"
      style="border-bottom-left-radius: 32px;position: relative; z-index: 2; width: 45px; height: 45px; font-size: 24px; background-color: #00295B;">
      <TheNavIcon id="nav-icon4" :class="{ 'open': isOpen }" @click="isOpen = !isOpen" />
    </div>
    <RouterLink v-for="(item, index) in navItems" :to="item.href" :key="index" class="nav-mobile-item"
      :class="'nav-mobile-item-' + (index + 1)">
      <FontAwesomeIcon :icon="'fa-solid ' + item.icon" />
    </RouterLink>
  </div>
</template>

<style scoped>
.nav-mobile {
  position: relative;
}

.nav-mobile-item {
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  color: #fff;
  font-size: 24px;
  -webkit-transform: none;
  transform: none;
  line-height: 45px;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  -webkit-transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
  transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
  z-index: 1;
}

.is-active .nav-mobile-item-1 {
  transform: translate(-110px, 0px);
}

.is-active .nav-mobile-item-2 {
  transform: translate(-95px, 35px);
}

.is-active .nav-mobile-item-3 {
  transform: translate(-70px, 65px);
}

.is-active .nav-mobile-item-4 {
  transform: translate(-35px, 90px);
}

.is-active .nav-mobile-item-5 {
  transform: translate(0px, 100px);
}

.nav-mobile-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 160px;
  height: 160px;
  background-color: #00295B;
  border-bottom-left-radius: 200px;
}

.nav-mobile:after {
  top: -5px;
  left: 0;
  content: '';
  width: inherit;
  height: inherit;
  border-bottom-left-radius: 200px;
  position: absolute;
  background: #00295B;
  -webkit-transition: all .1s ease-in-out 0s;
  transition: all .1s ease-in-out 0s;
}

.nav-mobile.is-active:after {
  left: -115px;
  width: 160px;
  height: 160px;
}
</style>
