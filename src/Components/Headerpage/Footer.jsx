import React from 'react'

function Footer() {
  return (
    <div className='bg-black flex justify-around items-center p-5 Mobile-S:flex-col Mobile-M:flex-col Mobile-L:flex-col'>
        <h3 className='font-Sora font-medium text-xl text-white Mobile-S:text-lg Mobile-M:text-lg Mobile-L:text-lg'>thread&needle</h3>
        <div>
            <p className='font-Sora font-medium text-xl text-white Mobile-S:text-sm Mobile-M:text-sm Mobile-L:text-sm'>Call Now : 90909 09090</p>
        </div>
    </div>
  )
}

export default Footer