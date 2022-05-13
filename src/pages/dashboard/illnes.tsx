import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DashLayout from "../layouts/dashboard";
import MiniGrid from "../../components/ui-comp/miniGrid";
import MiniGridDetail from "./MiniGridDetaial";

export default function Illnes() {
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState("1900");

  const handleClick = (item: any, e: any) => {
    setSelected(item);
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <MiniGrid handleClick={handleClick} selected={selected} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <MiniGridDetail
                    handleClick={handleClick}
                    selected={selected}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
