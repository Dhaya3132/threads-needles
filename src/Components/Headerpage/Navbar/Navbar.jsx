import React from 'react'
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <nav
            className='flex justify-between items-center p-5 bg-gradient-to-r from-indigo-50 to-transparent drop-shadow-sm border-solid border-b-2 border-slate-200 sticky top-0'>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, staggerChildren: 0.1 }}
                className='font-Sora font-medium text-xl text-black Mobile-S:text-base Mobile-M:text-base Mobile-L:text-base'>thread&needle</motion.h2>
            <motion.button
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2, staggerChildren: 0.1 }}
                className='bg-gradient-to-r from-Yellow to-LightYellow text-white font-Sora text-sm font-normal px-5 py-3 rounded-full relative hover:bg-none hover:bg-slate-900 Mobile-S:hidden Mobile-M:hidden Mobile-L:hidden'>Contacts</motion.button>
        </nav>
    )
}

export default Navbar