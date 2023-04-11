import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnnuityProductList({ result , innerRef  }) {
  
    let navigate = useNavigate();
  
 
    return (
      <div
        className='mt-10 mx-auto w-full sm:w-2/3 lg:w-1/2'
        role='list'
      >
         
  
          {
            result.map(function (resultElement,outsideIndex) {
            
             return(
              resultElement.data
                .map(function (annuityData,insideIndex) {
                  
                  
                  
  
                  return (
                    
                    <div
                      key={
                        annuityData.baseList__fin_co_no +
                        annuityData.baseList__fin_prdt_cd+(outsideIndex*10)+insideIndex+1
                      }
                      role='listitem'
                      className='bg-white cursor-pointer shadow rounded-2xl flex relative mt-5'
                      onClick={()=>{navigate(`/annuity/${annuityData.baseList__fin_co_no}/${annuityData.baseList__fin_prdt_cd}`)}}
                    >
                      
                      <div className='w-full p-8 pb-12 flex items-center justify-between '>
                        <div className='flex flex-col basis-8/12'>
                        
                        <p className='ml-1'>No.{(outsideIndex*10)+insideIndex+1}</p>
                          
        
                          {/* 상품이름 */}
                          <h2 className='text-2xl font-semibold mt-3 leading-6 text-gray-800'>
                            {annuityData.baseList__fin_prdt_nm}
                          </h2>
        
                           {/* 은행 이미지와 은행이름 */}
                           <div className='flex items-center mt-3'>
                             
                              <div className='flex flex-col ml-1 space-y-1'>
                                  <h2 className='text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200'>{annuityData.baseList__kor_co_nm}</h2>
                                  
                              </div>
                          </div>
                       
                        </div>
        
        
                        <div className='flex flex-col w-32'>
                            <p className= {`text-center px-2 text-xs rounded-full sm:px-4 sm:py-1 text-blue-900 bg-blue-100`} >
                              {annuityData.baseList__prdt_type_nm}
                            </p>
                            
                            <p className='mt-1 text-center text-lg font-semibold leading-6 text-gray-900'>
                            수익률<br/>
                            {annuityData.baseList__avg_prft_rate} %      
                            </p>
                        </div>
        
                        
                        
                      </div>
                    </div>
                  );
                })
             )
  
          })
        }
          <div ref={innerRef}>-</div>
  
      </div>
    );
  }

