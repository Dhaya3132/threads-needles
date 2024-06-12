import { motion } from "framer-motion";

// const fadedanimation: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.3,
//       duration: 1.5,
//     },
//   },
// };


function Intros() {
  return (
    <div className='h-screen w-screen bg-black flex flex-col justify-around p-20 Mobile-S:p-6 Mobile-M:p-8 Mobile-L:p-10'>

      <div className='flex flex-col justify-start items-start gap-3'>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1, staggerChildren: 0.2 }}
          className="font-Poppins text-8xl font-semibold tracking-wide bg-gradient-to-r from-indigo-500 to-slate-200 Mobile-S:text-5xl Mobile-M:text-6xl Mobile-L:text-6xl">Style Stitched,</motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2, delay: 2, staggerChildren: 0.2 }} className="font-Poppins text-8xl font-semibold tracking-wide bg-gradient-to-r from-indigo-500 to-slate-200 Mobile-S:text-5xl  Mobile-M:text-6xl Mobile-L:text-6xl">Dreams Tailored.</motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3, staggerChildren: 0.2 }} className='font-Poppins text-8xl font-semibold bg-gradient-to-r from-indigo-500 to-slate-200 Mobile-S:text-5xl  Mobile-M:text-6xl Mobile-L:text-6xl'>Fashion Start here...</motion.h3>
      </div>

      <div className='flex gap-5 justify-end'>
        <div className='border-solid border-2 border-white '></div>
        <motion.button 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:2, delay:4,staggerChildren:0.4}}
        className='px-6 py-3 rounded-full text-lg font-Poppins bg-gradient-to-r from-indigo-500 to-slate-200 font-semibold text-black Mobile-S:px-3 Mobile-S:py-2 Mobile-M:px-3 Mobile-M:py-2 Mobile-L:px-3 Mobile-L:py-2'>Starts here</motion.button>
      </div>

    </div>

  )
}

export default Intros