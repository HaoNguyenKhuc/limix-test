<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const logoUrl = await import('@/assets/images/slider1.jpg')
const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true
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
    <Carousel v-bind="carouselConfig">
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