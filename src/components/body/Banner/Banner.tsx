import React from 'react'
import { Carousel } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'

interface SlideContent {
  id: number
  title1: string
  title2: string
  highlightWords: string[]
  image: string
}

const Banner: React.FC = () => {
  const slides: SlideContent[] = [
    {
      id: 1,
      title1: 'From Stress',
      title2: 'To Serenity',
      highlightWords: ['Stress', 'Serenity'],
      image: './src/assets/banner1.png'
    },
    {
      id: 2,
      title1: 'From Stress 2',
      title2: 'To Serenity',
      highlightWords: ['Stress', 'Serenity'],
      image: '/khong co anh'
    },
    {
      id: 3,
      title1: 'From Stress 3',
      title2: 'To Serenity',
      highlightWords: ['Stress', 'Serenity'],
      image: '/khong co anh'
    }
  ]

  return (
    <div id='ve-chung-toi' className='tw-relative tw-overflow-hidden'>
      <Carousel controls={false} indicators={true} className='carousel-custom'>
        {/* custom in App.css */}
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className='tw-relative'>
              <div
                className={`tw-min-h-[75vh] tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-relative`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <img
                  className='tw-absolute md:tw-right-[50%] tw-top-10 tw-w-32 md:tw-w-80 lg:tw-block tw-hidden'
                  src='./src/assets/mascot1.png'
                />
                <div className='tw-container tw-mx-auto tw-px-4'>
                  <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-items-center tw-min-h-[75vh]'>
                    <div className='tw-flex tw-flex-col tw-justify-center'>
                      <h1 className='tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6'>
                        {slide.title1.split(' ').map((word, i) => (
                          <span key={i} className={slide.highlightWords.includes(word) ? 'tw-text-bgApp' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                        <br />
                        {slide.title2.split(' ').map((word, i) => (
                          <span key={i} className={slide.highlightWords.includes(word) ? 'tw-text-bgApp' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </h1>
                      <button className='tw-bg-bgApp tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-font-semibold hover:tw-bg-orange-600 tw-transition-colors tw-w-fit tw-flex tw-items-center'>
                        DISCOVER MORE
                        <ArrowRight size={24} className='tw-ml-2' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
