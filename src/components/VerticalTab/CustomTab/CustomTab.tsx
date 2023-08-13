import TabIndex from "./TabIndex";

interface CustomTabProps {
  tabIndex: number;
  tabTitle: string;
  isSelected: boolean;
}
const CustomTab = ({ tabIndex, tabTitle, isSelected }: CustomTabProps) => {
  return (
    <div className="customTab">
      <div>
        <TabIndex index={tabIndex} isSelected={isSelected}></TabIndex>
      </div>
      <div className="tabTitle">
        <div className="stepTitle">{`STEP ${tabIndex}`}</div>
        <div className="title">{tabTitle}</div>
      </div>
    </div>
  );
};

export default CustomTab;
