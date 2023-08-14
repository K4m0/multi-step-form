import { useEffect, useState } from "react";
import arcadeImg from "../assets/arcade.svg";
import advancedImg from "../assets/advanced.svg";
import proImg from "../assets/pro.svg";
import AntSwitch from "../components/Switch/AntSwitch";
import { Stack } from "@mui/material";
import CustomToggleButton from "../components/CustomToggleButton/CustomToggleButton";

interface PlanProps {
  onSubmit: any;
}

const Plans = [
  {
    planId: 1,
    title: "Arcade",
    subTitle: "$9/mo",
    image: arcadeImg,
  },
  {
    planId: 2,
    title: "Advanced",
    subTitle: "$12/mo",
    image: advancedImg,
  },
  {
    planId: 3,
    title: "Pro",
    subTitle: "$15/mo",
    image: proImg,
  },
];

const Plan = ({ onSubmit }: PlanProps) => {
  const [alignment, setAlignment] = useState("Arcade");

  const [frequencyChecked, setFrequencyChecked] = useState(false);

  return (
    <div className="plan">
      <div>
        <div className="toggleButtonGroup">
          {Plans.map((plan, index) => {
            return (
              <CustomToggleButton
                key={index}
                frequencyChecked={frequencyChecked}
                alignment={plan.title}
                setAlignment={setAlignment}
                alignmentImage={plan.image}
                planSubTitle={plan.subTitle}
              />
            );
          })}
        </div>
        <div className="planFrequency">
          <Stack
            justifyContent="center"
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <div
              className={`frequency ${
                frequencyChecked ? "unChecked" : "checked"
              }`}
            >
              Monthly
            </div>
            <AntSwitch
              defaultChecked
              checked={frequencyChecked}
              onChange={() => setFrequencyChecked(!frequencyChecked)}
              inputProps={{ "aria-label": "ant design" }}
            />
            <div
              className={`frequency ${
                frequencyChecked ? "checked" : "unChecked"
              }`}
            >
              Yearly
            </div>
          </Stack>
        </div>
      </div>
      <div className="backNextButtons">
        <button className="goBackButton" onClick={() => onSubmit(1)}>
          Go Back
        </button>
        <button className="nextStepButton" onClick={() => onSubmit(3)}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
