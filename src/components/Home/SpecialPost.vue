<script setup lang="ts">
import Button from '@/partials/Button.vue'
</script>

<template>
  <div class="relative h-[833px] mx-[80px] mt-[128px]">
    <!-- Background Image Layer -->
    <div class="absolute">
      <img
        src="https://s3-alpha-sig.figma.com/img/9b1a/e821/ce4666853a588ecefa1d1add86d0a4da?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CH8rWggzS8JDzlfsug2Ah58QpGmOv7jfVhbzijd~WrKFiUM3EpAWMh97n66FwBvMcn0yIR0opfVO88oJZlz~ch5PDHfIT98qQNEIWzdkMjvqxBfbiAtFhYtu4xIBdBapDrivBaYZyvet6mpsmfPBmAfqxe59o1lBLR2WE7m6Z3gJqPQVZ2T1dU4bYgQM2koHFIEvrQkvQ13mnMfwdOYOWa6pZ3nWg6j2cpmiLrzO~CVwkYMt2HZrTL8HwOpg~w8rfVqsjXxffXzQNfkoMx~axOQIn8DvkXJ1TEByfwDvkDGiyCCkRmt~NOb7vQ7VynIGrwxA37IwpNfdFe2gFmrgCg__"
        alt="Group of friends looking at mountain view"
        class="w-[949px] h-[705px] object-cover"
      />
    </div>

    <!-- Content Layer -->
    <div
      class="absolute right-0 bottom-20 w-[706px] h-[584px] bg-white px-[80px] pt-[80px]"
    >
      <div class="max-w-[546px]">
        <p
          class="uppercase font-semibold tracking-[3px] text-x-black text-[16px] font-serif"
        >
          Why we started
        </p>

        <h2
          class="w-[546px] font-bold text-[48px] text-x-black mt-[24px] tracking-tighter"
        >
          It started out as a simple idea and evolved into our passion
        </h2>

        <p class="mt-[16px] text-x-mediumgrey font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button button-height="56px" button-width="270px">
          Discover our story &gt;
        </Button>
      </div>
    </div>
  </div>
</template>
