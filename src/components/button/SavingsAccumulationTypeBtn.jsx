import React from 'react';

export default function SavingsAccumulationTypeBtn({accumulation, setAccumulation, notClickedBtnStyle, clickedBtnStyle, commonBtnStyle}) {
    return (
        <div className='flex items-center mt-10'>

            <div className='mx-auto w-full sm:w-2/3 lg:w-1/2'>
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold ">적립유형</span>

                <div className="flex flex-wrap items-center mt-2 flex-nowrap">
                    <button onClick= {
                           () =>{
                            setAccumulation("all-accumulation"); 
                        }
                    } className={`${accumulation === "all-accumulation" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="all-accumulation">
                        전체
                    </button>

                    <button onClick= {
                           () =>{
                            setAccumulation("F"); 
                        }
                    } className={`${accumulation === "F" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="free-accumulation">
                        자유적립식
                    </button>

                   <button onClick= {
                       () =>{
                            setAccumulation("S"); 
                       }
                    } className={`${accumulation === "S" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="fixed-accumulation">
                       정액적립식
                    </button>





                </div>
            </div>
            
        </div>
    );
}

