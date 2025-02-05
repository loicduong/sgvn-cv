<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()

const goTopBtn = useTemplateRef('goTopBtn')

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function handleScroll() {
  if (y.value > 100) {
    goTopBtn.value?.classList.remove('d-none')
  } else {
    goTopBtn.value?.classList.add('d-none')
  }
}

onMounted(() => {
  handleScroll()

  useEventListener(window, 'scroll', handleScroll)
})
</script>

<template>
  <button ref="goTopBtn" @click="topFunction" title="Go to top"
    class="sgvn-go-top-btn position-fixed bottom-0 d-flex justify-content-center align-items-center cursor-pointer">
    <FontAwesomeIcon icon="fa-solid fa-angle-double-up" />
  </button>
</template>

<style style="scss" scoped>
.sgvn-go-top-btn {
  height: 40px;
  width: 40px;
  right: 12px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #bbb;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #003066;

  &:hover {
    background-color: #F6A515;
  }
}
</style>
