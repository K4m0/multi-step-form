import { Typography } from "@mui/material";

interface StepDetailsProps {
  title: string;
  subTitle: string;
  page: React.JSX.Element;
}

const StepDetails = ({ title, subTitle, page }: StepDetailsProps) => {
  return (
    <div className="stepDetails">
      <div className="stepDetailsTitle">{title}</div>
      <div className="stepDetailsSubTitle">{subTitle}</div>
      {page}
    </div>
  );
};

export default StepDetails;
