import React from 'react';
import { Link } from 'react-router-dom';

export default function AnnuityProductList({ result , innerRef  }) {
  

  
 
    return (
      <div
        className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'
        role='list'
      >
         
  
          {
            result.map(function (resultElement,outsideIndex) {
            
             return(
              resultElement.data
                .map(function (annuityData,insideIndex) {
                  
                  
                  
  
                  return (
                    
                    <Link
                      key={
                        annuityData.baseList__fin_co_no +
                        annuityData.baseList__fin_prdt_cd+(outsideIndex*10)+(insideIndex+1)
                      }
                      role='listitem'
                      className='bg-white cursor-pointer shadow rounded-2xl flex relative mt-5'
                      to={`/annuity/${annuityData.baseList__fin_co_no}/${annuityData.baseList__fin_prdt_cd}`}
                      ref={result.length-1 === outsideIndex && (resultElement.data.length-1)=== insideIndex ?  innerRef : null}
                    >
                      
                      <div className='w-full p-8 pb-12 flex items-center justify-between '>
                        <div className='flex flex-col basis-8/12 mr-1'>
                        
                        <p className='ml-1 text-sm sm:text-base'>No.{(outsideIndex*10)+insideIndex+1}</p>
                          
        
                          {/* 상품이름 */}
                          <h2 className='text-xl sm:text-2xl font-semibold mt-1 sm:mt-1.5 text-gray-800'>
                            {annuityData.baseList__fin_prdt_nm}
                          </h2>
        
                           {/* 은행 이미지와 은행이름 */}
                           <div className='flex items-center mt-1 sm:mt-1.5'>
                             
                              <div className='flex flex-col ml-1 space-y-1'>
                                  <h2 className='text-sm font-medium text-gray-700 sm:text-xl dark:text-gray-200'>{annuityData.baseList__kor_co_nm}</h2>
                                  
                              </div>
                          </div>
                       
                        </div>
        
        
                        <div className='flex flex-col w-24 sm:w-32'>
                            <p className= {`text-center px-2 text-xs rounded-full sm:px-4 py-0.5 sm:py-1 text-blue-900 bg-blue-100`} >
                              {annuityData.baseList__prdt_type_nm}
                            </p>
                            
                            <p className='mt-1 text-center text-base sm:text-lg font-semibold text-gray-900'>
                            수익률<br/>
                            {annuityData.baseList__avg_prft_rate} %      
                            </p>
                        </div>
        
                        
                        
                      </div>
                    </Link>
                  );
                })
             )
  
          })
        }
    
  
      </div>
    );
  }

