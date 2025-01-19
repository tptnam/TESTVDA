import React, { useState } from 'react'
import { Review } from '../../../types/Review'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'

interface ReviewProps {
  reviews: Review[]
}

const CustomerReview: React.FC<ReviewProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const currentReview = reviews[currentIndex]

  return (
    <div className='tw-relative'>
      <div className='tw-flex tw-flex-col xl:tw-flex-row tw-min-h-[400px] xl:tw-min-h-[639px]'>
        <div className='tw-flex tw-flex-col tw-justify-around tw-bg-bgApp2 tw-opacity-65 tw-p-6 sm:tw-p-8 xl:tw-p-12 tw-text-white tw-w-full xl:tw-w-1/2 tw-py-12 xl:tw-pt-40'>
          <div className='tw-flex tw-flex-col tw-flex-grow tw-max-w-[500px] tw-m-auto md:tw-ml-24'>
            <h2 className='tw-text-3xl sm:tw-text-4xl xl:tw-text-5xl tw-font-bold tw-mb-4 xl:tw-mb-8'>
              Khách hàng nói gì về ABCSport
            </h2>

            <p className='tw-text-base sm:tw-text-lg tw-mb-4 xl:tw-mb-8 tw-opacity-90 tw-leading-relaxed'>
              {currentReview.context}
            </p>
            <div className='tw-mt-4'>
              <h3 className='tw-text-xl sm:tw-text-2xl tw-font-medium'>{currentReview.customerName}</h3>
              <p className='tw-text-sm sm:tw-text-base tw-opacity-80'>{currentReview.role}</p>
            </div>
            <div className='tw-flex tw-gap-4 sm:tw-gap-6 tw-mt-6 xl:tw-mt-8'>
              <button
                onClick={handlePrevious}
                className='tw-p-2 hover:tw-opacity-80 tw-transition-opacity'
                aria-label='Previous review'
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className='tw-p-2 hover:tw-opacity-80 tw-transition-opacity'
                aria-label='Next review'
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className='tw-hidden xl:tw-block xl:tw-w-1/2 xl:tw-h-full'>
          <img src='./src/assets/reviewimage.png' alt='Review' className='tw-w-full tw-h-full tw-object-fit' />
        </div>
      </div>
      <img
        src='./src/assets/EllipseReview.png'
        alt='Review'
        className='tw-absolute tw-bottom-0 tw-left-1/2 tw-transform tw-translate-x-[-50%] tw-h-32 tw-object-fill tw-hidden xl:tw-block'
      />
    </div>
  )
}

export default CustomerReview
