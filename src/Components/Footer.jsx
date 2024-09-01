import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[20vh] bg-zinc-950'>
        <div className='flex justify-center pt-10'> 
        Copyright &copy; 2024 reserved! || Created By : Himanshu
        </div>
        <div className="social flex justify-center gap-6 p-2 cursor-pointer invert">
            <span><img src="src/assets/img/instag.png" alt="" /></span>
            <span><img src="src/assets/img/facebook.png" alt="" /></span>
            <span><img src="src/assets/img/twitter.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Footer
