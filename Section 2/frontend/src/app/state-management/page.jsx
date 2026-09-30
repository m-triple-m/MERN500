'use client';
import React, { useState } from 'react'

const StateManagement = () => {

    // let count = 1;
    const [count, setCount] = useState(1);

    return (
        <div>
            <div className='container mx-auto py-10'>
                <h1 className='text-3xl font-bold text-center'>State Management</h1>

                <h1 className='text-3xl'> {count} </h1>

                <button className='bg-blue-500 p-3 text-white'
                    onClick={() => {
                        setCount(count + 1);
                        console.log(count);
                    }}
                >
                    Click
                </button>

            </div>
        </div>
    )
}

export default StateManagement;