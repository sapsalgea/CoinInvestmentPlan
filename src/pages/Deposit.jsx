import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import BankingSectorSelectBtn from '../components/deposit/BankingSectorSelectBtn';
import { useState, useEffect } from 'react';
import PeriodSelectBtn from '../components/deposit/PeriodSelectBtn';
import InterestSelectBtn from '../components/deposit/InterestSelectBtn';
import DepositList from '../components/deposit/DepositList';
import { useInView } from 'react-intersection-observer';
import JsonDepositBankNameList from '../json/depositBankNameList.json';
// import BankNameSelectBtn from '../components/deposit/BankNameSelectBtn';

export default function Deposit() {

    const [bankingSector, setBankingSector] =  useState('all-bankingSector');
    const [period, setPeriod] =  useState('12');
    const [interest, setInterest] =  useState('all-interest');
    const [depositBankNameList, setDepositBankNameList] = useState(JsonDepositBankNameList);
    const [clickedBankName,setClickedBankName] = useState('no-data');

    

    const notClickedBtnStyle = "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 border  rounded-md transition duration-100";
    const clickedBtnStyle = "bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";
    const commonBtnStyle = "rounded-md py-4 px-6 mr-1 basis-1/3";



    //인피니트 유즈쿼리
    const fetchRepositories = ({ pageParam = 0 }) => 
        axios.get(`https://www.coininvestmentplan.com/api/deposit/search_deposit.php?topFinGrpNo=${bankingSector}&intr_rate_type=${interest}&save_trm=${period}&page_num=${pageParam}&clicked_bank_name=${clickedBankName}`,
        { params: { page: pageParam } });
        
      
    let result = useInfiniteQuery(
        [`${bankingSector}_${period}_${interest}_${clickedBankName}`], 
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
     const [isScrollOk, setIsScrollOk] = useState(true);
    
     useEffect(() => {
         if (inView) {
          

            let lastCheck = false;
            
            if(result.data){
          //     console.log(result.data.pages);
                for (var i = 0; i < result.data.pages.length; i++) {
                    
                    if(result.data.pages[i].data.length === 0){
                        lastCheck = true; 
                    }
                    
                }
            }

            if(lastCheck){
                setIsScrollOk(false);
            }else{
                setIsScrollOk(true);
            }

            if(isScrollOk){
                result.fetchNextPage()
            }
           
           
         }
         
     }, [inView, result, isScrollOk]);

    return (
        <div>

            <BankingSectorSelectBtn bankingSector={bankingSector} setBankingSector={setBankingSector} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle} depositBankNameList={depositBankNameList} setDepositBankNameList={setDepositBankNameList} setClickedBankName={setClickedBankName}/>
            <PeriodSelectBtn period={period} setPeriod={setPeriod} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <InterestSelectBtn interest={interest} setInterest={setInterest} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            

            {/* <div className='mx-auto w-full sm:w-2/3 lg:w-1/2 flex flex-wrap flex-nowrap items-center bg-gray-200 rounded-t py-4 px-4'>
                <BankNameSelectBtn depositBankNameList={depositBankNameList} setDepositBankNameList={setDepositBankNameList} setClickedBankName={setClickedBankName}/>
                <div>필터</div>
            </div> */}

            <div
                className='mt-10 mx-auto w-full sm:w-2/3 lg:w-1/2'
                role='list'
            >
            
            <hr className="h-px my-8 bg-gray-400 border-0"/>

            {result.isLoading &&  <p>로딩중</p>
            }
            {result.error && <p>에러남 새로고침필요</p>}

           

            

            </div>
            
            {result.data && <DepositList result={result.data.pages} innerRef={ref}/>}
           

        </div>
    );
}

