import { Category } from '../../../types/Category'
import Slider from 'react-slick'
import CategoryItem from './components/CategoryItem'
import { ArrowRight } from 'react-bootstrap-icons'

interface ProductCategoriesProps {
  categories: Category[]
}

const ProductCategory: React.FC<ProductCategoriesProps> = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div id='san-pham' className='tw-bg-white tw-py-20'>
      <div className='tw-mb-8 tw-justify-center tw-items-center tw-flex'>
        <img src='/medal.png' alt='Medal icon' className='tw-w-16 tw-h-16 tw-mr-3' />
        <h2 className='tw-text-4xl tw-font-bold tw-text-orange-500'>Danh Mục Sản Phẩm</h2>
      </div>
      <div className='tw-relative tw-px-8'>
        <Slider {...settings}>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </Slider>
      </div>
      <div className='tw-flex tw-justify-center tw-mt-8'>
        <button className='tw-flex tw-items-center tw-px-6 tw-py-2 tw-font-semibold tw-text-white tw-bg-bgApp tw-rounded-full hover:tw-bg-orange-600'>
          XEM TẤT CẢ
          <ArrowRight size={16} className='tw-ml-2' />
        </button>
      </div>
    </div>
  )
}

export default ProductCategory
