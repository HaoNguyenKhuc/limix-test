<template>
    <div>
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-red-500 uppercase tracking-wide">
                {{ title }}
            </h2>
            <div class="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        <ProductGrid :products="products" @add-to-cart="emit('addToCart', $event)"
            @toggle-wishlist="emit('toggleWishlist', $event)" />

        <LoadMoreButton v-if="showLoadMore && hasMore" :loading="loading" @click="emit('loadMore')" />
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/Product'

interface Props {
    title: string
    products: Product[]
    hasMore?: boolean
    loading?: boolean
    showLoadMore?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    hasMore: false,
    loading: false,
    showLoadMore: false
})

const emit = defineEmits<{
    addToCart: [product: Product]
    toggleWishlist: [product: Product]
    loadMore: []
}>()
</script>