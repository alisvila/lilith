import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

import UserDetail from "../../components/visit/UserDetail";
import UserMedicine from "../../components/visit/UserMedicine";
import UserIllnessSurgery from "../../components/visit/UserIllnessSurgery";
import { createProfile, getProfile } from "../../api/profile";
import CustomSkeleton from "../../components/ui-comp/Skeleton";

const steps = ["اطلاعات بیمار", "داروهای مصرفی", "بیماری های خاص و جراحی"];

export default function HorizontalLinearStepper() {
  const [isLoading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [medicine, setMedicine] = useState([]);
  const [allMedicine, setAllMedicine] = useState([]);
  const [skipped, setSkipped] = useState(new Set<any>());
  const [description, setDescriptiopn] = useState({type: 0, value: ""});
  const [visit, setVisit] = useState({
    userDetail: {
      Height: 187,
      Weight: 87,
      wristSize: 19,
      BellyArea: 100,
      pelvisSize: 80,
      sleepTime: 5,
      activityId: 1,
      Appetite: 1,
      TopPressure: 12,
      BottomPressure: 8,
      Pulse: 70,
      HistricalEat: false,
      Diabete: undefined,
      Lipidemia: undefined,
      livingConditions: 0,
    },
    Medicine: [],
    OtherMedicine: "",
    Disease: [],
    OtherDisease: "",
    Surgery: "",
  });

  useEffect(() => {
    getActivity();
    getAppetite();
    getDisease();
    getMedication();
    getLivingCondition();
    setLoading(false);
  }, []);

  const getActivity = async () => {
    const activity: any = await getProfile("/ActivityType");
    setVisit((prev) => ({ ...prev, Activity: { ...activity } }));
  };
  
  const getAppetite = async () => {
    const appetite: any = await getProfile("/Appetite");
    setVisit((prev) => ({ ...prev, Appetite: { ...appetite } }));
  };

  const getLivingCondition = async () => {
    const livingCondition: any = await getProfile("/LivingCondition");
    setVisit((prev) => ({
      ...prev,
      LivingCondition: { ...livingCondition },
    }));
  };

  const getDisease = async () => {
    const Disease: any = await getProfile("/Disease");
    setVisit((prev) => ({
      ...prev,
      Disease: Disease,
    }));
  };

  const getMedication = async () => {
    const Medication: any = await getProfile("/Medication");
    setAllMedicine(Medication)
  };

  const userDetailHandler = (e: any) => {
    let newUserDetail = {
      ...visit.userDetail,
      [e.target.name]: e.target.value,
    };
    setVisit((prev) => ({ ...prev, userDetail: { ...newUserDetail } }));
  };

  const UserMedicineHandler = (newMedicine: any) => {
    setMedicine(newMedicine)
  };

  const changeDesc = (id: number, value: string) => {
    setDescriptiopn({
      type: id,
      value
    })
  }

  const submitOtherDesc = async () => {
    if (!description.value) return
    let payload = {
      "description": description.value,
      "patientId": 0,
      "descriptionTypeID": description.type
    }

    await createProfile('/Patient/Description', payload)
  }

  const submit = async (id: number, value: string) => {
    let payload = {
      "description": value,
      "patientId": 0,
      "descriptionTypeID": id
    }

    await createProfile('/Checkup', payload)
  }

  const submitPatientDetail = async () => {
    var payload = {
      "patientId": 1,
      "activityId": 1,
      "wristSize": 0,
      "abdomenSize": 0,
      "heartbeat": 0,
      "length": 0,
      "weight": 0,
      "bloodPressure": "string",
      "pelvisSize": 0,
      "isOvereating": true,
      "sleepTime": 0,
      "appetiteId": 1,
      "registerDate": "2022-06-15T06:18:53.119Z",
      "livingConditions": 1
    }

    await createProfile('/Checkup', payload)
  }

  const submitDisease = async () => {
    var payload = {
      "name": "string",
      "diseaseTypeId": 1,
      "description": "string"
    }

    await createProfile('/Disease', payload)
  }

  const submitMedication = async () => {
    var payload = {
      "patientId": 5,
      "medicationIds": [
        1
      ]
    }

    await createProfile('/Patient/Medications', payload)
  }

  const UserIllnessSurgeryHandler = (newUserIllnessSurgery: any) => {
    setVisit((prevVisit) => ({ ...prevVisit, ...newUserIllnessSurgery }));
  };

  const isStepSkipped = (step: any) => {
    return skipped.has(step);
  };

  const changeLivingCondition = (e: any) => {
    if (e.target.value === "true") {
      setVisit((prev: any) => ({
        ...prev,
        userDetail: {
          LivingCondition: prev.userDetail.LivingCondition + +e.target.name,
        },
      }));
    } else {
      setVisit((prev: any) => ({
        ...prev,
        userDetail: {
          LivingCondition: prev.userDetail.LivingCondition - +e.target.name,
        },
      }));
    }
  };

  const handleNext = async (activeStep: any) => {
    console.log(activeStep, 'activeStep')
    switch(activeStep) {
      case 0:
        await submitDisease()
        break;
      case 1:
        await submitOtherDesc()
        await submitMedication()
        break;
      case 2:
        break;
    }
    console.log('next')
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

  const StepComponentHandler = () => {
    switch (activeStep) {
      case 0:
        return (
          <UserDetail
            userDetail={visit.userDetail}
            userDetailHandler={userDetailHandler}
            changeLivingCondition={changeLivingCondition}
          />
        );
      case 1:
        return (
          <UserMedicine
            Medicine={medicine}
            allMedicine={allMedicine}
            OtherMedicine={visit.OtherMedicine}
            UserMedicineHandler={UserMedicineHandler}
            changeDesc={changeDesc}
          />
        );
      case 2:
        return (
          <UserIllnessSurgery
            Disease={visit.Disease}
            OtherDisease={visit.OtherDisease}
            Surgery={visit.Surgery}
            UserIllnessSurgeryHandler={UserIllnessSurgeryHandler}
          />
        );
    }
  };

  return (
    <Container maxWidth={false}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: any;
            } = {};
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
            <Grid sx={{ m: 5 }}>{StepComponentHandler()}</Grid>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                maxWidth: "10%",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                بازگشت
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={() => handleNext(activeStep)}>
                {activeStep === steps.length - 1 ? "ثبت" : "بعدی"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}
