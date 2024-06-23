import React from 'react'

function About() {
    return (
        <section className='flex justify-evenly p-10 Mobile-S:flex-col Mobile-S:p-5 Mobile-M:flex-col Mobile-M:p-5 Mobile-L:flex-col Mobile-L:p-5'>
            <div>
                <h3 className='font-Sora font-semibold text-8xl Mobile-S:text-5xl Mobile-M:text-5xl Mobile-L:text-5xl'>About Us</h3>
                <div className='h-3 bg-gradient-to-r from-Orange to-white'></div>
            </div>
            <p className='font-Sora font-extralight text-2xl w-2/5 text-slate-600 Mobile-S:w-full Mobile-S:mt-2 Mobile-S:text-sm Mobile-M:w-full Mobile-M:mt-2 Mobile-M:text-sm Mobile-L:w-full Mobile-L:mt-2 Mobile-L:text-sm'>
                Welcome to thread&needle, where tradition meets modern elegance. Since 2010, we have been dedicated to crafting bespoke garments that perfectly blend timeless style and contemporary flair. Our passion for tailoring is rooted in a deep respect for the art of garment making and a commitment to delivering exceptional quality and personalized service to each of our clients.
            </p>
        </section>
    )
}

export default About