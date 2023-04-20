import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import BankingSectorSelectBtn from '../components/button/BankingSectorSelectBtn';
import { useState, useEffect } from 'react';
import PeriodSelectBtn from '../components/button/PeriodSelectBtn';
import InterestSelectBtn from '../components/button/InterestSelectBtn';
import { useInView } from 'react-intersection-observer';
import Loading from '../components/common/Loading';
import NoData from '../components/common/NoData';
import LoadingError from '../components/common/LoadingError';
import SavingsAccumulationTypeBtn from '../components/button/SavingsAccumulationTypeBtn';
import SavingsProductList from '../components/savings/SavingsProductList';
import HeadingTextBox from '../components/common/HeadingTextBox';
import SeoHelmet from '../components/metaTag/SeoHelmet';
import { useDispatch, useSelector } from 'react-redux';
import { setSaveSavingsBankNameList, setSavingsAccumulation, setSavingsBankingSector, setSavingsClickedBankName, setSavingsInterest, setSavingsPeriod } from '../store';

export default function Savings() {

    let dispatch = useDispatch();
    let savingsBankingSector = useSelector((state)=>{return state.savingsBankingSector});
    let savingsPeriod = useSelector((state)=>{return state.savingsPeriod});
    let savingsInterest = useSelector((state)=>{return state.savingsInterest});
    let saveSavingsBankNameList = useSelector((state)=>{return state.saveSavingsBankNameList});
    let savingsClickedBankName = useSelector((state)=>{return state.savingsClickedBankName});
    let savingsAccumulation = useSelector((state)=>{return state.savingsAccumulation});

    const [bankingSector, setBankingSector] =  useState(savingsBankingSector);
    const [period, setPeriod] =  useState(savingsPeriod);
    const [interest, setInterest] =  useState(savingsInterest);
    const [depositBankNameList, setDepositBankNameList] = useState(saveSavingsBankNameList);
    const [clickedBankName,setClickedBankName] = useState(savingsClickedBankName);
    const [accumulation, setAccumulation] =  useState(savingsAccumulation);


    useEffect(()=>{
        dispatch(setSavingsBankingSector(bankingSector));
        dispatch(setSavingsPeriod(period));
        dispatch(setSavingsInterest(interest));
        dispatch(setSaveSavingsBankNameList(depositBankNameList));
        dispatch(setSavingsClickedBankName(clickedBankName));
        dispatch(setSavingsAccumulation(accumulation));
    },[dispatch,bankingSector,period,interest,depositBankNameList,clickedBankName,accumulation])
    

    const notClickedBtnStyle = "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 border  rounded-md transition duration-100";
    const clickedBtnStyle = "bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";
    const commonBtnStyle = "rounded-md py-4 sm:py-3 px-3 sm:px-5 mx-1 basis-1/3  text-xs sm:text-base h-full";



    //무한스크롤
    const fetchRepositories = ({ pageParam = 0 }) => 
        axios.get(`https://www.coininvestmentplan.com/api/savings/search_savings.php?topFinGrpNo=${bankingSector}&intr_rate_type=${interest}&save_trm=${period}&page_num=${pageParam}&clicked_bank_name=${clickedBankName}&rsrv_type=${accumulation}`,
        { params: { page: pageParam } });
        
      
    let result = useInfiniteQuery(
        [`${bankingSector}_${period}_${interest}_${clickedBankName}_${accumulation}`], 
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

    let now = new Date();
    let year = now.getFullYear();

    return (

      
        
        <div>
            <SeoHelmet
                title={`적금 금리 순위 ${year}년 비교 총정리`}
                description={`적금 금리 순위 ${year}년 - 적금 이자 높은 은행 및 저축은행 적금 금리 순위 정보`}
                keywords='적금 금리, 적금 순위'
                imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
            />

            <HeadingTextBox headingText={"적금"}/>
            <BankingSectorSelectBtn bankingSector={bankingSector} setBankingSector={setBankingSector} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle} depositBankNameList={depositBankNameList} setDepositBankNameList={setDepositBankNameList} setClickedBankName={setClickedBankName}/>
            <PeriodSelectBtn period={period} setPeriod={setPeriod} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <InterestSelectBtn interest={interest} setInterest={setInterest} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <SavingsAccumulationTypeBtn accumulation={accumulation} setAccumulation={setAccumulation} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>


            <div
                className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'
            >
            
                <hr className="h-px my-8 bg-gray-400 border-0"/>

            </div>

            {result.isLoading &&  <Loading/>}
            {result.error && <LoadingError/>}
            {result.data && result.data.pages[0].data.length === 0 && <NoData />}
            {result.data && result.data.pages[0].data.length >0 && <SavingsProductList result={result.data.pages} innerRef={ref}/>}
           

        </div>
    );
}



