<script setup lang="ts">
import AuthorHeader from '@/components/BlogPost/AuthorHeader.vue'
import BlogContent from '@/components/BlogPost/BlogContent.vue'
import BlogTitle from '@/components/BlogPost/BlogTitle.vue'
import RelatedPosts from '@/components/BlogPost/RelatedPosts.vue'
import JoinOurTeam from '@/components/Home/JoinOurTeam.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="flex overflow-hidden flex-col bg-white">
      <main
        class="flex flex-col items-center px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <AuthorHeader />
        <BlogTitle />
        <BlogContent />
        <RelatedPosts />
        <hr
          class="shrink-0 self-stretch mt-16 h-px border border-solid opacity-30 bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full"
        />
        <JoinOurTeam margin-top="128px"></JoinOurTeam>
      </main>
    </div>
  </MainLayout>
</template>
