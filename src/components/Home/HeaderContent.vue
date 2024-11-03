<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <nav
    class="px-4 md:px-12 w-full h-[80px] bg-x-black flex items-center justify-between font-serif"
  >
    <img
      src="@/assets/images/logo/logo-join-sistem.png"
      alt="Join Sistem Logo"
      class="h-[40px] md:h-auto"
    />
    <ul class="hidden md:flex gap-4">
      <li>
        <router-link
          to="/"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/blog"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Blog</router-link
        >
      </li>
      <li>
        <router-link
          to="/about"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >About Us</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Contact Us</router-link
        >
      </li>
    </ul>
    <router-link
      to="/contact"
      class="hidden md:block py-[8px] md:py-[12px] px-[16px] md:px-[32px] font-sans leading-[24px] font-bold text-[16px] md:text-[18px] bg-x-blue rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out"
    >
      Contact Us
    </router-link>

    <!-- Menu untuk tampilan mobile -->
    <button class="md:hidden text-white" @click="menuOpen = !menuOpen">
      <svg
        v-if="!menuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Dropdown menu untuk tampilan mobile -->
    <div
      v-if="menuOpen"
      class="md:hidden absolute top-[80px] left-0 w-full bg-x-black z-10 flex flex-col items-center gap-4 py-4"
    >
      <router-link
        to="/"
        class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
        @click="menuOpen = false"
        >Home</router-link
      >
      <router-link
        to="/blog"
        class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
        @click="menuOpen = false"
        >Blog</router-link
      >
      <router-link
        to="/about"
        class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
        @click="menuOpen = false"
        >About Us</router-link
      >
      <router-link
        to="/contact"
        class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
        @click="menuOpen = false"
        >Contact Us</router-link
      >
      <router-link
        to="/contact"
        class="py-2 px-4 font-sans leading-[24px] font-bold text-[16px] bg-x-blue rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out"
        @click="menuOpen = false"
        >Contact Us</router-link
      >
    </div>
  </nav>
</template>
