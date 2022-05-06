import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { AccountProfile } from "../components/account/accountProfile";
import { AccountProfileDetails } from "../components/account/accountProfileDetails";
import DashLayout from "./layouts/dashboard";
import getProfile from '../api/profile'

const AccountSettings = () => {
  const [profile, setProfile] = useState()
  useEffect(() => {
  }, [])
  
  return (
    <Container>
      <Card>
        <CardContent>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 2,
            }}
          >
            <Container maxWidth="lg">
              <Typography sx={{ mb: 3 }} variant="h4">
                تنظیمات کاربری
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                  <AccountProfile />
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </Container>
)};

export default AccountSettings;
