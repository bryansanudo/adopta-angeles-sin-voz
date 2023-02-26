import React from "react";

import Navigate from "@/components/Navigate";
import heroVideo from '@/assets/heroVideo.mp4'


const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="my-10 mx-8 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl text-center mb-10">
          Rescatando Ángeles Sin Voz
        </h1>
        <video
       
        autoPlay
        src={heroVideo}
        loop
        type="video/mp4"
        playsInline
        muted
        className=" object-cover w-[400px] h-[300px] md:h-full md:w-full rounded-lg shadow-lg shadow-[#223196] mb-10 mx-auto "
      />
        <p className="my-4 text-center">
        Los peluditos y michis son seres maravillosos que nos brindan amor incondicional y compañía inigualable. Desafortunadamente, muchos de ellos se encuentran en situaciones precarias, abandonados y sin hogar. Rescatar a uno de estos animales es una de las mejores decisiones que puedes tomar.
        </p>
        <p className="my-4 text-center">
        Al adoptar a un peludito o michi rescatado, no solo le estás dando una segunda oportunidad de vida, sino que también estás haciendo una diferencia en la comunidad. Estás ayudando a reducir la sobrepoblación de animales y fomentando la adopción responsable.
        </p>
        <p className="my-4 text-center">
        Además, un animal rescatado a menudo tiene una personalidad única y conmovedora. Ellos han pasado por situaciones difíciles y han sobrevivido, lo que les ha dado una fortaleza y un carácter especial. Al darle un hogar amoroso y seguro, podrás ver su transformación y disfrutar de su amor incondicional.
        </p>

        <Navigate />
      </div>
    </div>
  );
};

export default Home;
