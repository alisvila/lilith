import React from "react";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";
import CreateDoc from "../../components/ui-comp/doc/create"

export default function CreateDoctor() {
  return (
    <Container maxWidth={false}>
      <CreateDoc />
    </Container>
  );
}
