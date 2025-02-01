<script setup lang="ts">
import nav from '@/datas/nav.json'

const isOpen = ref(false);

const isTop = ref(false);

const navMobile = useTemplateRef('nav-mobile');

function setNavPosition() {
  const navRect = navMobile.value!.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const spaceBelow = windowHeight - navRect.bottom;
  isTop.value = spaceBelow < 160;
}

function showNav() {
  isOpen.value = !isOpen.value;
  setNavPosition();
}

onMounted(() => {
  useEventListener(window, 'scroll', setNavPosition);
});
</script>

<template>
  <div ref="nav-mobile" class="sgvn-nav-mobile position-relative" :class="{ 'is-active': isOpen, 'is-top': isTop }">
    <div class="sgvn-nav-mobile__btn d-flex justify-content-center align-items-center position-relative">
      <TheNavIcon :class="{ 'is-open': isOpen }" @click="showNav" />
    </div>
    <RouterLink v-for="(item, index) in nav" :to="{ hash: item.href }" :key="index" class="sgvn-nav-mobile__item"
      @click="isOpen = false" :class="'sgvn-nav-mobile__item-' + (index + 1)">
      <FontAwesomeIcon :icon="'fa-solid ' + item.icon" />
    </RouterLink>
  </div>
</template>

<style scoped>
.sgvn-nav-mobile {
  margin-right: -12px;
}

.sgvn-nav-mobile__btn {
  border-bottom-left-radius: 32px;
  z-index: 2;
  width: 45px;
  height: 45px;
  font-size: 24px;
  background-color: #00295B;
}

.sgvn-nav-mobile__item {
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  font-size: 24px;
  color: #fff;
  transform: none;
  line-height: 45px;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
  z-index: 1;
  opacity: 0;
}

.is-active .sgvn-nav-mobile__item {
  opacity: 1;
}

.is-active .sgvn-nav-mobile__item-1 {
  transform: translate(-140px, 0px);
}

.is-active .sgvn-nav-mobile__item-2 {
  transform: translate(-130px, 40px);
}

.is-active .sgvn-nav-mobile__item-3 {
  transform: translate(-105px, 75px);
}

.is-active .sgvn-nav-mobile__item-4 {
  transform: translate(-75px, 105px);
}

.is-active .sgvn-nav-mobile__item-5 {
  transform: translate(-40px, 130px);
}

.is-active .sgvn-nav-mobile__item-6 {
  transform: translate(0px, 140px);
}

.is-top .is-active .sgvn-nav-mobile__item {
  opacity: 1;
}

.is-active .sgvn-nav-mobile__item-1 {
  transform: translate(-140px, 0px);
}

.is-active .sgvn-nav-mobile__item-2 {
  transform: translate(-130px, 40px);
}

.is-active .sgvn-nav-mobile__item-3 {
  transform: translate(-105px, 75px);
}

.is-active .sgvn-nav-mobile__item-4 {
  transform: translate(-75px, 105px);
}

.is-active .sgvn-nav-mobile__item-5 {
  transform: translate(-40px, 130px);
}

.is-top.is-active .sgvn-nav-mobile__item-1 {
  transform: translate(-140px, 0px);
}

.is-top.is-active .sgvn-nav-mobile__item-2 {
  transform: translate(-130px, -40px);
}

.is-top.is-active .sgvn-nav-mobile__item-3 {
  transform: translate(-110px, -75px);
}

.is-top.is-active .sgvn-nav-mobile__item-4 {
  transform: translate(-75px, -110px);
}

.is-top.is-active .sgvn-nav-mobile__item-5 {
  transform: translate(-40px, -130px);
}

.is-top.is-active .sgvn-nav-mobile__item-6 {
  transform: translate(0px, -140px);
}

.sgvn-nav-mobile:after {
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

.sgvn-nav-mobile.is-top:after {
  top: unset;
  border-bottom-left-radius: 0;
  border-top-left-radius: 200px;
  bottom: -5px;
}

.sgvn-nav-mobile.is-active:after {
  left: -155px;
  width: 200px;
  height: 200px;
}
</style>
