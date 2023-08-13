import React from "react";
import CustomTab from "./CustomTab/CustomTab";
import group10 from "../../assets/group10.png";

interface VerticalTabProps {
  tabIndex: number;
}

const VerticalTab = ({ tabIndex }: VerticalTabProps) => {
  // const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <div className="verticalTabs">
        <CustomTab
          tabIndex={1}
          tabTitle={"Your Info"}
          isSelected={tabIndex === 1}
        ></CustomTab>
        <CustomTab
          tabIndex={2}
          tabTitle={"Select Plan"}
          isSelected={tabIndex === 2}
        ></CustomTab>
        <CustomTab
          tabIndex={3}
          tabTitle={"Add-ons"}
          isSelected={tabIndex === 3}
        ></CustomTab>
        <CustomTab
          tabIndex={4}
          tabTitle={"Summary"}
          isSelected={tabIndex === 4}
        ></CustomTab>
        <img className="group10" src={group10} />
      </div>
    </>
  );
};

export default VerticalTab;
