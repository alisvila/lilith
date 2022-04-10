import { Container, Grid } from "@mui/material";
import React from "react";
import DashLayout from "../layouts/dashboard";
import Table from "../../components/table/TableWrapper";

export default function Meal() {
  return (
    <DashLayout>
      <Container maxWidth={false}>
        <Grid
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Table />
        </Grid>
      </Container>
    </DashLayout>
  );
}
