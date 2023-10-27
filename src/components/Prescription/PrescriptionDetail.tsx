import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import Table from "../core/table/TableWrapper";
import { createProfile, getProfile } from "../../api/profile";
import CustomSkeleton from "../core/skeleton";
import TopDetail from './TopDetail'

export default function PrescriptionDetail({checkupId, patientId}: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCalery, setSelected]: any = useState("2500");
  const [patientDetail, setPatientDetail]: any = useState({});
  const [prescription, setPrescription]: any = useState([]);
  

  useEffect(() => {
    getMealCata();
    getPrescription();
  }, []);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };


  const getPrescription = async () => {
    setIsLoading(true);
    const mainPresc: any = await getProfile(`Patient/${patientId}/Checkup/${checkupId}/Prescription`);
    setPrescription(mainPresc);
    setIsLoading(false);
  }

  const getMealCata = async () => {
    setIsLoading(true);
    const mainC: any = await getProfile(`/Patient/${patientId}`);
    setPatientDetail(mainC);
    setIsLoading(false);
  };

  // const handleSubmit = async (payload: any, id: number) => {
  //   await createProfile(`/Pattern/${selectedCalery}/${id}`, payload);
  // };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <TopDetail prescription={prescription} patientDetail={patientDetail} />
        </Grid>
        <Grid item xs={12} lg={12}>
          {isLoading ? (
            <CustomSkeleton
              animation="wave"
              variant="rectangular"
              height={260}
            />
          ) : (
            <Table
              patientId={patientId}
              checkupId={checkupId}
              patterns={prescription.patterns}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
