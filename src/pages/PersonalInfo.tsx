import { Field, Form, Formik, FormikErrors } from "formik";
import { PersonalInfo } from "../models/PersonalInfo";
import { Box, Grid } from "@mui/material";
import * as Yup from "yup";
import { FormEvent } from "react";

interface PersonalInfoProps {
  personalInfoModel: PersonalInfo;
  onSubmit: any;
}

const phoneNumberRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/;
const requiredMessage: string = "This field is required";

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  emailAddress: Yup.string()
    .email("Invalid email")
    .matches(/^(?!.*@[^,]*,)/)
    .required(requiredMessage),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, "Invalid phone number")
    .required(requiredMessage),
});

const PersonalInfo = ({ personalInfoModel, onSubmit }: PersonalInfoProps) => {
  return (
    <div className="personalInfo">
      <Formik
        initialValues={personalInfoModel}
        validationSchema={ValidateSchema}
        onSubmit={(values) => {
          onSubmit(values, 2);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="name">
                    Name
                  </label>
                  {errors.name && touched.name ? (
                    <label className="personalInfoErrorLabel">
                      {errors.name}
                    </label>
                  ) : null}
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="name"
                    name="name"
                    placeholder="e.g. Stephen King"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="emailAddress">
                    Email Address
                  </label>
                  {errors.emailAddress && touched.emailAddress ? (
                    <label className="personalInfoErrorLabel">
                      {errors.emailAddress}
                    </label>
                  ) : null}
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={1}>
                  <label className="personalInfoLabel" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <label className="personalInfoErrorLabel">
                      {errors.phoneNumber}
                    </label>
                  ) : null}
                </Box>
                <Box>
                  <Field
                    className="personalInfoTextField"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="e.g. +1 234 567 890"
                  />
                </Box>
              </Grid>
            </Grid>
            <button className="nextStepButton" type="submit">
              Next Step
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
