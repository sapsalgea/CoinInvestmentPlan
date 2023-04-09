import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import ProductInfo from '../components/deposit/product/ProductInfo';
import BankProductList from '../components/deposit/product/BankProductList';
import Loading from '../components/common/Loading';
import LoadingError from '../components/common/LoadingError';

export default function DepositProduct() {
  let params = useParams();

  let productInfoResult = useQuery(
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


  let bankProductResult = useQuery(
    [`bank_product_${params.bankCode}`],
    () =>
      axios
        .get(
          `https://www.coininvestmentplan.com/api/deposit/product/bank_product_list.php?bankCode=${params.bankCode}`
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
      {productInfoResult.data && bankProductResult.data && <ProductInfo productData={productInfoResult.data}/>}
      {productInfoResult.data && bankProductResult.data && <BankProductList bankProductResult={bankProductResult.data}/>}

    </>
  );
}
