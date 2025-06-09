import Card from "./Card";
import SideBars from "./SideBars";

const Main = ({ todos, acbtn, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-start justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px] gap-[0px]">
      <SideBars
        todos={todos}
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
      <Card todos={todos} activeSidebar={activeSidebar} acbtn={acbtn} />
    </div>
  );
};

export default Main;
