<script setup lang="ts">
import contact from '@/datas/contact.json'
</script>

<template>
  <TheSection id="contact" label="CONTACT" whiteLabel bg-color="dark">
    <div class="d-flex flex-column align-items-center text-center">
      <div class="text-white">Email: <a :href="`mailto:${contact.email}`" class="text-white">{{ contact.email }}</a> |
        Phone:
        <a :href="`tel:${contact.phone}`" class="text-white">{{ contact.phone }}</a>
      </div>
      <div class="d-flex justify-content-center">
        <a :href="contact.portfolio" class="text-white">Portfolio</a>
        <span class="text-white mx-1"> | </span>
        <a :href="contact.linkedin" class="text-white">Linkedin</a>
        <span class="text-white mx-1"> | </span>
        <a :href="contact.github" class="text-white">Github</a>
      </div>
    </div>
  </TheSection>
</template>

<style scoped></style>
