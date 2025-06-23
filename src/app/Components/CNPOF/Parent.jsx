// //////////////
// //////////////
// //////////////
// //////////////
// //////////////
// //////////////
// //////////////
// //////////////
// //////////////
// //////////////

"use client";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import TabLineHead from "../Heading/TabLineHead";
import { motion, AnimatePresence } from "framer-motion";

const Parent = ({ staticData }) => {
  const [acbtn, setAcBtn] = useState("Case Studies");
  const todos = staticData[acbtn] || [];
  const [activeSidebar, setActiveSidebar] = useState(
    todos[0] ? todos[0].id : null
  );

  useEffect(() => {
    setActiveSidebar(todos[0] ? todos[0].id : null);
  }, [todos]);

  return (
    <div className="bg-[url(/spotlightbg.webp)] min-1440:h-[95vh] lg:h-[105vh] h-[120vh] flex items-center justify-center bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-center fix12 h-fit">
        <div className="flex flex-col justify-center w-full h-full">
          <TabLineHead
            acbtn={acbtn}
            setAcBtn={setAcBtn}
            heading={"Spotlight"}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={acbtn}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
              exit={{
                opacity: 0,
                transition: { duration: 0.7, ease: [0.7, 0, 0.4, 1] },
              }}
              className={`flex flex-col mt-0 lg:mt-[-35px] flex-grow md:h-fit items-center justify-center h-[550px] lg:min-h-[300px]`}
            >
              <Main
                todos={todos}
                acbtn={acbtn}
                activeSidebar={activeSidebar}
                setActiveSidebar={setActiveSidebar}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Parent;
