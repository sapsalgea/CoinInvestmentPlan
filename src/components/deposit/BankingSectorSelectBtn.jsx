import React from 'react';

export default function BankingSectorSelectBtn({bankingSector, setBankingSector, notClickedBtnStyle, clickedBtnStyle, commonBtnStyle}) {

    
    return (
        <div className='flex items-center mt-10'>

            <div className='mx-auto w-full sm:w-2/3 lg:w-1/2'>
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold ">금융권역</span>

                <div className="flex flex-wrap items-center mt-2 flex-nowrap">
                    <button onClick= {
                           () =>{
                            setBankingSector("all-bankingSector"); 
                        }
                    } className={`${bankingSector === "all-bankingSector" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        전체
                    </button>

                    <button onClick= {
                           () =>{
                            setBankingSector("020000"); 
                        }
                    } className={`${bankingSector === "020000" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        은행
                    </button>

                   <button onClick= {
                       () =>{
                            setBankingSector("030300"); 
                       }
                    } className={`${bankingSector === "030300" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       저축은행
                    </button>
                </div>
            </div>
            
        </div>
    );
}

