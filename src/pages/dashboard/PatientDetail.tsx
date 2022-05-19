import React from "react";
import { Container } from "@mui/material";
import Detail from "../../components/ui-comp/patient/Detail";
import { useParams } from "react-router-dom";

export default function PatientDetail() {
  let { id } = useParams();

  return (
    <Container maxWidth={false}>
      <Detail patientId={id}/>
    </Container>
  );
}
