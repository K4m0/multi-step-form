interface TabIndexProps {
  index: number;
  isSelected: boolean;
}

const TabIndex = (props: TabIndexProps) => {
  const isSelected = props.isSelected;

  return (
    <div className={`tabIndex ${isSelected ? "selected" : "normal"}`}>
      <div className={`index ${isSelected ? "selected" : "normal"}`}>
        {props.index}
      </div>
    </div>
  );
};

export default TabIndex;
