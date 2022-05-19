import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material'
import MoreDetail from '../dash/MoreDetail'
import { NavLink, useParams } from "react-router-dom";
import { deleteSingleProfile, getSingleProfile } from "../../../api/profile";

export default function Detail(props: any) {
  const [patientDetail, setPatientDetail]: any = useState();
  const [isLoading, setIsLoading]: any = useState(true);

  useEffect(() => {
    const getDocDetail = async () => {
      const patient: any = await getSingleProfile("/Patient", props.patientId);
      setPatientDetail(patient);
    };

    getDocDetail();
    setIsLoading(false);
  }, []);

  const deleteDoc = () => {
    deleteSingleProfile("/Doctor", props.id + "/Patients")
  }
  
  return (
    <Grid item xs={12}>
      <Grid container spacing={5}>
        <Grid item lg={12} xs={12}>
          <MoreDetail sx={{ height: "100%" }} patientDetail={patientDetail} isLoading={isLoading}/>
        </Grid>
      </Grid>
    </Grid>
    )
}
