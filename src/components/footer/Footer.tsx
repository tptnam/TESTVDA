import { Facebook, Instagram, Phone, Youtube } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className='tw-bg-[#0B1929] tw-text-white tw-py-12'>
      <div className='tw-container tw-mx-auto tw-px-4'>
        <img src='./src/assets/brandLogo.png' alt='ABC SPORT' className='tw-mb-6 tw-w-24' />

        <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-8'>
          <div className='tw-space-y-4'>
            <h3 className='tw-font-bold tw-text-lg'>CÔNG TY TNHH ABC SPORT</h3>
            <div className='tw-space-y-2 tw-text-gray-400 tw-text-sm'>
              <p>Giấy CNĐKDN: 0316155103</p>
              <p>Ngày cấp: 26-02-2020</p>
              <p>Cấp bởi: Sở Kế hoạch và Đầu tư TP. HCM</p>
              <p>Địa chỉ ĐKKD: Số 8, đường Phú Mỹ 2B, Phú Mỹ Phú 2-S10, KP6, P.Tân Phú, Quận 7</p>
              <p>Email: abcsportvietnam@gmail.com</p>
            </div>
            <div className='tw-flex tw-mt-4 tw-items-center tw-gap-4'>
              <Phone className='tw-w-8 tw-h-8' />
              <Youtube className='tw-w-8 tw-h-8' />
              <Facebook className='tw-w-8 tw-h-8' />
              <Instagram className='tw-w-8 tw-h-8' />
              <img src='./src/assets/bocongthuong.png' alt='Đã thông báo' className='tw-h-8' />
            </div>
          </div>

          <div className='tw-space-y-4'>
            <h3 className='tw-font-bold tw-text-lg'>Về chúng tôi</h3>
            <ul className='tw-space-y-2 tw-text-gray-400'>
              <li>Về chúng tôi</li>
              <li>Định hướng phát triển</li>
              <li>Chính sách bảo mật</li>
              <li>Cam kết về thông tin</li>
              <li>Trả góp qua thẻ tín dụng</li>
            </ul>
          </div>

          <div className='tw-space-y-4'>
            <h3 className='tw-font-bold tw-text-lg'>Hướng dẫn</h3>
            <ul className='tw-space-y-2 tw-text-gray-400'>
              <li>Tiêu chí bán hàng</li>
              <li>Chính sách thanh toán</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách bảo hành</li>
            </ul>
          </div>

          {/* See More */}
          <div className='tw-space-y-4'>
            <h3 className='tw-font-bold tw-text-lg'>Xem thêm</h3>
            <ul className='tw-space-y-2 tw-text-gray-400'>
              <li>Tin tức</li>
              <li>Thông tin tuyển dụng</li>
              <li>Video</li>
              <li>Hệ thống phân phối</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>

        <div className='tw-text-center tw-text-gray-400 tw-text-sm tw-mt-8 tw-pt-8 tw-border-t tw-border-gray-700'>
          © 2023 ABCSport. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
