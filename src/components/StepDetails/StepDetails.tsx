import PersonalInfo from "../../pages/PersonalInfo";
import Plan from "../../pages/Plan";

const PersonalInfoEmpty: PersonalInfo = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
};

const PersonalInfoTest: PersonalInfo = {
  name: "Stephen King",
  emailAddress: "stephenking@lorem.com",
  phoneNumber: "+1 234 567 890",
};

interface StepDetailsProps {
  index: number;
  title: string;
  subTitle: string;
  setIndex: any;
}

const StepDetails = ({
  index,
  title,
  subTitle,
  setIndex,
}: StepDetailsProps) => {
  const onSubmitPersonalInfo = (values: PersonalInfo, nextIndex: number) => {
    setIndex(nextIndex);
  };

  const onSubmitPlan = (nextIndex: number) => {
    setIndex(nextIndex);
  };

  return (
    <div className="stepDetails">
      <div className="stepDetailsTitle">{title}</div>
      <div className="stepDetailsSubTitle">{subTitle}</div>
      {index === 1 && (
        <PersonalInfo
          personalInfoModel={PersonalInfoEmpty}
          onSubmit={onSubmitPersonalInfo}
        />
      )}
      {index === 2 && <Plan onSubmit={onSubmitPlan} />}
    </div>
  );
};

export default StepDetails;
