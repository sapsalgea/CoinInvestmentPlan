import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '../components/common/Loading';
import NoData from '../components/common/NoData';
import LoadingError from '../components/common/LoadingError';
import AnnuitySavingSelectBtn from '../components/button/AnnuitySavingSelectBtn';
import AnnuityProductList from '../components/annuity/AnnuityProductList';
import HeadingTextBox from '../components/common/HeadingTextBox';
import SeoHelmet from '../components/metaTag/SeoHelmet';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnuitySavingAnnuityType } from '../store';


export default function AnnuitySaving() {

    let dispatch = useDispatch();
    let annuitySavingAnnuityType = useSelector((state)=>{return state.annuitySavingAnnuityType});

    const [annuityType, setAnnuityType] =  useState(annuitySavingAnnuityType);

    useEffect(()=>{
        dispatch(setAnnuitySavingAnnuityType(annuityType));
    },[dispatch,annuityType])

    

    const notClickedBtnStyle = "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 border  rounded-md transition duration-100";
    const clickedBtnStyle = "bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white";
    const commonBtnStyle = "rounded-md py-4 sm:py-3 px-3 sm:px-6 basis-1/3  text-xs sm:text-base w-full break-keep h-full";


    //무한스크롤
    const fetchRepositories = ({ pageParam = 0 }) => 
        axios.get(`https://www.coininvestmentplan.com/api/annuity_saving/search_annuity.php?prdt_type=${annuityType}&page_num=${pageParam}`,
        { params: { page: pageParam } });
        
      
    let result = useInfiniteQuery(
        [`${annuityType}`], 
        fetchRepositories,
        {
          getNextPageParam: (lastPage, allPages) => {
        
            const nextPage = allPages.length * 10;
            return nextPage 
          }
        }
    )

    
     //무한 스크롤
     const [ref, inView] = useInView();
     const [isScrollOk, setIsScrollOk] = useState(true);
    
     useEffect(() => {
         if (inView) {
          

            let lastCheck = false;
            
            if(result.data){
          //     console.log(result.data.pages);
                for (var i = 0; i < result.data.pages.length; i++) {
                    
                    if(result.data.pages[i].data.length === 0){
                        lastCheck = true; 
                    }
                    
                }
            }

            if(lastCheck){
                setIsScrollOk(false);
            }else{
                setIsScrollOk(true);
            }

            if(isScrollOk){
                result.fetchNextPage()
            }
           
           
         }
         
     }, [inView, result, isScrollOk]);

    let now = new Date();
    let year = now.getFullYear();

    return (
        
        <div>
            <SeoHelmet
                title={`연금저축 수익률 순위 ${year}년 비교 총정리`}
                description={`연금저축 수익률 순위 ${year}년 연금저축 금리 비교 - 금리연동형, 채권형, 주식형, 주식파생형, 혼합주식형,혼합채권형, 재간접형, 혼합자산, 단기금융(MMF) 수익률 정보`}
                keywords='연금저축 금리, 연금저축 순위'
                imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
            />

            <HeadingTextBox headingText={"연금저축"}/>
            <AnnuitySavingSelectBtn annuityType={annuityType} setAnnuityType={setAnnuityType} notClickedBtnStyle={notClickedBtnStyle} clickedBtnStyle={clickedBtnStyle} commonBtnStyle={commonBtnStyle}/>


            <div
                className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'
            >
            
                <hr className="h-px my-8 bg-gray-400 border-0"/>

            </div>

            {result.isLoading &&  <Loading/>}
            {result.error && <LoadingError/>}
            {result.data && result.data.pages[0].data.length === 0 && <NoData />}
            {result.data && result.data.pages[0].data.length >0 && <AnnuityProductList result={result.data.pages} innerRef={ref}/>}
    

        </div>
    );
}

