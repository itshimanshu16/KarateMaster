import React from 'react'

const Thirdpage = () => {
  return (
    <div className='text-black w-full h-[100vh]'>
      <div className='flex flex-col items-center  bg-white'>
        <div className='text-2xl pt-12'>Our Programs</div>
        <div className='text-4xl text-orange-600 font-bold p-2'>Martial Arts Classes</div>
        <div className='text-xl text-gray-600 px-64'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti porro ad! Ipsam iste quasi fugit impedit illo assumenda atque eos nemo maiores deleniti, quibusdam id reiciendis voluptates? Quam iusto repudiandae autem iste consequatur incidunt.</div>

        </div>

        <div className="cards flex flex-row justify-around bg-white ">
        <div className="hover:scale-105 cursor-pointer hover:transition-transform card1 shadow-2xl border rounded-2xl w-[25vw] h-[60vh] my-10   "> <img className='border rounded-2xl'  src="src/assets/img/cardimg1.jpg" alt="" /> <div className='text-3xl text-orange-600 p-6'>Junior Classes</div><div className='text-gray-600 p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cum odit numquam labore aperiam po</div>
        </div>
        <div className="hover:scale-105 cursor-pointer hover:transition-transform card1 shadow-2xl border rounded-2xl w-[25vw] h-[60vh] my-10  "> <img  className='border rounded-2xl' src="src/assets/img/cardimg2.jpg" alt="" /> <div className='text-3xl text-orange-600 p-6'>Karate Classes</div><div className='text-gray-600 p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cum odit numquam labore aperiam po</div>
        </div>
        <div className="hover:scale-105 cursor-pointer hover:transition-transform card1 shadow-2xl border rounded-2xl w-[25vw] h-[60vh] my-10  "> <img  className='border rounded-2xl' src="src/assets/img/cardimg3.jpg" alt="" /> <div className='text-3xl text-orange-600 p-6'>Judo Classes</div><div className='text-gray-600 p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cum odit numquam labore aperiam po</div>
        </div>

      </div>
    </div>
  )
}

export default Thirdpage;
