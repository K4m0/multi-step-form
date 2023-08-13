import { Grid } from "@mui/material";
import StepDetails from "./components/StepDetails/StepDetails";
import VerticalTab from "./components/VerticalTab/VerticalTab";
import { useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(1);
  const steps = [
    {
      stepId: 1,
      title: "Personal Info",
      subTitle: "Please provide your name, address, and phone number.",
    },
    {
      stepId: 2,
      title: "Select your plan",
      subTitle: "You have the option of monthly or yearly billing.",
    },
    {
      stepId: 3,
      title: "Pick add-ons",
      subTitle: "Add-ons help enhance your gaming experience.",
    },
    {
      stepId: 4,
      title: "Finishing up",
      subTitle: "Double-check everything looks OK before confirming.",
    },
  ];

  return (
    <>
      <Grid className="container" container spacing={2}>
        <Grid item xs={4}>
          <VerticalTab tabIndex={tabIndex}></VerticalTab>
        </Grid>
        <Grid item xs={8}>
          <StepDetails
            title={steps.find((step) => step.stepId === tabIndex)?.title ?? ""}
            subTitle={
              steps.find((step) => step.stepId === tabIndex)?.subTitle ?? ""
            }
            index={tabIndex}
            setIndex={setTabIndex}
          ></StepDetails>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
