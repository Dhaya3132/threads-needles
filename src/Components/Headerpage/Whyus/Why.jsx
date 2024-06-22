import React from 'react';
import { Data } from './Data'
import List from './List';
import Sweing from '/src/assets/Sweing.png';

function Why() {
  return (
    <section className='bg-white p-14 Mobile-S:p-5'>
      <div className=' p-7 rounded-xl shadow-md bg-gradient-to-r from-Orange to-DarkOrange Mobile-S:w-full'>
        <div className='flex justify-around items-center '>
          <ul>
            {
              Data.map((items, index) => <List key={index} {...items}></List>)
            }
          </ul>
          <img src={Sweing} className='w-2/5 h-2/5 Mobile-S:hidden' />
        </div>
      </div>
    </section>
  )
}

export default Why