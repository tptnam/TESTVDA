const ContactBanner = () => {
  return (
    <div id='lien-he' className='tw-relative tw-h-[380px] tw-bg-gradient-to-r tw-from-orange-600 tw-to-orange-500 '>
      <div className='tw-container tw-mx-auto tw-h-full tw-flex tw-items-center tw-justify-between'>
        <div className='tw-absolute tw-top-0 tw-left-0 tw-hidden md:tw-block'>
          <img src='/chair.webp' alt='Exercise Equipment' className=' tw-h-[300px] tw-object-contain' />
        </div>

        <div className='tw-w-full md:tw-w-1/2 tw-ml-auto tw-pr-8 lg:tw-pr-16'>
          <div className='tw-flex tw-items-center tw-gap-4 tw-mb-6'>
            <img src='/mascot3.webp' alt='mascot' className='tw-w-24 tw-h-24' />
            <h2 className='tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-white'>
              ABCSport luôn sẵn sàng đồng hành cùng bạn
            </h2>
          </div>

          <div className='tw-flex tw-gap-4'>
            <input
              type='text'
              placeholder='Họ và Tên'
              className='tw-text-xs md:tw-text-sm tw-flex-1 tw-px-4 tw-py-3 tw-rounded-full tw-bg-white tw-bg-opacity-20 tw-text-white tw-placeholder-white tw-border tw-border-white focus:tw-outline-none '
            />
            <div className='tw-relative tw-flex-1'>
              <input
                type='tel'
                placeholder='Số điện thoại'
                className='tw-text-xs md:tw-text-sm tw-w-full tw-px-4 tw-py-3 tw-rounded-full tw-bg-white tw-bg-opacity-20 tw-text-white tw-placeholder-white tw-border tw-border-white focus:tw-outline-none tw-pr-24'
              />
              <button className='tw-absolute tw-right-1 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-px-4 tw-py-2 tw-bg-white tw-text-orange-500 tw-rounded-full tw-font-medium hover:tw-bg-orange-100 tw-text-xs md:tw-text-sm'>
                TƯ VẤN →
              </button>
            </div>
          </div>
        </div>

        <div className='tw-absolute tw-bottom-0 tw-right-0 tw-hidden md:tw-block tw-opacity-50'>
          <img src='/EllipseContact.webp' alt='EllipseContact' className=' tw-h-[300px] tw-object-contain' />
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
