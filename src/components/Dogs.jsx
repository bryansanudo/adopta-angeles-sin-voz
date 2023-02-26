import React, { useEffect } from "react";
import PageSection from "@/components/PageSection";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";

import coronel from "@/assets/coronel.jpg";






import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import Home from "@/components/Home";

const Dogs = () => {
  const portfolios = [
    {
      id: 1,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 2,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 3,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 4,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 5,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 6,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 7,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 8,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 9,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 10,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
    {
      id: 11,
      src: coronel,
      category: "Nombre, Edad, Sexo",
      codeInstagram: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
      codeWpp: "https://www.instagram.com/rescatandoangelessinvozgrupo/",
    },
   
  ];

  const useScroll = () => {
    window.scroll({ top: 580, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        
        

       
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              

              {portfolios.map(
                ({ id, src, codeInstagram, category, codeWpp }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-[#223196] group"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={src}
                        className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                      />
                      <p className="m-4 capitalize text-sm md:text-lg">
                        {category}
                      </p>
                      <div className="flex gap-5">
                        <p>Informacion Importante</p>
                      </div>
                      <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                        <article className="group-hover:scale-125 duration-300">
                          <a
                            href={codeInstagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IconInstagram />
                          </a>
                        </article>
                        <article className="group-hover:scale-125 duration-300">
                          <a href={codeWpp} target="_blank" rel="noreferrer">
                            <IconWpp />
                          </a>
                        </article>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={useScroll}
              className="flex items-center justify-center mt-10"
            >
              <AiOutlineArrowUp className="text-[#223196] " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
