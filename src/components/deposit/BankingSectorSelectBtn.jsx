import React from 'react';

export default function BankingSectorSelectBtn({deposit, setDeposit, notClickedBtnStyle, clickedBtnStyle}) {

    
    return (
        <>
            <div className="w-56">
                <div className="rounded-full flex items-center mt-10">
                    
                    <p>금융권역</p>

                    <button onClick= {
                           () =>{
                            setDeposit("all"); 
                        }
                    } className={`${deposit === "all" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-6 mr-1`} id="monthly">
                        전체
                    </button>

                    <button onClick= {
                           () =>{
                            setDeposit("020000"); 
                        }
                    } className={`${deposit === "020000" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-6 mr-1`} id="monthly">
                        은행
                    </button>

                   <button onClick= {
                       () =>{
                            setDeposit("030300"); 
                       }
                    } className={`${deposit === "030300" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-6 mr-1`} id="annually">
                       저축은행
                    </button>
                </div>
            </div>
            
        </>
    );
}

