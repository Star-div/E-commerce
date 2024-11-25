import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks=[
  {
    id:1,
    title:"Home",
    link:"/#",
  },
  {
    id:2,
    title:"About",
    link:"/#about",
  },
  {
    id:3,
    title:"Contact",
    link:"/#contact",
  },
  {
    id:4,
    title:"Blog",
    link:"/#blog",
  },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company detail */}
          <div className='py-8 px-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-14 pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit nisi.</p>
            <p className='text-gray-500 mt-4'>Made with ❤ by StarDev</p>
            <a href="https://www.stardev.services/" target='blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-8 text-sm cursor-pointer hover:scale-105 duration-300 rounded-full relative z-10'>Visit Our Website</a>
          </div>

          {/* Footer Links */}
          <div className='grid grid-col-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4 '>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Importent Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data)=>(
                    <li key={data.id}>
                      <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Company Address */}
          <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
            <div>
              <div className='flex items-center gap-3'>
                <FaLocationArrow/>
                <p>Lahore, Punjab, Pakistan</p>
              </div>
              <div className='flex items-center gap-3 mt-6'>
                <FaMobileAlt/>
                <p>+92 3006766624</p>
              </div>

              {/* Social Links */}
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl hover:text-primary duration-200' />
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl hover:text-primary duration-200' />
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl hover:text-primary duration-200' />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer