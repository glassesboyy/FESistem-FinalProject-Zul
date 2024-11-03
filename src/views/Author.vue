<script setup lang="ts">
import AuthorHeader from '@/components/Author/AuthorHeader.vue'
import MyPost from '@/components/Author/MyPost.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <AuthorHeader></AuthorHeader>
    <MyPost></MyPost>
  </MainLayout>
</template>
