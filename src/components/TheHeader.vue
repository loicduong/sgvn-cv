<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheNavMobile from './TheNavMobile.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const initialPosition = ref(0)

const handleScroll = () => {
  const nav = document.querySelector('.sticky-nav')
  if (!nav) return

  // Lưu vị trí ban đầu của navbar nếu chưa có
  if (initialPosition.value === 0) {
    initialPosition.value = nav.offsetTop
  }

  if (window.scrollY >= initialPosition.value) {
    nav.classList.add('fixed')
    // Thêm padding để tránh nhảy layout
    document.body.style.paddingTop = `${nav.offsetHeight}px`
  } else {
    nav.classList.remove('fixed')
    document.body.style.paddingTop = '0'
  }
}

onMounted(() => {
  // Lưu vị trí ban đầu sau khi component được mount
  const nav = document.querySelector('.sticky-nav')
  if (nav) {
    initialPosition.value = nav.offsetTop
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="v-header relative" id="myHeader">
    <div class="fullscren-video-wrap">
      <img src="@/assets/bg.webp" alt="logo" class="image_ratio">
    </div>
    <div class="container">
      <div class="header-container">
        <h1>Duong Phuoc Loc</h1>
        <p>Front-end Developer</p>
      </div>
    </div>
    <div class="sticky-nav w-full top-0" style="z-index: 1000; background-color: #00295B;">
      <div class="container">
        <div class="a d-flex align-items-center justify-content-between">
          <TheNav class="d-none d-md-flex" />
          <TheNavMobile class="d-md-none ms-auto" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.sticky-nav {
  width: 100%;
  z-index: 1000;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
}

.v-header {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}

.fullscren-video-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -5;
}

.image_ratio {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-container {
  z-index: 0;
  left: 0;
  text-align: left;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 20vh;
}

.a {
  height: 58px;

  @media screen and (min-width: 768px) {
    height: 85px;
  }
}
</style>
