"use client"
import { useState } from 'react';

export default function DateNavigator() {
    const [currentDate, setCurrentDate] = useState(new Date());

    function handlePrevDate() {
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)));
    }

    function handleNextDate() {
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)));
    }

    return (
        <div className="flex flex-col h-min max-w-lg mx-auto">

            <div className="flex justify-between items-center mb-4">

                <button
                    className="transition duration-200 p-3 text-orange-500 rounded-full hover:bg-gray-100"
                    onClick={handlePrevDate}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="1 0 16 16"
                        className="mx-auto"
                    >
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </button>

                <span className="text-lg font-medium">
                    {currentDate.toDateString()}
                </span>

                <button
                    className="transition duration-200 p-3 rounded-full text-orange-500 hover:bg-gray-100"
                    onClick={handleNextDate}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="1 0 16 16"
                        className="mx-auto"
                    >
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>

            </div>
           <div className='f'>
            a
           </div>
        </div>
    );
}
