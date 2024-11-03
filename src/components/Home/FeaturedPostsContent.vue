<script setup lang="ts">
import Button from '@/partials/Button.vue'
import Post from '@/partials/Post.vue'
</script>

<template>
  <div
    class="flex flex-col lg:flex-row mx-auto lg:mx-[80px] mt-[64px] lg:mt-[128px] px-4 lg:px-0"
  >
    <div class="w-full lg:w-[733px] h-auto lg:h-[804px] lg:mr-[32px]">
      <h2 class="text-2xl lg:text-4xl font-bold tracking-tighter">
        Featured Post
      </h2>
      <div
        class="mt-[24px] lg:mt-[32px] border-[1px] border-x-mediumgrey px-[16px] lg:px-[32px] py-[16px] lg:py-[32px]"
      >
        <img
          src="@/assets/images/misc/featuredpost.png"
          alt="featured-post"
          class="w-full h-auto"
        />
        <p
          class="mt-[24px] lg:mt-[48px] text-x-mediumgrey font-serif text-[14px]"
        >
          By <span class="text-x-yellow">John Doe</span> | May 23, 2022
        </p>
        <h3
          class="mt-[16px] lg:mt-[24px] text-[20px] lg:text-[28px] font-bold tracking-tighter"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h3>
        <p
          class="mt-[16px] lg:mt-[24px] text-x-mediumgrey font-serif w-full lg:w-[551px]"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button
          buttonHeight="48px"
          buttonWidth="full lg:w-[204px]"
          marginBottom="16px"
          route=""
          marginTop=""
          class="mt-[16px] lg:mt-[32px]"
        ></Button>
      </div>
    </div>

    <div class="w-full lg:w-[517px] h-auto lg:h-[804px] mt-[32px] lg:mt-0">
      <div
        class="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start"
      >
        <h2 class="text-2xl lg:text-4xl font-bold tracking-tighter">
          All Posts
        </h2>
        <button
          class="mt-4 lg:mt-0 font-serif text-[16px] text-x-yellow hover:underline duration-300 ease-in-out"
        >
          View All
        </button>
      </div>
      <div class="mt-[24px] lg:mt-[32px] space-y-4">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  </div>
</template>
