import React from 'react';
import MainpageDeposit from '../components/home/MainpageDeposit';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import MainpageSavings from '../components/home/MainpageSavings';
import MainpageAnnuitySaving from '../components/home/MainpageAnnuitySaving';

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
        <div>
            

            {result.isLoading && <p>로딩중</p>}
            {result.error && <p>에러남 새로고침필요</p>}
            {result.data && <MainpageDeposit resultMainData = {result.data} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle}/>}
            {result.data && <MainpageSavings resultMainData = {result.data} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle}/>}
            {result.data && <MainpageAnnuitySaving resultMainData = {result.data} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle}/>}
            
        </div>
    );
}

