import React from 'react'
import { FaBus } from 'react-icons/fa'

const Chooseus = () => {
  return (
    <section id='choose'>
    <div className='py-14 md:py-28 bg-gray-50' >
    <div>

    <h1 data-aos="fade"  className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us    </h1>


    <div data-aos="fade" data-aos-delay="300">
    <div  className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
   
   
   
   
    <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
    <p className='text-dark/70 font-semibold'>"We provide reliable and convenient transport services to ensure you receive your meal on time, every time."</p>
    <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
    <FaBus className='text-5xl text-primary'/>
    </div>


   
    <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
    <FaBus className='text-5xl text-secondary'/>
    <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>

    <p className='text-dark/70 font-semibold'>"Our meals are crafted with fresh, high-quality ingredients to guarantee a delicious and healthy experience."</p>
    </div>
   


    <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
    <p className='text-dark/70 font-semibold'>"Your satisfaction is our top priority. We focus on providing exceptional service and a memorable dining experience."</p>
    <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
    <FaBus className='text-5xl text-primary'/>
    </div>


   
    <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
    <FaBus className='text-5xl text-secondary'/>
    <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>

    <p className='text-dark/70 font-semibold'>"We offer high-quality meals at competitive prices to ensure you get the best value for your money."    </p>
    </div>
    </div>
    </div>
    </div>


    </div>




      
    </section>
  )
}

export default Chooseus
