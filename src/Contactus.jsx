import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Contactus = () => {
  return (
    <section id='footer'>
    <div data-aos="fade-down" className='text-white mt-20'>
    <div className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>

    
    <h1 className='py-10 text-3xl text-center font-bold text-yellow'>Contact Us</h1>


    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
{/* adresss */}
    <div className='text-center space-y-4'>

    <div className='flex justify-center'>

    <IoLocationSharp className=' text-5xl'/>
    </div>

    <p>
    1234 Delicious Street,
Gourmet City,
<br />
Foodie State, 56789 <br />
USA
    </p>


    </div>

    <div className='text-center space-y-4'>

<div className='flex justify-center'>

<MdEmail className=' text-5xl'/>
</div>

<p>
Mohamedabdelhady279@gmail.com
</p>


</div>



<div className='text-center space-y-4'>

    <div className='flex justify-center'>

    <FaPhone className=' text-5xl'/>
    </div>

    <p>
    01068547610 - Sales and Services
    <br />

    01557117992 - Hiring Queries
<br />
 01068547610 - Whatsapp
    </p>


    </div>
    </div>




    


    {/* footer */}

   <div className='flex justify-between p-4 items-center'>
   <p>© 2025 TCJ. All rights reserved</p>

    <div className='flex items-center gap-4'>
    <a href="#">Privacy Policy</a>
    <br />
    <a href="#">Terms & Conditions</a>
    </div>




   </div>



    </div>
    </div>
      



    </section>
  )
}

export default Contactus