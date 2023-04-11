import React from 'react';

export default function AnnuitySavingSelectBtn({annuityType, setAnnuityType, notClickedBtnStyle, clickedBtnStyle, commonBtnStyle}) {
    
    return (
        <div className='flex items-center mt-10'>

            <div className='mx-auto w-full sm:w-2/3 lg:w-1/2'>
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">연금상품유형</span>

                <div className="grid grid-cols-3 gap-2 items-center p-1">
                    
                    <button onClick= {
                           () =>{
                            setAnnuityType("201"); 
                        }
                    } className={`${annuityType === "201" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        금리연동형
                    </button>

                    <button onClick= {
                           () =>{
                            setAnnuityType("411"); 
                        }
                    } className={`${annuityType === "411" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="monthly">
                        채권형
                    </button>

                   <button onClick= {
                       () =>{
                            setAnnuityType("421"); 
                       }
                    } className={`${annuityType === "421" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       주식형
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("422"); 
                       }
                    } className={`${annuityType === "422" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       주식파생형
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("431"); 
                       }
                    } className={`${annuityType === "431" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       혼합주식형
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("441"); 
                       }
                    } className={`${annuityType === "441" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       혼합채권형
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("461"); 
                       }
                    } className={`${annuityType === "461" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       재간접형
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("491"); 
                       }
                    } className={`${annuityType === "491" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       혼합자산
                    </button>

                    <button onClick= {
                       () =>{
                            setAnnuityType("4EE"); 
                       }
                    } className={`${annuityType === "4EE" ? clickedBtnStyle : notClickedBtnStyle} ${commonBtnStyle}`} id="annually">
                       단기금융(MMF)
                    </button>





                </div>
            </div>
            
        </div>
    );
}