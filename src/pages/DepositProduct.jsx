import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import ProductInfo from '../components/deposit/product/ProductInfo';

export default function DepositProduct() {
  let params = useParams();

  let result = useQuery(
    [`${params.bankCode}_${params.productCode}`],
    () =>
      axios
        .get(
          `https://www.coininvestmentplan.com/api/deposit/product/product_info.php?bankCode=${params.bankCode}&productCode=${params.productCode}`
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
      {result.isLoading && <p>로딩중</p>}
      {result.error && <p>에러남 새로고침필요</p>}
      {result.data && console.log(result.data)}
      {result.data && <ProductInfo productData={result.data}/>}
    </>
  );
}
