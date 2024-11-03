<script setup lang="ts">
import { ref } from 'vue'

const navLinks = ref([
  { to: '/', text: 'Home' },
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About Us' },
  { to: '/contact', text: 'Contact Us' },
  { to: '/privacy', text: 'Privacy Policy' },
])
</script>

<template>
  <footer class="bg-x-black py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="mb-8 flex flex-col sm:flex-row justify-between items-center font-serif"
      >
        <img
          class="cursor-pointer w-36 h-auto mb-4 sm:mb-0"
          src="@/assets/images/logo/finsweet.png"
          alt="logo-finsweet"
        />
        <nav class="w-full sm:w-auto">
          <ul class="flex flex-wrap justify-center gap-4">
            <li v-for="link in navLinks" :key="link.to">
              <router-link
                :to="link.to"
                class="cursor-pointer text-white hover:text-x-yellow transition duration-150 ease-in-out"
              >
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="bg-x-darkgrey px-4 sm:px-8 lg:px-16 py-10 sm:py-20 mb-8 min-h-[256px]"
      >
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-0 lg:mr-16 text-center lg:text-left"
          >
            Subscribe to our newsletter to get the latest updates and news
          </h2>
          <div class="flex flex-col sm:flex-row w-full lg:w-auto">
            <input
              class="w-full sm:w-64 h-14 border border-x-mediumgrey bg-x-darkgrey mb-4 sm:mb-0 sm:mr-6 px-6 placeholder:text-x-mediumgrey"
              placeholder="Enter Your Email"
            />
            <button
              class="w-full sm:w-auto px-6 h-14 text-white font-bold text-base bg-x-blue hover:bg-x-yellow transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div
          class="text-white mb-4 sm:mb-0 text-center sm:text-left font-serif"
        >
          Finstreet 118 2561 Fintown <br />
          Hello@finsweet.com 020 7993 2905
        </div>
        <div>
          <ul class="flex gap-4">
            <li>
              <img
                class="w-4 h-4 cursor-pointer hover:brightness-50"
                src="@/assets/images/logo/facebook.png"
                alt="facebook"
              />
            </li>
            <li>
              <img
                class="w-4 h-4 cursor-pointer hover:brightness-50"
                src="@/assets/images/logo/twitter.png"
                alt="twitter"
              />
            </li>
            <li>
              <img
                class="w-4 h-4 cursor-pointer hover:brightness-50"
                src="@/assets/images/logo/instagram.png"
                alt="instagram"
              />
            </li>
            <li>
              <img
                class="w-4 h-4 cursor-pointer hover:brightness-50"
                src="@/assets/images/logo/linkedin.png"
                alt="linkedin"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
