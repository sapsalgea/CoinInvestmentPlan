import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import BankingSectorSelectBtn from '../components/button/BankingSectorSelectBtn';
import { useState, useEffect } from 'react';
import PeriodSelectBtn from '../components/button/PeriodSelectBtn';
import InterestSelectBtn from '../components/button/InterestSelectBtn';
import DepositProductList from '../components/deposit/DepositProductList';
import { useInView } from 'react-intersection-observer';
import Loading from '../components/common/Loading';
import NoData from '../components/common/NoData';
import LoadingError from '../components/common/LoadingError';
import HeadingTextBox from '../components/common/HeadingTextBox';
import SeoHelmet from '../components/metaTag/SeoHelmet';
import { useDispatch, useSelector } from 'react-redux';
import { setDepositBankingSector, setDepositClickedBankName, setDepositInterest, setDepositPeriod, setSaveDepositBankNameList } from '../store';
// import BankNameSelectBtn from '../components/button/BankNameSelectBtn';

export default function Deposit() {

    

    let dispatch = useDispatch();
    let depositBankingSector = useSelector((state)=>{return state.depositBankingSector});
    let depositPeriod = useSelector((state)=>{return state.depositPeriod});
    let depositInterest = useSelector((state)=>{return state.depositInterest});
    let saveDepositBankNameList = useSelector((state)=>{return state.saveDepositBankNameList});
    let depositClickedBankName = useSelector((state)=>{return state.depositClickedBankName});
    
    const [bankingSector, setBankingSector] =  useState(depositBankingSector);
    const [period, setPeriod] =  useState(depositPeriod);
    const [interest, setInterest] =  useState(depositInterest);
    const [depositBankNameList, setDepositBankNameList] = useState(saveDepositBankNameList);
    const [clickedBankName,setClickedBankName] = useState(depositClickedBankName);

    useEffect(()=>{
        dispatch(setDepositBankingSector(bankingSector));
        dispatch(setDepositPeriod(period));
        dispatch(setDepositInterest(interest));
        dispatch(setSaveDepositBankNameList(depositBankNameList));
        dispatch(setDepositClickedBankName(clickedBankName));
    },[dispatch,bankingSector,period,interest,depositBankNameList,clickedBankName])

    const notClickedBtnStyle = "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 border  rounded-md transition duration-100";
    const clickedBtnStyle = "bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";
    const commonBtnStyle = "rounded-md py-4 sm:py-3 px-3 sm:px-5 mx-1 basis-1/3  text-xs sm:text-base h-full";



    //무한스크롤
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

    
    let now = new Date();
    let year = now.getFullYear();

    return (
        
        <div>

        <SeoHelmet
          title={`정기예금 금리 순위 ${year}년 비교 총정리`}
          description={`정기예금 금리 순위 ${year}년 - 예금 이자 높은 은행 및 저축은행 정기예금 금리비교 정보`}
          keywords='정기예금 금리, 정기예금 순위'
          imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
        />


            <HeadingTextBox headingText={"정기예금"}/>
            <BankingSectorSelectBtn bankingSector={bankingSector} setBankingSector={setBankingSector} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle} depositBankNameList={depositBankNameList} setDepositBankNameList={setDepositBankNameList} setClickedBankName={setClickedBankName}/>
            <PeriodSelectBtn period={period} setPeriod={setPeriod} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            <InterestSelectBtn interest={interest} setInterest={setInterest} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>
            

            {/* <div className='mx-auto w-full sm:w-2/3 xl:w-1/2 flex flex-wrap flex-nowrap items-center bg-gray-200 rounded-t py-4 px-4'>
                <BankNameSelectBtn depositBankNameList={depositBankNameList} setDepositBankNameList={setDepositBankNameList} setClickedBankName={setClickedBankName}/>
                <div>필터</div>
            </div> */}

            <div
                className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'
            >
            
                <hr className="h-px my-8 bg-gray-400 border-0"/>

            </div>

            {result.isLoading &&  <Loading/>}
            {result.error && <LoadingError/>}
            {result.data && result.data.pages[0].data.length === 0 && <NoData />}
            {result.data && result.data.pages[0].data.length >0 && <DepositProductList result={result.data.pages} innerRef={ref}/>}
           

        </div>
    );
}

