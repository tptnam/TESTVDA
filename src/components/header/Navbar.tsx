import { useState } from 'react'
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap'
import { Cart, Person, Search, Shop } from 'react-bootstrap-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BSNavbar expand='lg' className='py-3 tw-bg-bgApp fixed-top'>
        <Container>
          <BSNavbar.Brand href='/' className='text-white tw-w-32 md:tw-w-auto'>
            <img src='/brandLogo.png' alt='ABC Sport' className='tw-h-8 md:tw-h-10' />
          </BSNavbar.Brand>

          <div className='tw-flex-grow tw-hidden tw-mx-4 md:tw-flex lg:tw-mx-10'>
            <div className='tw-relative tw-w-full tw-max-w-xl'>
              <input type='text' placeholder='Từ khóa tìm kiếm...' className='tw-w-full form-control' />
              <button className='tw-absolute tw-top-2 tw-end-3'>
                <Search className='tw-w-5 tw-h-5 tw-text-gray-500' />
              </button>
            </div>
          </div>

          <div className='text-white tw-flex tw-items-center tw-gap-2 md:tw-gap-4'>
            <a href='/login' className='text-white tw-flex tw-items-center tw-gap-2 tw-no-underline md:tw-gap-2'>
              <Person className='tw-w-5 tw-h-5 md:tw-w-5 md:tw-h-5' />
              <span className='tw-hidden md:tw-inline'>Đăng ký/ Đăng nhập</span>
            </a>
            <a
              href='/cart'
              className='text-white tw-p-2 tw-rounded-full tw-flex tw-items-center tw-gap-1 md:tw-gap-2 tw-bg-[#fb7431]'
            >
              <Cart className='tw-w-5 tw-h-5 md:tw-w-4 md:tw-h-4' />
            </a>
          </div>
        </Container>
      </BSNavbar>

      <BSNavbar expand='lg' className='tw-bg-black py-0 fixed-top tw-mt-[60px] md:tw-mt-[76px]'>
        <Container>
          <BSNavbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setIsOpen(!isOpen)}
            className='text-white !tw-bg-gray-900 border-0 shadow-none ms-0'
          />

          <BSNavbar.Collapse id='basic-navbar-nav' className={`${isOpen ? 'show' : ''}`}>
            <Nav className='me-auto tw-text-white tw-text-center tw-gap-4 tw-flex tw-flex-col tw-items-center md:tw-flex-row md:tw-items-center'>
              <div className='tw-w-full tw-px-3 tw-py-2 md:tw-hidden'>
                <div className='tw-relative'>
                  <input type='text' placeholder='Từ khóa tìm kiếm...' className='tw-w-full form-control' />
                  <button className='tw-absolute tw-top-2 tw-end-3'>
                    <Search className='tw-w-5 tw-h-5 tw-text-gray-500' />
                  </button>
                </div>
              </div>

              <Nav.Link
                href='#ve-chung-toi'
                className='tw-text-white tw-py-3 tw-text-center hover:tw-text-orange-400 md:tw-text-left'
              >
                Về Chúng Tôi
              </Nav.Link>
              <Nav.Link
                href='#san-pham'
                className='tw-text-white tw-py-3 tw-text-center hover:tw-text-orange-400 md:tw-text-left'
              >
                Sản Phẩm
              </Nav.Link>
              <Nav.Link
                href='#khuyen-mai'
                className='tw-text-white tw-py-3 tw-text-center hover:tw-text-orange-400 md:tw-text-left'
              >
                Khuyến Mãi
              </Nav.Link>
              <Nav.Link
                href='#tin-tuc'
                className='tw-text-white tw-py-3 tw-text-center hover:tw-text-orange-400 md:tw-text-left'
              >
                Tin Tức
              </Nav.Link>
              <Nav.Link
                href='#lien-he'
                className='tw-text-white tw-py-3 tw-text-center hover:tw-text-orange-400 md:tw-text-left'
              >
                Liên hệ
              </Nav.Link>
            </Nav>

            <div className='tw-items-center tw-hidden tw-text-bgApp lg:tw-flex'>
              <a href='#showroom' className='tw-flex tw-items-center tw-gap-2 tw-no-underline'>
                <Shop className='tw-w-5 tw-h-5 me-2' />
                <span>120 Showroom toàn quốc</span>
              </a>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <div className='tw-h-[108px] md:tw-h-[120px]'></div>
    </>
  )
}

export default Navbar
