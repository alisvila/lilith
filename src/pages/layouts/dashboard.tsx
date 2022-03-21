import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import TopBar from "./topBar";
import SideBar from "./drawer";
import { theme } from "../../components/theme";

const DashboardLayoutRoot = styled("div")(({ theme }: any) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingRight: 280,
  },
}));

export default function DashLayout(props: any) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {props.children}
        </Box>
      </DashboardLayoutRoot>
      <TopBar onSidebarOpen={() => setSidebarOpen(true)} />
      <SideBar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </ThemeProvider>
  );
}
