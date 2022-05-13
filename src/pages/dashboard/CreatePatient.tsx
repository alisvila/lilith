import React from "react";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";
import Create from "../../components/ui-comp/patient/Create"

export default function CreatePatient() {
  return (
    <Container maxWidth={false}>
      <Create />
    </Container>
  );
}
