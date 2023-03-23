import React from "react";

export default function DepositList({ result }) {
  
  const onErrorImg = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/image/bankImage/noimage.png`;
  }
  
  return (
    <div
      className='mt-10 mx-auto w-full sm:w-2/3 lg:w-1/2'
      role='list'
    >
        {/* {result
        .map(function (depositData,index) {
          return (
            <div
              key={
                depositData.baseList__fin_co_no +
                depositData.baseList__fin_prdt_cd+index+100
              } 
              class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                <div class="flex items-center">
                    <img
                      className='rounded-full h-10 w-10 inline' 
                      src={`${process.env.PUBLIC_URL}/image/bankImage/${depositData.baseList__fin_co_no}.png`} onError={onErrorImg}
                    />

                    <div class="flex flex-col mx-5 space-y-1">
                        <h2 class="text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200">{depositData.baseList__kor_co_nm}</h2>
                        <h2 class="text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200">{depositData.baseList__fin_prdt_nm}</h2>
                        
                    </div>
                </div>

                <h2 class="text-2xl font-semibold text-blue-600 sm:text-4xl">$99 <span class="text-base font-medium">/Month</span></h2>
            </div>
                        );
                      })} */}

      {result
        .map(function (depositData,index) {
          return (
            <div
              key={
                depositData.baseList__fin_co_no +
                depositData.baseList__fin_prdt_cd+index
              }
              role='listitem'
              className='bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30'
            >
              
              <div className='w-full p-8'>
                <div className='md:flex items-center justify-between'>
               
                  <h2 className='text-2xl font-semibold leading-6 text-gray-800'>
                    {depositData.baseList__fin_prdt_nm}
                  </h2>
                  <div className=''>
                    <p className='text-xl md:mt-0 mt-4 font-semibold leading-6 text-gray-900'>
                      최고 : {depositData.optionList__intr_rate2}
                      <span className='font-normal text-base'>%</span>
                      <br />
                      <span className='font-normal text-base'>
                        기본 : {depositData.optionList__intr_rate} %
                      </span>
                    </p>
                  </div>
                </div>

                <div class="flex items-center">
                    <img
                      className='rounded-full h-10 w-10 inline' 
                      src={`${process.env.PUBLIC_URL}/image/bankImage/${depositData.baseList__fin_co_no}.png`} onError={onErrorImg}
                    />

                    <div class="flex flex-col ml-3 space-y-1">
                        <h2 class="text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200">{depositData.baseList__kor_co_nm}</h2>
                        
                    </div>
                </div>
                
              </div>
            </div>
          );
        })}

        {result.length === 0 ? <p>상품이 존재하지 않습니다.</p> : null}
    </div>
  );
}
