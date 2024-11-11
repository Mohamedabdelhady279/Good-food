import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaUser } from 'react-icons/fa'

const Navbar = ({ Hadlepopup }) => {
  return (
    <div data-aos="fade" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex flex-col sm:flex-row items-center sm:justify-between py-4 sm:py-3">
        {/* عنوان الموقع */}
        <a href="" className="mytitle mb-2 sm:mb-0 text-center sm:text-left">
          <h2 className="font-bold text-3xl">Good <span className='text-primary'>food</span> </h2>
        </a>

        {/* العناصر التي تظهر جنب بعض في الشاشات الصغيرة والكبيرة */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-2 items-center">
          {/* الروابط التي تظهر في الشاشات الأكبر من sm */}
          <div className="hidden sm:flex sm:flex-row sm:space-x-4">
            <HashLink
              to="/#home"
              className="inline-block hover:text-primary text-xl font-semibold"
            >
              Home
            </HashLink>
            <HashLink
              to="/#choose"
              className="inline-block hover:text-primary text-xl font-semibold"
            >
              Why Us
            </HashLink>
            <HashLink
              to="/#About"
              className="inline-block hover:text-primary text-xl font-semibold"
            >
              About
            </HashLink>
            <HashLink
              to="/#footer"
              className="inline-block hover:text-primary text-xl font-semibold"
            >
              Contact Us
            </HashLink>
          </div>

          {/* زر الحساب الذي يظهر في كل الأحجام */}
          <div>
            <button
              onClick={Hadlepopup}
              className="justify-center flex items-center gap-2 bg-secondary text-lg h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
            >
              <FaUser />
              MyAccount
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
