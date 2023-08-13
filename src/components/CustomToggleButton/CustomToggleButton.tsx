interface CustomToggleButtonProps {
  frequencyChecked: boolean;
  alignment: string;
  setAlignment: any;
  alignmentImage: string;
  planSubTitle: string;
}

const CustomToggleButton = ({
  frequencyChecked,
  alignment,
  setAlignment,
  alignmentImage,
  planSubTitle,
}: CustomToggleButtonProps) => {
  return (
    <>
      <button
        onClick={() => setAlignment(alignment)}
        className={`${
          frequencyChecked
            ? "planToggleButtonYearly"
            : "planToggleButtonMonthly"
        }`}
        value={alignment}
      >
        <img className="buttonImage" src={alignmentImage} />
        <div className="planTitle">{alignment}</div>
        <div className="planSubTitle">{planSubTitle}</div>
        {frequencyChecked && <div className="promo">2 months free</div>}
      </button>
    </>
  );
};

export default CustomToggleButton;
