import { useNavigate } from 'react-router-dom';

function Welcome(){
    const navigate = useNavigate();
    return(
        <div className="w-full overflow-x-hidden">
            <div className="relative  overflow-x-hidden min-w-[100vw] h-[100vh]">
                <div>
                    <img src='assets\images\wallpaper.jpg' className='min-w-[100vw] h-[100vh] top-0 absolute'></img>
                </div>
                <div>
                    <img src='assets\images\modern-wood-floor-transparent-background-cutout-png 2.jpg' className='w-[100vw] h-[28vh] bottom-0 absolute'></img>
                </div>
                <div>
                    <img src='assets\images\Stairs-PNG-Picture 1-min.png' className='w-[45vw] h-[87vh] top-[-4%] absolute right-[-5%] z-40'></img>
                </div>
                <div>
                    <img src='assets\images\Polygon 1-min.png' className='w-[45vw] h-[70vh] top-[15%] absolute right-[-4.5%]'></img>
                </div>
                <div>
                    <img src='assets\images\door.jpg' className='w-[28vw] h-[60vh] top-[12%] absolute left-[4%]'></img>
                </div>
                <div>
                    <img id="photo1" src='assets\images\photo1.png' className=' absolute h-[17vh] lg:w-[10vw] md:w-[17vw] sm:w-[15vw] w-[25vw]  left-[33%] top-[7%] z-30 '></img>
                </div>
                <div>
                    <img id="photo2" src='assets/images/photo2.png' className=' absolute h-[12vh] lg:w-[9vw] w-[0vw] left-[44%] top-[11%] z-30'></img>
                </div>
                <div>
                    <img id="photo3" src='assets\images\photo3.png' className=' absolute h-[12vh] sm:w-[10vw] lg:w-[8vw] w-[0vw] left-[54%] top-[17%] z-30'></img>
                </div>
                <div>
                    <img id="photo4" src='assets/images/photo4.png' className=' absolute h-[10vh] lg:w-[8vw] w-[20vw] md:w-[15vw] left-[41%] top-[29%] z-30'></img>
                </div>
                <div>
                    <img id="photo5" src='assets\images\photo5.png' className='absolute h-[20vh] lg:w-[7vw] md:w-[14vw] w-[18vw] left-[65%] top-[8%] z-30 '></img>
                </div>
                <div className='bg-gradient-to-r from-[rgba(197,180,180,0.8)] to-[rgba(98,83,83,0.8)] absolute w-[90vw] lg:max-w-none min-h-[10vw] md:w-[70vw] sm:w-[75vw] pl-5 pb-5 pr-1 lg:w-[50vw] sm:max-w-[400px] pt-8 lg:pt-[2vw] md:min-w-[600px] sm:min-w-[550px] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold rounded-lg border-[0.2rem] border-black z-50'>
                    <img 
                        src='assets\images\crossbutton.png' 
                        className=' lg:w-[4vw] md:w-[6vw] w-[8vw] sm:w-[6vw] absolute right-1 top-2 cursor-pointer'
                        onClick={() => navigate('/door')}
                        alt="Close"
                    ></img>
                    <div className="lg:leading-[3vw] md:leading-[3rem] leading-[1.5rem] lg:min-text lg:text-[2vw] md:text-2xl sm:text-xl ">WELCOME TO WARREN'S HOUSE, THE <br></br> SECRETS BEHIND THE DOORS AWAITS YOU</div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;