import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';
import AnnuityProductInfo from '../components/annuity/product/AnnuityProductInfo';

export default function AnnuitySavingProduct() {
    let params = useParams();
  
    let productInfoResult = useQuery(
      [`${params.bankCode}_${params.productCode}`],
      () =>
        axios
          .get(
            `https://www.coininvestmentplan.com/api/annuity_saving/product/product_info.php?bankCode=${params.bankCode}&productCode=${params.productCode}`
          )
          .then((list) => {
            return list.data;
          }),
      { staleTime: 500000, cacheTime: Infinity },
  
    //   {
    //     select: (data) =>
    //       data.sort(
    //         (a, b) =>
    //           Math.floor(b.optionList__intr_rate2) -
    //           Math.floor(a.optionList__intr_rate2)
    //       ),
    //   }
    );
  
  
  
  
  
  
    
  
    return (
      <>
        {(productInfoResult.isLoading) && <Loading/>}
        {productInfoResult.error && <LoadingError/>}
        {productInfoResult.data  && <AnnuityProductInfo productData={productInfoResult.data}/>}
        
  
      </>
    );
  }
  

