import React from 'react';
import Kurti from '/src/assets/Kurtis.jpg';
import Saree from '/src/assets/Saree.jpg';
import Tops from '/src/assets/Tops.jpg';
import ListComponents from '../../ListComponents';

const Data_Componets = [
    {
        image: Kurti,
        title:'Kurtis',
    },
    {
        image: Saree,
        title:'Saree',
    },
    {
        image: Tops,
        title:'Tops',
    }
];

function Service() {
    return (

        <section className='mt-30 bg-HoneyWell p-12'>
            <div>
                <h3 className='font-Sora text-6xl text-center font-semibold mb-4'>Choose your <span className='bg-gradient-to-r from-Yellow to-LightYellow text-white pl-1 pr-1'>fashion</span></h3>
                <p className='font-Sora text-2xl text-center font-medium'>Your choice we'll design & stitch, just for you</p>
            </div>

            <ul className='flex justify-center items-center gap-10 mt-10'>
                {
                    Data_Componets.map((items, index) => <ListComponents key={index} {...items} />)
                }
            </ul>
        </section>


    )
}

export default Service;