<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="flex items-center mb-8">
          <h3 class="text-3xl font-bold text-gray-800 uppercase tracking-wide">
            TIN TỨC BITIS
          </h3>
        </div>
  
        <!-- News Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- News Items -->
          <div 
            v-for="(item, index) in newsItems" 
            :key="index"
            class="group"
          >
            <UCard class="bg-gray-100 shadow-none! ring-transparent! h-full hover:shadow-lg transition-shadow duration-300">
              <template #header>
                <NuxtLink :to="item.link" class="block">
                  <div class="aspect-square overflow-hidden">
                    <img 
                      :src="item.image" 
                      :alt="item.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </NuxtLink>
              </template>
  
              <div class="p-4 space-y-4">
                <h4 class="font-semibold text-lg text-black leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">
                  <NuxtLink :to="item.link" class="block">
                    {{ item.title }}
                  </NuxtLink>
                </h4>
                
                <p class="text-gray-600 text-sm line-clamp-3">
                  {{ item.description }}
                </p>
                
                <div class="flex items-center justify-between pt-2">
                  <span class="text-sm text-gray-500">
                    {{ item.date }}
                  </span>
                  <NuxtLink 
                    :to="item.link"
                    class="text-gray-500 hover:text-red-600 text-sm font-medium transition-colors"
                  >
                    Xem thêm
                  </NuxtLink>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // News items data
  const newsItems = ref([
    {
      id: 1,
      title: 'ME GREEN BITI\'S - LỚP MẦM NON HẠNH PHÚC ĐẦU TIÊN TẠI BITI\'S CHÍNH THỨC KHAI TRƯƠNG',
      description: 'Sáng 23.03.2025, Biti\'s chính thức hợp tác cùng ME Green khai trương Lớp Mầm Non Hạnh Phúc mang...',
      date: '01/07/2025',
      image: 'https://file.hstatic.net/1000230642/article/hinh_1_-_cac_be_tham_gia_hoat_dong_tai_me_green_biti_s_bc5f67153a554efcb96a8bf475ec5fe1_large.jpg',
      link: '/blogs/news/me-green-biti-s-lop-mam-non-hanh-phuc-dau-tien-tai-biti-s-chinh-thuc'
    },
    {
      id: 2,
      title: 'BITI\'S TẶNG VOUCHER GIẢM 50K NHÂN DỊP KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM',
      description: 'BITI\'S TẶNG VOUCHER GIẢM 50K NHÂN DỊP KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM Tưng bừng Tháng Đại...',
      date: '24/04/2025',
      image: 'https://file.hstatic.net/1000230642/article/1920x750px_copy_9f2c5b9be3c44c939d50526c90194ee8_large.jpg',
      link: '/blogs/news/bitis-tang-voucher-giam-50k-ky-niem-50-nam-giai-phong-mien-nam'
    },
    {
      id: 3,
      title: 'SENSING JOURNEY - HÀNH TRÌNH CẢM NHẬN DÒNG CHẢY CHUYỂN HÓA CỦA NHÀ MÁY SÀI GÒN',
      description: 'Khám phá hành trình chuyển đổi và phát triển của nhà máy Sài Gòn trong chương trình Sensing Journey...',
      date: '23/04/2025',
      image: 'https://file.hstatic.net/1000230642/article/img_6396_94a24fdba52d411b80e08b29dd657903_large.jpg',
      link: '/blogs/news/sensing-journey-hanh-trinh-cam-nhan-dong-chay-chuyen-hoa-cua-nha-may'
    },
    {
      id: 4,
      title: 'Hội thảo đầu tiên tại Việt Nam có sự tham gia của các diễn giả đến từ Lean Global Network',
      description: 'Hội thảo đầu tiên tại Việt Nam có sự tham gia của các diễn giả đến từ Lean Global Network...',
      date: '03/04/2025',
      image: 'https://file.hstatic.net/1000230642/article/banner_chinh_thuc_c31b88138b7842f8a60847ccdab0de71_large.jpg',
      link: '/blogs/news/hoi-thao-dau-tien-tai-viet-nam-co-su-tham-gia-cua-cac-dien-gia-den-tu'
    },
   
  ])
  </script>
  
  <style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>