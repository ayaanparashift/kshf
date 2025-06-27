import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
// import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import CharSlide from "./componentsf/CharSlide";
import ParkInfra from "./componentsf/ParkInfra";
import CharAcc from "./componentsf/CharAcc";
// import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
export const metadata = {
  title: "KSH INFRA: Industrial & Warehouse Park in Hosur",
  description:
    "Discover KSH Hosur Warehouse Park, the first of KSH INFRA's industrial parks attracting global investors. Setting the benchmark for green industrial infrastructure.",
};

const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        <ParkOverview />
        <ParkInfo />
        {/* <CharSlide /> */}
        <CharAcc />
        <ParkInfra />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
