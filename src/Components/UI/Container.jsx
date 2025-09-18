import React from 'react'


function Container({ children, className }) {
  return (
    <div className={`max-w-[1360px] mx-auto px-1 sm:px-[3.75rem]  ${className}`}>{children}</div>
  );
}


export default Container;
