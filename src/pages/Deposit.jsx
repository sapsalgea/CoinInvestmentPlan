import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import BankingSectorSelectBtn from '../components/deposit/BankingSectorSelectBtn';
import { useState, useEffect } from 'react';
import PeriodSelectBtn from '../components/deposit/PeriodSelectBtn';
import InterestSelectBtn from '../components/deposit/InterestSelectBtn';
import DepositList from '../components/deposit/DepositList';
import { useInView } from 'react-intersection-observer';
import depositBankNameList from '../json/depositBankNameList.json';

export default function Deposit() {

    const [bankingSector, setBankingSector] =  useState('all-bankingSector');
    const [period, setPeriod] =  useState('12');
    const [interest, setInterest] =  useState('all-interest');
    

    

    const notClickedBtnStyle = "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 border rounded-md transition duration-100";
    const clickedBtnStyle = "bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";
    const commonBtnStyle = "rounded-md py-4 px-6 mr-1 basis-1/3";


    

    //인피니트 유즈쿼리
    const fetchRepositories = ({ pageParam = 0 }) => 
        axios.get(`https://www.coininvestmentplan.com/api/deposit/search_deposit.php?topFinGrpNo=${bankingSector}&intr_rate_type=${interest}&save_trm=${period}&page_num=${pageParam}`,
        { params: { page: pageParam } });
        
      
    let result = useInfiniteQuery(
        [`${bankingSector}_${period}_${interest}`], 
        fetchRepositories,
        {
          getNextPageParam: (lastPage, allPages) => {
        
            const nextPage = allPages.length * 10;
            return nextPage 
          }
        }
    )

    
     //무한 스크롤
     const [ref, inView] = useInView();
    
     useEffect(() => {
         if (inView) {
           result.fetchNextPage()
           console.log("바닥");
         }
     }, [inView, result]);

    return (
        <div>

            <BankingSectorSelectBtn bankingSector={bankingSector} setBankingSector={setBankingSector} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <PeriodSelectBtn period={period} setPeriod={setPeriod} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <InterestSelectBtn interest={interest} setInterest={setInterest} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            
            {result.isLoading && <p>로딩중</p>}
            {result.error && <p>에러남 새로고침필요</p>}

            <div
                className='mt-10 mx-auto w-full sm:w-2/3 lg:w-1/2'
                role='list'
            >

            <div className="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
                        <svg className="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                        <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                            <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className="text-base text-gray-800 font-normal leading-normal tracking-normal opacity-50">Add person by name or title</p>
                </div>

            </div>
            {result.isSuccess && <p>{console.log(result.data.pages)}</p>}
            {result.data && <DepositList result={result.data.pages} innerRef={ref}/>}
           

        </div>
    );
}

