import React from 'react'
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <nav
            className='flex justify-between items-center p-5 border-solid border-b-2 bg-black border-slate-200 drop-shadow-2xl'>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, staggerChildren: 0.1 }}
                className='font-Sora font-medium text-xl text-white Mobile-S:text-xl Mobile-M:text-xl Mobile-L:text-xl'>thread&needle</motion.h2>
            <motion.button
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, staggerChildren: 0.1 }}
                className='bg-gradient-to-r from-Yellow to-LightYellow text-white font-Sora text-sm font-normal px-5 py-3 rounded-full Mobile-S:hidden Mobile-M:hidden Mobile-L:hidden'>Contacts</motion.button>
        </nav>
    )
}

export default Navbar