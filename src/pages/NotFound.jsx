import React from 'react';
import PageHeader from '../components/PageHeader'
import SeoHelmet from '../components/metaTag/SeoHelmet';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/scroll/ScrollToTop';
import NoPage from '../components/common/NoPage';

export default function NotFound() {
    return (
        <>
            <SeoHelmet
                title={`페이지를 찾을 수 없습니다.`}
                description={`페이지를 찾을 수 없습니다.`}
                keywords='페이지를 찾을 수 없습니다.'
                imgsrc={`${process.env.PUBLIC_URL}/image/pageLogo/coininvestmentplan.png`}
            />
            <div className='flex flex-col h-screen'>
            <ScrollToTop/>
            <PageHeader></PageHeader>
            <div className="flex-1 m-0 p-0">
               <NoPage />
            </div>
            <Footer/>
            </div>
        </>
        
    );
}

