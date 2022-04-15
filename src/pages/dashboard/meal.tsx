import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import DashLayout from "../layouts/dashboard";
import Table from "../../components/table/TableWrapper";
import { MealList } from "../../components/dash/MealList";

export default function Meal() {
  const [selectedCalery, setSelected]: any = useState("2500");


  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <DashLayout>
      <Container maxWidth={false}>
        {/* <Grid
          component="main"
          sx={{
            // flexGrow: 1,
            // py: 8,
          }}
        > */}
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <MealList handleChange={handleChange} selectedCalery={selectedCalery} sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={12}>
            <Table selectedCalery={selectedCalery} />
          </Grid>
        </Grid>
      </Container>
    </DashLayout>
  );
}
