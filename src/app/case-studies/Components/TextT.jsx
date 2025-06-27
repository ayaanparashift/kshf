import React from "react";

const TextT = () => {
  return (
    <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
      <div className="fix12 ">
        <div className="w-full flex flex-col">
          {/*  */}
          <div className="overflow-x-hidden h-fit w-full">
            <div
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // viewport={{ once: true, amount: 0.1 }}
              // transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              className="overflow-x-hidden h-fit md:whitespace-nowrap"
            >
              <h2
                className={`leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px]  fpt-500 text-[#fff] linehead-text`}
              >
                What our clients say!
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:flex-row flex-col-reverse gap-0 bg-[#EEF0F3] p-[20px] lg:p-[50px] min-1366:h-[600px] lg:h-[550px]">
            <div className="flex flex-[0.8] flex-col-reverse lg:flex-col gap-[20px]">
              <p className="fsans-700 text-[18px] lg:text-[22px] text-[#092241] uppercase">
                - Harshwardhan nagalipada
              </p>
              <p className="min-1366:text-[60px] xl:text-[56px] lg:text-[44px] text-[28px] fpt-400 text-[#424242] leading-[110%]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            <div className="h-full lg:flex-row flex-col w-full lg:flex-[0.2] flex items-end">
              <img
                className="lg:w-full w-[40px]"
                src="/caseInside/csq.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextT;
