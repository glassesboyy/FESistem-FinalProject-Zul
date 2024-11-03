<template>
  <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div
      class="flex flex-col grow items-start p-8 w-full border border-solid border-x-darkgrey max-md:px-5 max-md:mt-8"
    >
      <div
        class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50"
      >
        <img
          loading="lazy"
          src="@assets/images/icons/business.png"
          alt=""
          class="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="@assets/images/icons/business.png"
          alt="Business icon"
          class="object-contain w-full aspect-square"
        />
      </div>
      <h3
        class="mt-4 text-3xl font-bold tracking-tighter leading-none text-x-black"
      >
        Business
      </h3>
      <p class="self-stretch mt-1 text-base leading-7 text-x-mediumgrey">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
    </div>
  </article>
</template>
