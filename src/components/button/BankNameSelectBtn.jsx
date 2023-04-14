import { React, useState } from "react";
import BankNameListCard from '../modal/bankSelect/BankNameListCard';


export default function BankNameSelectBtn({ depositBankNameList, setDepositBankNameList, setClickedBankName }) {
  const [showModal, setShowModal] = useState(false);
  const [copyDepositBankNameList, setCopyDepositBankNameList] = useState('');

  return (
    <div className='w-full mr-1'>
      <button
        className='w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        type='button'
        onClick={() => {
          setShowModal(true);
          setCopyDepositBankNameList(JSON.parse(JSON.stringify(depositBankNameList)));
        }}
      >
        은행목록
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto mx-auto max-w-2xl'>
              {/*content*/}
              <div className='h-screen border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>은행목록</h3>
                  <button
                    className='p-1 ml-auto bg-black text-black border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-black  text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      X
                    </span>
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
                    onClick={() => setShowModal(false)}
                  >
                    닫기
                  </button>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => {
                      setShowModal(false);
                      setDepositBankNameList(copyDepositBankNameList);

                      //클릭된 은행을 추린다.
                  
                      const clickedBankNameResult = copyDepositBankNameList.filter(bankItem => bankItem.isSelected).map(selectedBank => selectedBank.baseList__fin_co_no);
                      let clickedBankNameString = clickedBankNameResult.join("^^");
                      setClickedBankName(clickedBankNameString);
                      console.log(clickedBankNameString);
                 
                      
                    }}
                  >
                    검색
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  );
}
