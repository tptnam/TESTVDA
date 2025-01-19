import React from 'react'
import { Carousel } from 'react-bootstrap'
import NewsItem from './components/NewsItem'
import { NewsType } from '../../../types/News'
import { ArrowRight } from 'react-bootstrap-icons'

interface FlashSaleProps {
  products: NewsType[]
}

const News: React.FC<FlashSaleProps> = ({ products }) => {
  return (
    <div id='tin-tuc' className='tw-relative tw-py-12 tw-bg-cover tw-bg-center tw-bg-no-repeat'>
      <div className='tw-container tw-mx-auto tw-px-4 tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-10'>
        <div className='tw-flex tw-flex-col tw-w-1/2 tw-relative tw-items-center tw-justify-center'>
          <h2 className='tw-text-4xl tw-font-bold tw-text-orange-500 tw-text-center'>Tin Tức & Sự Kiện</h2>
        </div>

        <div className='tw-relative tw-w-full tw-px-8 tw-mt-10'>
          <Carousel controls={true} indicators={false} className='carousel-custom-flash-sale' interval={null}>
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
              <Carousel.Item key={index}>
                <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6'>
                  {products.slice(index * 4, (index + 1) * 4).map((product) => (
                    <NewsItem key={product.id} news={product} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='tw-flex tw-justify-center tw-mt-8'>
          <button className='tw-flex tw-items-center tw-px-6 tw-py-2 tw-font-semibold tw-text-white tw-bg-bgApp tw-rounded-full hover:tw-bg-orange-600'>
            XEM TẤT CẢ
            <ArrowRight size={16} className='tw-ml-2' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default News
