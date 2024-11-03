<script setup lang="ts">
import FooterContent from '@/components/Home/FooterContent.vue'
import HeaderContent from '@/components/Home/HeaderContent.vue'
</script>

<template>
  <HeaderContent />
  <main>
    <slot></slot>
  </main>
  <FooterContent />
</template>
