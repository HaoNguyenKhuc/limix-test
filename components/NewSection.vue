<template>
    <section class="main-banner-home section-home">
      <div class="">
        <div class="section-head">
          <h4>CHÚNG TÔI CÓ GÌ MỚI</h4>
        </div>
        <div class="bg-three-banner-home">
          <div class="row three-banner">
            <div 
              v-for="banner in banners" 
              :key="banner.id"
              class="col-12 col-sm-4"
            >
              <a 
                :href="banner.link" 
                class="banner-effect"
                :aria-label="banner.ariaLabel"
              >
                <img 
                  :src="banner.image"
                  :alt="banner.alt"
                  class="lazyload dt-width-100"
                  :width="banner.width"
                  :height="banner.height"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="banner-home-bottom section-home text-center">
      <div>
        <a 
          :href="bottomBanner.link" 
          class="banner-effect"
          :aria-label="bottomBanner.ariaLabel"
        >
          <picture>
            <source 
              :srcset="bottomBanner.mobileImage" 
              media="(max-width: 767px)"
            >
            <img 
              :src="bottomBanner.desktopImage"
              :alt="bottomBanner.alt"
              class="dt-width-100 lazyload"
              :width="bottomBanner.width"
              :height="bottomBanner.height"
            />
          </picture>
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BannerSection',
    data() {
      return {
        banners: [
          {
            id: 1,
            link: 'https://bitis.com.vn/collections/giay-the-thao-bitis-hunter-tennis',
            image: 'https://file.hstatic.net/1000230642/file/banner_giaytennis.jpg',
            alt: 'Giày Tennis',
            ariaLabel: 'Tennis Shoes Banner',
            width: 403,
            height: 217
          },
          {
            id: 2,
            link: 'https://bitis.com.vn/collections/giay-tay-nam',
            image: 'https://file.hstatic.net/1000230642/file/banner_giaytay.jpg',
            alt: 'Giày Tây Nam',
            ariaLabel: 'Men\'s Dress Shoes Banner',
            width: 403,
            height: 217
          },
          {
            id: 3,
            link: 'https://bitis.com.vn/collections/sandal-tre-em-bitis-gau-chu-tam',
            image: 'https://file.hstatic.net/1000230642/file/banner_gauchuatam_510x275.jpg',
            alt: 'Sandal Gấu Chú Tâm',
            ariaLabel: 'Kids Sandals Banner',
            width: 403,
            height: 217
          }
        ],
        bottomBanner: {
          link: 'https://bitis.com.vn/collections/dep-tre-em-disney',
          desktopImage: 'https://file.hstatic.net/1000230642/file/banner_stitch_.jpg',
          mobileImage: 'https://file.hstatic.net/1000230642/file/banner_stitch__grande.jpg',
          alt: 'Disney Kids Sandals - Stitch Collection',
          ariaLabel: 'Disney Kids Sandals Banner',
          width: 1950,
          height: 750
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .main-banner-home {
    padding: 60px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .section-head {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .section-head h4 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    letter-spacing: 1px;
  }
  
  .bg-three-banner-home {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
  
  .col-12 {
    width: 100%;
    padding: 15px;
  }
  
  .banner-effect {
    display: block;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .banner-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .banner-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .banner-effect:hover::before {
    opacity: 1;
  }
  
  .banner-effect img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
  
  .banner-effect:hover img {
    transform: scale(1.05);
  }
  
  .dt-width-100 {
    width: 100%;
  }
  
  @media (min-width: 576px) {
    .col-sm-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
  
  @media (max-width: 767px) {
    .main-banner-home {
      padding: 40px 0;
    }
    
    .section-head h4 {
      font-size: 1.5rem;
    }
    
    .bg-three-banner-home {
      padding: 20px;
    }
    
    .col-12 {
      padding: 10px;
    }
  }
  
  @media (max-width: 575px) {
    .section-head h4 {
      font-size: 1.25rem;
    }
    
    .bg-three-banner-home {
      padding: 15px;
    }
  }
  
  .banner-home-bottom .banner-effect {
    display: block;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
  }
  
  .banner-home-bottom .banner-effect:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  .banner-home-bottom .banner-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  .banner-home-bottom .banner-effect:hover::before {
    opacity: 1;
  }
  
  .banner-home-bottom img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
  }
  
  .banner-home-bottom .banner-effect:hover img {
    transform: scale(1.05);
  }
  
  .text-center {
    text-align: center;
  }
  
  </style>