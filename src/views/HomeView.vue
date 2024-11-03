<script setup lang="ts">
import AboutUs from '@/components/Home/AboutUs.vue'
import AuthorsList from '@/components/Home/AuthorsList.vue'
import ChooseACategory from '@/components/Home/ChooseACategory.vue'
import FeaturedPostsContent from '@/components/Home/FeaturedPostsContent.vue'
import HeroContent from '@/components/Home/HeroContent.vue'
import JoinOurTeam from '@/components/Home/JoinOurTeam.vue'
import LogoComponents from '@/components/Home/LogoComponents.vue'
import SpecialPost from '@/components/Home/SpecialPost.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <HeroContent></HeroContent>
    <FeaturedPostsContent></FeaturedPostsContent>
    <AboutUs></AboutUs>
    <ChooseACategory
      marginX="80px"
      marginY="128px"
      textAlign="text-center"
      categoryTitle="Choose a Catagory"
    />
    <SpecialPost></SpecialPost>
    <AuthorsList></AuthorsList>
    <LogoComponents></LogoComponents>
    <Testimonials></Testimonials>
    <JoinOurTeam marginTop="128px"></JoinOurTeam>
  </MainLayout>
</template>
