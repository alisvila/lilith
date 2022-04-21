import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";

import Link from "@mui/material/Link";
import DashLayout from "../layouts/dashboard";
import { LatestOrders } from "../../components/dash/lastOrders";
import { LatestProducts } from "../../components/dash/latestProducts";
import { Budget } from "../../components/dash/budget";
import { Sales } from "../../components/dash/sales";
import api from "../../services/service";
import PersonalInfo from "../../components/dash/personalInfo";
import Chart from "../../components/lineChart";
import styled from "@emotion/styled";
import EarningCard from "./earningCard";
import TableWrapper from "../../components/table/TableWrapper";

const BoxMain: any = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.shape.borderRadius,
  marginRight: "15px",
}));

export default function Index() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(api.get("https://jsonplaceholder.typicode.com/todos/1"));
  }, []);

  return (
      <>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <EarningCard isLoading={false} />
                </Grid>
                <Grid item lg={5} xs={6}>
                  <PersonalInfo sx={{ height: "100%" }} />
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
