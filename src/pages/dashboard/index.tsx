import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";

import Link from "@mui/material/Link";
import DashLayout from "../layouts/dashboard";
import { LatestOrders } from '../../components/dash/lastOrders';
import { Budget } from '../../components/dash/budget';
import { Sales } from '../../components/dash/sales';

export default function index() {
  return (
    <DashLayout>
      <>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                {/* <TotalCustomers /> */}
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                {/* <TasksProgress /> */}
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                {/* <TotalProfit sx={{ height: '100%' }} /> */}
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Sales />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                {/* <LatestProducts sx={{ height: '100%' }} /> */}
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <LatestOrders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </DashLayout>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
