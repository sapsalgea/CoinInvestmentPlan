import React from 'react';
import MainpageDeposit from '../components/home/MainpageDeposit';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import MainpageSavings from '../components/home/MainpageSavings';
import MainpageAnnuitySaving from '../components/home/MainpageAnnuitySaving';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';
import SeoHelmet from '../components/metaTag/SeoHelmet';



export default function MainPage() {

    const notClickedBtnStyle = "bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600";
    const clickedBtnStyle = "bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";

    
    let result = useQuery(['mainpageData'], () => 
        axios.get('https://www.coininvestmentplan.com/api/home/get_mainpage_best.php')
        .then((list) =>{
            //console.log(list.data);
            return list.data
         }),
         {staleTime : 500000}
    )

    return (
      <div className='max-w-7xl mx-auto'>
        <SeoHelmet
          title={
            "이자가 높은 예적금상품 및 연금저축상품을 한눈에 - 코인인베스트먼트플랜(CoinInvestmentPlan)"
          }
          description='이자가 높은 예적금상품 및 연금저축상품을 찾고 계신가요? 코인인베스트먼트플랜(CoinInvestmentPlan)에서 한눈에 살펴보실 수 있습니다.'
          keywords='예적금상품, 코인인베스트먼트플랜, 연금저축, 예금, 적금'
          imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
        />

        {result.isLoading && <Loading />}
        {result.error && <LoadingError />}
        {result.data && (
          <MainpageDeposit
            resultMainData={result.data}
            notClickedBtnStyle={notClickedBtnStyle}
            clickedBtnStyle={clickedBtnStyle}
          />
        )}
        {result.data && (
          <MainpageSavings
            resultMainData={result.data}
            notClickedBtnStyle={notClickedBtnStyle}
            clickedBtnStyle={clickedBtnStyle}
          />
        )}
        {result.data && (
          <MainpageAnnuitySaving
            resultMainData={result.data}
            notClickedBtnStyle={notClickedBtnStyle}
            clickedBtnStyle={clickedBtnStyle}
          />
        )}
      </div>
    );
}

