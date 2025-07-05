import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
// import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
import PDTab from "../Components/PDTab";
export const metadata = {
  title:
    "KSH Talegaon Premium Industrial and Logistics Park in Pune with Build-to-Suit Infrastructure",
  description:
    "KSH Talegaon is a premium industrial and logistics park in Pune, Maharashtra, offering scalable infrastructure, advanced connectivity, and customized Warehouse solutions",
};
const tabsData = [
  {
    title: "KSH Parks",
    image: "/ParkPage/cpov.png",
  },
  {
    title: "Notable Industries",
    image: "/Slideimgs/ssf1.png",
  },
  {
    title: "Connectivity",
    image: "/Slideimgs/Culture.png",
  },
];
const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        {/* <ParkOverview /> */}
        <PDTab
          tdata={tabsData}
          para="Talegaon I, located near the national highway connecting Mumbai
              and Pune, has emerged as a significant warehousing and logistics
              hub. KSH has established a presence in the center of this
              development in Talegaon I, Pune.
              <br /> <br />
              The Talegaon I hub comprises a number of industries including
              automobile, pharmaceutical, chemical, engineering, and food
              processing."
          title="About Talegaon, Pune"
        />
        <ParkInfo />
        <MapSection />
        {/* <ParkInfra /> */}
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
