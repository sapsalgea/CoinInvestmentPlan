import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MainpageDeposit({resultMainData, notClickedBtnStyle, clickedBtnStyle}) {

    const [deposit, setDeposit] =  useState('020000');

    let navigate = useNavigate();
    
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">12개월 / 단리</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            {deposit === "020000" ? '은행' : '저축은행'}  정기 예금 TOP 3
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            상품을 클릭하시면, 자세한 정보를 확인할 수 있습니다.
                        </p>
                        <div className="w-56">
                            <div className="rounded-full flex items-center mt-10">
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
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        
                        {
                            resultMainData['mainpageDeposit']
                            .filter((depositData)=>depositData.topFinGrpNo === deposit)
                            .map(function(depositData){
                                return(
                                    <div 
                                    key={depositData.baseList__fin_co_no + depositData.baseList__fin_prdt_cd} 
                                    role="listitem" 
                                    className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
                                    onClick={()=>{navigate(`/deposit/${depositData.baseList__fin_co_no}/${depositData.baseList__fin_prdt_cd}`)}}
                                    >
                                        <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                                        <div className="w-full p-8">
                                            <div className="md:flex items-center justify-between">
                                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">{depositData.baseList__fin_prdt_nm}</h2>
                                                <div>

                                                    <p className="text-xl md:mt-0 mt-4 font-semibold leading-6 text-gray-900">
                                                        최고 : {depositData.optionList__intr_rate2}<span className="font-normal text-base">%</span><br/>
                                                        <span className="font-normal text-base">기본 : {depositData.optionList__intr_rate} %</span>
                                                    </p>

                                                </div>
                                            </div>
                                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">{depositData.baseList__kor_co_nm}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    );
}
