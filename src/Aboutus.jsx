import React from 'react'
import { FaCaretDown, FaUser } from 'react-icons/fa';

const Aboutus = ({Hadlepopup}) => {

    const groundimg = {
        backgroundImage: "url('image/assets/polygon.png')", // رابط الصورة الخلفية
        backgroundSize: 'cover',     // يغطي العنصر بالكامل
        backgroundPosition: 'center', // تمركز الخلفية
        backgroundRepeat: 'no-repeat', // عدم تكرار الصورة
        width: "100%",
        height: "100%",
        position:"relative",
    }



  return (
    <section id='About'>

    <div style={groundimg} className='py-14 '>
        <div className='container relative z-10 min-h-[500px]'>
        <h1 data-aos="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us </h1>




        <div data-aos="fade" data-aos-delay="300" className='bg-white/80 p-10 my-10'>

        "Since the day we opened our doors, our mission has been to bring joy and satisfaction to everyone who dines with us. We believe that a great meal is more than just delicious food; it’s about creating moments, sharing smiles, and making each guest feel truly welcome. Our team is dedicated to preparing flavorful dishes, providing a warm and relaxing atmosphere, and delivering exceptional service every time you visit. At [<span className='text-primary'>Herbivoria</span> ], you’re not just a customer—you’re part of our family, and we’re here to make every experience memorable."
        <div className='pt-10 flex justify-center'>
      <button onClick={Hadlepopup}  className='flex justify-center  items-center gab-2 bg-primary text-lg h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
          <FaUser/>
          MyAccount
        </button>

      </div>
        </div>
      

        </div>


    <div  className='absolute top-0 right-0 w-full'>
        
    <img src="image\assets\vector-wave.png" alt="" className='mx-auto'/>    


    </div>



    </div>
    
    </section>
  )
}
export default Aboutus