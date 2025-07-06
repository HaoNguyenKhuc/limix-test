<template>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <!-- Product Image Container -->
      <div class="relative aspect-square bg-gray-50 group">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <!-- New Badge -->
        <div 
          v-if="product.isNew" 
          class="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium"
        >
          Mới
        </div>
        
        <!-- Wishlist Button -->
        <button 
          @click="toggleWishlist"
          class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <UIcon 
            :name="isWishlisted ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" 
            :class="isWishlisted ? 'text-red-500' : 'text-gray-400'"
            class="w-4 h-4"
          />
        </button>
      </div>
  
      <!-- Product Info -->
      <div class="p-4">
        <!-- Product Details -->
        <div class="flex justify-between items-start mb-2 text-sm text-gray-500">
          <span>{{ product.sizeInfo }}</span>
          <span>{{ product.colorInfo }}</span>
        </div>
  
        <!-- Product Name -->
        <h3 class="text-gray-900 font-medium mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
          {{ product.name }}
        </h3>
  
        <!-- Product Code -->
        <p class="text-gray-500 text-sm mb-3">{{ product.code }}</p>
  
        <!-- Price and Rating -->
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-gray-900">{{ formatPrice(product.price) }}</span>
            <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
              {{ formatPrice(product.originalPrice) }}
            </span>
          </div>
          
          <div class="flex items-center space-x-1 text-sm text-gray-500">
            <UIcon name="i-heroicons-star-solid" class="w-4 h-4 text-yellow-400" />
            <span>{{ product.rating }}</span>
          </div>
        </div>
  
        <!-- Add to Cart Button -->
        <UButton 
          @click="addToCart"
          color="primary" 
          variant="solid"
          size="sm"
          block
          class="mt-3"
          :loading="isAddingToCart"
        >
          Thêm vào giỏ hàng
        </UButton>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Product {
    id: string | number
    name: string
    code: string
    image: string
    price: number
    originalPrice?: number
    rating: number
    sizeInfo: string
    colorInfo: string
    isNew?: boolean
  }
  
  interface Props {
    product: Product
  }
  
  const props = defineProps<Props>()
  
  const emit = defineEmits<{
    addToCart: [product: Product]
    toggleWishlist: [product: Product]
  }>()
  
  // Reactive state
  const isWishlisted = ref(false)
  const isAddingToCart = ref(false)
  
  // Methods
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    }).format(price).replace('₫', 'đ')
  }
  
  const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value
    emit('toggleWishlist', props.product)
  }
  
  const addToCart = async () => {
    isAddingToCart.value = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      emit('addToCart', props.product)
      
      // Show success toast
      const toast = useToast()
      toast.add({
        title: 'Thành công',
        description: 'Đã thêm sản phẩm vào giỏ hàng',
        // color: 'green'
      })
    } catch (error) {
      const toast = useToast()
      toast.add({
        title: 'Lỗi',
        description: 'Không thể thêm sản phẩm vào giỏ hàng',
        // color: 'red'
      })
    } finally {
      isAddingToCart.value = false
    }
  }
  </script>
  
  <style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>