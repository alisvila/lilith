import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import PrescriptionDetail from "../../components/Prescription/PrescriptionDetail";

export default function Prescription() {
  const { patientId } = useParams();
  const { checkupId } = useParams();

  return (
    <Container maxWidth={false}>
      <PrescriptionDetail patientId={patientId} checkupId={checkupId}/>
    </Container>
  );
}
