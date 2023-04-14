import React from 'react';

export default function LoadingError() {
    return (
        <>
          <div className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'>
            <div
              className='flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50'
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
      
              <div>
                <span className='font-medium'>에러가 발생했습니다.</span> 새로고침을 해주세요.
              </div>
            </div>
          </div>
        </>
    );
}

