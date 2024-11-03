<script setup lang="ts">
import AuthorCard from '@/partials/AuthorsCard.vue'
</script>

<template>
  <div class="px-4 md:mx-[80px]">
    <h1
      class="font-bold text-2xl md:text-4xl text-x-black text-center mb-6 md:mb-[48px]"
    >
      List of Authors
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <AuthorCard
        name="Guy Hawkins"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/4385/782a/8f3821cbdb774f4fd93dd85915717102?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHWHs~5oqvurOtCRqbraQT5wtoHs~bvBiPLbNsSr-D75ovMKsU5H6oStmYUHSRZTF4eATJNMnGj910cPM61ClzoRDhxao5kZXkNdL8iDO0a~4D5kynunNZsnQMrWVHryyaJJ4wyeUo0lSptY7tBHKT4jtvBZUJ0AAhxjqe9W31vVjLt7ingVWjlLbBZIfrAiqLrLcu-mnd~1-qIXnweoqGoGTrFeBL3pPiwtGFqgypRQVKe-rUi-vy6NIq6wfmvngn5uTnbc~A60P5R2bjMbpJsEKLwtl6e5Ns9hwH0z-MQF208basoCLpEqKVBLvq00UBi~49gK9eG6pB9LLQkkSw__"
        link="/author"
      />
      <AuthorCard
        name="Eleanor Pena"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/f035/9bcd/7f137256ea8ef973360ddcaafc87e212?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBG5uZVBdOYZp5oyHssg-27AUNCXjTnobIdzl2NM-nMCsBMm2MzR5Gg2TaK9ChwzmE9CI~E6Fi5~M5xEb7RuohfNM~v-PP4hWPOVqvXtaXpRw~QsueJoESD~1b~017qXg26cEo1JLswmntUelETwGGa7bw1gYpwYxDX3jUmYj3xZAmwBaTs9XImWi6FKaHfa18npD6B5KEM3XMRJtSBF4Jpvlvs2Y1hrsI82jdblxE9xTvg9KE0rg1c1IQew37uRc3qvjFExbfRjlNbc4nFijGLWD6rc2kMHoX3OK58J163ZInx7x4LcSJMRdBCgluY~WYzh6QaC9~QqKEisQd1nfQ__"
        link="/author"
      />
      <AuthorCard
        name="Robert Fox"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/680e/a601/f844a12b65a14e3c5b9fc782901f21f2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BWIyZBg5JbIcgVEd4gHT8yXnLCa5A2kySR9i2bcP2ZRwxRN2nqHiFXstZ6mg1g~KTwXK6zOhhGgh9yJDKrPDEZO6u9wUkKRqvsgG9A4Vn0ql9g3zRbnR7go7ghdW0fyK~1ZPPPmyePKFiRs5LBYSgqOxPY1~IwmZ43cAh3PplriYDut-ckFHRaygsa6CNYUnLFFsTGtnNGNxjHuyZkmULgww1DcieotpQz7RjVJ1y5iAjj9j-rfXGIUOoMNU3WG99zJ06MXEEigtOOXsbX5EdN-6wBOtKkTjbPVdvAHtHVTjIVP6GldEDXEG0XX8EdaaMMAjLTlDAtgaKyXtwnW~MA__"
        link="/author"
      />
      <AuthorCard
        name="Jacob Jones"
        job="Content Writer @Company"
        image="https://s3-alpha-sig.figma.com/img/dc35/5164/e44f951d1c21b4f13ef7b17753bf3e73?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WiZMWzhHwLgwxytzzGXYP5UtsZ5m1NFQclI2zbF7Mil7if9wQSwQKNXfWMS7QurABar90UOUX2A6JH7IxTdgCcSYIekCcrNw1xKdRcM~4TSFGg6i8iHsh8lh4l~BOxA9oiBoUyvYPzLWWLr45D86C8NahZre21PRN5Zn0SJThiDQsx34MY9tc7~1U~d~aEXP8Vhk8dZigDSKWUEi~PY8OyZN7IfG4~CkuKdlyJYfbbQY8ABmsNWTeEsWZBNea8HEZvM9GS472A8JSAcKQHsft-iyLBXNKwxewj74VSfh5PBpudFbARF9EjoLJ~vbNFekec~Yyu6ZQt~NZsX~FCIJxw__"
        link="/author"
      />
    </div>
  </div>
</template>
