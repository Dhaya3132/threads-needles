import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Button';
import Sweing from '/src/assets/Sweing.png';


function Head() {
  return (
    <>
      <div className='text-black bg-white flex gap-10 p-24 justify-center items-center Mobile-S:p-5 Mobile-S:flex-col Mobile-M:p-5 Mobile-M:flex-col Mobile-L:p-5 Mobile-L:flex-col'>
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 2, staggerChildren: 0.2 }}
            className='font-Sora font-semibold text-8xl  Mobile-S:text-6xl Mobile-M:text-6xl'>Needle & Thread Couture</motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 3, staggerChildren: 0.2 }}
            className='font-Sora font-semibold text-5xl mt-2  Mobile-S:text-4xl Mobile-M:text-4xl'><span className='bg-gradient-to-r from-Yellow to-LightYellow text-white pl-1 pr-1'>Every Stitch Tells a Story...</span></motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 4, staggerChildren: 0.2 }}
            className='font-Sora font-light text-sm mt-4 text-gray-400 Mobile-S:text-xs Mobile-M:text-xs'>Discover the artistry of Needle & Thread Couture, where every garment is meticulously crafted to reflect your unique style. From elegant evening gowns to tailored suits, let us weave your dreams into reality with expert craftsmanship and attention to detail.</motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 5, staggerChildren: 0.2 }} className='mt-3'>
            <Button></Button>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1, staggerChildren: 0.2 }}
          src={Sweing} className='w-2/5 h-2/5 Mobile-S:w-4/5 Mobile-S:h-4/5 Mobile-M:w-4/5 Mobile-M:4/5 Mobile-L:w-4/5 Mobile-L:h-4/5' />
      </div>

    </>
  )
}

export default Head