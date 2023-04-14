import React from 'react';

export default function AnnuityProductInfo ({productData}) {

   
    let productOverallData = productData[0];

    let optionItemTitleStyle = "font-semibold bg-gray-100 py-2";
    let optionItemContentStyle = "py-2";
    


  return (
    
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white'>
      <div className='flex justify-between px-2 sm:px-4 mx-auto max-w-screen-xl '>
        <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue'>
          <header className='mb-4 lg:mb-6 not-format'>
          <div className='flex justify-center sm:justify-start items-center mb-3'>
                <div className='flex items-center mr-3 text-sm text-gray-900'>
               
                <div className='text-center'>
                  <p className= 'mx-auto sm:ml-1 mb-1.5 text-center w-40 px-2 text-xs rounded-full sm:px-4 py-0.5 sm:py-1 text-blue-900 bg-blue-100' >
                              상품유형 : {productOverallData.baseList__prdt_type_nm}
                  </p>
                  <p
                    className='text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left'
                  >
                    {productOverallData.baseList__kor_co_nm}
                  </p>

                  <p className='text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left'>
                    {productOverallData.baseList__fin_prdt_nm}
                  </p>
                  
                
                </div>
              </div>  
            </div>

            <p className="text-sm sm:text-base text-gray-500 mb-4 text-center sm:text-left">공시 시작일 : {productOverallData.baseList__dcls_strt_day.substr(0, 4) + '년 ' + productOverallData.baseList__dcls_strt_day.substr(4, 2) + '월 ' + productOverallData.baseList__dcls_strt_day.substr(6, 2)+ '일'}</p>
            

            <hr className='mb-4'/>

    
            <div className="px-0 my-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
              <div className='bg-blue-700 p-4 mb-4'>
                <p className='text-center sm:text-3xl text-lg font-bold text-white'>연평균 수익률 : {productOverallData.baseList__avg_prft_rate}%</p>
              </div>
              <div className="grid row-gap-4 grid-cols-3">
                <div className="text-center border-r-2 ">
                  <h6 className="sm:text-3xl font-bold text-deep-purple-accent-400">{productOverallData.baseList__btrm_prft_rate_1 ? productOverallData.baseList__btrm_prft_rate_1+"%" : "-"}</h6>
                  <p className="text-xs sm:text-sm font-bold break-keep">1년전 수익률</p>
                </div>
                <div className="text-center border-r-2">
                  <h6 className="sm:text-3xl font-bold text-deep-purple-accent-400">{productOverallData.baseList__btrm_prft_rate_2 ? productOverallData.baseList__btrm_prft_rate_2+"%" : "-"}</h6>
                  <p className="text-xs sm:text-sm font-bold break-keep">2년전 수익률</p>
                </div>
                <div className="text-center">
                  <h6 className="sm:text-3xl font-bold text-deep-purple-accent-400">{productOverallData.baseList__btrm_prft_rate_3 ? productOverallData.baseList__btrm_prft_rate_3+"%" : "-"}</h6>
                  <p className="text-xs sm:text-sm font-bold break-keep">3년전 수익률</p>
                </div>
              </div>
            </div>


            





            <section className='mb-4'>
              <h2 className='text-lg font-extrabold leading-tight text-gray-900 mb-3'>
                ● 연금종류명
              </h2>

              <div>
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 mr-2 text-sm font-extrabold text-gray-800 bg-gray-100 rounded dark:bg-gray-700">
                  {productOverallData.baseList__pnsn_kind_nm}
                </span>
              </div>

              <hr className='mt-4'/>
            </section>
            

            <section className='mb-4'>
              <h2 className='text-lg font-extrabold leading-tight text-gray-900 mb-3'>
                ● 가입방법
              </h2>

              <div>

                {
                  productOverallData.baseList__join_way.split(",").map((item, index)=>{
                    return <span key={index+"joinway"} id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 mr-2 text-sm font-extrabold text-gray-800 bg-gray-100 rounded dark:bg-gray-700">
                    {item}
                  </span>
                  })
                }
                

              </div>

              <hr className='mt-4'/>
            </section>


           

            {productOverallData.baseList__guar_rate ?
                <section className='mb-4'>
                <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3 '>
                ● 최저 보증이율
                </h2>

                <div>
                    <p className='whitespace-pre-line'>
                    {productOverallData.baseList__guar_rate}
                    </p>
                </div>

                <hr className='mt-4'/>
                </section>
            : null}


            {productOverallData.baseList__etc ?
            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3'>
              ● 기타사항
              </h2>

              <div>

                <p className='whitespace-pre-line'>
                  {productOverallData.baseList__etc}
                </p>
                

              </div>

              <hr className='mt-4'/>
            </section>
            :null
            }

            {productOverallData.baseList__sale_co ?
            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3 '>
              ● 판매사
              </h2>

              <div>

                <p className='whitespace-pre-line'>
                  {productOverallData.baseList__sale_co}
                </p>
                

              </div>

              <hr className='mt-4'/>
            </section>
            :null}


            


            

            {
              productData.map((item, index)=>{
                return <div key={item.optionList__pnsn_recp_trm_nm+index}>
                          <div  className='grid grid-cols-2 sm:grid-cols-4  text-center mb-10 sm:p-2'>
                            <p className='col-span-full font-bold bg-blue-700 text-white py-2'>상품옵션 {index+1}</p>

                            <p className={`${optionItemTitleStyle}`}>연금수령기간</p>
                            <p className={`${optionItemContentStyle}`}>{item.optionList__pnsn_recp_trm_nm}</p>
                            <p className={`${optionItemTitleStyle}`}>연금 가입연령</p>
                            <p className={`${optionItemContentStyle}`}>{item.optionList__pnsn_entr_age_nm}</p>

                            <p className={`${optionItemTitleStyle}`}>월 납입액</p>
                            <p className={`${optionItemContentStyle}`}>{item.optionList__mon_paym_atm_nm}</p>
                            <p className={`${optionItemTitleStyle}`}>납입기간</p>
                            <p className={`${optionItemContentStyle}`}>{item.optionList__paym_prd_nm}</p>

                            <p className={`${optionItemTitleStyle}`}>연금 개시연령</p>
                            <p className={`${optionItemContentStyle}`}>{item.optionList__pnsn_strt_age_nm}</p>
                            <p className={`${optionItemTitleStyle}`}>연금 수령액</p>
                            <p className={`${optionItemContentStyle}`}>{parseInt(item.optionList__pnsn_recp_amt).toLocaleString('ko-KR')}원</p>

                          </div>
                          
                        </div>
              })
            }

            
            

          </header>
        </div>
      </div>
    </main>
  );
}


