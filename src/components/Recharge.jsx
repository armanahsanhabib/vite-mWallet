import React from 'react';

const Recharge = () => {
    return (
        <div className='mx-5 mt-5'>
            <h1 className='rounded-full bg-rose-500 text-gray-50 text-center py-1 font-bold'>Mobile Recharge</h1>
            <form className='pt-3'>
                <div className='rounded-xl border-2 border-rose-500 text-gray-700 text-sm p-5'>
                    <label htmlFor="operator">Choose Mobile Operator: </label>
                    <select
                        name="operator"
                        id="operator"
                        className='mt-2 mb-3 w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:border-rose-500 rounded'
                    >
                        <option disabled selected>-- Select Operator --</option>
                        <option value="gp">Grameenphone</option>
                        <option value="gp">Banglalink</option>
                        <option value="gp">Airtel</option>
                        <option value="gp">Robi</option>
                        <option value="gp">Teletalk</option>
                    </select>
                    <label htmlFor="recharge-number">Enter Mobile Number: </label>
                    <input
                        type="number"
                        name="recharge-number"
                        id="recharge-number"
                        placeholder='Mobile Number...'
                        required
                        className='mt-2 mb-3 w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:border-rose-500 rounded'
                    />
                    <label htmlFor="recharge-amount">Recharge Amount: </label>
                    <input
                        type="number"
                        name="recharge-amount"
                        id="recharge-amount"
                        placeholder='Recharge Amount...'
                        required
                        className='mt-2 w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:border-rose-500 rounded'
                    />
                    <button
                        type="submit"
                        className='rounded-full border-[3px] transition block mx-auto border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-gray-50 font-bold text-[15px] mt-5 px-5 py-[3px]'
                    >
                        Mobile Recharge
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Recharge;