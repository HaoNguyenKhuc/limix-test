<template>
    <div>
        <LazyHeroSection />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="handleAddToCart"
                @toggle-wishlist="handleToggleWishlist" />
        </div>
        <AppLocation />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Biti's - Thương hiệu giày dép và phụ kiện hàng đầu Việt Nam",
    ogTitle: "Biti's - Thương hiệu giày dép và phụ kiện hàng đầu Việt Nam",
    description: "Biti's - Thương hiệu giày dép, balo và phụ kiện chất lượng cao. Khuyến mãi 20% cho bộ sưu tập Hunter mới. Miễn phí giao hàng toàn quốc.",
    ogDescription: "Khuyến mãi 20% cho bộ sưu tập Hunter mới. Miễn phí giao hàng toàn quốc.",
    ogImage: "/og-image.webp",
    twitterCard: "summary_large_image",
    robots: "index, follow"
})

const products = [
    {
        id: 1,
        name: "Balo Biti's Helio Teen Nam Nữ Màu Đen",
        code: "BBBB01200DEN",
        image: "/path/to/image.jpg",
        price: 549000,
        rating: 6,
        sizeInfo: "1 Size",
        colorInfo: "1 Màu sắc",
        isNew: true
    }
]

const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product)
}

const handleToggleWishlist = (product: any) => {
    console.log('Toggled wishlist:', product)
}

</script>