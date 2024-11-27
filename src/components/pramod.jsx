import React from 'react'

const pramod = () => {
  return (
    <div className="container mx-auto p-7 ">
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        {/* Image Section */}
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="absolute inset-0  object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
            style={{
              backgroundImage: "url('./img/pramodKumar.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundBlendMode: "multiply",
            }}
          ></div>
          {/* Mobile gradient overlay */}
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                Dr. Pramod Kumar
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight">
                President of ISB&M Group
            </h4>
          </div>
          {/* Angled Shape */}
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        {/* Content Section */}
        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
                President of ISB&M Group
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700 ">
                Dr. Pramod Kumar
            </h3>
            <p className="text-gray-600 text-justify md:text-custom-xs lg:text-sm xl:text-base 2xl:text-lg">
            Dr. Pramod Kumar holds a Ph.D. in Organizational Behaviour from IIT Mumbai. Having previously worked with IIM Ahmedabad, he also consulted for over 80 companies worldwide. An author of over 100 research papers, cases, and management games, his work is quoted internationally in textbooks and journals. Served on Government of India committees on management education.</p>
            <a
              className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
              href="#"
            >
              <span className='my-3'>More information here</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pramod