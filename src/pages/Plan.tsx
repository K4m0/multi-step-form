import { useState } from "react";
import arcadeImg from "../assets/arcade.svg";
import advancedImg from "../assets/advanced.svg";
import proImg from "../assets/pro.svg";
import { Grid, Stack, Typography } from "@mui/material";
import AntSwitch from "../components/AntSwitch";

interface PlanProps {
  onSubmit: any;
}

const Plan = ({ onSubmit }: PlanProps) => {
  const [alignment, setAlignment] = useState("arcade");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="plan">
      <div>
        <div className="toggleButtonGroup">
          <button
            className="planToggleButton"
            value={alignment}
            onChange={() => setAlignment("arcade")}
          >
            <img className="buttonImage" src={arcadeImg} />
            <div className="planTitle">Arcade</div>
            <div className="planSubTitle">$9/mo</div>
          </button>

          <button
            className="planToggleButton"
            value={alignment}
            onChange={() => setAlignment("advanced")}
          >
            <img className="buttonImage" src={advancedImg} />

            <div className="planTitle">Advanced</div>
            <div className="planSubTitle">$12/mo</div>
          </button>

          <button
            className="planToggleButton"
            value={alignment}
            onChange={() => setAlignment("pro")}
          >
            <img className="buttonImage" src={proImg} />

            <div className="planTitle">Pro</div>
            <div className="planSubTitle">$15/mo</div>
          </button>
        </div>
        <div className="planFrequency">
          {/* <div className="monthly">Monthly</div>
          <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="yearly">Yearly</div> */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Monthly</Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>Yearly</Typography>
          </Stack>
        </div>
      </div>
      <div className="backNextButtons">
        <button className="goBackButton" type="submit">
          Go Back
        </button>
        <button className="nextStepButton" type="submit">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
