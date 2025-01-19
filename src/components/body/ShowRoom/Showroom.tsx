import React, { useEffect, useState } from 'react'
import { Regions, Showroomtype } from '../../../types/Showroom'
import { ArrowRight } from 'react-bootstrap-icons'

const regions = Object.values(Regions)

interface ShowroomProps {
  Showrooms: Showroomtype[]
}

const Showroom: React.FC<ShowroomProps> = ({ Showrooms }) => {
  const [selectedRegion, setSelectedRegion] = useState<Regions | null>(Regions.HaNoi)
  const [filteredShowrooms, setFilteredShowrooms] = useState<Showroomtype[] | []>([])

  useEffect(() => {
    if (selectedRegion) {
      setFilteredShowrooms(Showrooms.filter((showroom) => showroom.region === selectedRegion))
    } else {
      setFilteredShowrooms(Showrooms)
    }
  }, [selectedRegion, Showrooms])

  const handleViewAllShowRooms = () => {
    setSelectedRegion(null)
  }

  return (
    <div className='tw-w-full tw-mx-auto tw-bg-[#fdf5f3] tw-relative'>
      <img
        src='src/assets/EllipseShowroom.png'
        alt='Showroom Background'
        className=' tw-h-2/3 tw-absolute tw-translate-x-0 tw-translate-y-1/4 tw-hidden lg:tw-block'
      />
      <div
        id='showroom'
        className='tw-w-full tw-mx-auto tw-p-10 tw-bg-[#fdf5f3] tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between'
      >
        <div className='tw-w-[45%] lg:tw-flex lg:tw-flex-col tw-gap-4 tw-self-center tw-pl-[7%] tw-hidden '>
          <img
            src='src/assets/showroom1.png'
            alt='Showroom 1'
            className='tw-w-full tw-h-auto tw-rounded-lg tw-object-cover'
          />
          <img
            src='src/assets/showroom2.png'
            alt='Showroom 2'
            className='tw-w-full tw-h-auto tw-rounded-lg tw-object-cover'
          />
        </div>

        <div className='tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-pl-12'>
          <h2 className='tw-text-4xl tw-font-bold tw-text-orange-500 tw-mb-4'>120 Showroom Toàn Quốc</h2>
          <div className='tw-flex tw-border-b tw-mb-4'>
            {regions.map((region) => (
              <button
                key={region}
                className={`tw-px-4 tw-py-2 tw-font-medium ${
                  selectedRegion === region
                    ? 'tw-border-b-4 tw-border-orange-500 tw-text-orange-500'
                    : 'tw-text-gray-500 hover:tw-text-orange-500'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className='tw-flex tw-flex-col tw-gap-6 tw-overflow-y-auto tw-h-[400px] tw-pr-4 tw-overflow-auto'>
            {Array.isArray(filteredShowrooms) &&
              filteredShowrooms.map((showroom, index) => (
                <div key={index} className='tw-flex tw-flex-col'>
                  <h3 className='tw-text-xl tw-font-semibold'>{showroom.name}</h3>
                  <p className='tw-text-gray-600'>{showroom.address}</p>
                  <p className='tw-text-gray-600'>{showroom.phone}</p>
                  <a href={showroom.mapLink} className='tw-text-orange-500 tw-font-medium hover:tw-underline'>
                    Xem Bản Đồ
                  </a>
                </div>
              ))}
          </div>

          <div>
            <button
              onClick={handleViewAllShowRooms}
              className='tw-flex tw-items-center tw-px-6 tw-py-2 tw-font-semibold tw-text-white tw-bg-bgApp tw-rounded-full hover:tw-bg-orange-600'
            >
              XEM TẤT CẢ
              <ArrowRight size={16} className='tw-ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showroom
