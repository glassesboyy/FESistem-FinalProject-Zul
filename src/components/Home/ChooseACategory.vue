<script setup lang="ts">
import Card from '@/partials/Card.vue'
import { defineProps } from 'vue'

// Definisikan props
const props = defineProps<{
  marginX: string
  marginY: string
  textAlign: string
  categoryTitle: string // Tambahkan prop untuk judul kategori
}>()
</script>

<template>
  <div :class="`mx-[${props.marginX}] mt-[${props.marginY}]`">
    <h1
      :class="`font-bold text-4xl text-x-black ${props.textAlign} text-center md:text-${props.textAlign}`"
    >
      {{ props.categoryTitle }}
      <!-- Gunakan prop untuk judul kategori -->
    </h1>
    <div class="flex flex-wrap justify-center md:justify-start">
      <div class="w-full sm:w-1/2 lg:w-1/4">
        <Card
          image="/src/assets/images/icons/business.png"
          altText="Business Icon"
          title="Business"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4">
        <Card
          image="/src/assets/images/icons/startup.png"
          altText="Startup Icon"
          title="Startup"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4">
        <Card
          image="/src/assets/images/icons/economy.png"
          altText="Economy Icon"
          title="Economy"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4">
        <Card
          image="/src/assets/images/icons/technology.png"
          altText="Technology Icon"
          title="Technology"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
      </div>
    </div>
  </div>
</template>
