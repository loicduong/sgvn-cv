<script setup lang="ts">
import TheNavItem from './TheNavItem.vue'
const navItems = [
    { icon: 'fa-briefcase', label: 'Experiences', href: '/#experiences' },
    { icon: 'fa-laptop', label: 'Projects', href: '/#projects' },
    { icon: 'fa-code', label: 'Skills', href: '/#skills' },
    { icon: 'fa-graduation-cap', label: 'Education', href: '/#education' },
    { icon: 'fa-envelope', label: 'Contact', href: '/#contact' },
]
</script>

<template>
    <div class="d-flex align-items-center justify-content-between flex-grow-1">
        <TheNavItem v-for="item in navItems" :key="item.label" :icon="item.icon" :label="item.label"
            :href="item.href" />
    </div>
</template>

<style scoped></style>
