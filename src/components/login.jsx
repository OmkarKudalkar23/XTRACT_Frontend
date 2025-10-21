import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  // Image paths - in Vite, public folder assets are accessed directly
  const images = {
    bg: '/assets/images/Background_Punya.png',
    frame: '/assets/images/Frame.png',
    frame1: '/assets/images/2pf.png',
    frame2: '/assets/images/2pfbw.png',
    frame3: '/assets/images/3pf.png',
    frame4: '/assets/images/3pfc.png',
    cross: '/assets/images/cross.png',
    lamp: '/assets/images/lamp.png',
    mirror: '/assets/images/mirror.png',
    writing: '/assets/images/writing.png',
  };
  return (
    <>
    <div className="container">
      <div
        className="background relative w-screen h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.bg})`,
        }}
      >
        <img src={images.frame1} alt="frame1" className="absolute top-[85%] left-[10%] md:top-[74%] md:left-[5%]  w-[90px] sm:w-[140px] md:w-[160px]" />

        <img src={images.frame2} alt="frame2" className="absolute top-[2%] left-[8%] md:top-[0%] md:left-[5%] w-[120px] sm:w-[170px] md:w-[240px]" />

        <img src={images.frame3} alt="frame3" className="absolute top-[10%] left-[45%] md:top-[6%] md:left-[30%] w-[100px] sm:w-[170px] md:w-[200px]" />

        <img src={images.frame4} alt="frame4" className="absolute top-[18%] left-[10%] md:top-[1%] md:left-[50%] w-[90px] sm:w-[160px] md:w-[180px]" />

        <img src={images.cross} alt="frame5" className="absolute top-[67%] left-[10%] md:top-[30%] md:left-[5%] w-[70px] sm:w-[120px] md:w-[147px]"/>

        <img src={images.lamp} alt="frame6" className="absolute top-[0%] right-[8%] md:top-[0%] md:right-[5%]  w-[80px] sm:w-[140px] md:w-[180px]"/>

        <img src={images.mirror} alt="frame7" className="absolute top-[24%] right-[0%] md:top-[15%] md:right-[19%] w-[110px] sm:w-[160px] md:w-[200px]" />

        <img src={images.writing} alt="frame8" className="absolute top-[76%] right-[12%] md:top-[70%] md:right-[16%] w-[160px] sm:w-[230px] md:w-[280px]"/>



         <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute top-[35%] md:top-[28%] md:left-[22%]  bg-no-repeat bg-contain flex items-center justify-center text-[#f1c27d]
          w-[300px] h-[220px]
          sm:w-[450px] sm:h-[350px]
          md:w-[600px] md:h-[440px]"
          style={{
            backgroundImage: `url(${images.frame})`
          }}
        >
            
          <div className="w-[70%] text-left text-[#f5deb3] font-serif tracking-wide mt-2 sm:mt-3 md:mt-4">
            <form onSubmit={(e) => { e.preventDefault(); navigate('/welcome'); }}>
                <p className="text-xs sm:text-xl md:text-2xl mb-0.5 sm:mb-2 md:mb-3">TEAM NAME:</p>
          <input
            type="text" id="name" name="name"
            className="border border-[#f5deb3] bg-transparent text-[#f5deb3] text-xs sm:text-base px-2 py-0.5 rounded-md w-2/3 sm:w-30 md:w-60 outline-none"
          />
            <br/>
          <p className="text-xs sm:text-xl md:text-2xl mt-0.5 sm:mt-2 md:mt-3 mb-0.5 sm:mb-2 md:mb-3">LOGIN:</p>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              id="login"
              name="login"
              className="login border border-[#f5deb3] bg-transparent text-[#f5deb3] text-xs sm:text-base px-2 py-0.5 rounded-md w-2/3 sm:w-30 md:w-60 outline-none"
              />
            <button
               type="button"
               onClick={() => setShowPassword(!showPassword)}
              className="absolute left-[50%] top-[58%] 
              sm:left-[60%] 
              sm:top-[61%] 
              md:left-[50%] md:top-[58%] transform -translate-y-1/2 text-[#f1c27d]"
              aria-label="Toggle password visibility"
            >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
             </button>
            </div>
            <button
              type="submit"
              className="mt-3 sm:mt-5 md:mt-6 bg-[#8b4513] text-[#f5deb3] text-xs sm:text-base px-4 py-1.5 sm:px-6 sm:py-2 rounded-md hover:bg-[#a0522d] transition-colors font-semibold border border-[#f5deb3]"
            >
              ENTER
            </button>
            </form>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login