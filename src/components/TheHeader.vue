<script setup lang="ts">
const initialPosition = ref(0)

const header = useTemplateRef('header')

function handleScroll() {
  if (!header.value) return

  if (initialPosition.value === 0) {
    initialPosition.value = header.value.offsetTop
  }

  if (window.scrollY >= initialPosition.value) {
    header.value.classList.add('is-fixed')
  } else {
    header.value.classList.remove('is-fixed')
    document.body.style.paddingTop = '0'
  }
}

onMounted(() => {
  if (header.value) {
    initialPosition.value = header.value.offsetTop
  }

  useEventListener(window, 'scroll', handleScroll)
})
</script>

<template>
  <div ref="header" class="sgvn-header w-full position-absolute bottom-0 start-0 end-0 z-1">
    <div class="container">
      <div class="sgvn-header__content d-flex align-items-center justify-content-between">
        <TheNav class="d-none d-md-flex" />
        <TheNavMobile class="d-md-none ms-auto" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sgvn-header {
  background-color: #00295B;

  &.is-fixed {
    position: fixed !important;
    top: 0 !important;
    bottom: unset !important;
    left: 0 !important;
    z-index: 1 !important;
  }
}

.sgvn-header__content {
  height: 58px;

  @media screen and (min-width: 768px) {
    height: 85px;
  }
}
</style>
