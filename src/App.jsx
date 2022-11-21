import React, { useState } from 'react';
import { FiDelete } from 'react-icons/fi';

import './App.css';
import ButtonClickSound from './assets/button.wav';
import ControlClickSound from './assets/controls.wav';

const App = () => {
    const [result, setResult] = useState('');
    const buttonAudio = new Audio(ButtonClickSound);
    const controlAudio = new Audio(ControlClickSound);

    const handleClick = (e) => {
        setResult(result + e.target.name);
        buttonAudio.play();
    };

    const handleClear = () => {
        setResult('');
        controlAudio.play();
    };

    const handleDelete = () => {
        setResult(result.slice(0, result.length - 1));
        controlAudio.play();
    };

    const handleCalculate = () => {
        setResult(eval(result).toString());
        controlAudio.play();
    };

    return (
        <div className="w-full h-screen">
            <div
                className="w-full h-screen flex flex-col lg:block lg:h-fit lg:top-[50%] lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:m-[0 auto] lg:w-[280px]
                            text-center border-[10px] border-solid border-[#101116] bg-[#101116] lg:rounded-[5px]"
            >
                <form action="" className="basis-2/5 lg:basis-0">
                    <input
                        readOnly
                        className="h-full pt-[40%] lg:pt-0 lg:h-[75px] text-right w-full bg-[#101116] rounded-none text-white text-[25px] font-bold tracking-[1px]"
                        type="text"
                        value={result}
                    />
                </form>
                <div className="basis-3/5 lg:basis-0 grid grid-cols-4 auto-rows-numbers">
                    <button
                        onClick={handleClear}
                        className="btn text-red-500 col-start-1 col-end-3 row-[1]"
                        id="clear"
                    >
                        C
                    </button>
                    <button
                        onClick={handleDelete}
                        className="btn flex items-center justify-center text-sky-500"
                        id="delete"
                    >
                        <FiDelete />
                    </button>
                    <button
                        name="/"
                        onClick={handleClick}
                        className="btn text-sky-500"
                    >
                        &divide;
                    </button>
                    <button name="7" onClick={handleClick} className="btn">
                        7
                    </button>
                    <button name="8" onClick={handleClick} className="btn">
                        8
                    </button>
                    <button name="9" onClick={handleClick} className="btn">
                        9
                    </button>
                    <button
                        name="*"
                        onClick={handleClick}
                        className="btn text-sky-500"
                    >
                        &times;
                    </button>
                    <button name="4" onClick={handleClick} className="btn">
                        4
                    </button>
                    <button name="5" onClick={handleClick} className="btn">
                        5
                    </button>
                    <button name="6" onClick={handleClick} className="btn">
                        6
                    </button>
                    <button
                        name="-"
                        onClick={handleClick}
                        className="btn text-sky-500"
                    >
                        &ndash;
                    </button>
                    <button name="1" onClick={handleClick} className="btn">
                        1
                    </button>
                    <button name="2" onClick={handleClick} className="btn">
                        2
                    </button>
                    <button name="3" onClick={handleClick} className="btn">
                        3
                    </button>
                    <button
                        name="+"
                        onClick={handleClick}
                        className="btn text-sky-500"
                    >
                        +
                    </button>
                    <button name="0" onClick={handleClick} className="btn">
                        0
                    </button>
                    <button name="." onClick={handleClick} className="btn">
                        .
                    </button>
                    <button
                        onClick={handleCalculate}
                        className="btn bg-sky-400 text-white col-start-3 col-end-5 row-[5]"
                        id="result"
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
