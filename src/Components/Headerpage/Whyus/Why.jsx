import React from 'react';
import { Data } from './Data'
import List from './List';
import Sweing from '/src/assets/Sweing.png';

function Why() {
  return (
    <section className='bg-white p-14 '>
      <div className='border-dashed border-2 border-slate-200 p-10 rounded-xl shadow-lg'>
        <h3 className='text-black font-Sora text-4xl font-semibold text-center relative'>Why Choose us</h3>
        <div className='mt-10 flex justify-around items-center'>
          <ul>
            {
              Data.map((items, index) => <List key={index} {...items}></List>)
            }
          </ul>
          <img src={Sweing} className='w-2/5 h-2/5' />
        </div>
      </div>


    </section>
  )
}

export default Why