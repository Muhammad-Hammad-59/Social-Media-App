import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Loginpage = () => {
  return (
<div class=" min-h-screen  bg-orange-400 flex justify-center flex-col items-center gap-2  ">

<div class="w-full  bg-pink-400 sm:w-[90%]  flex justify-center items-center flex-row mt-4 gap-6 p-4">

     {/* Start first main div */}
    <div class="  bg-blue-400 h-[40rem] flex justify-center items-center   max-md:hidden md:block min-[860px]:flex-1  lg:flex-none ">
      <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" class="h-3/5" alt=""/>
    </div>


       {/* Start second main div */}
    
    <div class=" w-80 md:w-96 bg-white flex flex-col gap h-[40rem] min-[860px]:flex-none md:w-96 space-y-2 ">

    <div class=" bg-white flex justify-center items-center flex-col p-4 space-y-4  min-[440px]:ring-1 min-[440px]:ring-gray-300 min-[860px]:flex-none">
       
       {/* Start instagram name image div */}
       <div class="flex justify-center items-center p-3 mb-4 ">
         <img src='./instaname.png' className='w-[45%]'></img>
       </div>


        {/* Start input for email and password div */}
       <div class=" space-y-4 mb-4">
         <input type="text" placeholder="enter email or number" class=" bg-slate-100 active:bg-white w-full p-2 rounded-sm ring-1 ring-gray-50"/>
         <input type="password" placeholder="password" class=" bg-slate-100 w-full p-2 rounded-sm ring-1 ring-gray-50"/>
       <button class="w-full bg-[#4cb5f9] rounded-md p-2 text-white">Login</button>
       </div>

       
        <h1 className='text-gray-400  font-medium'>OR</h1>

        {/* Start facebook and google signup button div */}

        <div class="flex flex-col w-full  pt-3 justify-center items-center  space-y-4">
        <button class="font-medium bg-[#E0E7FF] py-2 px-2 rounded-md  w-full "> <span className='w-8 rounded-full '> <FontAwesomeIcon icon={faFacebook} size="lg" /></span> <span class=" ml-4 "><span className='max-[300px]:hidden'>Login with</span> Facebook</span> </button>
         <button class="font-medium bg-[#E0E7FF] py-2 px-2 rounded-md w-full "> <span className='w-8 rounded-full '><FontAwesomeIcon icon={faGoogle} size="lg" /></span> <span class=" ml-4"><span className='max-[300px]:hidden'>Login with</span>  Google</span></button>
        <button class=" text-sm ">Forgotten your password?</button>
        </div>
  

      </div>

           {/* Start Don't have and account div */}

       <div class=" bg-white p-4 text-center  md:mt-6 min-[440px]:ring-1 min-[440px]:ring-gray-300">
        
        <p>Dont have an account? <span><button class=" text-blue-500">Sign up</button></span> </p> 
       
       </div>


       {/* start get the app */}

       <div className=' bg-white space-y-5 md:space-y-1 pt-2'>

         
        <h1 className='text-md text-center'>Get the app</h1>
       

        <div className='flex flex-row justify-center md: p-2'>

        <div className='w-[45%] h-10 '>
        <img src='./googleplay2.png' className='w-full h-full object-cover'></img> 
        </div>
        <div className='w-[45%] h-10 '>
        <img src='./microsoftstore2.png' className='w-full h-full object-cover' ></img>
        </div>
       
        </div>

       </div>

       {/* end get the app */}


       </div>
  
    </div>


{/* Start footer tag div*/}
    
<div className='w-full sm:w-[90%] bg-emerald-400 flex flex-col justify-center items-center p-6 space-y-2 text-center shadow-sm' >

<div className='flex flex-wrap justify-center items-center'>
    <span className='ml-2'>Meta</span>
    <span className='ml-2'>About</span>
    <span className='ml-2'>Blog</span>
    <span className='ml-2'>Jobs</span>
    <span className='ml-2'>Help</span>
    <span className='ml-2'>API</span>
    <span className='ml-2'>Privacy</span>
    <span className='ml-2'>Terms</span>
    <span className='ml-2'>Locations</span>
    <span className='ml-2'>Instagram Lite</span>
    <span className='ml-2'>Threads</span>
    <span className='ml-2'>Contact uploading and non-users</span>
    <span className='ml-2'>Meta Verified</span>
</div>

<div className='flex flex-row gap-3 justify-center items-center flex-wrap'>
    <select className=' bg-transparent '>
        <option>English</option>
        <option>Urdu</option>
        <option>Pashto</option>
    </select>
    <p><span><FontAwesomeIcon icon={faCopyright} size="sm" style={{color: "#000000",}} /></span> 2024 Instagram from Meta</p>
</div>

</div>
{/* end footer tag div*/}
    
    
</div>


 
  );
}

export default Loginpage;
