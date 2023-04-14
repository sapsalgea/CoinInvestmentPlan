import React from "react";

export default function HeadingTextBox({headingText}) {
  return (
    <div className='mt-10 mx-auto text-center w-full sm:w-2/3 lg:w-1/2'>
      <h1 className='sm:text-3xl text-2xl font-bold title-font text-gray-900'>
        {headingText}
      </h1>
      <hr className='h-px mt-4 w-1/3 border-black border-2 mx-auto' />

      <hr className='h-px my-8 bg-gray-400 border-0' />
    </div>
  );
}
