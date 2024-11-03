<script setup lang="ts">
import Button from '@/partials/Button.vue'
import { onMounted, ref, watch } from 'vue'
interface Province {
  id: string
  name: string
}

interface City {
  id: string
  name: string
}

const provinces = ref<Province[]>([])
const cities = ref<City[]>([])
const selectedProvince = ref<string | null>(null)

const fetchProvinces = async () => {
  try {
    const response = await fetch(
      'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
    )
    if (response.ok) {
      provinces.value = await response.json()
    }
  } catch (error) {
    console.error('Error fetching provinces:', error)
  }
}

const fetchCities = async (provinceId: string) => {
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
    )
    if (response.ok) {
      cities.value = await response.json()
    }
  } catch (error) {
    console.error('Error fetching cities:', error)
  }
}

onMounted(() => {
  fetchProvinces()
})

watch(selectedProvince, newProvinceId => {
  if (newProvinceId) {
    fetchCities(newProvinceId)
  } else {
    cities.value = []
  }
})
</script>

<template>
  <form class="mx-[336px]" action="POST">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      class="w-full h-[48px] border-2 border-x-mediumgrey px-[24px] py-[24px] text-x-black placeholder:text-x-black"
    />
    <input
      type="text"
      name="email"
      placeholder="Your Email"
      class="w-full mt-[16px] h-[48px] border-2 border-x-mediumgrey px-[24px] py-[24px] text-x-black placeholder:text-x-black"
    />

    <div class="flex mt-[16px] gap-[16px]">
      <select
        v-model="selectedProvince"
        name="province"
        placeholder="Province"
        class="w-full h-[48px] border-2 border-x-mediumgrey pl-[16px] text-x-black"
      >
        <option value="null" disabled selected>Province</option>
        <option
          v-for="province in provinces"
          :key="province.id"
          :value="province.id"
        >
          {{ province.name }}
        </option>
      </select>

      <select
        name="city"
        class="w-full h-[48px] border-2 border-x-mediumgrey pl-[16px] pr-[16px] text-x-black"
      >
        <option value="" disabled selected>City</option>
        <option v-for="city in cities" :key="city.id" :value="city.id">
          {{ city.name }}
        </option>
      </select>
    </div>

    <textarea
      class="w-full mt-[16px] h-[144px] border-2 border-x-mediumgrey text-x-black placeholder:text-x-black py-[16px] px-[16px] text-x-black"
      name="message"
      placeholder="Message"
    ></textarea>
    <Button
      buttonWidth="704px"
      buttonHeight="64px"
      route=""
      marginBottom="128px"
      marginTop="16px"
      >Send Message</Button
    >
  </form>
</template>
