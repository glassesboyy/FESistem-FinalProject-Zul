<script setup lang="ts">
import Button from '@/partials/Button.vue'
</script>

<template>
  <div
    class="bg-cover bg-center bg-[url('@/assets/images/misc/cover.png')] w-full h-screen"
  >
    <article
      class="flex flex-col items-start justify-center pl-[80px] pt-[128px] w-full"
    >
      <header>
        <h2 class="font-semibold text-sm uppercase tracking-[3px] text-white">
          <span>Posted on</span> <span class="font-black">startup</span>
        </h2>
      </header>

      <h1
        class="text-white mt-6 text-5xl font-bold tracking-tight leading-tight max-w-[803px] max-md:text-4xl max-md:leading-[48px] max-sm:text-3xl max-sm:leading-[36px]"
      >
        Step-by-step guide to choosing great font pairs
      </h1>

      <p class="mt-4 text-white text-lg max-md:text-base max-sm:text-sm">
        By <span class="text-x-blue">James West</span> | May 23, 2022
      </p>

      <p
        class="mt-4 leading-7 text-white max-w-[600px] max-md:max-w-full max-md:text-base max-sm:text-sm"
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>

      <Button
        buttonHeight="56px"
        buttonWidth="204px"
        marginTop="32px"
        marginBottom=""
        route=""
      ></Button>
    </article>
  </div>
</template>
