<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Header -->
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-6">
          <h1 class="text-3xl font-bold text-center text-gray-800">
            HỆ THỐNG CỬA HÀNG BITIS
          </h1>
        </div>
      </header>
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Store List Section -->
          <div class="lg:col-span-5">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <!-- Province Filter -->
              <div class="mb-6">
                <UFormGroup label="Chọn tỉnh/thành phố:">
                  <USelect
                    v-model="selectedProvince"
                    :options="provinceOptions"
                    placeholder="Chọn tỉnh/thành phố"
                    @change="filterStores"
                  />
                </UFormGroup>
              </div>
  
              <!-- Store Count -->
              <div class="mb-4">
                <p class="text-sm text-gray-600">
                  Hiển thị {{ filteredStores.length }} cửa hàng
                </p>
              </div>
  
              <!-- Store List -->
              <div class="max-h-96 overflow-y-auto space-y-4">
                <UCard
                  v-for="store in filteredStores"
                  :key="store.id"
                  class="cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                  :class="{ 'ring-2 ring-primary-500': selectedStore?.id === store.id }"
                  @click="selectStore(store)"
                >
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 mt-1">
                      <UIcon name="i-heroicons-map-pin" class="text-primary-600 text-lg" />
                    </div>
                    <div class="flex-grow">
                      <h3 class="font-semibold text-gray-800 mb-1">
                        {{ store.name }}
                      </h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        {{ store.address }}
                      </p>
                      <div class="mt-2">
                        <UBadge :label="store.province" variant="soft" />
                      </div>
                    </div>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
  
          <!-- Map Section -->
          <div class="lg:col-span-7">
            <UCard class="overflow-hidden">
              <div class="map-container h-96 lg:h-[600px] relative">
                <!-- Map Placeholder -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <UIcon name="i-heroicons-map" class="text-6xl mb-4 opacity-70" />
                    <h3 class="text-xl font-semibold mb-2">Bản đồ cửa hàng Bitis</h3>
                    <p class="text-sm opacity-80">
                      {{ selectedStore ? `Đang hiển thị: ${selectedStore.name}` : 'Chọn cửa hàng để xem vị trí' }}
                    </p>
                  </div>
                </div>
                
                <!-- Store Info Overlay -->
                <div v-if="selectedStore" class="absolute bottom-4 left-4 right-4">
                  <UCard>
                    <template #header>
                      <h4 class="font-semibold text-gray-800">{{ selectedStore.name }}</h4>
                    </template>
                    
                    <p class="text-sm text-gray-600 mb-3">{{ selectedStore.address }}</p>
                    
                    <UButton 
                      @click="openInGoogleMaps(selectedStore)"
                      icon="i-heroicons-arrow-top-right-on-square"
                      size="sm"
                    >
                      Xem trên Google Maps
                    </UButton>
                  </UCard>
                </div>
              </div>
            </UCard>
          </div>
        </div>
  
        <!-- Statistics Section -->
        <div class="mt-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard class="text-center">
              <div class="p-6">
                <UIcon name="i-heroicons-building-storefront" class="text-4xl text-primary-600 mb-3 mx-auto" />
                <h3 class="text-2xl font-bold text-gray-800">{{ stores.length }}+</h3>
                <p class="text-gray-600">Cửa hàng trên toàn quốc</p>
              </div>
            </UCard>
            
            <UCard class="text-center">
              <div class="p-6">
                <UIcon name="i-heroicons-map-pin" class="text-4xl text-green-600 mb-3 mx-auto" />
                <h3 class="text-2xl font-bold text-gray-800">{{ provinces.length }}</h3>
                <p class="text-gray-600">Tỉnh/Thành phố</p>
              </div>
            </UCard>
            
            <UCard class="text-center">
              <div class="p-6">
                <UIcon name="i-heroicons-users" class="text-4xl text-purple-600 mb-3 mx-auto" />
                <h3 class="text-2xl font-bold text-gray-800">1M+</h3>
                <p class="text-gray-600">Khách hàng tin tưởng</p>
              </div>
            </UCard>
          </div>
        </div>
      </div>
  
      <!-- Toast notifications -->
      <UNotifications />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Store {
    id: number
    name: string
    address: string
    province: string
  }
  
  interface ProvinceOption {
    label: string
    value: string
  }
  
  // Reactive data
  const selectedProvince = ref<string>('')
  const selectedStore = ref<Store | null>(null)
  
  // Store data
  const stores = ref<Store[]>([
    {
      id: 1,
      name: 'CH Chợ Lớn - Quận 6 - HCM',
      address: '56 - 58 - 60 - 62 Tháp Mười, Phường 2, Quận 6, Thành phố Hồ Chí Minh',
      province: 'Hồ Chí Minh'
    },
    {
      id: 2,
      name: 'CH 594 Thống Nhất - Gò Vấp - HCM',
      address: '594 Thống Nhất, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh',
      province: 'Hồ Chí Minh'
    },
    {
      id: 3,
      name: 'CH 242 Huỳnh Tấn Phát - Nhà Bè - HCM',
      address: '1848 Huỳnh Tấn Phát, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
      province: 'Hồ Chí Minh'
    },
    {
      id: 4,
      name: 'CH 54C Xô Viết Nghệ Tĩnh - Bình Thạnh - HCM',
      address: '54C Xô Viết Nghệ Tĩnh, Phường 19, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
      province: 'Hồ Chí Minh'
    },
    {
      id: 5,
      name: 'CH 642 Quang Trung - Gò Vấp - HCM',
      address: '642 Quang Trung, Phường 11, Quận Gò Vấp, Thành phố Hồ Chí Minh',
      province: 'Hồ Chí Minh'
    },
    {
      id: 6,
      name: 'CH 25 Chùa Bộc - Đống Đa - HN',
      address: '25 Chùa Bộc, Phường Quang Trung, Quận Đống Đa, Thành phố Hà Nội',
      province: 'Hà Nội'
    },
    {
      id: 7,
      name: 'CH 352 Cầu Giấy - Cầu Giấy - HN',
      address: '352 Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội',
      province: 'Hà Nội'
    },
    {
      id: 8,
      name: 'CH 40 Tô Hiệu - Hà Đông - HN',
      address: '40 Tô Hiệu, Phường Nguyễn Trãi, Quận Hà Đông, Thành phố Hà Nội',
      province: 'Hà Nội'
    },
    {
      id: 9,
      name: 'CH 09 Hàm Nghi -Thanh Khê - Đà Nẵng',
      address: '09 Hàm Nghi, Phường Vĩnh Trung, Quận Thanh Khê, Thành phố Đà Nẵng',
      province: 'Đà Nẵng'
    },
    {
      id: 10,
      name: 'CH 420 - 422 Hùng Vương - Hải Châu - Đà Nẵng',
      address: '420-422 Hùng Vương, Phường Vĩnh Trung, Quận Thanh Khê, Thành phố Đà Nẵng',
      province: 'Đà Nẵng'
    },
    {
      id: 11,
      name: 'CH 844 Hà Hoàng Hổ - Long Xuyên - An Giang',
      address: '844 Hồ Hoàng Hổ, Phường Mỹ Hòa, Thành phố Long Xuyên, Tỉnh An Giang',
      province: 'An Giang'
    },
    {
      id: 12,
      name: 'CH B2 Lô B Trần Phú - Bạc Liêu',
      address: 'B2-Lô B Trần Phú, Phường 3, Thành phố Bạc Liêu, Tỉnh Bạc Liêu',
      province: 'Bạc Liêu'
    },
    {
      id: 13,
      name: 'CH 145 Lê Lợi - Bắc Giang',
      address: '145 Lê Lợi, Phường Lê Lợi, Thành phố Bắc Giang, Tỉnh Bắc Giang',
      province: 'Bắc Giang'
    },
    {
      id: 14,
      name: 'CH 100 Phan Đình Phùng - Ninh Kiều - Cần Thơ',
      address: '100 Phan Đình Phùng, Phường An Lạc, Quận Ninh Kiều, Thành phố Cần Thơ',
      province: 'Cần Thơ'
    },
    {
      id: 15,
      name: 'CH 145 Thống Nhất - Nha Trang - Khánh Hòa',
      address: '145 Thống Nhất, Phường Vạn Thắng, Thành phố Nha Trang, Tỉnh Khánh Hòa',
      province: 'Khánh Hòa'
    }
  ])
  
  // Computed properties
  const provinces = computed(() => {
    const uniqueProvinces = [...new Set(stores.value.map(store => store.province))]
    return uniqueProvinces.sort()
  })
  
  const provinceOptions = computed((): ProvinceOption[] => [
    { label: 'Tất cả', value: '' },
    ...provinces.value.map(province => ({ label: province, value: province }))
  ])
  
  const filteredStores = computed(() => {
    if (selectedProvince.value === '') {
      return stores.value
    }
    return stores.value.filter(store => store.province === selectedProvince.value)
  })
  
  // Methods
  const filterStores = () => {
    selectedStore.value = null
  }
  
  const selectStore = (store: Store) => {
    selectedStore.value = store
  }
  
  const openInGoogleMaps = (store: Store) => {
    const query = encodeURIComponent(store.address)
    const url = `https://maps.google.com/maps?q=${query}`
    window.open(url, '_blank')
  }
  
  // Toast notification
  const toast = useToast()
  
  // Watch for store selection
  watch(selectedStore, (newStore) => {
    if (newStore) {
      toast.add({
        title: 'Cửa hàng đã chọn',
        description: newStore.name,
        icon: 'i-heroicons-map-pin'
      })
    }
  })
  </script>
  
  <style scoped>
  .map-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .hover\:-translate-y-1:hover {
    transform: translateY(-4px);
  }
  </style>