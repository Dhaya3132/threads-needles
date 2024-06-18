import React from 'react'

function ListComponents({ image,title }) {
    return (
        <li>
            <div className='flex flex-col justify-center items-center'>
                <img src={image} className='w-32 h-32 rounded-full' />
                <h2 className='font-Sora text-black font-semibold p-1'>{title}</h2>
            </div>
        </li>
    )
}

export default ListComponents;