<script setup lang="ts"></script>

<template>
  <section class="rounded-none">
    <div class="px-4 lg:mx-[80px] flex flex-col lg:flex-row gap-5">
      <div class="w-full lg:w-[43%]">
        <header class="mt-10 lg:mt-20 text-x-black">
          <h2
            class="text-3xl lg:text-4xl tracking-tighter font-bold leading-none text-x-black"
          >
            Our team of creatives
          </h2>
          <h4 class="mt-4 text-xl lg:text-2xl font-bold leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p class="mt-4 text-[16px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </header>
      </div>
      <div class="w-full lg:w-[57%]">
        <img
          loading="lazy"
          src="@/assets/images/misc/know-more-image.svg"
          alt="Our team of creatives"
          class="object-contain w-full rounded-none aspect-[1.42] mt-6 lg:mt-0"
        />
      </div>
    </div>
  </section>

  <section class="why-we-started">
    <div
      class="px-4 lg:mx-[80px] mt-16 lg:mt-[128px] flex flex-col lg:flex-row gap-5"
    >
      <div class="w-full lg:w-[55%]">
        <img
          loading="lazy"
          src="@/assets/images/misc/why-image.svg"
          alt="Illustration related to why we started this blog"
          class="object-contain w-full aspect-[1.21]"
        />
      </div>
      <div class="w-full lg:w-[45%]">
        <article
          class="flex flex-col z-10 text-x-black mt-6 lg:mt-0 lg:my-auto"
        >
          <h2
            class="text-3xl lg:text-4xl font-bold tracking-tighter leading-none text-x-black"
          >
            Why we started this Blog
          </h2>
          <h4 class="mt-4 text-xl lg:text-2xl font-bold leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p class="mt-4 text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
