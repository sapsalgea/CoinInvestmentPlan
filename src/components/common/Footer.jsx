import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'>
        <div
          className='flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
          role='alert'
        >
          <svg
            aria-hidden='true'
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Danger_alert</span>
          <div>
            <span className='font-bold'>서비스 유의사항</span>
            <ul className='mt-1.5 list-disc '>
              <li>
                본 서비스의 금리정보는 금융감독원 '금융상품 한눈에'에서 제공받고
                있는 정보입니다.
              </li>
              <li>
                본 서비스는 빠르고 정확한 정보를 제공하기 위해 노력하고 있으나,
                각 금융회사의 상품 정보(이자율, 적립유형 등)가 수시로 변경되어
                지연공지 될 수 있습니다.
              </li>
              <li>
                거래 전, 반드시 상품정보를 해당 금융회사에서 확인 및 문의하시기
                바랍니다.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer aria-label='Site Footer' className='bg-gray-100'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
          <div className='absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8'>
            <button
              className='inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4'
              onClick={()=>{window.scrollTo(0, 0);}}
            >
              <span className='sr-only'>Back to top</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          <div className='lg:flex lg:items-end lg:justify-between'>
            <div>
              <div className='flex justify-center lg:justify-start'>
                <Link
                  to={'/'}
                 className='text-teal-600 text-2xl font-bold'>CoinInvestmentPlan</Link>
              </div>

              <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
                이자가 높은 예적금상품 및 연금저축상품을 찾고 계신가요?<br/>
                CoinInvestmentPlan에서 한눈에 살펴보실 수 있습니다.
              </p>
            </div>

            <nav aria-label='Footer Nav' className='mt-12 lg:mt-0'>
              <ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12'>
                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to={'/deposit'}
                  >
                    정기예금
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to={'/savings'}
                  >
                    적금
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to={'/annuity'}
                  >
                    연금저축
                  </Link>
                </li>

               
              </ul>
            </nav>
          </div>

          <p className='mt-12 text-center text-sm text-gray-500 lg:text-right'>
            Email : sapsalgea@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}
