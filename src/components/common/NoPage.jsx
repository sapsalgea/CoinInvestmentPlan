import React from 'react';

export default function NoPage() {
    return (
        <div className='mt-10 mx-auto w-full sm:w-2/3 xl:w-1/2'>
            <div
              className='flex p-4 mb-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50'
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
                <span className='font-medium'>불편을 드려 죄송합니다.</span> 페이지를 찾을 수 없습니다. <br/><a className='text-red-700' href="/">☞ 홈으로 이동</a> 
              </div>
            </div>
          </div>
    );
}

