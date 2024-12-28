import React from 'react'

const Hero = () => {
  return (
    <div className='bg-lblu w-screen h-80 flex flex-col justify-center items-center p-7'>
        <div className='flex justify-center items-center gap-6 mb-4 '>
            <img src="./img/pegLogo.png" alt="" className='h-15 md:h-17 w-auto rounded-lg' />
            <img src="./img/NAACBpplogo.png" alt="" className='h-15 md:h-17 w-auto rounded-lg' />
            <img src="./img/ISBMlogo.jpeg" alt="" className='h-15 md:h-17 w-auto rounded-lg' />
        </div>
        <h1 class="font-serif md:text-5xl text-3xl text-center">
            <span class="font-extrabold text-teal-700">I</span>nternational <span class="font-extrabold text-teal-700">S</span>chool of <span class="font-extrabold text-teal-700">B</span>usiness & <span class="font-extrabold text-teal-700">M</span>edia
        </h1>
        <div class="text-opacity-50">
            <h2 class="font-serif md:text-custom-4.5xl text-3xl text-center">
              <span class="font-extrabold text-teal-700">C</span>ollege <span class="font-extrabold text-teal-700">O</span>f <span class="font-extrabold text-teal-700">E</span>ngineering
            </h2>
        </div>
    </div>
  )
}

export default Hero