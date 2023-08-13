import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import arcadeImg from "../assets/arcade.svg";
import advancedImg from "../assets/advanced.svg";
import proImg from "../assets/pro.svg";

interface PlanProps {
  onSubmit: any;
}

const Plan = ({ onSubmit }: PlanProps) => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="plan">
      <div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="toggleButtonGroup"
        >
          <ToggleButton className="planToggleButton" value="web">
            <Avatar className="avatar">
              <img src={arcadeImg} />
            </Avatar>
            <div className="planTitle">Arcade</div>
          </ToggleButton>

          <ToggleButton className="planToggleButton" value="android">
            <Avatar>
              <img src={advancedImg} />
            </Avatar>
            <div>Advanced</div>
          </ToggleButton>

          <ToggleButton className="planToggleButton" value="ios">
            <Avatar>
              <img src={proImg} />
            </Avatar>
            <div>Pro</div>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <button className="goBackButton" type="submit">
        Go Back
      </button>
      <button className="nextStepButton" type="submit">
        Next Step
      </button>
    </div>
  );
};

export default Plan;
