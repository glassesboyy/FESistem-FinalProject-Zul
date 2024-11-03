<script setup lang="ts">
import Button from '@/partials/Button.vue'
</script>

<template>
  <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
    <div
      class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full"
    >
      <span
        class="text-base leading-none text-gray-800 uppercase tracking-[3px]"
        >Featured Post</span
      >
      <h1
        class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
      >
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="mt-4 text-sm leading-none text-amber-300">
        By <span class="text-amber-300">John Doe</span> l May 23, 2022
      </p>
      <p
        class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full"
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <Button buttonWidth="204px" buttonHeight="56px" route="/blogpost">
        Read More &gt;
      </Button>
    </div>
  </article>
</template>
