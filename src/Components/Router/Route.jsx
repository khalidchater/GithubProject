import React, { useRef, useEffect } from 'react';
import Home from '../Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Liyoute from './Liyoute';
import Aboute from '../Aboute/Aboute';
import Contact from '../Contact/Contact';
import {gsap, Power3} from "gsap"

function Routee() {
    let tl = new gsap.timeline();
  let ease = Power3.easeOut();
 
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Liyoute timeline = {tl} ease = {ease}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboute />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routee;
