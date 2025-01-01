import React from 'react'

const Hero = () => {
  return (
    <div className='bg-lblu w-screen h-[96svh] 2xl:h-[91%] flex flex-col justify-center items-center p-7'>
        <div className='flex justify-center items-center gap-6 mb-4 '>
            <img src="./img/pegLogo.png" alt="" className='h-24 md:h-44 lg:h-52 w-auto rounded-lg animate-toLeft ease-in-out' />
            <img src="./img/NAACBpplogo.png" alt="" className='h-24 md:h-44 lg:h-52 w-auto rounded-lg' />
            <img src="./img/ISBMlogo.jpeg" alt="" className='h-24 md:h-44 lg:h-52 w-auto rounded-lg animate-toRight ease-in-out' />
        </div>
        <h1 class="font-serif xl:text-9xl lg:text-8xl md:text-6xl text-6xl text-center">
            <span class="font-extrabold text-teal-700">I</span>
            <span>nternational </span>
            <span class="font-extrabold text-teal-700">S</span>
            <span>chool of </span>
            <span class="font-extrabold text-teal-700">B</span>
            <span>usiness & </span>
            <span class="font-extrabold text-teal-700">M</span>edia
        </h1>
        <div class="text-opacity-50">
            <h2 class="font-serif xl:text-6xl md:text-5xl text-4xl text-center">
              <span class="font-extrabold text-teal-700">C</span>ollege <span class="font-extrabold text-teal-700">O</span>f <span class="font-extrabold text-teal-700">E</span>ngineering
            </h2>
        </div>
    </div>
  )
}

export default Hero