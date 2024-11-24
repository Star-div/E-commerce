import React from 'react';
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData=[
  {
    id:1,
    icon:<FaCarSide className='text-4xl md:text-5xl text-primary'/>,
    title: "Free Shipping",
    desc: "Free Shiping On All Orders",
  },
  {
    id:2,
    icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
    title: "Safe Money",
    desc: "30 Days Money Back",
  },{
    id:3,
    icon:<FaWallet className='text-4xl md:text-5xl text-primary'/>,
    title: "Secure Payment",
    desc: "All Payments Secure",
  },{
    id:4,
    icon:<FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
    title: "Online Support 24/7",
    desc: "Technical Support 24/7",
  },
]



const Services = () => {
  return (
    <div >
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 ">
          {
            ServiceData.map((data)=>(
              <div key={data.id} className='flex lg:flex-row gap-4'>
                {data.icon}
                <div>
                  <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                  <h1 className='text-gray-400 text-sm'>{data.desc}</h1>
                </div>
              </div>
            ))
            
          }
          
        </div>
      </div>
    </div>
  )
}

export default Services