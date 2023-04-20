import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';
import AnnuityProductInfo from '../components/annuity/product/AnnuityProductInfo';
import SeoHelmet from '../components/metaTag/SeoHelmet';

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
  
  
  
  
    let now = new Date();
    let year = now.getFullYear();
  
    
  
    return (
      <>
        {productInfoResult.isLoading && <Loading />}
        {(productInfoResult.isLoading) && (
          <SeoHelmet
          title="로딩중입니다."
          description="로딩중입니다."
          keywords="로딩중입니다."
          imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
        />
        )}
        {productInfoResult.error && <LoadingError />}
        {productInfoResult.data && (
          <AnnuityProductInfo productData={productInfoResult.data} />
        )}
        {productInfoResult.data && (
          <SeoHelmet
            title={`${productInfoResult.data[0].baseList__fin_prdt_nm} - ${year}년 연금저축 상품정보`}
            description={`${productInfoResult.data[0].baseList__fin_prdt_nm} - ${productInfoResult.data[0].baseList__prdt_type_nm} 연금저축 상품정보입니다.[${year}년]`}
            keywords={`${productInfoResult.data[0].baseList__fin_prdt_nm}`}
            imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
          />
        )}
      </>
    );
  }
  

