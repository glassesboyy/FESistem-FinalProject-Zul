<template>
  <div class="mx-5 sm:mx-10 md:mx-[80px] my-8 sm:my-16 md:my-[108px]">
    <section
      data-layername="logoComponent"
      class="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-10 items-start text-zinc-500"
    >
      <header class="flex flex-col self-start mt-0 mb-4 sm:mb-0">
        <p
          data-layername="weAre"
          class="self-start text-xs sm:text-sm leading-none opacity-60"
        >
          We are
        </p>
        <h2
          data-layername="featuredIn"
          class="text-xl sm:text-2xl font-bold leading-none mt-1"
        >
          Featured in
        </h2>
      </header>
      <img
        loading="lazy"
        src="@/assets/images/logo/logo-wrapper.svg"
        alt="Featured publications logos"
        class="object-contain grow shrink-0 my-auto aspect-[31.25] w-full sm:w-fit max-w-full"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FeaturedIn',
})
</script>
