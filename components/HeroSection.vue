<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000
}

const items = [
  'https://file.hstatic.net/1000230642/file/1920x750__16__6228421acab64fdeacc977022182510d.jpg',
  'https://file.hstatic.net/1000230642/file/untitled-2__1_.png',
  'https://file.hstatic.net/1000230642/file/1920x750__15_.jpg'
]
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(item, index) in items" :key="item">
      <div class="carousel__item w-full">
        <NuxtImg :src="item" alt="Product banner" height="500" sizes="100vw" placeholder 
          :loading="index === 0 ? 'eager' : 'lazy'"
          format="webp" quality="80" class="w-full" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>