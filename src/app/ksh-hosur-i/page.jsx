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
import PDTab from "../Components/PDTab";
// import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
export const metadata = {
  title: "KSH INFRA: Industrial & Warehouse Park in Hosur",
  description:
    "Discover KSH Hosur Warehouse Park, the first of KSH INFRA's industrial parks attracting global investors. Setting the benchmark for green industrial infrastructure.",
};
const tabsData = [
  {
    title: "Notable Industries",
    image: "/ParkPage/hosur-1/hisf.webp",
    simage: "/ParkPage/hosur-1/hibf.webp",
  },
  {
    title: "Connectivity",
    image: "/ParkPage/hosur-1/hcsf.webp",
    simage: "/ParkPage/hosur-1/hcbf.webp",
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
          bwidth={838}
          tdata={tabsData}
          title="About Hosur, Bangalore"
          para="Located just outside Bangalore, Hosur has rapidly emerged as a preferred destination for manufacturing and industrial growth. With excellent connectivity and access to major transport corridors, it offers a strategic advantage for businesses looking to scale.<br/><br/>

          Hosur is home to industry giants like Tata Electronics, alongside a growing ecosystem of companies across automotive, electronics, and engineering sectors. This established industrial base, combined with a skilled workforce and proximity to Bangalore’s innovation and infrastructure, makes it a compelling choice for future-ready operations.

          "
        />
        {/* <PDTab /> */}
        <ParkInfo />

        <MapSection />
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
