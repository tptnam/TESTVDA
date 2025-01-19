import React from 'react'
import { NewsType } from '../../../../types/News'

interface NewsItemProps {
  news: NewsType
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className='tw-bg-white tw-rounded-md tw-shadow-md tw-overflow-hidden'>
      <img src={news.image} alt={news.title} className='tw-w-full tw-h-48 tw-object-cover' />
      <div className='tw-p-4'>
        <h2 className='tw-text-xl tw-font-bold tw-mb-2'>{news.title}</h2>
        <p className='tw-text-gray-500 tw-text-sm'>{news.date}</p>
        <p className='tw-text-gray-700 tw-text-base'>
          {news.content.length > 200 ? `${news.content.substring(0, 200)}...` : news.content}
        </p>
      </div>
    </div>
  )
}

export default NewsItem
