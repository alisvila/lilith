import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { AccountProfile } from "../../../components/Account/AccountProfile";
import { AccountProfileDetails } from "../../../components/Account/AccountProfileDetail";
import { useGetPokemonByNameQuery } from "../../../services/index";

const AccountSettings = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

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
            {isLoading ? (
              <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">
                  تنظیمات کاربری
                </Typography>
                <Grid container spacing={3}>
                  <Grid item lg={4} md={6} xs={12}>
                    <AccountProfile accountDetail={data} />
                  </Grid>
                  <Grid item lg={8} md={6} xs={12}>
                    <AccountProfileDetails accountDetail={data} />
                  </Grid>
                </Grid>
              </Container>
            ) : (
              <>loading....</>
            )}
          </Box>
        </CardContent>
      </Card>
      {error && <>error...</>}
    </Container>
  );
};

export default AccountSettings;
