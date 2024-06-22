import React from 'react'

function List({ no, Heading, SubHeading }) {
  return (
    <li className='p-2 border-solid border-b-2 border-slate-200 w-fit flex gap-3 '>

      <h4 className='font-Sora font-bold text-6xl text-white Mobile-S:text-5xl'>{no}</h4>
      <div className='text-white flex flex-col gap-2'>
        <h4 className='font-Sora font-semibold text-2xl text-white Mobile-S:text-xl'>{Heading}</h4>
        <p className='font-Sora font-light text-white text-lg Mobile-S:text-xs'>{SubHeading}</p>
      </div>

    </li>
  )
}

export default List;