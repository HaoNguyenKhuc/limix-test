<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<style>
.new-header {
  background: #ff3D00;
  height: 70px;
}

.hunter-text {
  animation: textGlow 3s ease-in-out infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: skewX(-25deg);
  font-style: italic;
  font-weight: 900;
  letter-spacing: 2px;
}

@keyframes textGlow {

  0%,
  100% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  50% {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
}
</style>

<template>
  <header class="bg-white shadow-sm">
    <div class="bg-black">
      <div class="max-w-[1600px] mx-auto px-10 text-white">
        <div class="topbar  text-white text-sm">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-2">
              <div class="flex flex-wrap items-center space-x-6">
                <div class="hotline-left flex items-center space-x-2">
                  <span>Hotline:</span>
                  <span>
                    <a href="tel:0966158666" class="text-blue-300 hover:text-blue-200 transition-colors">
                      0966158666
                    </a>
                  </span>
                  <span class="text-gray-300">(8h – 21h30)</span>
                </div>
                <div class="aff-left">
                  <a href="/pages/lien-he-hop-tac" class="text-gray-300 hover:text-white transition-colors"
                    data-vn="Liên hệ hợp tác">
                    <span>Liên hệ hợp tác</span>
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <ul class="flex items-center space-x-6">
                  <li>
                    <a href="/developing" class="text-gray-300 hover:text-white transition-colors"
                      data-vn="Tìm cửa hàng">
                      <span>Tìm cửa hàng</span>
                    </a>
                  </li>
                  <li>
                    <a href="/developing" class="text-gray-300 hover:text-white transition-colors"
                      data-vn="Kiểm tra đơn hàng">
                      <span>Kiểm tra đơn hàng</span>
                    </a>
                  </li>

                  <li class="bitis-b2b">
                    <a href="https://b2b.bitis.com.vn/?utm_source=trade&utm_medium=b2b_header" aria-label="B2B action"
                      target="_blank" class="hover:opacity-80 transition-opacity">
                      <img class="w-30 h-7"
                        src="https://file.hstatic.net/1000230642/file/b2b_161ba831bf784bd3b60d4787af503cb2.jpg"
                        alt="B2B action" width="120" height="28">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="logo-container">
          <UIcon name="i-custom-bitis-hunter" class="h-20 w-20" />
        </div>

        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#" class="nav-item text-black font-medium hover:text-yellow-200">
            VỀ BITI'S
          </a>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              NHÃN HIỆU
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Biti's Hunter</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Biti's Classic</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Biti's Sport</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              NAM
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày thể thao</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày casual</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày công sở</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              NỮ
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày thể thao</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày cao gót</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày búp bê</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              TEEN NAM
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày học sinh</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày thể thao</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              TEEN NỮ
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày học sinh</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày thể thao</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              BÉ TRAI
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày tập đi</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày thể thao</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              BÉ GÁI
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày tập đi</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Giày công chúa</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              PHỤ KIỆN
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tất/Vớ</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dây giày</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Túi xách</a>
            </div>
          </div>

          <div class="relative group">
            <a href="#" class="nav-item text-black font-medium hover:text-yellow-200 flex items-center">
              CHIA SẺ
              <UIcon name="i-lucide-chevron-down" class="size-4 ml-1" />
            </a>
            <div
              class="bg-white z-2 dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tin tức</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Khuyến mãi</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hướng dẫn</a>
            </div>
          </div>
        </nav>

        <div class="flex items-center space-x-4">
          <button class="action-button">
            <i class="fas fa-search text-lg"></i>
          </button>

          <button class="action-button">
            <i class="fas fa-user text-lg"></i>
          </button>

          <button class="action-button">
            <i class="fas fa-heart text-lg"></i>
            <span class="badge">0</span>
          </button>

          <button class="action-button">
            <i class="fas fa-shopping-cart text-lg"></i>
            <span class="badge">0</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button class="action-button lg:hidden">
            <i class="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="new-header">
      <div class="container mx-auto px-4 h-full">
        <a href="/pages/hunter"
          class="hunter-banner flex items-center justify-center h-full w-full text-decoration-none">
          <div class="lightning-bolt">
            <svg width="80" height="26" viewBox="0 0 127 41" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-8 md:w-20 md:h-10">
              <path
                d="M35.0821 0H61.3929L50.3446 10.6078C56.6096 9.05901 63.2146 8.10439 70.2766 7.5087L78.2494 0H105.814L96.7028 7.62784C109.573 8.34266 121.078 10.0121 127 11.9183C115.041 12.3949 101.031 12.7523 84.4005 15.2557C77.6801 16.2088 71.5305 17.1619 65.0378 18.593C71.5305 17.8782 79.1617 17.9974 84.4005 18.9505L58.659 41H38.4992L59.1158 20.1434C55.1294 21.2156 50.8015 22.5276 46.1305 24.3147C30.6403 30.0363 18.9088 41 18.9088 41H0L35.0821 0Z"
                fill="#111111" />
            </svg>
          </div>

          <span class="hunter-text text-black font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide">
            Biti's Hunter thế hệ mới
          </span>
        </a>
      </div>
    </div>
  </header>
</template>