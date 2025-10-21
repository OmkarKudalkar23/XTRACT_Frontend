import React from 'react';  
import { useNavigate } from 'react-router-dom'; 

const Landing_pg = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); 
  };

  return (
    <div className='flex h-screen w-full bg-[url("/assets/images/background-harsh.png")] bg-cover bg-no-repeat bg-center relative'>
      {/* Spider web overlay */}
      <img
        src="/assets/images/spider_web.png"
        className='absolute inset-0 w-full h-full object-cover opacity-70 z-0'
        alt="Spider Web"
      />

      <div className='relative w-full h-full'>

        {/* Danger sign */}
        <img
          src="/assets/images/danger.png"
          className='absolute top-2 right-3 w-24 h-14 sm:w-32 sm:h-20 md:w-44 md:h-28 lg:w-58 lg:h-34'
          alt="Danger"
        />

        {/* Top ring */}
        <img
          src="/assets/images/top_ring.png"
          className='absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 z-20'
          alt="Top Ring"
        />
{/*className='absolute inset-x-0 bottom-[22vh] w-full flex justify-center */}
        {/* Text image */}
        <div className='font-creepster text-white text-center absolute inset-x-0 bottom-[25vh] px-4 sm:px-12 md:px-18 lg:px-32 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight'>
          "Everything you see in here is either <span className='text-red-600'>haunted, cursed</span> or has been used in some kind of <span className='text-red-600'>ritualistic practice</span>"
        </div>

        {/* Enter button and bell */}
        <div className='absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-10 lg:bottom-4 flex justify-center items-center gap-7 mt-12'>
          <img
            src="/assets/images/enter.png"
            className='w-[220px] sm:w-[240px] md:w-[280px] h-auto lg:w-[320px] mt-6 cursor-pointer'
            alt="Enter Button"
          />
          <img onClick={handleClick}
            src="/assets/images/bell.png"
            className='w-[100px] sm:w-[120px] md:w-[140px] h-auto lg:w-[160px] mt-6 cursor-pointer hover:scale-110 transition-transform'
            alt="Bell"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing_pg;