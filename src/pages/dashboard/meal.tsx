import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import DashLayout from "../layouts/dashboard";
import Table from "../../components/table/TableWrapper";
import { MealList } from "../../components/dash/MealList";

export default function Meal() {
  const [selectedCalery, setSelected]: any = useState("2500");

  
  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
      <Container maxWidth={false}>
        {/* <Grid
          component="main"
          sx={{
            // flexGrow: 1,
            // py: 8,
          }}
        > */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MealList handleChange={handleChange} selectedCalery={selectedCalery} sx={{ height: "100%" }} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Table selectedCalery={selectedCalery} />
          </Grid>
        </Grid>
      </Container>
  );
}
