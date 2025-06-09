import Link from "next/link";
import React from "react";

const ParkOvBtn = () => {
  return (
    <Link
      href='/parks'
      className='fsans-600 text-[16px] povbtn text-white border border-white w-[220px] min-1440:w-[270px] justify-center py-[11.5px] flex items-center gap-[10px]'
    >
      <p className='relative z-[10]'>Park Overview</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        className='relative z-[10]'
      >
        <g clipPath='url(#clip0_2371_8049)'>
          <path
            d='M4.58771 19.1603L18.2422 6.38672'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.2452 17.2066L19.2452 6.35331C19.2452 5.81973 18.7829 5.38718 18.2125 5.38718L6.50391 5.38718'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_2371_8049'>
            <rect
              width='24'
              height='24'
              fill='white'
              transform='translate(24 24) rotate(-180)'
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default ParkOvBtn;
