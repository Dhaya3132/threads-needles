import React from 'react';
import {Data} from './Data'
import List from './List';
import Sweing from '/src/assets/Sweing.png';

function Why() {
  return (
    <section className='bg-black p-14'>
        <h3 className='text-white font-Sora text-4xl font-semibold text-center'>Why Choose us</h3>
        <div className='mt-10 flex justify-around items-center'>
            <ul>
                {
                  Data.map((items,index) => <List key={index} {...items}></List>)
                }
            </ul>
            <img src={Sweing} className='w-2/5 h-2/5'/>
        </div>

    </section>
  )
}

export default Why