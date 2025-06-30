// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// const ParkinSpot = ({}) => {
//   return (
//     <div className="bg-[url(/fistfold.png)] bg-cover bg-center z-0 relative">
//       <div className="ml-[max(5%,calc((100vw-1250px)/2))] lg:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] pt-[150px] flex items-center lg:justify-center justify-evenly lg:h-screen xl:gap-[100px] md:gap-[50px] gap-[20px] lg:flex-row flex-col-reverse">
//         {/* Left Side Content */}
//         <div className="flex flex-col flex-1 max-w-full gap-5 xl:gap-10 justify-center relative">
//           <div>
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="fpt-600 xl:text-[50px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[64px]"
//             >
//               KSH Chakan II
//             </motion.h1>
//             <motion.div
//               initial={{ x: -150, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="bg-[#F7E327] h-[10px] w-full"
//             ></motion.div>
//           </div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ once: true, amount: 0 }}
//             className="fsans-500 gradinetText text-[14px] lg:text-[14px] xl:text-[16px] leading-[26px]"
//             // style={{
//             //   backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
//             //   WebkitBackgroundClip: "text",
//             //   WebkitTextFillColor: "transparent",
//             //   backgroundClip: "text",
//             //   color: "transparent",
//             // }}
//           >
//             Our second major development in the area, Chakan Park II houses
//             future-ready, ergonomic, and sustainable industrial spaces. It hosts
//             major manufacturing companies alongside logistics and shipping
//             operators. <br />
//             <br />
//             The park has received EDGE certification, showcasing our commitment
//             to sustainability while ensuring operational cost-efficiency for our
//             customers .
//           </motion.p>
//           <div>
//             <Link href="/contact/#contform">
//               <motion.button
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ once: true, amount: 0 }}
//                 className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group"
//               >
//                 <p>Enquire Now</p>
//                 <img
//                   className="h-[24px] w-[24px]"
//                   src="/downarrow.svg"
//                   alt="Arrow"
//                 />
//               </motion.button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="xl:flex-1 flex flex-col justify-center items-end">
//           <div className="flex items-end justify-center flex-col lg:w-[688.5px] 2xl:w-[810px] lg:h-[476px] 2xl:h-[560px] max-w-full relative">
//             {/* Desktop Image */}
//             <div className="relative">
//               <div className="relative h-fit overflow-hidden flex lg:justify-center justify-end w-full">
//                 {/*  */}
//                 <img
//                   src="/ParkPage/chakan-2/ch2spot.png"
//                   className="object-cover w-full md:inline-block hidden"
//                   alt="some"
//                 />

//                 <motion.div
//                   className="absolute top-0 left-0 w-full h-full z-20 bg-[#092241]"
//                   initial={{ x: 0 }}
//                   whileInView={{ x: "100%" }}
//                   transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//                   viewport={{ once: true, amount: 0 }}
//                 />
//               </div>
//             </div>

//             {/* Mobile Image */}
//             <div>
//               <img
//                 src="/ParkPage/chakan-2/ch2spot.png"
//                 className="object-cover md:hidden inline-block"
//                 alt="some"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParkinSpot;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EnquireNow from "../../Components/EnquireNow"; // adjust path if necessary

const ParkinSpot = ({}) => {
  const [showEnquire, setShowEnquire] = useState(false);

  const handleEnquireClick = (e) => {
    e.preventDefault();
    setShowEnquire(true);
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
  };

  const handleCloseEnquire = () => {
    setShowEnquire(false);
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  };

  return (
    <>
      <div className="bg-[url(/fistfold.png)] bg-cover bg-center z-0 relative">
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] lg:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] pt-[150px] flex items-center lg:justify-center justify-evenly lg:h-screen min-1366:gap-[80px] md:gap-[50px] gap-[20px] lg:flex-row flex-col-reverse">
          {/* Left Side Content */}
          <div className="flex flex-col flex-1 max-w-full gap-5 min-1366:gap-10 justify-center relative">
            <div className="flex flex-col max-w-fit">
              <motion.h1 className="fpt-600 xl:text-[50px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] 2xl:text-[64px]">
                KSH INFRA Chakan II Park
              </motion.h1>
              <motion.div className="bg-[#F7E327] h-[10px] w-full" />
            </div>

            <motion.p className="fsans-500 gradinetText text-[14px]  min-1366:text-[16px] leading-[26px]">
              Chakan Park II is KSH INFRA’s second landmark development in the
              Chakan region, thoughtfully designed to meet the evolving needs of
              modern industry. The park features state-of-the-art, sustainable,
              and ergonomic industrial spaces, and is home to a strong ecosystem
              of global manufacturing companies, logistics providers, and
              shipping operators. <br />
              <br />
              The park has received EDGE certification, showcasing our
              commitment to sustainability while ensuring operational
              cost-efficiency for our customers.
            </motion.p>

            <div>
              <motion.button
                onClick={handleEnquireClick}
                className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group"
              >
                <p>Enquire Now</p>
                <img
                  className="h-[24px] w-[24px] group-hover:-rotate-90 duration-300 transition-transform"
                  src="/downarrow.svg"
                  alt="Arrow"
                />
              </motion.button>
            </div>
          </div>

          {/* Right Side Image */}

          {/* >>>>>>>>>>>>>>>>>>>>>> */}
          {/* >>>>>>>>>>>>>>>>>>>>>> */}
          {/* >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="xl:flex-1 flex flex-col justify-center items-end">
            <div className="flex items-end justify-center flex-col max-w-full relative">
              {/* Desktop Image */}
              <div className="relative">
                <div className="relative xl:flex hidden w-[755px] overflow-hidden lg:justify-center justify-end max-w-full">
                  <img
                    src="/ParkPage/chakan-2/ch2spot.png"
                    className="object-cover w-full md:inline-block hidden"
                    alt="some"
                  />
                  <motion.div className="absolute top-0 left-0 w-full h-full z-20 bg-[#092241]" />
                </div>
              </div>
              {/* Mobile Image */}
              <div>
                <img
                  src="/ParkPage/chakan-2/ch2spot.png"
                  className="object-cover md:hidden inline-block"
                  alt="some"
                />
              </div>
            </div>
            <div className="w-full flex justify-start">
              <p className="text-[#3D5F89] text-[14px] fsans-400 leading-[26px] pt-[12px]">
                *Successfully exited to "Mapletree" in 2021.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showEnquire && (
          <>
            {/* Full-screen dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000]"
              onClick={handleCloseEnquire}
            />

            {/* Full-screen slide-in panel */}
            <motion.div
              className="fixed inset-0 z-[1001001] flex justify-end"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              onClick={handleCloseEnquire}
              exit={{
                x: "100%",
                transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
              }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full md:w-[510px] h-full bg-white shadow-lg overflow-y-auto"
              >
                <EnquireNow closeEnquire={handleCloseEnquire} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ParkinSpot;
