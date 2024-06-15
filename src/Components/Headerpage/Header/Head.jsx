import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Button';
import Sweing from '/src/assets/Sweing.png';


function Head() {
  return (
    <>
      <div className='text-black bg-white flex gap-10 p-20 justify-center items-center'>
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 2, staggerChildren: 0.2 }}
            className='font-Sora font-semibold text-8xl'>Needle & Thread Couture</motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 3, staggerChildren: 0.2 }}
            className='font-Sora font-semibold text-5xl mt-2'><span className='bg-gradient-to-r from-Yellow to-LightYellow text-white pl-1 pr-1'>Every Stitch Tells a Story...</span></motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 4, staggerChildren: 0.2 }}
            className='font-Sora font-light text-sm mt-4 text-gray-400'>Discover the artistry of Needle & Thread Couture, where every garment is meticulously crafted to reflect your unique style. From elegant evening gowns to tailored suits, let us weave your dreams into reality with expert craftsmanship and attention to detail.</motion.p>
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
          src={Sweing} className='w-2/5 h-2/5 border-dashed border-2 border-slate-300 rounded-2xl' />
      </div>

    </>
  )
}

export default Head