<script setup lang="ts"></script>

<template>
  <div class="mx-[80px]">
    <div class="w-full h-[464px] bg-x-lightyellow flex pt-[92px] pl-[112px]">
      <div class="w-[349px]">
        <p class="text-[16px] font-serif font-semibold tracking-[3px]">
          TESTIMONIALS
        </p>
        <h2 class="mt-[12px] text-4xl font-bold">
          What people say about our blog
        </h2>
        <p class="mt-[16px] font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div
        class="shrink-0 w-px border border-solid opacity-40 bg-x-mediumgrey border-x-mediumgrey h-[310px] ml-[80px] mr-[96px]"
      ></div>
      <div>
        <h4 class="font-bold text-[24px] text-x-black w-[469px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <div class="mt-[121px] flex">
          <img
            src="@/assets/images/misc/profile-picture.svg"
            alt="author"
            class="w-[60px] h-[60px] rounded-full object-contain"
          />
          <div>
            <h4 class="text-[24px] text-x-black font-bold ml-[16px]">
              Jonathan Vallem
            </h4>
            <p class="text-[16px] text-x-mediumgrey ml-[16px]">New York, USA</p>
          </div>
          <div class="ml-[141px]">
            <button>
              <img
                class="w-[48px] h-[48px] hover:cursor-pointer hover:scale-125 duration-300 ease-in-out"
                src="@/assets/images/logo/back-button.svg"
                alt=""
              />
            </button>
            <button>
              <img
                class="ml-[16px] w-[48px] h-[48px] hover:cursor-pointer hover:scale-125 duration-300 ease-in-out"
                src="@/assets/images/logo/next-button.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
