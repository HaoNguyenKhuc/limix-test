<template>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Products Section -->
        <div v-if="defaultFeaturedProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                    Sản phẩm đặc biệt
                </h2>
                <div class="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard v-for="product in defaultFeaturedProducts" :key="product.id" :product="product"
                    @add-to-cart="handleAddToCart" @toggle-wishlist="handleToggleWishlist" />
            </div>
        </div>

        <!-- Popular Products Section -->
        <div v-if="defaultPopularProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                    Top tìm kiếm
                </h2>
                <div class="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard v-for="product in defaultPopularProducts" :key="product.id" :product="product"
                    @add-to-cart="handleAddToCart" @toggle-wishlist="handleToggleWishlist" />
            </div>
        </div>

        <!-- All Products Section -->
        <div v-if="allProducts.length > 0" class="mb-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800 uppercase tracking-wide">
                    Tất cả sản phẩm
                </h2>
                <div class="w-20 h-1 bg-gray-400 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard v-for="product in paginatedProducts" :key="product.id" :product="product"
                    @add-to-cart="handleAddToCart" @toggle-wishlist="handleToggleWishlist" />
            </div>

            <!-- Load More Button -->
            <div v-if="hasMoreProducts" class="text-center mt-8">
                <UButton @click="loadMore" variant="outline" size="lg" :loading="isLoading">
                    <template #leading>
                        <UIcon name="i-heroicons-arrow-down" class="w-4 h-4" />
                    </template>
                    Còn nhiều lắm, xem thêm
                </UButton>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="!hasAnyProducts" class="text-center py-12">
            <UIcon name="i-heroicons-inbox" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">Không có sản phẩm</h3>
            <p class="text-gray-500">Hiện tại chưa có sản phẩm nào để hiển thị.</p>
        </div>

        <!-- Loading State -->
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

// Reactive state
const currentPage = ref(1)
const isInitialLoading = ref(false)

// Computed properties
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

const hasMoreProducts = computed(() => {
    return paginatedProducts.value.length < allProducts.value.length
})

const hasAnyProducts = computed(() => {
    return defaultFeaturedProducts.value.length > 0 ||
        defaultPopularProducts.value.length > 0 ||
        defaultProducts.value.length > 0
})

// Methods
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

// Sample data based on Biti's products
const sampleProducts = ref([
    {
        id: 1067725274,
        name: "Balo Biti's Helio Teen Nam Nữ Màu Đen BBBB01200DEN",
        code: "BBBB01200DEN",
        image: "//cdn.hstatic.net/products/1000230642/bbbb01200den__2__10be839d96c14fe6a38ccb8e56ad71db_large.jpg",
        price: 549000,
        rating: 6,
        sizeInfo: "1 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 6
    },
    {
        id: 1067725334,
        name: "Balo Biti's Helio Teen Nam Nữ Màu Đen BBBB01300DEN",
        code: "BBBB01300DEN",
        image: "//cdn.hstatic.net/products/1000230642/bbbb01300den__2__072392b1f6324ecc815ebcb474bdcb17_large.jpg",
        price: 650000,
        rating: 8,
        sizeInfo: "1 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 8
    },
    {
        id: 1068091273,
        name: "Balo Biti's Helio Teen Nam Nữ Màu Xám BBBG01500XAM",
        code: "BBBG01500XAM",
        image: "//cdn.hstatic.net/products/1000230642/bbbg01500xam__2__179dade1857c4c76905c77056c01f241_large.jpg",
        price: 549000,
        rating: 4,
        sizeInfo: "1 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 4
    },
    {
        id: 1067725267,
        name: "Balo Biti's Helio Teen Nam Nữ Màu Xám Đậm BBBB01200XAD",
        code: "BBBB01200XAD",
        image: "//cdn.hstatic.net/products/1000230642/bbbb01200xad_13400532315849e5bc2926ebd30ebfcb_large.jpg",
        price: 549000,
        rating: 7,
        sizeInfo: "1 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 7
    },
    {
        id: 1067362242,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Đen BSB007400DEN",
        code: "BSB007400DEN",
        image: "//product.hstatic.net/1000230642/product/bsb007400den__7__dc56d26d8e5847708ab3686fd52f2dd1_large.jpg",
        price: 595000,
        rating: 25,
        sizeInfo: "7 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 25
    },
    {
        id: 1067385549,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Đen BSB008100DEN",
        code: "BSB008100DEN",
        image: "//product.hstatic.net/1000230642/product/bsb008100den__6__ed8cd04ff218434f85fc74d6faa34f1b_large.jpg",
        price: 596000,
        rating: 21,
        sizeInfo: "6 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 21
    },
    {
        id: 1067385039,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Nâu BSB008100NAU",
        code: "BSB008100NAU",
        image: "//product.hstatic.net/1000230642/product/bsb008100nau__4__b170fe6a51b141a7afbe11e6fa127dce_large.jpg",
        price: 596000,
        rating: 12,
        sizeInfo: "6 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 12
    },
    {
        id: 1067384967,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Trắng BSB008100TRG",
        code: "BSB008100TRG",
        image: "//product.hstatic.net/1000230642/product/bsb008100trg__2__470b08bc8eea4506a64287121e3ce402_large.jpg",
        price: 596000,
        rating: 29,
        sizeInfo: "6 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isPopular: true,
        soldCount: 29
    },
    {
        id: 1067362297,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Xanh Dương BSB007400XDG",
        code: "BSB007400XDG",
        image: "//product.hstatic.net/1000230642/product/bsb007400xdg__6__595f9682acf44346af5f6a26cc707ad1_large.jpg",
        price: 595000,
        rating: 14,
        sizeInfo: "7 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        soldCount: 14
    },
    {
        id: 1067393885,
        name: "Giày Thể Thao Biti's Helio Teen Nam Màu Xanh Lá Cây BSB007400XLC",
        code: "BSB007400XLC",
        image: "//cdn.hstatic.net/products/1000230642/bsb007400xlc__5__fb1292524ec64b28a614e05e2a3ec321_large.jpg",
        price: 595000,
        rating: 25,
        sizeInfo: "7 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        soldCount: 25
    },
    {
        id: 1067393591,
        name: "Giày Thể Thao Biti's Helio Teen Nữ Màu Kem BSG007400KEM",
        code: "BSG007400KEM",
        image: "//product.hstatic.net/1000230642/product/bsg007400kem__2__00278c1d847f4316845f2b79e4f82cc4_large.jpg",
        price: 596000,
        rating: 39,
        sizeInfo: "6 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        soldCount: 39
    },
    {
        id: 1067392783,
        name: "Giày Thể Thao Biti's Helio Teen Nữ Màu Kem BSG008100KEM",
        code: "BSG008100KEM",
        image: "//product.hstatic.net/1000230642/product/bsg008100kem__6__747183e3aa1e46688576dd2d68e0cc73_large.jpg",
        price: 596000,
        rating: 137,
        sizeInfo: "6 Size",
        colorInfo: "1 Màu sắc",
        isNew: true,
        isFeatured: true,
        soldCount: 137
    }
])

// If no products are passed as props, use sample data
const defaultProducts = computed(() => {
    return props.products.length > 0 ? props.products : sampleProducts.value
})

const defaultFeaturedProducts = computed(() => {
    return props.featuredProducts.length > 0 ? props.featuredProducts :
        sampleProducts.value.filter(p => p.isFeatured).slice(0, 4)
})

const defaultPopularProducts = computed(() => {
    return props.popularProducts.length > 0 ? props.popularProducts :
        sampleProducts.value.filter(p => p.isPopular).slice(0, 12)
})

// Lifecycle
onMounted(() => {
    // Simulate initial loading
    if (!hasAnyProducts.value) {
        isInitialLoading.value = true
        setTimeout(() => {
            isInitialLoading.value = false
        }, 1000)
    }
})

// Watch for products changes to reset pagination
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