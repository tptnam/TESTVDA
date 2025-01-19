import { Category } from '../../types/Category'
import { NewsType } from '../../types/News'
import { Product } from '../../types/ProductSale'
import Banner from './Banner/Banner'
import BestSeller from './BestSeller/BestSeller'
import ContactBanner from './ContactBanner/ContactBanner'
import CustomerReview from './CustomerReview/CustomerReview'
import FlashSale from './FlashSale/FlashSale'
import News from './News/News'
import ProductCategory from './ProductCategory/ProductCategory'
import Showroom from './ShowRoom/Showroom'

export default function Body() {
  const flashSaleProducts: Product[] = [
    {
      id: 1,
      name: 'Ghế massage ABCSport A35',
      originalPrice: 16900000,
      salePrice: 12900000,
      image: './src/assets/product1.png'
    },
    {
      id: 2,
      name: 'Ghế massage ABCSport A24 NEW',
      originalPrice: 20000000,
      salePrice: 14900000,
      image: './src/assets/product2.png'
    },
    {
      id: 3,
      name: 'Ghế massage ABCSport Premium A32',
      originalPrice: 150000000,
      salePrice: 98000000,
      image: './src/assets/product3.png'
    },
    {
      id: 4,
      name: 'Ghế massage ABCSport A24',
      originalPrice: 16900000,
      salePrice: 12900000,
      image: './src/assets/product4.png'
    },
    {
      id: 5,
      name: 'Ghế massage ABCSport A24',
      originalPrice: 20000000,
      salePrice: 14900000,
      image: './src/assets/banner1.png'
    },
    {
      id: 6,
      name: 'Ghế massage ABCSport A24',
      originalPrice: 20000000,
      salePrice: 14900000,
      image: './src/assets/product4.png'
    }
  ]

  const categories: Category[] = [
    {
      id: 1,
      name: 'Ghế Massage',
      productCount: 10,
      image: './src/assets/product1.png'
    },
    {
      id: 2,
      name: 'Máy Chạy Bộ',
      productCount: 15,
      image: './src/assets/product2.png'
    },
    {
      id: 3,
      name: 'Xe Đạp',
      productCount: 15,
      image: './src/assets/product3.png'
    },
    {
      id: 4,
      name: 'Ghế Massage',
      productCount: 10,
      image: './src/assets/product4.png'
    },
    {
      id: 5,
      name: 'Máy Chạy Bộ',
      productCount: 15,
      image: './src/assets/product1.png'
    },
    {
      id: 6,
      name: 'Xe Đạp',
      productCount: 15,
      image: './src/assets/product3.png'
    },
    {
      id: 7,
      name: 'Ghế Massage',
      productCount: 10,
      image: './src/assets/product2.png'
    }
  ]

  const sampleReviews = [
    {
      title: 'Khách hàng nói gì về ABCSport',
      context:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus."',
      customerName: 'Nikky Kimso',
      role: 'Customer'
    },
    {
      title: 'Khách hàng nói gì về ABCSport',
      context:
        'ABC ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus."',
      customerName: 'John Doe',
      role: 'Customer'
    },
    {
      title: 'Khách hàng nói gì về ABCSport',
      context:
        'CDF ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus."',
      customerName: 'Jane Smith',
      role: 'Customer'
    }
  ]
  const sampleShowrooms = [
    {
      id: 1,
      name: 'ABCSport Đống Đa',
      region: 'Hà Nội',
      province: 'Hà Nội',
      address: '94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội',
      phone: '(024) 6259 1760',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 2,
      name: 'ABCSport Hà Đông',
      region: 'Hà Nội',
      province: 'Hà Nội',
      address: '96 Lê Trọng Tấn, P. La Khê, Q. Hà Đông, Hà Nội',
      phone: '(024) 6296 9394',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 3,
      name: 'ABCSport Long Biên',
      region: 'Hà Nội',
      province: 'Hà Nội',
      address: '575-577 Nguyễn Văn Cừ, Tổ 16, Phường Gia Thụy, Quận Long Biên, Hà Nội',
      phone: '(024) 6672 2738',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 4,
      name: 'ABCSport Quận 1',
      region: 'Hồ Chí Minh',
      province: 'Hồ Chí Minh',
      address: '123 Lê Lợi, Phường Bến Nghé, Quận 1, Hồ Chí Minh',
      phone: '(028) 3930 1234',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 5,
      name: 'ABCSport Tân Bình',
      region: 'Hồ Chí Minh',
      province: 'Hồ Chí Minh',
      address: '456 Hoàng Văn Thụ, Phường 4, Quận Tân Bình, Hồ Chí Minh',
      phone: '(028) 3846 5678',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 6,
      name: 'ABCSport Hải Phòng',
      region: 'Miền Bắc',
      province: 'Hải Phòng',
      address: '789 Lạch Tray, Phường Lạch Tray, Quận Ngô Quyền, Hải Phòng',
      phone: '(0225) 123 4567',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 7,
      name: 'ABCSport Đà Nẵng',
      region: 'Miền Trung',
      province: 'Đà Nẵng',
      address: '101 Hùng Vương, Phường Hải Châu 1, Quận Hải Châu, Đà Nẵng',
      phone: '(0236) 789 1234',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 8,
      name: 'ABCSport Nha Trang',
      region: 'Miền Trung',
      province: 'Khánh Hòa',
      address: '234 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa',
      phone: '(0258) 456 7890',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    },
    {
      id: 9,
      name: 'ABCSport Cần Thơ',
      region: 'Miền Nam',
      province: 'Cần Thơ',
      address: '567 Nguyễn Văn Cừ, Phường An Hòa, Quận Ninh Kiều, Cần Thơ',
      phone: '(0292) 123 9876',
      mapLink: 'https://maps.app.goo.gl/jJu1EKzHjSY4YuweA'
    }
  ]

  const newsData: NewsType[] = [
    {
      id: 1,
      title: 'Sample News Title 1',
      content: 'This is a brief description of the first news article.',
      image: './src/assets/news1.png',
      date: '2025-01-18'
    },
    {
      id: 2,
      title: 'Sample News Title 2',
      content: 'This is a brief description of the second news article.',
      image: './src/assets/news2.png',
      date: '2025-01-17'
    },
    {
      id: 3,
      title: 'Sample News Title 3',
      content: 'This is a brief description of the third news article.',
      image: './src/assets/news3.png',
      date: '2025-01-16'
    },
    {
      id: 4,
      title: 'Sample News Title 4',
      content: 'This is a brief description of the fourth news article.',
      image: './src/assets/news4.png',
      date: '2025-01-15'
    },
    {
      id: 5,
      title: 'Sample News Title 5',
      content: 'This is a brief description of the fifth news article.',
      image: './src/assets/news2.png',
      date: '2025-01-14'
    }
  ]

  return (
    <>
      <Banner />
      <FlashSale products={flashSaleProducts} />
      <ProductCategory categories={categories} />
      <BestSeller products={flashSaleProducts} />
      <CustomerReview reviews={sampleReviews} />
      <Showroom Showrooms={sampleShowrooms} />
      <News products={newsData} />
      <ContactBanner />
    </>
  )
}
