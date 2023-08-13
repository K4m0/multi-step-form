import { Field, Form, Formik } from "formik";
import { PersonalInfo } from "../models/PersonalInfo";
import { Box, Grid } from "@mui/material";
import * as Yup from "yup";

const PersonalInfoEmpty: PersonalInfo = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
};

interface PersonalInfoProps {
  personalInfoModel: PersonalInfo;
}

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

const PersonalInfo = ({ personalInfoModel }: PersonalInfoProps) => {
  return (
    <div className="personalInfo">
      <Formik
        initialValues={personalInfoModel}
        validationSchema={ValidateSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item spacing={1} xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="name">
                    Name
                  </label>
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="name"
                    name="name"
                    placeholder="e.g. Stephen King"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </Box>
              </Grid>
              <Grid item spacing={1} xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="emailAddress">
                    Email Address
                  </label>
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                  {errors.emailAddress && touched.emailAddress ? (
                    <div>{errors.emailAddress}</div>
                  ) : null}
                </Box>
              </Grid>

              <Grid item spacing={1} xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="e.g. +1 234 567 890"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                  ) : null}
                </Box>
              </Grid>

              {/* <button type="submit">Submit</button> */}
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
