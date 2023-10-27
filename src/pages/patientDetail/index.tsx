import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Detail from "../../components/patents/detail";

export default function PatientDetail() {
  let { id } = useParams();

  return (
    <Container maxWidth={false}>
      <Detail patientId={id}/>
    </Container>
  );
}
