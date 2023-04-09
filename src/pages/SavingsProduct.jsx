import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';
import SavingsProductInfo from '../components/savings/product/SavingsProductInfo';
import SavingsBankProductList from '../components/savings/product/SavingsBankProductList';

export default function SavingsProduct() {
    let params = useParams();
  
    let productInfoResult = useQuery(
      [`${params.bankCode}_${params.productCode}`],
      () =>
        axios
          .get(
            `https://www.coininvestmentplan.com/api/savings/product/product_info.php?bankCode=${params.bankCode}&productCode=${params.productCode}`
          )
          .then((list) => {
            return list.data;
          }),
      { staleTime: 500000, cacheTime: Infinity },
  
      {
        select: (data) =>
          data.sort(
            (a, b) =>
              Math.floor(b.optionList__intr_rate2) -
              Math.floor(a.optionList__intr_rate2)
          ),
      }
    );
  
  
    let bankProductResult = useQuery(
      [`bank_product_${params.bankCode}`],
      () =>
        axios
          .get(
            `https://www.coininvestmentplan.com/api/savings/product/bank_product_list.php?bankCode=${params.bankCode}`
          )
          .then((list) => {
            return list.data;
          }),
      { staleTime: 500000, cacheTime: Infinity },
  
      {
        select: (data) =>
          data.sort(
            (a, b) =>
              Math.floor(b.optionList__intr_rate2) -
              Math.floor(a.optionList__intr_rate2)
          ),
      }
    );
  
  
  
    
  
    return (
      <>
        {(productInfoResult.isLoading || bankProductResult.isLoading) && <Loading/>}
        {productInfoResult.error && <LoadingError/>}
        {productInfoResult.data && bankProductResult.data && <SavingsProductInfo productData={productInfoResult.data}/>}
        {productInfoResult.data && bankProductResult.data && <SavingsBankProductList bankProductResult={bankProductResult.data}/>}
  
      </>
    );
  }

