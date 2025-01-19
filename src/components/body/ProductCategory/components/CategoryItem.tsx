import React from 'react'
import { Category } from '../../../../types/Category'

interface CategoryCardProps {
  category: Category
}

const CategoryItem: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, productCount, image } = category

  return (
    <div className='tw-relative tw-overflow-hidden tw-rounded-lg tw-cursor-pointer tw-group tw-px-3'>
      <div className='tw-relative tw-h-[250px]'>
        <img
          src={image}
          alt={name}
          className='tw-object-cover tw-w-full tw-h-full tw-transition-transform tw-duration-300 group-hover:tw-scale-110'
        />
        <div className='tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-black/80 tw-via-black/40 tw-to-transparent tw-transition-transform tw-duration-300 group-hover:tw-scale-110' />

        <div className='tw-absolute tw-text-white tw-bottom-4 tw-left-4'>
          <h3 className='tw-text-2xl tw-font-bold tw-tracking-wide tw-drop-shadow-lg'>{name}</h3>
          <p className='tw-mt-1 tw-text-sm tw-text-gray-200 tw-drop-shadow-md'>{productCount} sản phẩm</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
