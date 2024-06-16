import React from 'react'

function Service() {
    return (
        <div className='flex flex-col gap-10 mt-28' >
            <h3 className='font-Sora text-6xl text-center font-semibold'>Service we provide</h3>
            <div className='flex justify-center gap-10 items-center'>
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>Blouse</h2>
                </div>
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>Kurthi</h2>
                </div>
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>Tops</h2>
                </div>
            </div>
            <div className='flex justify-center gap-10 items-center' >
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>Chudi</h2>
                </div>
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>Shirts</h2>
                </div>
                <div className="h-32 w-1/6 rounded-full bg-[url('/src/assets/Blouse.jpg')] relative">
                    <h2 className='font-Sora text-4xl text-black font-semibold text-center top-10 left-10 absolute'>T-Shirts</h2>
                </div>
            </div>
        </div>


    )
}

export default Service