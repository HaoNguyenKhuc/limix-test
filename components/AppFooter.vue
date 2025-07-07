<template>
  <div class="bg-white">
    <!-- Newsletter Section -->
    <section class="bg-blue-600 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="text-white text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <UIcon name="i-heroicons-paper-airplane" class="w-8 h-8 text-white" />
              <h3 class="text-xl font-bold">Đăng ký nhận bản tin</h3>
            </div>
            <p class="text-blue-100 text-sm">
              Để nhận các thông tin mới từ Biti's cũng như các chương trình khuyến mãi hấp dẫn
            </p>
          </div>

          <div class="w-full lg:w-auto lg:min-w-96">
            <UForm @submit="onSubmit" class="space-y-4">
              <div class="flex items-center">
                <UInput v-model="email" type="email" placeholder="Vui lòng nhập email của bạn..."
                  class="flex-1 bg-white! newsletter-input h-12 pl-2" size="lg" />
                <div class="bg-white h-12 flex items-center pr-2">
                  <UButton type="submit" size="lg" variant="solid"
                    class="newsletter-btn text-white bg-gray-800 hover:bg-gray-700 h-10">
                    Đăng ký
                  </UButton>
                </div>
              </div>
            </UForm>
          </div>
        </div>
      </div>
    </section>

    <section v-if="isIntersecting" class="py-8">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div v-for="(image, index) in visibleGalleryImages" :key="index" class="aspect-square overflow-hidden">
          <NuxtImg :src="image.src" :alt="image.alt" width="240" height="240" loading="lazy" format="webp"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
        </div>
      </div>
      <div v-if="galleryImages.length > 8" class="text-center mt-4">
        <UButton v-if="!showAllGallery" @click="loadMoreGallery" variant="ghost" size="sm">
          Xem thêm hình ảnh
        </UButton>
      </div>
    </section>

    <footer class="bg-gray-50">
      <UContainer class="lg:hidden">
        <UButton variant="solid" color="blue" size="lg" block @click="isExpanded = !isExpanded"
          class="bg-blue-900 hover:bg-blue-800">
          <span>Thông tin thêm</span>
          <UIcon :name="isExpanded ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="ml-auto" />
        </UButton>
      </UContainer>

      <UContainer :class="[
        'py-10',
        { 'hidden lg:block': !isExpanded },
        { 'block': isExpanded }
      ]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FooterLinkColumn title="VỀ BITI'S" :links="aboutLinks" />
              <FooterLinkColumn title="THÔNG TIN" :links="infoLinks" />
              <div class="space-y-4">
                <h4 class="text-blue-900 font-bold text-base uppercase">TRỢ GIÚP</h4>
                <ul class="space-y-2">
                  <li v-for="link in helpLinks" :key="link.label">
                    <ULink :to="link.to" :target="link.target"
                      class="text-sm text-gray-600 hover:text-blue-900 block py-1">
                      {{ link.label }}
                    </ULink>
                  </li>
                </ul>

                <div class="mt-4">
                  <ULink to="https://b2b.bitis.com.vn/?utm_source=trade&utm_medium=b2b_footer" target="_blank"
                    class="block w-fit">
                    <NuxtImg src="https://file.hstatic.net/1000230642/file/b2b_161ba831bf784bd3b60d4787af503cb2.jpg"
                      alt="B2B action footer" width="140" height="33" loading="lazy" format="webp"
                      class="rounded-full hover:opacity-80 transition-opacity" />
                  </ULink>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-6">
            <h4 class="text-blue-900 font-bold text-base uppercase lg:hidden">Thông tin địa chỉ</h4>

            <div class="flex justify-start">
              <UIcon name="i-custom-bitis-hunter" class="h-20 w-40" />
            </div>

            <div class="space-y-4 text-sm text-gray-600">
              <div class="space-y-2">
                <p class="font-bold text-gray-800">CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</p>
                <p><span class="font-semibold">Địa chỉ:</span> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh</p>
                <p>
                  <span class="font-semibold">Điện thoại:</span>
                  <ULink href="tel:02838753443" class="text-blue-900 hover:text-blue-700 font-medium">
                    (028) 38 753 443
                  </ULink>
                </p>
              </div>

              <div>
                <p class="font-semibold mb-1">Email: Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại lý
                  (offline):</p>
                <ULink href="mailto:chamsockhachhang@bitis.com.vn"
                  class="text-blue-900 hover:text-blue-700 break-all font-medium">
                  chamsockhachhang@bitis.com.vn
                </ULink>
              </div>

              <div class="space-y-1">
                <p>
                  <span class="font-semibold">Hotline:</span>
                  <ULink href="tel:0966158666" class="text-blue-900 hover:text-blue-700 font-medium">
                    0966158666
                  </ULink>
                </p>
                <p><span class="font-semibold">Thời gian tư vấn:</span> 8h – 21h30 các ngày trong tuần (trừ ngày Lễ,
                  Tết)</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>

      <div class="bg-gray-200 py-6">
        <UContainer>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-4 space-y-4">
              <div class="flex flex-wrap gap-4 lg:gap-6">
                <ULink v-for="link in bottomLinks" :key="link.label" :to="link.to"
                  class="text-sm text-gray-600 hover:text-blue-900">
                  {{ link.label }}
                </ULink>
              </div>

              <div class="text-xs text-gray-600 space-x-1">
                <span>Copyright © 2025</span>
                <ULink href="https://bitis.com.vn" class="text-blue-900 hover:text-blue-700">
                  Biti's
                </ULink>
                <span>.</span>
                <ULink href="https://www.haravan.com" target="_blank" class="text-blue-900 hover:text-blue-700">
                  Powered by Haravan Enterprise
                </ULink>
              </div>
            </div>

            <div class="lg:col-span-3 flex justify-center lg:justify-center">
              <ULink href="http://online.gov.vn/Home/WebDetails/20306" target="_blank" class="block">
                <NuxtImg
                  src="https://file.hstatic.net/1000230642/file/bocongthuong_f866573d7d9d4e7fb16d09817459d3cb_medium.png"
                  alt="Bộ Công Thương" width="120" height="45" loading="lazy" format="webp" class="w-auto h-11" />
              </ULink>
            </div>

            <div class="lg:col-span-5 text-xs text-gray-600 lg:text-right">
              Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992,
              được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM
            </div>
          </div>
        </UContainer>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const email = ref('')
const isExpanded = ref(false)
const showAllGallery = ref(false)
const galleryImages = ref([
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_1_fcccf4c902ec4c5dbffb267d55480361.jpg',
    alt: 'Gallery 1'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_2_eb3aab14e3c4460598b186581e14319c.jpg',
    alt: 'Gallery 2'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_3_4ea1528b7b6c4b768edca82c5177b63f.jpg',
    alt: 'Gallery 3'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_4_eff4b4e0d3e5496790737063aefc92d5.jpg',
    alt: 'Gallery 4'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_5_796788d0cc3c4cb8becdd4095b9657ec.jpg',
    alt: 'Gallery 5'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_6_cbc7d744bbad464393bbf3b378eb17e0.jpg',
    alt: 'Gallery 6'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_7_c8ce843f94c74e0e8e8aa51372ddf97b.jpg',
    alt: 'Gallery 7'
  },
  {
    src: 'https://file.hstatic.net/200000522597/file/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg',
    alt: 'Gallery 8'
  }
])

// Intersection observer for lazy loading
const target = ref(null)
const { isIntersecting } = useIntersectionObserver(target, { threshold: 0.1 })

// Only show first 8 gallery images initially
const visibleGalleryImages = computed(() => {
  return showAllGallery.value ? galleryImages.value : galleryImages.value.slice(0, 8)
})

const loadMoreGallery = () => {
  showAllGallery.value = true
}

const aboutLinks = [
  {
    label: 'Câu chuyện Biti\'s',
    to: '/pages/corporate',
    target: '_blank'
  },
  {
    label: 'Hoạt Động',
    to: '/pages/corporate',
    target: '_blank'
  },
  {
    label: 'Liên hệ',
    to: '/pages/lien-he'
  }]


const infoLinks = [
  { label: 'Trạng thái đơn hàng', to: '/pages/tra-cuu-tinh-trang-don-hang' },
  { label: 'Hình thức giao hàng', to: '/pages/q-a' },
  { label: 'Hình thức thanh toán', to: '/pages/hinh-thuc-thanh-toan' },
  { label: 'Hướng dẫn cách chọn Size', to: '/pages/huong-dan-cach-chon-size' },
  { label: 'Chính sách đổi Size', to: '/pages/chinh-sach-doi-size' },
  { label: 'Chính sách đổi trả', to: '/pages/chinh-sach-doi-tra' },
  { label: 'Chính sách bảo hành', to: '/pages/chinh-sach-bao-hanh' },
  { label: 'Chính sách khách hàng thân thiết', to: '/pages/bitis-loyalty' },
  { label: 'Chính sách bảo vệ thông tin khách hàng', to: '/pages/chinh-sach-bao-ve-thong-tin-ca-nhan' }
]


const helpLinks = [
  { label: 'Tuyển Dụng', to: 'https://tuyendung.bitis.com.vn/', target: '_blank' },
  { label: 'Hệ thống cửa hàng', to: '/pages/he-thong-cua-hang' },
  { label: 'Liên hệ hợp tác', to: '/pages/lien-he-hop-tac' },
  { label: 'Q&A', to: '/pages/q-a' }
]

const bottomLinks = [
  { label: 'Điều khoản', to: '/' },
  { label: 'Chính sách bảo mật', to: '/' },
  { label: 'Hướng dẫn sử dụng', to: '/' }
]

const onSubmit = (event) => {
  console.log('Newsletter subscription:', email.value)
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.newsletter-btn {
  background: var(--shop-color-main);
}

.newsletter-input :deep(input) {
  background: white;
  box-shadow: none;
  color: black;
}
</style>