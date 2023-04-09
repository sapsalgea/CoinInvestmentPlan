import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BankProductList({ bankProductResult }) {
  const onErrorImg = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/image/bankImage/noimage.png`;
  };

  let productOverallData = bankProductResult[0];

  let navigate = useNavigate();

  return (
    <>
      <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue'>
        <div className='px-4 flex items-center'>
          <div className='inline-flex items-center mr-3 text-sm text-gray-900'>
            <img
              className='mr-4 w-8 h-8 rounded-full'
              src={`${process.env.PUBLIC_URL}/image/bankImage/${productOverallData.baseList__fin_co_no}.png`}
              onError={onErrorImg}
              alt={productOverallData.baseList__fin_co_no}
            />
            <div>
              <p className='text-xl font-bold text-gray-900'>
                {productOverallData.baseList__kor_co_nm} 정기예금 상품 리스트
              </p>
              <p>12개월 기준</p>
            </div>
          </div>
        </div>

        <div className=' w-full px-4 sm:px-0 mt-8' role='list'>
          {bankProductResult.map(function (depositData) {
            return (
              <div
                key={
                  depositData.baseList__fin_co_no +
                  depositData.baseList__fin_prdt_cd
                }
                role='listitem'
                className='bg-white cursor-pointer shadow rounded-lg mt-4 flex'
                onClick={()=>{navigate(`/deposit/${depositData.baseList__fin_co_no}/${depositData.baseList__fin_prdt_cd}`)}}
              >
                <div className='w-2.5  h-auto bg-green-600 rounded-tl-md rounded-bl-md' />
                
                <div className='flex justify-between w-full p-6'>
                  <div className='flex items-center sm:basis-10/12'>
                    <h2 className='text-lg sm:text-xl font-semibold leading-6 text-gray-800'>
                      {depositData.baseList__fin_prdt_nm}
                    </h2>
                  </div>

                  <div className='flex flex-col text-center sm:w-28'>
                    <p className= {`mb-1 text-center px-2 text-xs rounded-full sm:px-4 sm:py-1 ${(depositData.optionList__intr_rate_type_nm === "복리")? 'text-blue-900 bg-blue-100' : 'text-red-900 bg-red-100'}`} >
                              {depositData.optionList__intr_rate_type_nm}
                    </p> 
                    <p className='text-sm sm:text-xl font-semibold leading-6 text-gray-900 whitespace-nowrap'>
                      최고 : {depositData.optionList__intr_rate2}
                      <span className='text-sm sm:text-md font-normal text-base'> %</span>
                      <br/>
                      <span className='text-sm sm:text-md font-normal text-base whitespace-nowrap'>
                        기본 : {depositData.optionList__intr_rate} %
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
