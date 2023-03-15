import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import BankingSectorSelectBtn from '../components/deposit/BankingSectorSelectBtn';
import { useState } from 'react';


export default function Deposit() {

    const [deposit, setDeposit] =  useState('020000');
    const notClickedBtnStyle = "bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600";
    const clickedBtnStyle = "bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";


    let result = useQuery(['mainpageData'], () => 
        axios.get('https://www.coininvestmentplan.com/api/deposit/search_deposit.php?topFinGrpNo=all&intr_rate_type=S&save_trm=12')
        .then((list) =>{
            console.log(list.data);
            return list.data
         }),
         {staleTime : 500000}
    )

    return (
        <div>
            

            {result.isLoading && <p>로딩중</p>}
            {result.error && <p>에러남 새로고침필요</p>}
            {result.data && <BankingSectorSelectBtn deposit={deposit} setDeposit={setDeposit} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle}/>}
        
            
        </div>
    );
}

