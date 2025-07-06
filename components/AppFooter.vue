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
              <div class="flex gap-2">
                <UInput
                  v-model="email"
                  type="email"
                  placeholder="Vui lòng nhập email của bạn..."
                  class="flex-1"
                  size="lg"
                />
                <UButton type="submit" size="lg" color="gray" variant="solid" class="bg-gray-800 hover:bg-gray-700">
                  Đăng ký
                </UButton>
              </div>
            </UForm>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div v-for="(image, index) in galleryImages" :key="index" class="aspect-square overflow-hidden rounded-lg">
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- VỀ BITI'S -->
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-lg">VỀ BITI'S</h4>
            <ul class="space-y-2">
              <li><ULink href="/corporate" class="text-gray-600 hover:text-blue-600 text-sm">Câu chuyện Biti's</ULink></li>
              <li><ULink href="/corporate" class="text-gray-600 hover:text-blue-600 text-sm">Hoạt Động</ULink></li>
              <li><ULink href="/lien-he" class="text-gray-600 hover:text-blue-600 text-sm">Liên hệ</ULink></li>
            </ul>
          </div>

          <!-- THÔNG TIN -->
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-lg">THÔNG TIN</h4>
            <ul class="space-y-2">
              <li><ULink href="/tra-cuu-don-hang" class="text-gray-600 hover:text-blue-600 text-sm">Trạng thái đơn hàng</ULink></li>
              <li><ULink href="/hinh-thuc-giao-hang" class="text-gray-600 hover:text-blue-600 text-sm">Hình thức giao hàng</ULink></li>
              <li><ULink href="/hinh-thuc-thanh-toan" class="text-gray-600 hover:text-blue-600 text-sm">Hình thức thanh toán</ULink></li>
              <li><ULink href="/huong-dan-chon-size" class="text-gray-600 hover:text-blue-600 text-sm">Hướng dẫn cách chọn Size</ULink></li>
              <li><ULink href="/chinh-sach-doi-size" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách đổi Size</ULink></li>
              <li><ULink href="/chinh-sach-doi-tra" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách đổi trả</ULink></li>
              <li><ULink href="/chinh-sach-bao-hanh" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách bảo hành</ULink></li>
              <li><ULink href="/bitis-loyalty" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách khách hàng thân thiết</ULink></li>
              <li><ULink href="/chinh-sach-bao-ve" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách bảo vệ thông tin khách hàng</ULink></li>
            </ul>
          </div>

          <!-- TRỢ GIÚP -->
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-lg">TRỢ GIÚP</h4>
            <ul class="space-y-2">
              <li><ULink href="https://tuyendung.bitis.com.vn/" class="text-gray-600 hover:text-blue-600 text-sm">Tuyển Dụng</ULink></li>
              <li><ULink href="/he-thong-cua-hang" class="text-gray-600 hover:text-blue-600 text-sm">Hệ thống cửa hàng</ULink></li>
              <li><ULink href="/lien-he-hop-tac" class="text-gray-600 hover:text-blue-600 text-sm">Liên hệ hợp tác</ULink></li>
              <li><ULink href="/q-a" class="text-gray-600 hover:text-blue-600 text-sm">Q&A</ULink></li>
              <li class="mt-4">
                <ULink href="https://b2b.bitis.com.vn/" target="_blank" class="inline-block">
                  <UBadge color="blue" variant="solid" class="px-4 py-2 rounded-full">
                    BÁN HÀNG B2B
                  </UBadge>
                </ULink>
              </li>
            </ul>
          </div>

          <!-- Company Information -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <div class="text-sm text-gray-600">Nâng niu bàn chân Việt</div>
              </div>
            </div>
            
            <div class="space-y-2">
              <h5 class="font-bold text-gray-800">CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</h5>
              <div class="text-sm text-gray-600 space-y-1">
                <p><strong>Địa chỉ:</strong> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh</p>
                <p><strong>Điện thoại:</strong> <ULink href="tel:02838753443" class="text-blue-600">(028) 38 753 443</ULink></p>
                <p><strong>Email:</strong> <ULink href="mailto:chamsockhachhang@bitis.com.vn" class="text-blue-600">chamsockhachhang@bitis.com.vn</ULink></p>
                <p><strong>Hotline:</strong> <ULink href="tel:0966158666" class="text-blue-600">0966158666</ULink></p>
                <p><strong>Thời gian tư vấn:</strong> 8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Section -->
    <div class="bg-gray-100 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div class="text-center lg:text-left">
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-2">
              <ULink href="/" class="text-gray-600 hover:text-blue-600 text-sm">Điều khoản</ULink>
              <ULink href="/" class="text-gray-600 hover:text-blue-600 text-sm">Chính sách bảo mật</ULink>
              <ULink href="/" class="text-gray-600 hover:text-blue-600 text-sm">Hướng dẫn sử dụng</ULink>
            </div>
            <p class="text-gray-600 text-sm">
              Copyright © 2025 
              <ULink href="https://bitis.com.vn" class="text-blue-600">Biti's</ULink>. 
              <ULink href="https://www.haravan.com" target="_blank" class="text-blue-600">Powered by Haravan Enterprise</ULink>
            </p>
          </div>
          
          <div class="flex items-center gap-4">
            <ULink href="http://online.gov.vn/Home/WebDetails/20306" target="_blank">
              <UBadge color="red" variant="solid" class="px-3 py-1">
                ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
              </UBadge>
            </ULink>
          </div>
        </div>
        
        <div class="text-center lg:text-right mt-4">
          <p class="text-gray-600 text-sm">
            Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992,
            được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

// Gallery images data
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

// Newsletter subscription handler
const onSubmit = (event) => {
  console.log('Newsletter subscription:', email.value)
  // Add your newsletter subscription logic here
}
</script>

<style scoped>
/* Additional custom styles if needed */
.container {
  max-width: 1200px;
}
</style>