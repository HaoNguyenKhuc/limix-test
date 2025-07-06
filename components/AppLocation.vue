<template>
  <section class="py-12 bg-gray-50">
    <UContainer>
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          HỆ THỐNG CỬA HÀNG BITIS
        </h2>
      </div>
      
      <div class="grid lg:grid-cols-12 gap-2">
        <div class="lg:col-span-4">
          <div class="bg-white shadow-sm border border-gray-200 p-6 h-full">
            <div class=" max-h-150 overflow-y-auto">
              <div
                v-for="store in filteredStores"
                :key="store.id"
                @click="selectStore(store)"
                class="flex items-start gap-3 p-3 border border-gray-200 border-l-0 border-r-0 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200"
                :class="{ 'border-blue-500 bg-blue-50': selectedStore?.id === store.id }"
              >
                <div class="flex-shrink-0 mt-1">
                  <UIcon 
                    name="i-heroicons-map-pin" 
                    class="w-5 h-5 text-blue-600"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-medium text-gray-900 text-sm mb-1">
                    {{ store.name }}
                  </h4>
                  <p class="text-xs text-gray-600 leading-relaxed">
                    {{ store.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map Section -->
        <div class="lg:col-span-8">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="aspect-[4/3] relative">
              <img 
                :src="mapImage" 
                alt="Bản đồ cửa hàng Biti's"
                class="w-full h-full object-cover"
              />
              
              <!-- Store Details Overlay -->
              <div 
                v-if="selectedStore"
                class="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              >
                <div class="flex items-start gap-3">
                  <UIcon 
                    name="i-heroicons-map-pin" 
                    class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  />
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {{ selectedStore.name }}
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">
                      {{ selectedStore.address }}
                    </p>
                    <div class="flex gap-2">
                      <UButton
                        size="xs"
                        variant="outline"
                        @click="getDirections(selectedStore)"
                      >
                        Chỉ đường
                      </UButton>
                      <UButton
                        size="xs"
                        variant="outline"
                        @click="callStore(selectedStore)"
                        v-if="selectedStore.phone"
                      >
                        Gọi điện
                      </UButton>
                    </div>
                  </div>
                  <UButton
                    variant="ghost"
                    size="xs"
                    @click="selectedStore = null"
                    icon="i-heroicons-x-mark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive data
const selectedProvince = ref('all')
const selectedStore = ref(null)

// Map image
const mapImage = ref('https://file.hstatic.net/200000525917/file/map_biti_s_1024x1024_e7451fce602__1__dd3c94b0314e4ecbabbb0198510b97d3_1024x1024.jpg')

// Province options
const provinceOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Hồ Chí Minh', value: 'Hồ Chí Minh' },
  { label: 'Hà Nội', value: 'Hà Nội' },
  { label: 'Đà Nẵng', value: 'Đà Nẵng' },
  { label: 'An Giang', value: 'An Giang' },
  { label: 'Bà Rịa - Vũng Tàu', value: 'Vũng Tàu' },
  { label: 'Bắc Giang', value: 'Bắc Giang' },
  { label: 'Bạc Liêu', value: 'Bạc Liêu' },
  { label: 'Bắc Ninh', value: 'Bắc Ninh' },
  { label: 'Bến Tre', value: 'Bến Tre' },
  { label: 'Bình Định', value: 'Bình Định' },
  { label: 'Bình Dương', value: 'Bình Dương' },
  { label: 'Bình Phước', value: 'Bình Phước' },
  { label: 'Bình Thuận', value: 'Bình Thuận' },
  { label: 'Cà Mau', value: 'Cà Mau' },
  { label: 'Cần Thơ', value: 'Cần Thơ' },
  { label: 'Cao Bằng', value: 'Cao Bằng' },
  { label: 'Đắk Lắk', value: 'Đắk Lắk' },
  { label: 'Đắk Nông', value: 'Đắk Nông' },
  { label: 'Điện Biên', value: 'Điện Biên' },
  { label: 'Đồng Nai', value: 'Đồng Nai' },
  { label: 'Đồng Tháp', value: 'Đồng Tháp' },
  { label: 'Gia Lai', value: 'Gia Lai' },
  { label: 'Hà Giang', value: 'Hà Giang' },
  { label: 'Hà Nam', value: 'Hà Nam' },
  { label: 'Hà Tĩnh', value: 'Hà Tĩnh' },
  { label: 'Hải Dương', value: 'Hải Dương' },
  { label: 'Hải Phòng', value: 'Hải Phòng' },
  { label: 'Hậu Giang', value: 'Hậu Giang' },
  { label: 'Hòa Bình', value: 'Hòa Bình' },
  { label: 'Hưng Yên', value: 'Hưng Yên' },
  { label: 'Khánh Hòa', value: 'Khánh Hòa' },
  { label: 'Kiên Giang', value: 'Kiên Giang' },
  { label: 'Kon Tum', value: 'Kon Tum' },
  { label: 'Lai Châu', value: 'Lai Châu' },
  { label: 'Lâm Đồng', value: 'Lâm Đồng' },
  { label: 'Lạng Sơn', value: 'Lạng Sơn' },
  { label: 'Lào Cai', value: 'Lào Cai' },
  { label: 'Long An', value: 'Long An' },
  { label: 'Nam Định', value: 'Nam Định' },
  { label: 'Nghệ An', value: 'Nghệ An' },
  { label: 'Ninh Bình', value: 'Ninh Bình' },
  { label: 'Ninh Thuận', value: 'Ninh Thuận' },
  { label: 'Phú Thọ', value: 'Phú Thọ' },
  { label: 'Phú Yên', value: 'Phú Yên' },
  { label: 'Quảng Bình', value: 'Quảng Bình' },
  { label: 'Quảng Nam', value: 'Quảng Nam' },
  { label: 'Quảng Ngãi', value: 'Quảng Ngãi' },
  { label: 'Quảng Ninh', value: 'Quảng Ninh' },
  { label: 'Quảng Trị', value: 'Quảng Trị' },
  { label: 'Sóc Trăng', value: 'Sóc Trăng' },
  { label: 'Sơn La', value: 'Sơn La' },
  { label: 'Tây Ninh', value: 'Tây Ninh' },
  { label: 'Thái Bình', value: 'Thái Bình' },
  { label: 'Thái Nguyên', value: 'Thái Nguyên' },
  { label: 'Thanh Hóa', value: 'Thanh Hóa' },
  { label: 'Thừa Thiên Huế', value: 'Thừa Thiên Huế' },
  { label: 'Tiền Giang', value: 'Tiền Giang' },
  { label: 'Trà Vinh', value: 'Trà Vinh' },
  { label: 'Tuyên Quang', value: 'Tuyên Quang' },
  { label: 'Vĩnh Long', value: 'Vĩnh Long' },
  { label: 'Vĩnh Phúc', value: 'Vĩnh Phúc' }
]

// Sample store data (extracted from the HTML)
const stores = ref([
  {
    id: 1,
    name: 'CH Chợ Lớn - Quận 6 - HCM',
    address: '56 - 58 - 60 - 62 Tháp Mười, Phường 2, Quận 6, Thành phố Hồ Chí Minh',
    province: 'Hồ Chí Minh',
    phone: '028-xxx-xxxx'
  },
  {
    id: 2,
    name: 'CH 594 Thống Nhất - Gò Vấp - HCM',
    address: '594 Thống Nhất, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh',
    province: 'Hồ Chí Minh',
    phone: '028-xxx-xxxx'
  },
  {
    id: 3,
    name: 'CH 242 Huỳnh Tấn Phát - Nhà Bè - HCM',
    address: '1848 Huỳnh Tấn Phát, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
    province: 'Hồ Chí Minh',
    phone: '028-xxx-xxxx'
  },
  {
    id: 4,
    name: 'CH 25 Chùa Bộc - Đống Đa - HN',
    address: '25 Chùa Bộc, Phường Quang Trung, Quận Đống Đa, Thành phố Hà Nội',
    province: 'Hà Nội',
    phone: '024-xxx-xxxx'
  },
  {
    id: 5,
    name: 'CH 352 Cầu Giấy - Cầu Giấy - HN',
    address: '352 Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội',
    province: 'Hà Nội',
    phone: '024-xxx-xxxx'
  },
  {
    id: 6,
    name: 'CH 09 Hàm Nghi -Thanh Khê - Đà Nẵng',
    address: '09 Hàm Nghi, Phường Vĩnh Trung, Quận Thanh Khê, Thành phố Đà Nẵng',
    province: 'Đà Nẵng',
    phone: '0236-xxx-xxxx'
  },
  {
    id: 7,
    name: 'CH 420 - 422 Hùng Vương - Hải Châu - Đà Nẵng',
    address: '420-422 Hùng Vương, Phường Vĩnh Trung, Quận Thanh Khê, Thành phố Đà Nẵng',
    province: 'Đà Nẵng',
    phone: '0236-xxx-xxxx'
  },
  {
    id: 8,
    name: 'CH 844 Hà Hoàng Hổ - Long Xuyên - An Giang',
    address: '844 Hồ Hoàng Hổ, Phường Mỹ Hòa, Thành phố Long Xuyên, Tỉnh An Giang',
    province: 'An Giang',
    phone: '0296-xxx-xxxx'
  }
])

// Computed property for filtered stores
const filteredStores = computed(() => {
  if (selectedProvince.value === 'all') {
    return stores.value
  }
  return stores.value.filter(store => store.province === selectedProvince.value)
})

// Methods
const filterStores = () => {
  selectedStore.value = null
}

const selectStore = (store) => {
  selectedStore.value = store
}

const getDirections = (store) => {
  const encodedAddress = encodeURIComponent(store.address)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  window.open(mapsUrl, '_blank')
}

const callStore = (store) => {
  if (store.phone) {
    window.location.href = `tel:${store.phone}`
  }
}

// Lifecycle
onMounted(() => {
  // You can add any initialization logic here
  console.log('Store locator component mounted')
})
</script>

<style scoped>
/* Custom scrollbar for store list */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>