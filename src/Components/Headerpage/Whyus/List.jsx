import React from 'react'

function List({ no, Heading, SubHeading }) {
  return (
    <li className='p-2 border-solid border-b-2 border-slate-200 w-fit flex gap-3'>

      <h4 className='font-Sora font-bold text-6xl text-white'>{no}</h4>
      <div className='text-white flex flex-col gap-2'>
        <h4 className='font-Sora font-semibold text-2xl text-white'>{Heading}</h4>
        <p className='font-Sora font-light text-white text-lg'>{SubHeading}</p>
      </div>

    </li>
  )
}

export default List;