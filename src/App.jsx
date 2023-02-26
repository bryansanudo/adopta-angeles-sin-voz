import { useState } from "react";

import HeroSection from "@/components/HeroSection";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Home from "@/components/Home";
import Dogs from '@/components/Dogs'
import Cats from '@/components/Cats'
import Temporal from '@/components/Temporal'
function App() {
  

  return (
    <>
      
     
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peluditos" element={<Dogs />} />
          <Route path="/michis" element={<Cats />} />
          <Route path="/apadrina" element={<Temporal />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
