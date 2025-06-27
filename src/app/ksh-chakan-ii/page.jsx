import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import CharAcc from "../ksh-chakan-i/componentsf/CharAcc";
// import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";

export const metadata = {
  title: "Grade A Industrial & Warehouse in Chakan II, Pune - Maharashtra",
  description:
    "Discover Chakan Park II, a future-ready and sustainable industrial park in Pune, Maharashtra. With EDGE certification, it offers ergonomic design, cost savings, and easy access to key transportation hubs.",
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
        {/* <CharSlide /> */}
        <CharAcc />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
