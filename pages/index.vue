<template>
    <div>
        <LazyHeroSection />
        <div class="py-8">
            <div v-if="products.length > 0" class="mb-12">
                <LazyProductList :products="products" :page-size="pageSize" @add-to-cart="handleAddToCart"
                    @toggle-wishlist="handleToggleWishlist" />
            </div>
        </div>
        <ClientOnly>
            <LazyNewSection />
            <LazyBitNewsSections />
            <LazyAppLocation />
        </ClientOnly>
        <LazyAppFooter />
    </div>
</template>

<script setup lang="ts">
import { ProductDummy } from '~/dummys/ProductDummy';
import type { Product } from '~/types/Product'

useSeoMeta({
    title: "Biti's - Thương hiệu giày dép và phụ kiện hàng đầu Việt Nam",
    ogTitle: "Biti's - Thương hiệu giày dép và phụ kiện hàng đầu Việt Nam",
    description: "Biti's - Thương hiệu giày dép, balo và phụ kiện chất lượng cao. Khuyến mãi 20% cho bộ sưu tập Hunter mới. Miễn phí giao hàng toàn quốc.",
    ogDescription: "Khuyến mãi 20% cho bộ sưu tập Hunter mới. Miễn phí giao hàng toàn quốc.",
    ogImage: "/og-image.webp",
    twitterCard: "summary_large_image",
    robots: "index, follow"
})

useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://file.hstatic.net',
        },
        {
            rel: 'dns-prefetch',
            href: 'https://file.hstatic.net',
        },
        {
            rel: 'preload',
            as: 'image',
            href: 'https://file.hstatic.net/1000230642/file/1920x750__16__6228421acab64fdeacc977022182510d.jpg',
            type: 'image/jpeg'
        }
    ]
})


const pageSize = ref(8)

const products = ref<Product[]>([])

onMounted(() => {
    products.value = ProductDummy.slice(0, pageSize.value)

    setTimeout(() => {
        products.value = ProductDummy
    }, 1000)
})

const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product)
}

const handleToggleWishlist = (product: any) => {
    console.log('Toggled wishlist:', product)
}
</script>