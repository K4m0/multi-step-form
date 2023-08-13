import React from "react";
import CustomTab from "./CustomTab/CustomTab";
import group10 from "../../assets/group10.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const VerticalTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="verticalTabs">
        <CustomTab
          tabIndex={1}
          tabTitle={"Your Info"}
          isSelected={false}
        ></CustomTab>
        <CustomTab
          tabIndex={2}
          tabTitle={"Select Plan"}
          isSelected={false}
        ></CustomTab>
        <CustomTab
          tabIndex={3}
          tabTitle={"Add-ons"}
          isSelected={false}
        ></CustomTab>
        <CustomTab
          tabIndex={4}
          tabTitle={"Summary"}
          isSelected={false}
        ></CustomTab>
        <img className="group10" src={group10} />
      </div>
    </>
  );
};

export default VerticalTab;
