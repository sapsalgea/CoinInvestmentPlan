import React, { useState } from "react";

export default function BankNameListCard({ depositBankNameList, topFinGrpNo }) {

  const onErrorImg = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/image/bankImage/noimage.png`;
  };

  const[copyDepositBankNameList, setCopyDepositBankNameList] =  useState([...depositBankNameList]);
  

  return (
    <>

      <p className='font-black text-black text-2xl ml-6 my-3.5'>
        {topFinGrpNo === "020000" ? "은행" : "저축은행"}
      </p>

      <div className='flex flex-wrap justify-center'>
        {depositBankNameList
          
          .filter((bankItem) => bankItem.topFinGrpNo === topFinGrpNo)
          .sort((a, b) =>  b.baseList__kor_co_nm > a.baseList__kor_co_nm ? -1 : 1)
          .map((bankItem, index) => {
            return (
              <div
                className={` ${bankItem.isSelected ? 'grayscale-0 border-green-500 font-bold text-blue-600 bg-gray-100' : 'grayscale border-gray-200'} flex flex-col items-center h-32 p-1 m-1 border-solid border-2  `}

                key={bankItem.baseList__fin_co_no + index}
                onClick={()=>{
                  let clickedIndex = copyDepositBankNameList.findIndex(item => item.baseList__kor_co_nm === bankItem.baseList__kor_co_nm);
                  let sampleList = [...copyDepositBankNameList];
                  sampleList[clickedIndex].isSelected = !(sampleList[clickedIndex].isSelected);
                  setCopyDepositBankNameList(sampleList);
           
                }}
              >
                <img
                  className='rounded-full h-10 w-10 inline mt-5'
                  src={`${process.env.PUBLIC_URL}/image/bankImage/${bankItem.baseList__fin_co_no}.png`}
                  onError={onErrorImg}
                  alt={bankItem.baseList__fin_co_no}
                />
                <p className='p-1 w-24 text-center text-sm mb-4'>{bankItem.baseList__kor_co_nm}</p>
                
              </div>
            );
          })}
      </div>

      {topFinGrpNo === "020000" ? <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> : null}
      
    </>
  );
}
