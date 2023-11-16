
"use client"
import { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState('');
    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(expression));
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult(0);
            setExpression('');
        } else {
            setExpression((prev) => prev + value);
        }
    };

    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    return (
        <div className="w-80 pt-28 mx-auto mt-10 bg-gray-500 p-4 rounded-lg">
            <input
                type="text"
                value={expression} 
                className="w-full mb-4 p-3 rounded border"
            />
            <div className="grid grid-cols-3 gap-2">
                {numbers.map((value) => (
                    <button
                        key={value}
                        onClick={() => handleButtonClick(value)}
                        className="p-3 text-black rounded bg-white"
                    >
                        {value}
                    </button>
                ))}
                
                <button onClick={() => handleButtonClick(`/${result}`)} className="p-3 text-black rounded bg-green-500">
                    /
                </button>
                <button onClick={() => handleButtonClick('*')} className="p-3 text-black rounded bg-white">
                    *
                </button>
                <button onClick={() => handleButtonClick('-')} className="p-3 text-black rounded bg-white">
                    -
                </button>
                <button onClick={() => handleButtonClick('+')} className="p-3 text-black rounded bg-white">
                    +
                </button>
                <button onClick={() => handleButtonClick('=')} className="p-3 text-black rounded bg-white">
                    =
                </button>
                <button onClick={() => handleButtonClick('C')} className="p-3 text-black rounded bg-red-500">
                    C
                </button>
            </div>
            <div className="mt-4 text-2xl">Result: {result} </div>
        </div>
    );
};

export default Calculator;
