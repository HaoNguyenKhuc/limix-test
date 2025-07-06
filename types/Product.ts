export type Product = {
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
    isFeatured?: boolean
    isPopular?: boolean
    soldCount?: number
  }