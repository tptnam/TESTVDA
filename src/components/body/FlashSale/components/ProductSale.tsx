import React from 'react'
import { Product } from '../../../../types/ProductSale'

interface ProductCardProps {
  product: Product
}

const ProductSale: React.FC<ProductCardProps> = ({ product }) => {
  const { name, originalPrice, salePrice, discountPercentage, image } = product

  return (
    <div className='tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transition-transform hover:tw-transform hover:tw-scale-105'>
      <div className='tw-relative'>
        <img src={image} alt={name} className='tw-w-full tw-h-[200px] tw-object-cover' />
        <span className='tw-absolute tw-top-2 tw-left-2 tw-bg-red-500 tw-text-white tw-px-2 tw-py-1 tw-rounded-md'>
          -{discountPercentage}%
        </span>
      </div>
      <div className='tw-p-4'>
        <h3 className='tw-text-lg tw-font-semibold tw-mb-2 tw-line-clamp-2'>{name}</h3>
        <div className='tw-flex tw-flex-col'>
          <span className='tw-text-gray-500 tw-line-through'>{originalPrice.toLocaleString()}đ</span>
          <span className='tw-text-red-500 tw-font-bold tw-text-xl'>{salePrice.toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  )
}

export default ProductSale
