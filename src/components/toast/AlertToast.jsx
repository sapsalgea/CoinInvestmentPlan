import React, { useEffect } from "react";

export default function AlertToast({ setToast, text }) {

  useEffect(() => {
    const timer = setTimeout(() => {
        console.log("dd");
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="fixed z-50 mx-auto flex items-center w-auto p-4 text-gray-500 bg-red-700 divide-gray-200" role="alert">
        <div className="text-sm font-normal text-white">{text}</div>
    </div>
    
    
  );
}
