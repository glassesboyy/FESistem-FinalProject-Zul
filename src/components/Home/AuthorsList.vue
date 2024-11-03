<script setup lang="ts">
import AuthorCard from '@/partials/AuthorsCard.vue'
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="font-bold text-4xl text-x-black text-center mb-12">
      List of Authors
    </h1>
    <div class="author-grid gap-4">
      <AuthorCard
        name="Floyd Miles"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/b18c/46a4/5b103af032f344457c097e10aa7ebd86?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ylq-FuaDTV-Xqs-g6GyymF15yFO8N9Nt1hINUp3Ogl6AbGFQd5ZbBvBQfsxUL3dMtQLRPq4vS2w3pSEMpVGFJURBzXOYtfkookWAam01tuRCMbL7z-NDsmmiBueaOCBoRB75TKYl36MFCkP0JiVh-MGFV7jQMz8HWD93y62ezRI2CWN90n~HfjFjwF9wpiv7DeODs7Dplmy-8u9QDz9stfN5hOhxvNpS1FKvbQ31TVosFLMs85eemzyZMZqy-eJo04j0L9NfkVLyVDARHjh04TP3cLx3obMrX2VOSCMxFbLAab2rNjbzP7L6m~6x3MsVvfI35lx5bSTpSQq6WdVc6w__"
        link="/author"
      />
      <AuthorCard
        name="Dianne Russell"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/254e/3308/94c1db47acb8141c7502d8724bd28fbd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sph9YAgyk3fwt7A9LlpZusuiIHRkPzOa4Zvjtaoqy93QRcny2W2kEn5mDJ6mdrTRkl43A6ycBLY8iIn6vLKjmhQ686s4Z5FgPapJ8ePM0dBUNjVW2wcevL8lYSVz9ZMv0QLfKphTWOdLlbYmcLFQdL6V9A3wpGsedQrA-B-MYHwgIIPcxCj9EaBz3a0-628VsI-iVeoboKsiDHzlOAfx-DHuQkwHLcisPH8sGPdYyGFlgq5ApzfUEPVTPz2ttYeaQA535fYAa1TbknrhJJxWRm3aVDw1oKTZ6FisatIIA8Wpsj~1IAYYDlTKsckcdz8tZH7az634wbFEb4zL7qIYKA__"
        link="/author"
      />
      <AuthorCard
        name="Jenny Wilson"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/e6f4/9511/e2521d1f9982ee7c506948d0020e937f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdX1cB68zOmDhdLlaSa1xwZZHqxcVH~7jeoc8NYRt-43btOQifDVURVIm~q~YqDlIfb21T6an0aJwLlGCesJ7ZDkAJAej9~FdqyC2MWeOWmN77h8uJkhrTxrBXrBvveb4a2iZgAS6Jf84-U-0nX4eQUP-RQi-depBpBKep5J5hH8jwBc-jdeUFnPREyVJiBtIAjWkZM2D9lWWcjMBuQaZFb46PLrtdwpf2UGyZchrbQhdhkmH9n7G2W9I5qJVN5A70z4xNoELA8VJAflVgfBc3KiYFvFs~r1wstnzlPFiV1i32EWIOGcFFzt-6FKP0MPNbkAFhYqOwraaYnonOqxug__"
        link="/author"
      />
      <AuthorCard
        name="Leslie Alexander"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/452f/5cc4/f310490df993fe9cb9b6b77f5e1512cb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4s1RxmiGd8f3nZ-E3eVjdzR8yfQD4T9FwXsFMfM6q7KdvD7L~3H1SQG1XLQMTJ1JgPw1jREi5hWQS18Xiq~fKWLG~wM4h1THzf8jIWwkfqMNRpNG~Dy~-x1U8wPAfvDsF5vx~f77QEkPPyUDkzXestFQhqinGC78aiYOlYSXaUQ4rms63k86-c2aKiHFFpCPfUN1cTp8DMrExDoDUVTeyV734HAFXpxpYVrJ2Z7l4Q-gm5l9BvRhdBv9y6Q2vUm4CpsUd05FULYpcEnC94ajlmghvbL-v8rkrAwAtsTCvovrCIwtl4FFe8pJk5xdVJ99JuCtCIuA0pTMYJf4J0LfA__"
        link="/author"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
}

.author-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

@media (min-width: 640px) {
  .author-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .author-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
