import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData=[
  {
    id:1,
    title:"how to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    published:"Jan 20, 2024 by Saqib",
    image:Img1,
  },
  {
    id:2,
    title:"how to choose perfect gadget",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    published:"Jan 20, 2024 by Saqib",
    image:Img2,
  },
  {
    id:1,
    title:"how to choose perfect VR headset",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    published:"Jan 20, 2024 by Saqib",
    image:Img3,
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>
        {/* Blog Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7'>
          {/* Blog Cards */}
          {
            BlogData.map((data)=>(
              <div key={data.id} className='bg-white dark:bg-gray-900'>
                {/* image Section */}
                <div className='overflow-hidden rounded-2xl mb-2'>
                  <img src={data.image} alt=""
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                </div>

                {/* Content Section */}
                <div className='space-y-2'>
                  <p className='text-xs text-gray-500'>{data.published}</p>
                  <p className='font-bold line-clamp-1'>{data.title}</p>
                  <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
              </div>

              

            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Blogs