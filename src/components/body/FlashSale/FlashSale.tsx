import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Product } from '../../../types/ProductSale'
import ProductSale from './components/ProductSale'

interface FlashSaleProps {
  products: Product[]
}

const FlashSale: React.FC<FlashSaleProps> = ({ products }) => {
  return (
    <div className='tw-relative tw-py-12 tw-bg-[url(/src/assets/bgFlashSale.png)] tw-bg-cover tw-bg-center tw-bg-no-repeat'>
      <div className='tw-container tw-mx-auto tw-px-4 tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-20'>
        <div className='tw-relative tw-w-full tw-mb-8'>
          {/* Text content - centered */}
          <div className='tw-absolute tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-text-center tw-z-10 tw-w-1/2'>
            <h2 className='tw-text-4xl tw-font-bold tw-text-orange-500'>Flash Sale Mùa Vu lan</h2>
            <p className='tw-text-gray-600 tw-mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.
            </p>
          </div>

          {/* Mascot - positioned to the right */}
          <div className='tw-absolute tw-right-[13%] tw-top-2.5 -tw-translate-y-1/2'>
            <img src='./src/assets/mascot2.png' alt='Robot mascot' className='tw-w-20 tw-h-20' />
          </div>
        </div>

        <div className='tw-relative tw-w-full tw-px-8 tw-mt-24'>
          <Carousel controls={true} indicators={false} className='carousel-custom-flash-sale' interval={null}>
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
              <Carousel.Item key={index}>
                <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6'>
                  {products.slice(index * 4, (index + 1) * 4).map((product) => (
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

export default FlashSale
