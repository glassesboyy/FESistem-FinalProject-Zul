<script setup lang="ts">
import CategoryContent from '@/components/Category/CategoryContent.vue'
import CategoryHero from '@/components/Category/CategoryHero.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <CategoryHero></CategoryHero>
    <CategoryContent></CategoryContent>
  </MainLayout>
</template>
