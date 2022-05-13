import React from "react";
import { Avatar, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import { NavLink } from "react-router-dom";

const DetailGrid = styled(Grid)(({ theme }: any) => ({
  borderBottom: "1px solid #d3d3d3",
  padding: "12px 25px",
  "&:last-child": {
    borderBottom: "none",
  },
}));
export default function MoreDetail(props: any) {
  return (
    <Card {...props}>
      <Grid container>
        <Grid
          item
          md={2}
          sm={7}
          xs={12}
          sx={{
            borderRight: "1px solid #d3d3d3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src="avatar"
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography variant="h5">مهران بادامی</Typography>
          <Grid>
            <IconButton component={NavLink} to="/dashboard/sendtiket" aria-label="delete">
              <SendIcon />
            </IconButton>
            <IconButton component={NavLink} to="/dashboard/history" aria-label="delete">
              <MessageIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item md={10} sm={5} xs={12}>
          <Grid container>
            <DetailGrid item xs={12}>
              <Typography variant="subtitle1">person info</Typography>
              <Grid container>
                <Grid item sm={4} xs={12}>
                  Gender: female
                </Grid>
                <Grid item sm={4} xs={12}>
                  BDate: 15/06
                </Grid>
                <Grid item sm={4} xs={12}>
                  Phone number: 0934
                </Grid>
              </Grid>
            </DetailGrid>
            <DetailGrid item xs={12}>
              <Typography variant="subtitle1">body detail</Typography>
              <Grid container>
                <Grid item sm={4} xs={12}>
                  Blood Type: o+
                </Grid>
                <Grid item sm={4} xs={12}>
                  Weight: 75KG
                </Grid>
                <Grid item sm={4} xs={12}>
                  Body type: slim
                </Grid>
              </Grid>
            </DetailGrid>
            <DetailGrid item xs={12}>
              <Typography variant="subtitle1">مهران بادامی</Typography>
              <Grid container>
                <Grid item sm={4} xs={12}>
                  Blood Type: o+
                </Grid>
                <Grid item sm={4} xs={12}>
                  Weight: 75KG
                </Grid>
                <Grid item sm={4} xs={12}>
                  Body type: slim
                </Grid>
              </Grid>
            </DetailGrid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
