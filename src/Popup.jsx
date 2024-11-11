import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({ Showpupup, setShowpupup }) => {
    return (
        <>
            {Showpupup && (
                <div>

        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>

                <div className='flex justify-between items-center'    >

                <div>
                <h1 className='text-2xl font-bold text-dark'>Login</h1>

                </div>

                <div>
                <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>setShowpupup(false)}/>
                </div>
                </div>





{/* login form */}
                <div className='mt-4'>

                 <input type="email" placeholder='Email' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'  />   

                 <input type="password" placeholder='password' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'  />   

                    <div>

                    <button className='text-white bg-primary p-2 w-full rounded-md' onClick={()=>(setShowpupup(false))}>

                login

                    </button>
                
                {/* social */}
                <div className='mt-4'>
                <p className='text-center'>Or login with</p>

                <div className='flex justify-center gap-4 mt-2'>
                <a href="https://www.facebook.com/" target='_blank'>
                    <FaFacebook className='text-3xl hover:text-blue-500 duration-200'/>
                </a>

                <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3DOGB%26utm_medium%3Dapp&ec=GAlAwAE&hl=ar&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-63950028%3A1731326450068893&ddm=1" target='_blank'>
                    <FaGoogle className='text-3xl hover:text-primary duration-200'/>
                </a>
                </div>

                </div>


                    </div>


                </div>

                </div>

                </div>

                </div>
            )




            }


        </>
    )
}

export default Popup