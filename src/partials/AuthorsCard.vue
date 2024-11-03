<template>
  <router-link
    :to="link"
    class="w-[296px] h-[324px] bg-x-lavender hover:bg-x-lightyellow transition duration-300 ease-in-out"
  >
    <div>
      <img
        :src="image"
        alt=""
        class="w-[128px] h-[128px] object-cover object-center rounded-full my-[40px] mx-auto"
      />
      <h3 class="text-[28px] font-bold text-x-black mt-[20px] text-center">
        {{ name }}
      </h3>
      <p class="text-x-mediumgrey text-center text-[14px]">
        {{ job }}
      </p>
      <ul class="mt-[20px] justify-center flex gap-4">
        <li v-for="(link, index) in socialLinks" :key="index">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            <img
              :src="link.icon"
              :alt="link.name"
              class="w-[16px] h-[16px] cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
            />
          </a>
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Definisikan tipe untuk setiap objek link sosial dengan URL tambahan
type SocialLink = {
  name: string
  icon: string
  url: string
}

// Definisikan props dengan tipe SocialLink[] dan data default
const props = defineProps({
  name: String,
  job: String,
  image: String,
  link: {
    type: String,
    required: true, // Mengubah menjadi required
  },
  socialLinks: {
    type: Array as () => SocialLink[], // Array of SocialLink objects
    default: () => [
      {
        name: 'facebook',
        icon: './src/assets/images/logo/facebook.svg',
        url: 'https://facebook.com',
      },
      {
        name: 'twitter',
        icon: './src/assets/images/logo/twitter.svg',
        url: 'https://twitter.com',
      },
      {
        name: 'instagram',
        icon: './src/assets/images/logo/instagram.svg',
        url: 'https://instagram.com',
      },
      {
        name: 'linkedin',
        icon: './src/assets/images/logo/linkedin.svg',
        url: 'https://linkedin.com',
      },
    ],
  },
})
</script>
