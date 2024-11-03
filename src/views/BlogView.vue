<script setup lang="ts">
import BlogPostImage from '@/components/Blog/BlogPostImage.vue'
import BlogPostList from '@/components/Blog/BlogPostList.vue'
import FeaturedImage from '@/components/Blog/FeaturedImage.vue'
import FeaturedPost from '@/components/Blog/FeaturedPost.vue'
import Pagination from '@/components/Blog/Pagination.vue'
import ChooseACategory from '@/components/Home/ChooseACategory.vue'
import JoinOurTeam from '@/components/Home/JoinOurTeam.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main>
      <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <FeaturedPost />
          <FeaturedImage />
        </div>
      </section>

      <section
        class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <h2
          class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl"
        >
          All posts
        </h2>
        <hr
          class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full"
        />
        <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <BlogPostImage />
            <BlogPostList />
          </div>
        </div>
        <Pagination />
      </section>
      <ChooseACategory
        marginX="80px"
        marginY="100px"
        textAlign="text-start"
        categoryTitle="All Categories"
      />
      <JoinOurTeam marginTop="128px"></JoinOurTeam>
    </main>
  </MainLayout>
</template>
