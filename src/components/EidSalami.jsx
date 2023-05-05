import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';

const EidSalami = () => {
    return (
        <div className='mx-5 mt-8'>
            <h1 className='rounded-full bg-rose-500 text-gray-50 text-center py-1 font-bold'>Eid Salami</h1>
            <div className='mt-5 rounded-xl border-2 text-center border-rose-500 text-gray-700 text-sm p-5'>
                <BiErrorAlt className='text-[50px] mx-auto text-rose-500' />
                <h1 className='mt-2'>Eid Salami Service Not Available!</h1>
                <p className='text-[13px] text-gray-500'>Please Try again later!</p>
            </div>
        </div>
    );
};

export default EidSalami;