import React from 'react';

const ServiceCard = (props) => {
    return (
        <div
            className='border-2 border-rose-600 shadow-lg p-3 rounded-xl text-center shadow-lg hover:shadow-xl hover:shadow-rose-300 shadow-rose-100 cursor-pointer hover:scale-[105%] transition'
            onClick={props.onClick}
        >
            <div className=''>
                <img src={props.icon} alt="send money" className='h-10 mb-2 w-auto mx-auto' />
            </div>
            <h1 className='text-sm text-rose-600 font-medium'>{props.serviceName}</h1>
        </div>
    );
};

export default ServiceCard;