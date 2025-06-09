import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";

export const metadata = {
  title:
    "KSH Chakan III Industrial Park and Warehouse in Pune Seamlessly Connected to Chakan Industrial Area",
  description:
    "KSH Chakan III provides industrial park and warehouse in Pune with custom solutions, modern infrastructure, and strategic connectivity to industrial area in Chakan.",
};
const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        <ParkOverview />
        <ParkInfo />
        <MapSection />
        <CharSlide />
        <ParkInfra />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
