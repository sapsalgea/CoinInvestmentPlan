import React from 'react';

export default function InterestSelectBtn({interest, setInterest, notClickedBtnStyle, clickedBtnStyle, commonBtnStyle}) {
    return (
        <div className='flex items-center mt-10'>

            <div className='mx-auto w-full sm:w-2/3 xl:w-1/2'>
                <p className="mb-3 sm:mb-1 text-center sm:text-left sm:ml-2 text-gray-500 text-sm md:text-base font-semibold">이자계산방법</p>

                <div className="flex items-center mt-2 flex-nowrap">
                    <button onClick= {
                           () =>{
                            setInterest("all-interest"); 
                        }
                    } className={`${interest === "all-interest" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        전체
                    </button>

                    <button onClick= {
                           () =>{
                            setInterest("S"); 
                        }
                    } className={`${interest === "S" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        단리
                    </button>

                   <button onClick= {
                       () =>{
                            setInterest("M"); 
                       }
                    } className={`${interest === "M" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       복리
                    </button>





                </div>
            </div>
            
        </div>
    );
}

