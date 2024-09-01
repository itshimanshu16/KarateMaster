import React from 'react'

const Hero = () => {
    return (
        <div className='flex h-[85vh] p-24' >
            <div className="left  w-[50vw]">
            <div className='text-3xl text-orange-600'>We Believe In You..</div>
            <div className='text-7xl py-4'>Prove yourself to be the best</div>
            <div className='py-4 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed harum saepe officia in incidunt inventore omnis, neque, facere eum, similique cum? Assumenda nemo in ab distinctio animi maxime magni! Excepturi provident quis accusantium sequi!</div>
                  
                  <div>
                    <button className='p-4 border-none rounded-full px-8 bg-orange-700 cursor-pointer hover:scale-105 hover:bg-orange-600'>Get Started</button>
                  </div>
            </div>




            <div className="right  w-[50vw] flex justify-center ">
                <div>
                    <img className='relative top-14 left-16 scale-150' src="src/assets/img/bgcircle.png" alt="" />
                    <div><img className='absolute top-20 right-24 scale-90' src="src/assets/img/hero.png" alt="circle" /></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
