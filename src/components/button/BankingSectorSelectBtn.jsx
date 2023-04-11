import React, { useState } from "react";
import BankSelectModal from '../modal/bankSelect/BankSelectModal';

export default function BankingSectorSelectBtn({
  bankingSector,
  setBankingSector,
  notClickedBtnStyle,
  clickedBtnStyle,
  commonBtnStyle,
  depositBankNameList,
  setDepositBankNameList,
  setClickedBankName,
  
}) {
  const [showModal, setShowModal] = useState(false);
  const [copyDepositBankNameList, setCopyDepositBankNameList] = useState("");
  

  return (
    <div className='flex items-center mt-10'>
      <div className='mx-auto w-full sm:w-2/3 lg:w-1/2'>
        <span className='inline-block text-gray-500 text-sm md:text-base font-semibold '>
          금융권역
        </span>

        <div className='flex items-center mt-2 flex-nowrap'>
          <button
            onClick={() => {
              setBankingSector("all-bankingSector");
              setClickedBankName("no-data");
            }}
            className={`${
              bankingSector === "all-bankingSector"
                ? clickedBtnStyle
                : notClickedBtnStyle
            } ${commonBtnStyle} whitespace-nowrap`}
            id='monthly'
          >
            전체
          </button>

          <button
            onClick={() => {
              setBankingSector("020000");
              setClickedBankName("no-data");
            }}
            className={`${
              bankingSector === "020000" ? clickedBtnStyle : notClickedBtnStyle
            } ${commonBtnStyle} whitespace-nowrap`}
            id='monthly'
          >
            은행
          </button>

          <button
            onClick={() => {
              setBankingSector("030300");
              setClickedBankName("no-data");
            }}
            className={`${
              bankingSector === "030300" ? clickedBtnStyle : notClickedBtnStyle
            } ${commonBtnStyle} whitespace-nowrap`}
            id='annually'
          >
            저축은행
          </button>

          <button
            onClick={() => {
              
              setShowModal(true);
              setCopyDepositBankNameList(
                JSON.parse(JSON.stringify(depositBankNameList))
              );
            }}
            className={`${
              bankingSector === "bank-selected"
                ? clickedBtnStyle
                : notClickedBtnStyle
            } ${commonBtnStyle} whitespace-nowrap`}
            id='annually'
          >
            은행선택
            <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {depositBankNameList.filter((bankItem) => bankItem.isSelected).length}
            </span>
          </button>

          

          {showModal ? (
            <BankSelectModal 
                setBankingSector={setBankingSector}
                setShowModal={setShowModal}
                setDepositBankNameList={setDepositBankNameList}
                setClickedBankName={setClickedBankName}
                copyDepositBankNameList={copyDepositBankNameList}
                setCopyDepositBankNameList={setCopyDepositBankNameList}

            />
            
          ) : null}
        </div>
      </div>
    </div>
  );
}
