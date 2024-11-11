import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Middel from './Middel';
import Chooseus from './Chooseus';

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';  // إضافة Routes أيضًا
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Popup from './Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const[Showpupup,setShowpupup]=useState(false)
  const Hadlepopup= ()=> {
    setShowpupup(true)
  };


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800, // تحديد مدة الحركة بالمللي ثانية
      easing: 'ease-in-sine', // تسهيل الحركة
      delay:100, // تنفيذ الحركة مرة واحدة فقط عند التمرير
    });
    AOS.refresh();
  }, []);


  return (
    <BrowserRouter className='overflow-x-hidden'>
        <Routes>
          
          <Route path="/home" element={<Navbar />} /> 
        </Routes>


        
        <Navbar Hadlepopup={Hadlepopup}/>
        <Header/>
        <Middel/>
        <Chooseus/>
        <Aboutus Hadlepopup={Hadlepopup}/>
        <Contactus/>
        <Popup  Showpupup={Showpupup} setShowpupup={setShowpupup}/>
    </BrowserRouter>
  );
}

export default App;
