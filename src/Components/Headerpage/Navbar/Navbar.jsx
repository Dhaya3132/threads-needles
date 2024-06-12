import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between items-center p-10 bg-black'>
            <h2 className='font-IndieFlower font-medium text-3xl text-white border-solid border-b-2 border-indigo-500'>thread&needle</h2>
            <button className='bg-gradient-to-r from-indigo-500 to-slate-200 text-black font-Poppins font-medium px-5 py-3 rounded-full'>Contacts</button>
        </nav>
    )
}

export default Navbar