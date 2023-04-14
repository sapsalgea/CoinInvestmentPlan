import React from 'react';

export default function PeriodSelectBtn({period, setPeriod, notClickedBtnStyle, clickedBtnStyle, commonBtnStyle}) {

    
    return (
        <div className='flex items-center mt-10'>

            <div className='mx-auto w-full sm:w-2/3 xl:w-1/2'>
                <p className="mb-3 sm:mb-1 text-center sm:text-left sm:ml-2 text-gray-500 text-sm md:text-base font-semibold">기간</p>

                <div className="flex items-center mt-2 flex-nowrap">
                    <button onClick= {
                           () =>{
                            setPeriod("6"); 
                        }
                    } className={`${period === "6" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        6개월
                    </button>

                    <button onClick= {
                           () =>{
                            setPeriod("12"); 
                        }
                    } className={`${period === "12" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        12개월
                    </button>

                   <button onClick= {
                       () =>{
                            setPeriod("24"); 
                       }
                    } className={`${period === "24" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       24개월
                    </button>


                    <button onClick= {
                       () =>{
                            setPeriod("36"); 
                       }
                    } className={`${period === "36" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       36개월
                    </button>



                </div>
            </div>
            
        </div>
    );
}

