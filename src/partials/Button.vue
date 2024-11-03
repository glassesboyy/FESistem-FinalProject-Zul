<template>
  <button
    :style="{
      width: buttonWidth,
      height: buttonHeight,
      marginTop: marginTop,
      marginBottom: marginBottom,
    }"
    class="px-8 text-lg font-bold bg-x-blue text-white hover:bg-x-yellow transition duration-300 ease-in-out max-md:px-6 max-sm:text-base"
    @click="navigate"
  >
    <slot>Read More &gt;</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = withDefaults(
  defineProps<{
    buttonWidth: string
    buttonHeight: string
    route: string
    marginTop: string // Menambahkan props marginTop
    marginBottom: string // Menambahkan props marginBottom
  }>(),
  {
    buttonWidth: 'auto',
    buttonHeight: '48px',
    route: '#',
    marginTop: '2rem', // Nilai default untuk margin-top
    marginBottom: '2rem', // Nilai default untuk margin-bottom
  },
)

const navigate = () => {
  router.push(props.route)
}
</script>
