import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';
import SavingsProductInfo from '../components/savings/product/SavingsProductInfo';
import SavingsBankProductList from '../components/savings/product/SavingsBankProductList';
import SeoHelmet from '../components/metaTag/SeoHelmet';

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
  
  
  
   let now = new Date();
   let year = now.getFullYear();
  
    return (
      <>
        
        {(productInfoResult.isLoading || bankProductResult.isLoading) && (
          <Loading />
        )}

        {(productInfoResult.isLoading || bankProductResult.isLoading) && (
          <SeoHelmet
          title="로딩중입니다."
          description="로딩중입니다."
          keywords="로딩중입니다."
          imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
        />
        )}

        {productInfoResult.error && <LoadingError />}
        {productInfoResult.data && bankProductResult.data && (
          <SavingsProductInfo productData={productInfoResult.data} />
        )}
        {productInfoResult.data && bankProductResult.data && (
          <SeoHelmet
            title={`${productInfoResult.data[0].baseList__fin_prdt_nm} - ${productInfoResult.data[0].baseList__kor_co_nm} ${year}년 적금 상품정보`}
            description={`${productInfoResult.data[0].baseList__fin_prdt_nm} - ${productInfoResult.data[0].baseList__kor_co_nm}의 적금 상품정보입니다. [${year}년]`}
            keywords={`${productInfoResult.data[0].baseList__fin_prdt_nm}`}
            imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
          />
        )}
        {productInfoResult.data && bankProductResult.data && (
          <SavingsBankProductList bankProductResult={bankProductResult.data} />
        )}
      </>
    );
  }

