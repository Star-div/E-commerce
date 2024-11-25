import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa6"
import DarkMode from "./DarkMode";
import { list } from "postcss";

const Navbar = ({handleOrderPopup}) => {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];

  const DropDownLinks =[
    {
      id:1,
      name:"Trending Products",
      link:"/#"
    },
    {
      id:2,
      name:"Best Seling",
      link:"/#"
    },
    {
      id:3,
      name:"Top Rated",
      link:"/#"
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="px-4 sm:px-12 py-4 flex justify-between">
          <div className="flex  gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDown */}
                <li className="relative cursor-pointer group">
                  <a href="#" 
                  className="flex items-center gap-[2px] font-semibold text-gray-500 py-2 dark:hover:text-white">
                    Quick Links
                    <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                    </span>
                  </a>

                  {/* DropdownLinks */}
                  <div className="absolute z-[9999] hidden  group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {
                        DropDownLinks.map((data, index)=>(
                          <li key={data.index}>
                            <a
                            className="text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold"
                            href={data.link}>
                              {data.name}
                            </a>
                          </li>
                        ))
                      }
                    </ul>

                  </div>
                 
                </li>
              </ul>
            </div>
          </div>
          {/* {Navbar right section} */}
          <div className="flex">
            <div className="ssm:hidden relative group sm:block ">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-grey-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Order button section */}
            <button className="relative p-3">
              <FaCartShopping onClick={handleOrderPopup} className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="p-1 w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode section */}
            <div className="relative">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
