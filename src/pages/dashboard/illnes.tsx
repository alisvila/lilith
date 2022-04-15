import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DashLayout from "../layouts/dashboard";
import MiniGrid from "./miniGrid";

export default function Illnes() {
  return (
    <DashLayout>
      <>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <MiniGrid />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <MiniGrid />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    </DashLayout>
  );
}
