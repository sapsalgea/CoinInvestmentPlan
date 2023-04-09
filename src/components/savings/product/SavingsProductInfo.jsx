import React from 'react';

export default function SavingsProductInfo({productData}) {

    const onErrorImg = (e) => {
        e.target.src = `${process.env.PUBLIC_URL}/image/bankImage/noimage.png`;
    };
    
    let productOverallData = productData[0];

    


  return (
    
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue'>
          <header className='mb-4 lg:mb-6 not-format'>
            <div className='flex items-center mb-3 not-italic'>
              <div className='inline-flex items-center mr-3 text-sm text-gray-900'>
                <img
                  className='mr-4 w-16 h-16 rounded-full'
                  src={`${process.env.PUBLIC_URL}/image/bankImage/${productOverallData.baseList__fin_co_no}.png`}
                  onError={onErrorImg}
                  alt={productOverallData.baseList__fin_co_no}
                />
                <div>
                  <p
                    className='text-xl font-bold text-gray-900'
                  >
                    {productOverallData.baseList__kor_co_nm}
                  </p>

                  <p className='text-xl font-bold text-gray-700'>
                    {productOverallData.baseList__fin_prdt_nm}
                  </p>
                  
                
                </div>
              </div>  
            </div>

            <p className="text-gray-500 mb-4">공시 시작일 : {productOverallData.baseList__dcls_strt_day.substr(0, 4) + '년 ' + productOverallData.baseList__dcls_strt_day.substr(4, 2) + '월 ' + productOverallData.baseList__dcls_strt_day.substr(6, 2)+ '일'}</p>

            <hr className='mb-4'/>


            { 

              productData.filter(item => item.optionList__intr_rate_type === "S").length > 0 ? 
              <section className='mb-4'>

                <h2 className='text-lg font-extrabold leading-tight text-gray-900'>
                  ● 단리
                </h2>
            
            
                    
                    


                    <div className="max-w-full mx-4 sm:mx-auto ">
                        <div className="sm:flex sm:space-x-4">
                        {
                            productData
                            .filter(item => item.optionList__intr_rate_type === "S")
                            .filter(item => item.optionList__rsrv_type === "F")
                            .sort((a, b) => a.optionList__save_trm - b.optionList__save_trm)
                            .map((item,index)=>{
                            return(
                                        <div key={index+"S"} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                            <div className="bg-white p-5">
                                                <div className="flex items-center justify-center">
                                                    <div className=" sm:mt-0 sm:ml-2 text-center ">
                                                        <h3 className="text-sm leading-6 font-medium text-black">{item.optionList__save_trm}개월</h3>
                                                        <p className="text-md font-bold text-black">최고 : {item.optionList__intr_rate2}%</p>
                                                        {
                                                            parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2)) === 0 
                                                            ? <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}%</p>
                                                            : <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}% + 우대:{parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2))}%</p>
                                                        }

                                                        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{item.optionList__rsrv_type_nm}</span>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>



                    <div className="max-w-full mx-4 sm:mx-auto ">
                        <div className="sm:flex sm:space-x-4">
                        {
                            productData
                            .filter(item => item.optionList__intr_rate_type === "S")
                            .filter(item => item.optionList__rsrv_type === "S")
                            .sort((a, b) => a.optionList__save_trm - b.optionList__save_trm)
                            .map((item,index)=>{
                            return(
                                        <div key={index+"S"} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                            <div className="bg-white p-5">
                                                <div className="flex items-center justify-center">
                                                    <div className=" sm:mt-0 sm:ml-2 text-center ">
                                                        <h3 className="text-sm leading-6 font-medium text-black">{item.optionList__save_trm}개월</h3>
                                                        <p className="text-md font-bold text-black">최고 : {item.optionList__intr_rate2}%</p>
                                                        {
                                                            parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2)) === 0 
                                                            ? <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}%</p>
                                                            : <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}% + 우대:{parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2))}%</p>
                                                        }

                                                        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{item.optionList__rsrv_type_nm}</span>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
              

              
                <hr className='mt-4'/>
              </section>

              : null
            }





            { 

            productData.filter(item => item.optionList__intr_rate_type === "M").length > 0 ? 
            <section className='mb-4'>

              <h2 className='text-lg font-extrabold leading-tight text-gray-900'>
                ● 복리
              </h2>


                  
                  <div className="max-w-full mx-4 sm:mx-auto ">
                      <div className="sm:flex sm:space-x-4">
                      {
                        productData
                        .filter(item => item.optionList__intr_rate_type === "M")
                        .filter(item => item.optionList__rsrv_type === "F")
                        .sort((a, b) => a.optionList__save_trm - b.optionList__save_trm)
                        .map((item,index)=>{
                            return(
                                    <div key={index+"M"} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                        <div className="bg-white p-5">
                                            <div className="flex items-center justify-center">
                                                <div className=" sm:mt-0 sm:ml-2 text-center ">
                                                    <h3 className="text-sm leading-6 font-medium text-black">{item.optionList__save_trm}개월</h3>
                                                    <p className="text-md font-bold text-black">최고 : {item.optionList__intr_rate2}%</p>
                                                    {
                                                        parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2)) === 0 
                                                        ? <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}%</p>
                                                        : <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}% + 우대:{parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2))}%</p>
                                                    }
                                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{item.optionList__rsrv_type_nm}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            })
                          }
                      </div>
                  </div>


                  <div className="max-w-full mx-4 sm:mx-auto ">
                      <div className="sm:flex sm:space-x-4">
                      {
                        productData
                        .filter(item => item.optionList__intr_rate_type === "M")
                        .filter(item => item.optionList__rsrv_type === "S")
                        .sort((a, b) => a.optionList__save_trm - b.optionList__save_trm)
                        .map((item,index)=>{
                            return(
                                    <div key={index+"M"} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                                        <div className="bg-white p-5">
                                            <div className="flex items-center justify-center">
                                                <div className=" sm:mt-0 sm:ml-2 text-center ">
                                                    <h3 className="text-sm leading-6 font-medium text-black">{item.optionList__save_trm}개월</h3>
                                                    <p className="text-md font-bold text-black">최고 : {item.optionList__intr_rate2}%</p>
                                                    {
                                                        parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2)) === 0 
                                                        ? <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}%</p>
                                                        : <p className="text-xs font-bold text-gray-400 whitespace-nowrap">기본:{item.optionList__intr_rate}% + 우대:{parseFloat((item.optionList__intr_rate2 - item.optionList__intr_rate).toFixed(2))}%</p>
                                                    }
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{item.optionList__rsrv_type_nm}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            })
                          }
                      </div>
                  </div>



              <hr className='mt-4'/>
            </section>

            : null
            }
            

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


            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3 '>
              ● 가입대상
              </h2>

              <div>
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 mr-2 text-sm font-extrabold text-gray-800 bg-gray-100 rounded dark:bg-gray-700">
                  {productOverallData.baseList__join_member}
                </span>
              </div>

              <hr className='mt-4'/>
            </section>



            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3'>
              ● 만기 후 이자율
              </h2>

              <div>

                <p className='whitespace-pre-line'>
                  {productOverallData.baseList__mtrt_int}
                </p>
                

              </div>

              <hr className='mt-4'/>
            </section>

            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3 '>
              ● 우대조건
              </h2>

              <div>

                <p className='whitespace-pre-line'>
                  {productOverallData.baseList__spcl_cnd}
                </p>
                

              </div>

              <hr className='mt-4'/>
            </section>



            <section className='mb-4'>
              <h2 className=' text-lg font-extrabold leading-tight text-gray-900 mb-3 '>
              ● 기타 유의사항
              </h2>

              <div>

                <p className='whitespace-pre-line'>
                  {productOverallData.baseList__etc_note}
                </p>
                

              </div>

              <hr className='mt-4'/>
            </section>


            
            

          </header>
        </div>
      </div>
    </main>
  );
}
