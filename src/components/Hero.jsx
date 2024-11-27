import React from 'react'

const Hero = () => {
  return (
    <div className='bg-lblu w-screen h-96 flex flex-col justify-center items-center p-7'>
        <div className='flex justify-center items-center gap-6 mb-4 '>
            <img src="./public/img/pegLogo.png" alt="" className='h-16 w-auto rounded-lg' />
            <img src="./public/img/NAACBpplogo.png" alt="" className='h-16 w-auto rounded-lg' />
            <img src="./public/img/ISBMlogo.jpeg" alt="" className='h-16 w-auto rounded-lg' />
        </div>
        <h1 class="font-serif text-5xl text-center">
            <span class="font-extrabold text-teal-700">I</span>nternational <span class="font-extrabold text-teal-700">S</span>chool of <span class="font-extrabold text-teal-700">B</span>usiness & <span class="font-extrabold text-teal-700">M</span>edia
        </h1>
    </div>
  )
}

export default Hero