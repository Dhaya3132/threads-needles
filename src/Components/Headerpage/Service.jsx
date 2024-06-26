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

        <section className='mt-30 p-10 bg-gradient-to-r from-indigo-50 to-transparent'>
            <div>
                <h3 className='font-Sora text-7xl text-center font-medium mb-4 Mobile-S:text-3xl Mobile-M:text-4xl Mobile-L:text-4xl'>Choose your <span className='text-Orange pl-1 pr-1'>fashion</span></h3>
                <p className='font-Sora text-xl text-center font-light Mobile-S:text-sm Mobile-M:text-sm Mobile-L:text-lg'>Your choice we'll design & stitch, just for you</p>
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