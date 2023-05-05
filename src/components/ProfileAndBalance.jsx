import React, { useState } from 'react';
import userImage from '../assets/images/download.jpeg';

const ProfileAndBalance = () => {
    const [balance, setBalance] = useState("$ Balance");

    const handleBalanceClick = () => {
        setBalance("165.62 BDT");

        setTimeout(() => {
            setBalance("$ Balance");
        }, 3000);
    }

    return (
        <div className='rounded-3xl bg-rose-500 shadow-md shadow-rose-300'>
            <div className='w-[40%] h-[20px] rounded-b-2xl bg-gray-50 mx-auto'></div>
            <div className='px-3 py-6'>
                <div
                    className='w-14 h-14 bg-rose-500 mx-auto rounded-full border-[3px] shadow-lg border-gray-50'
                    style={{
                        backgroundImage: `url(${userImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <h1 className='text-[14px] text-gray-50 font-medium text-center'>Ahsan Habib</h1>
                <h3 className='text-[10px] text-gray-50 text-center'>+880 1704-428814</h3>
                <div
                    className='w-[120px] shadow-lg border-2 border-rose-600 font-bold mx-auto mt-2 text-center text-sm rounded-full bg-gray-50 text-rose-600 cursor-pointer'
                    onClick={handleBalanceClick}
                >
                    <h3 className='text-[12px] py-[1px] transition'>{balance}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileAndBalance;
