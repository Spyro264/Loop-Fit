import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Hero = () => {

  const [km , setKm] = useState(5);

  function IncreaseKm(){
       setKm((prev)=>prev+1)
  }

  function DecreaseKm(){
     if(!km) return;
     setKm((prev)=> prev-1)
  }

  return (
    <div className='min-h-dvh pt-20 flex items-start lg:justify-center lg:items-center lg:pt-0'>
        <div className='flex flex-col justify-center gap-5 w-full '>

            {/* {main-heading} */}
           <div className='flex-col text-center'>
            <h1 className='text-center text-4xl md:text-6xl lg:text-8xl'>Define Your <br /> <span className='text-[#ceff00]'>Velocity</span></h1>
             <span className='w-full text-center font-serif text-xs font-extralight md:text-sm tracking-[0.1rem] md:tracking-[0.4rem] md:mt-1'>Desired Distance (KM)</span> 
            </div> 
         

           {/* {input div} */}
           <div className='flex justify-center items-center '> 
             {/* {textfield} */}
            <div className='flex justify-center items-center mx-auto overflow-hidden '> 
              <input type="number" placeholder='Enter Your Goal' value={km}  className='w-full text-6xl md:text-9xl  placeholder:!text-4xl md:placeholder:!text-6xl text-[#ceff00] overflow-hidden text-center bg-transparent outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]'/>
            </div>
           </div>
           
           {/* {buttons} */}
           <div className='flex justify-center items-center gap-5 md:gap-8 '>
            <button onClick={IncreaseKm} className="bg-[#1a1a1a] px-5 md:px-10 md:py-2 rounded-sm text-sm md:text-3xl">+</button>
            <button onClick={DecreaseKm} className="bg-[#1a1a1a] px-5 md:px-10 md:py-2 rounded-sm text-sm md:text-3xl">-</button>
           </div>

           {/* {generate-route} */}
           <div className='flex justify-center'>
            <button className='bg-[#ceff00] px-3 md:px-6 xl:px-8 py-2 text-black rounded-sm md:text-2xl md:py-4'>GENERATE MY ROUTE</button>
           </div>

        </div>
    </div>
  )
}

export default Hero

