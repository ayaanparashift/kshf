import React from "react";
import CSpot from "./Components/CSpot";
// import CaseSlide from "./Components/CaseSlide";
// import FormSec from "./Components/FormSec";
import CSbgbl from "./Components/CSblbg";
import TrustedPartners from "../Components/TrustedPartners";
// import CaseSideTop from "./Components/CaseSideTop";
import Res from "./Components/Res";
// import CaseSideTop from "./Components/CaseSideTop";
// import CaseSideBtm from "./Components/CaseSideBtm";

export const metadata = {
  title: "Case studies",
  description: "Case Studies",
};

const page = () => {
  return (
    <div>
      <CSpot />
      {/* <CaseSlide /> */}
      <TrustedPartners paddingB={70} />
      {/* <CaseSideTop /> */}
      {/* <Res /> */}
      {/* <FormSec /> */}
      <CSbgbl />
    </div>
  );
};

export default page;
