<script setup lang="ts">
import AuthorList from '@/components/AboutUs/AuthorList.vue'
import HeaderAboutUs from '@/components/AboutUs/HeaderAboutUs.vue'
import KnowMore from '@/components/AboutUs/KnowMore.vue'
import JoinOurTeam from '@/components/Home/JoinOurTeam.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <HeaderAboutUs></HeaderAboutUs>
    <KnowMore></KnowMore>
    <AuthorList></AuthorList>
    <JoinOurTeam margin-top="128px"></JoinOurTeam>
  </MainLayout>
</template>
