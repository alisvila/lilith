import React from "react";
import { Container, Grid } from "@mui/material";
import { LatestOrders } from "../../components/LatestOrders";
import { LatestProducts } from "../../components/LatestProducts";
import { Budget } from "../../components/core/badge";
import { Sales } from "../../components/Sales";
import PersonalInfo from "../../components/PersonalInfo";
import EarningCard from "../../components/EarningCard";

export default function Index() {
  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <Grid item lg={5} xs={6}>
                <PersonalInfo sx={{ height: "100%" }} />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <EarningCard isLoading={false} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget sx={{ height: "100%" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
