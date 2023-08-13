import { Grid } from "@mui/material";
import StepDetails from "./components/StepDetails/StepDetails";
import VerticalTab from "./components/VerticalTab/VerticalTab";
import PersonalInfo from "./pages/PersonalInfo";

const PersonalInfoEmpty: PersonalInfo = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
};
function App() {
  return (
    <>
      <Grid className="container" container spacing={2}>
        <Grid item xs={4}>
          <VerticalTab></VerticalTab>
        </Grid>
        <Grid item xs={8}>
          <StepDetails
            title="Personal Info"
            subTitle="Please provide your name, address, and phone number."
            page={<PersonalInfo personalInfoModel={PersonalInfoEmpty} />}
          ></StepDetails>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
