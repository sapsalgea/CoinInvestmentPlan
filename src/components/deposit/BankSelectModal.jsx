import React, { useState } from "react";
import AlertToast from '../toast/AlertToast';
import BankNameListCard from "./BankNameListCard";

export default function BankSelectModal({ setShowModal, setDepositBankNameList , setClickedBankName, copyDepositBankNameList, setCopyDepositBankNameList, setBankingSector}) {

  const [toast, setToast] = useState(false);

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      
        <div className='relative w-auto mx-auto max-w-2xl'>
          {/*content*/}
          <div className='h-screen border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>은행목록</h3>
             
              <button 
                className="bg-white border hover:bg-orange-200 text-red-500 font-bold py-2 px-4 rounded"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 overflow-y-scroll  h-1/8'>
              <BankNameListCard
                copyDepositBankNameList={copyDepositBankNameList}
                setCopyDepositBankNameList={setCopyDepositBankNameList}
                topFinGrpNo='020000'
              />
              <BankNameListCard
                copyDepositBankNameList={copyDepositBankNameList}
                setCopyDepositBankNameList={setCopyDepositBankNameList}
                topFinGrpNo='030300'
              />

              <button
                type='button'
                className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'
              ></button>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => {
                    setShowModal(false);
                }}
              >
                닫기
              </button>

              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => {

                  if(copyDepositBankNameList.filter((bankItem) => bankItem.isSelected).length === 0){
                    setToast(true);
                  }else{

                    setShowModal(false);
                    setDepositBankNameList(copyDepositBankNameList);
                    setBankingSector("bank-selected");
                    //클릭된 은행을 추린다.

                    const clickedBankNameResult = copyDepositBankNameList
                        .filter((bankItem) => bankItem.isSelected)
                        .map((selectedBank) => selectedBank.baseList__fin_co_no);
                    let clickedBankNameString = clickedBankNameResult.join("^^");
                    setClickedBankName(clickedBankNameString);
                    //console.log(clickedBankNameString);
                    
                  }
                  
                }}
              >
                검색
              </button>
            </div>
          </div>
        </div>

        {toast && <AlertToast setToast={setToast} text="한가지 이상의 은행을 선택하십시오." />}

      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>

      
    </>
  );
}
