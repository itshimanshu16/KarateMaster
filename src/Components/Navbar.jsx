import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-around p-2 items-center'>
          <Link to="/" >
           
           <div className='cursor-pointer' ><span className=' permanent-marker-regular text-4xl font-bold'>Karate</span><span className='permanent-marker-regular text-orange-600 text-4xl font-bold'>Master</span><li></li></div>
          </Link>
        <div className='flex gap-20 proza-libre-regular p-6 items-center'>
          <Link to="/" >
            <li className='cursor-pointer hover:scale-110 text-lg hover:text-gray-300'>Home</li>
          </Link>
          <Link to="/aboutus" >
            <li className='cursor-pointer hover:scale-110 text-lg hover:text-gray-300'>About Us</li>

          </Link>
          <Link to="/pricing" >
            <li className='cursor-pointer hover:scale-110 text-lg hover:text-gray-300'>Price</li>

          </Link>
          <Link to="/contactus" >
            <li className='cursor-pointer hover:scale-110 text-lg hover:text-gray-300'><button className='border rounded-3xl border-gray-400 p-2 '>Contact Us</button></li>

          </Link>
        </div>

        </ul>
    </nav>
    </>
  )
}

export default Navbar
