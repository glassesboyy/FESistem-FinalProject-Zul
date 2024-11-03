<script setup lang="ts">
import Button from '@/partials/Button.vue'
import { defineProps } from 'vue'

// Define marginTop as a prop with a default value
const props = defineProps({
  marginTop: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <div
    :style="{ marginTop: props.marginTop }"
    class="flex flex-col items-center px-5 sm:px-10 md:px-20 mb-32 w-full max-md:max-w-full"
  >
    <div class="flex flex-col items-center font-bold max-w-[407px]">
      <h2
        class="tracking-tighter text-3xl sm:text-4xl md:text-4xl text-center w-full"
      >
        Join our team to be a part of our story
      </h2>
      <p
        class="mt-[16px] leading-7 font-normal text-center font-serif text-x-mediumgrey w-full sm:max-w-[404px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button
        button-height="56px"
        button-width="174px"
        margin-top=""
        margin-bottom=""
        route=""
        >Join Now</Button
      >
    </div>
  </div>
</template>
