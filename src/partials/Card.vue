<script setup lang="ts"></script>

<template>
  <a
    :href="link"
    class="mt-[48px] group border-[1px] border-x-mediumgrey w-[296px] h-[228px] px-[32px] py-[32px] hover:bg-x-blue transition duration-300 ease-in-out block"
  >
    <div>
      <img
        class="w-12 h-12 bg-x-lightyellow rounded-lg object-contain"
        :src="image"
        :alt="altText"
      />
      <h3
        class="font-bold text-[28px] text-x-black tracking-tight mt-4 group-hover:text-x-lavender"
      >
        {{ title }}
      </h3>
      <p class="font-serif text-x-mediumgrey mt-1 group-hover:text-x-lavender">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/category', // Default link if not provided
    },
  },
}
</script>

<style scoped>
/* Anda bisa menambahkan gaya khusus jika dibutuhkan */
</style>
