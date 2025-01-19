import { Product } from '../../types/ProductSale'
import Banner from './Banner/Banner'
import FlashSale from './FlashSale/FlashSale'

export default function Body() {
  const flashSaleProducts: Product[] = [
    {
      id: 1,
      name: 'Ghế massage ABCSport A35',
      originalPrice: 16900000,
      salePrice: 12900000,
      discountPercentage: 24,
      image: './src/assets/banner1.png'
    },
    {
      id: 2,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      discountPercentage: 26,
      image: './src/assets/banner1.png'
    },
    {
      id: 3,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      discountPercentage: 26,
      image: './src/assets/banner1.png'
    },
    {
      id: 4,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      discountPercentage: 26,
      image: './src/assets/banner1.png'
    },
    {
      id: 5,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      discountPercentage: 26,
      image: './src/assets/banner1.png'
    },
    {
      id: 6,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      discountPercentage: 26,
      image: './src/assets/banner1.png'
    }
    // ... more products
  ]
  return (
    <>
      <Banner />
      <FlashSale products={flashSaleProducts} />
    </>
  )
}
