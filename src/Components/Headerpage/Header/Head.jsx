import React from 'react'
import {motion} from 'framer-motion'

function Head() {
  return (
    <div className='text-black p-10 flex flex-col gap-4'>
      <motion.h2
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, delay: 2, staggerChildren: 0.2 }}
      className='font-Sora font-semibold text-8xl'>Needle & Thread Couture</motion.h2>
      <motion.h2
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, delay: 3, staggerChildren: 0.2 }} 
      className='font-Sora font-semibold text-8xl'>Where <span className='bg-gradient-to-r from-Yellow to-LightYellow text-white pl-1 pr-1'>Every Stitch Tells a Story...</span></motion.h2>
      <motion.p
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, delay: 4, staggerChildren: 0.2 }}
      className='font-Sora font-light text-xl mt-2 text-gray-400'>Discover the artistry of Needle & Thread Couture, where every garment is meticulously crafted to reflect your unique style. From elegant evening gowns to tailored suits, let us weave your dreams into reality with expert craftsmanship and attention to detail.</motion.p>
    </div>
  )
}

export default Head