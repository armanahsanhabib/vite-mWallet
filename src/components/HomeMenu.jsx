import React from 'react';
import HomeImage from "../assets/images/home.png";

const HomeMenu = (props) => {
    return (
        <div className='w-full py-3 bg-rose-500 flex justify-center items-center rounded-b-3xl'>
            <div
                className='h-12 w-12 bg-gray-50 shadow cursor-pointer border-2 border-rose-600 rounded-full flex justify-center items-center'
                onClick={() => props.handleHomeMenuClick()}
            >
                <img src={HomeImage} alt="home" className='h-6 w-auto hover:scale-[110%] transition' />
            </div>
        </div>
    );
};

export default HomeMenu;