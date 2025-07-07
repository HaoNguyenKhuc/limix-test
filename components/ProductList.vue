<template>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="defaultFeaturedProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                    TOP TÌM KIẾM
                </h2>
                <div class="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <LazyProductCard v-for="product in ProductDummy" :key="product.id" :product="product" />
            </div>

            <div class="text-center mt-8">
                <a @click="loadMore"
                    class="inline-flex items-center justify-center px-4 py-2  text-sm font-medium rounded-md underline text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Còn nhiều lắm, xem thêm
                </a>
            </div>
        </div>

        <div v-if="defaultPopularProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                    SẢN PHẨM MỚI
                </h2>
                <div class="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <LazyProductCard v-for="product in NewProductDummy" :key="product.id" :product="product" />
            </div>

            <div class="text-center mt-8">
                <a @click="loadMore"
                    class="inline-flex items-center justify-center px-4 py-2  text-sm font-medium rounded-md underline text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Còn nhiều lắm, xem thêm
                </a>
            </div>
        </div>

        <div v-if="allProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                    SẢN PHẨM NỔI BẬT
                </h2>
                <div class="w-20 h-1 bg-gray-400 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <LazyProductCard v-for="product in FeaturedProductDummy" :key="product.id" :product="product" />
            </div>

            <div class="text-center mt-8">
                <a @click="loadMore"
                    class="inline-flex items-center justify-center px-4 py-2  text-sm font-medium rounded-md underline text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Còn nhiều lắm, xem thêm
                </a>
            </div>
        </div>

        <div v-if="!hasAnyProducts" class="text-center py-12">
            <UIcon name="i-heroicons-inbox" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">Không có sản phẩm</h3>
            <p class="text-gray-500">Hiện tại chưa có sản phẩm nào để hiển thị.</p>
        </div>

        <div v-if="isInitialLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="n in 8" :key="n"
                class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-4">
                    <div class="flex justify-between mb-2">
                        <div class="h-3 bg-gray-200 rounded w-16"></div>
                        <div class="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                    <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div class="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div class="h-3 bg-gray-200 rounded w-24 mb-3"></div>
                    <div class="flex justify-between items-center">
                        <div class="h-5 bg-gray-200 rounded w-20"></div>
                        <div class="h-4 bg-gray-200 rounded w-12"></div>
                    </div>
                    <div class="h-8 bg-gray-200 rounded w-full mt-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProductDummy, NewProductDummy, FeaturedProductDummy } from '~/dummys/ProductDummy'
import type { Product } from '~/types/Product'

interface Props {
    products?: Product[]
    featuredProducts?: Product[]
    popularProducts?: Product[]
    isLoading?: boolean
    pageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
    products: () => [],
    featuredProducts: () => [],
    popularProducts: () => [],
    isLoading: false,
    pageSize: 8
})

const emit = defineEmits<{
    addToCart: [product: Product]
    toggleWishlist: [product: Product]
    loadMore: []
}>()

const currentPage = ref(1)
const isInitialLoading = ref(false)

const allProducts = computed(() => {
    return defaultProducts.value.filter(product =>
        !product.isFeatured && !product.isPopular
    )
})

const paginatedProducts = computed(() => {
    const start = 0
    const end = currentPage.value * props.pageSize
    return allProducts.value.slice(start, end)
})

const hasAnyProducts = computed(() => {
    return defaultFeaturedProducts.value.length > 0 ||
        defaultPopularProducts.value.length > 0 ||
        defaultProducts.value.length > 0
})

const handleAddToCart = (product: Product) => {
    emit('addToCart', product)
}

const handleToggleWishlist = (product: Product) => {
    emit('toggleWishlist', product)
}

const loadMore = () => {
    currentPage.value += 1
    emit('loadMore')
}


const defaultProducts = computed(() => {
    return props.products.length > 0 ? props.products : ProductDummy
})

const defaultFeaturedProducts = computed(() => {
    return props.featuredProducts.length > 0 ? props.featuredProducts :
        ProductDummy.filter(p => p.isFeatured).slice(0, 4)
})

const defaultPopularProducts = computed(() => {
    return props.popularProducts.length > 0 ? props.popularProducts :
        ProductDummy.filter(p => p.isPopular).slice(0, 12)
})

onMounted(() => {
    if (!hasAnyProducts.value) {
        isInitialLoading.value = true
        setTimeout(() => {
            isInitialLoading.value = false
        }, 1000)
    }
})

watch(() => props.products, () => {
    currentPage.value = 1
})
</script>

<style scoped>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}
</style>