import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Product } from '../../../types/ProductSale'
import ProductSale from '../FlashSale/components/ProductSale'

interface BestSellerProps {
  products: Product[]
}

const BestSeller: React.FC<BestSellerProps> = ({ products }) => {
  return (
    <div id='khuyen-mai' className='tw-relative tw-py-12 tw-bg-[#fdf5f3] tw-bg-cover tw-bg-center tw-bg-no-repeat'>
      <div className='tw-container tw-mx-auto tw-px-4 tw-flex tw-flex-col tw-items-center tw-justify-center '>
        <div className='tw-flex tw-flex-col tw-w-1/2'>
          <div className='tw-justify-center tw-items-center tw-flex tw-flex-col md:tw-flex-row tw-gap-1 md:tw-gap-2'>
            <img src='/best-seller1.png' alt='Medal icon' className='tw-w-24 tw-h-24' />
            <h2 className='tw-text-4xl tw-font-bold tw-text-orange-500 tw-text-center'>Ghế Massage ABCSport</h2>
          </div>
          <p className='tw-text-gray-600 tw-mt-2 tw-text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec
            tincidunt, quam.
          </p>
        </div>

        <div className='tw-relative tw-w-full tw-px-8 tw-mt-10'>
          <Carousel controls={true} indicators={false} className='carousel-custom-flash-sale' interval={null}>
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <Carousel.Item key={index}>
                <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6'>
                  {products.slice(index * 3, (index + 1) * 3).map((product) => (
                    <ProductSale key={product.id} product={product} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
