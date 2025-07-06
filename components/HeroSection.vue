<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
}

const items = [
    'https://file.hstatic.net/1000230642/file/1920x750__16__6228421acab64fdeacc977022182510d.jpg',
    'https://file.hstatic.net/1000230642/file/untitled-2__1_.png',
    'https://file.hstatic.net/1000230642/file/1920x750__15_.jpg',
    'https://file.hstatic.net/1000230642/file/1920x750__14__1b49d9689a124efca3765a0dee27649b.jpg',
    'https://file.hstatic.net/1000230642/file/1920x750__13__94fa104ce0a1462282b1e55bea65182f.jpg',
]
</script>

<template>
    <Carousel :autoplay="3000" v-bind="carouselConfig">
        <Slide v-for="item in items" :key="item">
            <div class="carousel__item w-full">
                <NuxtImg :src="item" alt="Product" height="500" loading="lazy" placeholder class=" w-full" />
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>