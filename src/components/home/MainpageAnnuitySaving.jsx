import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

export default function MainpageAnnuitySaving({resultMainData, notClickedBtnStyle, clickedBtnStyle}) {
   
    const [annuitySaving, setAnnuitySaving] =  useState('201');
    const [annuitySavingName, setAnnuityName] =  useState('금리연동형');

    let navigate = useNavigate();

    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600"></p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            {annuitySavingName} 연금저축 TOP 3
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            상품을 클릭하시면, 자세한 정보를 확인할 수 있습니다.
                        </p>

                        <div className="w-auto">
                            <div className="rounded-full flex items-center mt-10 flex-wrap">
                                
                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("201");
                                        setAnnuityName("금리연동형");
                                    }
                                } className={`${annuitySaving === "201" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="201">
                                    금리연동형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("411");
                                        setAnnuityName("채권형");
                                    }
                                } className={`${annuitySaving === "411" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="411">
                                    채권형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("421");
                                        setAnnuityName("주식형");
                                    }
                                } className={`${annuitySaving === "421" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="421">
                                    주식형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("422");
                                        setAnnuityName("주식파생형");
                                    }
                                } className={`${annuitySaving === "422" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="422">
                                    주식파생형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("431");
                                        setAnnuityName("혼합주식형");
                                    }
                                } className={`${annuitySaving === "431" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="431">
                                    혼합주식형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("441");
                                        setAnnuityName("혼합채권형");
                                    }
                                } className={`${annuitySaving === "441" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="441">
                                    혼합채권형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("461");
                                        setAnnuityName("재간접형");
                                    }
                                } className={`${annuitySaving === "461" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="461">
                                    재간접형
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("491");
                                        setAnnuityName("혼합자산");
                                    }
                                } className={`${annuitySaving === "491" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="491">
                                    혼합자산
                                </button>

                                <button onClick= {
                                    () =>{
                                        setAnnuitySaving("4EE");
                                        setAnnuityName("단기금융(MMF)");
                                    }
                                } className={`${annuitySaving === "4EE" ? clickedBtnStyle : notClickedBtnStyle} rounded-full py-4 px-5 mr-1 mx-1 my-1.5`} id="4EE">
                                    단기금융(MMF)
                                </button>


                            </div>
                        </div>
                    </div>


                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        
                        {
                            resultMainData['mainpageAnnuitySaving']
                            .filter((annuitySavingData)=>annuitySavingData.baseList__prdt_type === annuitySaving)
                            .map(function(annuitySavingData){
                                return(
                                    <div 
                                    key={annuitySavingData.baseList__fin_co_no + annuitySavingData.baseList__fin_prdt_cd} 
                                    role="listitem" 
                                    className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
                                    onClick={()=>{navigate(`/annuity/${annuitySavingData.baseList__fin_co_no}/${annuitySavingData.baseList__fin_prdt_cd}`)}}>
                                        <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                                        <div className="w-full p-8">
                                            <div className="md:flex items-center justify-between">
                                                <h2 className="text-2xl font-semibold leading-6 text-gray-800 md:w-3/5">{annuitySavingData.baseList__fin_prdt_nm}</h2>
                                                

                                                <p className="text-xl md:mt-6 mt-4 font-semibold leading-6 text-gray-900 md:text-right">
                                                    연평균 수익률 <br className='hidden md:block'/>{annuitySavingData.baseList__avg_prft_rate}<span className="font-normal text-base">%</span>
                                                </p>

                                            </div>
                                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">{annuitySavingData.baseList__kor_co_nm}</p>
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


