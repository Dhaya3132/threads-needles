import React from 'react'

function List({ no, Heading, SubHeading }) {
  return (
    <li className='p-2 border-solid border-b-2 border-slate-800 w-fit flex gap-3'>

      <h4 className='font-Sora font-semibold text-lg text-white'>{no}</h4>
      <div className='text-white flex flex-col gap-2'>
        <h4 className='font-Sora font-semibold text-xl'>{Heading}</h4>
        <p className='font-Sora font-light text-slate-600 text-md'>{SubHeading}</p>
      </div>

    </li>
  )
}

export default List;