import React from 'react'
import { Product } from '../../../../types/ProductSale'

interface ProductCardProps {
  product: Product
}

const ProductSale: React.FC<ProductCardProps> = ({ product }) => {
  const { name, originalPrice, salePrice, image } = product

  const discountPercentage = Math.round(((originalPrice - salePrice) / originalPrice) * 100)

  return (
    <div className='tw-bg-white tw-overflow-hidden tw-transition-transform hover:tw-transform hover:tw-scale-105 tw-h-[380px]  tw-flex tw-flex-col tw-border-[2px] tw-cursor-pointer'>
      <div className='tw-relative tw-w-full tw-h-[250px]  tw-flex tw-justify-center tw-items-center'>
        <img src={image} alt={name} className='tw-object-cover tw-w-[95%] tw-h-[95%]' />
        <span className='tw-absolute tw-top-0 tw-left-0 tw-px-2 tw-py-1 tw-text-sm tw-text-white tw-bg-orange-500 tw-rounded-br-lg'>
          -{discountPercentage}%
        </span>
      </div>

      <div className='tw-flex tw-flex-col tw-flex-grow tw-p-4'>
        <h3 className='tw-text-lg tw-font-semibold tw-mb-1 tw-line-clamp-2 tw-h-14'>{name}</h3>

        <div className='tw-flex tw-flex-col '>
          <span className='tw-text-sm tw-text-gray-500 tw-line-through'>{originalPrice.toLocaleString()}đ</span>
          <span className='tw-text-xl tw-font-bold tw-text-red-500'>{salePrice.toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  )
}

export default ProductSale
