import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

function Loader() {

  const boxRef = useRef(null)

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 0.4,
      repeat: -1,
      ease: 'linear',
    })
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
      <div className=" bg-[rgba(21,19,19,1)] relative overflow-hidden min-w-screen h-screen">
        <div>
          <img src="/assets/images/Group 95 (1)-min.png" className="absolute w-[18vw] h-[40vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></img>
        </div>
        <div>
          <img ref={boxRef} src="/assets/images/image 74-min.png" className="absolute w-[9vw] h-[12vh] top-[41%] left-[49%]  -translate-x-1/2 -translate-y-1/2"></img>
        </div>
      </div>
    </div>
  )
}

export default Loader
