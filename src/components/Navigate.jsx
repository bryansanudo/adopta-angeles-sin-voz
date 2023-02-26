import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCat, FaDog, FaHome   } from "react-icons/fa";
import { BsFillCalendarMonthFill  } from "react-icons/bs";



const Navigate = () => {
  const useScroll = () => {
    window.scroll({ top: 1425, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <a href="" >

          <div className="flex  flex-col w-[260px] md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#223196] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center    ">
              
              <p className=""><FaHome size={30} className="mx-auto"/>Inicio</p>
            </div>
          </div>
        </a>
        
        <Link to="/peluditos" onClick={useScroll}>
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#223196] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center    ">
              
              <p className=""><FaDog size={30} className="mx-auto"/>Peluditos</p>
            </div>
          </div>
        </Link>
        <Link to="/michis" onClick={useScroll}>
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#223196] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center    ">
              
              <p className=""><FaCat size={30} className="mx-auto"/>Michis</p>
            </div>
          </div>
        </Link>
        <Link to="/apadrina" onClick={useScroll}>
          <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#223196] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center    ">
              
              <p className=""><BsFillCalendarMonthFill size={30} className="mx-auto"/>Apadrina</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
