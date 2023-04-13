import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavingsProductList({ result , innerRef  }) {
  
    let navigate = useNavigate();
  
    const onErrorImg = (e) => {
      e.target.src = `${process.env.PUBLIC_URL}/image/bankImage/noimage.png`;
    }
    
    return (
      <div
        className='mt-10 mx-auto w-full sm:w-2/3 lg:w-1/2'
        role='list'
      >
         
  
          {
            result.map(function (resultElement,outsideIndex) {
            
             return(
              resultElement.data
                .map(function (savingsData,insideIndex) {
                  
                  
                  
  
                  return (
                    
                    <div
                      key={
                        savingsData.baseList__fin_co_no +
                        savingsData.baseList__fin_prdt_cd+(outsideIndex*10)+(insideIndex+1)
                      }
                      role='listitem'
                      className='bg-white cursor-pointer shadow rounded-2xl flex relative mt-5'
                      onClick={()=>{navigate(`/savings/${savingsData.baseList__fin_co_no}/${savingsData.baseList__fin_prdt_cd}`)}}
                      ref={result.length-1 === outsideIndex && (resultElement.data.length-1)=== insideIndex ?  innerRef : null}
                    >
                      
                      <div className='w-full p-8 pb-12 flex items-center justify-between '>
                        <div className='flex flex-col basis-8/12'>
                        
                        <p>No.{(outsideIndex*10)+insideIndex+1}</p>
                          
        
                          {/* 상품이름 */}
                          <h2 className='text-2xl font-semibold mt-3 leading-6 text-gray-800'>
                            {savingsData.baseList__fin_prdt_nm}
                          </h2>
        
                           {/* 은행 이미지와 은행이름 */}
                           <div className='flex items-center mt-3'>
                              <img
                                alt={`${savingsData.baseList__kor_co_nm} 이미지`}
                                className='rounded-full h-10 w-10 inline' 
                                src={`${process.env.PUBLIC_URL}/image/bankImage/${savingsData.baseList__fin_co_no}.png`} onError={onErrorImg}
                              />
        
                              <div className='flex flex-col ml-1 space-y-1'>
                                  <h2 className='text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200'>{savingsData.baseList__kor_co_nm}</h2>
                                  
                              </div>
                          </div>
                       
                        </div>
        
        
                        <div className='flex flex-col w-32'>
                            <p className= {`text-center px-2 text-xs rounded-full sm:px-4 sm:py-1 ${(savingsData.optionList__intr_rate_type_nm === "복리")? 'text-blue-900 bg-blue-100' : 'text-red-900 bg-red-100'}`} >
                              {savingsData.optionList__intr_rate_type_nm}
                            </p>
                            <p className='mt-1.5 text-center text-xl font-semibold leading-6 text-gray-900'>
                              최고 : {savingsData.optionList__intr_rate2} %      
                            </p>
        
                            <p className='text-center font-normal text-base'>
                                기본 : {savingsData.optionList__intr_rate} %
                            </p>
                        </div>
        
                        
                        
                      </div>
                    </div>
                  );
                })
             )
  
          })
        }
        
      </div>
    );
}
  