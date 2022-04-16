import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

import DashLayout from "../layouts/dashboard";

import UserDetail from "../../components/visit/UserDetail";
import UserCondition from "../../components/visit/UserCondition";

const steps = ["اطلاعات بیمار", "شرایط خاص بیمار"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<any>());

  const [visit , setVisit ] = useState({ userDetail : {} , userCondition : {}})
  const userDetailHandler = (e : any) => {
    let newUserDetail = {...visit.userDetail , [e.target.name] : e.target.value }
    setVisit( { ...visit , userDetail : {...newUserDetail}});
  }
  useEffect(()=>{
    console.log(visit , " <<<<< ")
  },[visit])

  const isStepOptional = (step: any) => {
    return step === 1;
  };

  const isStepSkipped = (step: any) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <DashLayout>
      <Container maxWidth={false}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: any;
              } = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = (
              //     <Typography variant="caption">Optional</Typography>
              //   );
              // }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                ثبت با موفقیت انجام شد.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>ثبت ویزیت جدید</Button>
              </Box>
            </>
          ) : (
            <>
              <Grid sx={{ m : 5 }}>
                {activeStep === 0 ? <UserDetail userDetail={visit.userDetail} userDetailHandler={userDetailHandler} /> : <UserCondition />}
              </Grid>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 , maxWidth : '10%'}}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  بازگشت
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "ثبت" : "بعدی"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </DashLayout>
  );
}
