import React from 'react';

const CashOut = () => {
    return (
        <div className='mx-5 mt-8'>
            <h1 className='rounded-full bg-rose-500 text-gray-50 text-center py-1 font-bold'>Cash Out</h1>
            <form className='pt-3'>
                <div className='rounded-xl border-2 border-rose-500 text-gray-700 text-sm p-5'>
                    <label htmlFor="agent">Enter Agent Number: </label>
                    <input
                        type="number"
                        name="agent"
                        id="agent"
                        placeholder='Agent Number...'
                        required
                        className='my-3 w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:border-rose-500 rounded'
                    />
                    <label htmlFor="withdraw-amount">Enter Withdrawal Amount: </label>
                    <input
                        type="number"
                        name="withdraw-amount"
                        id="withdraw-amount"
                        placeholder='Withdrawal Amount...'
                        required
                        className='mt-2 w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:border-rose-500 rounded'
                    />
                    <button
                        type="submit"
                        className='rounded-full border-[3px] transition block mx-auto border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-gray-50 font-bold text-lg mt-5 mb-2 px-5 py-[2px]'
                    >
                        Cash Out
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CashOut;