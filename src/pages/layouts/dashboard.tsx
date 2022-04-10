import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import TopBar from "./topBar";
import SideBar from "./drawer";
import { theme } from "../../components/theme";
import { defaultTheme } from "../../components/theme/default";

const DashboardLayoutRoot = styled("div")(({ theme }: any) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const cacheLtr = createCache({
  key: "muiltr",
});

const cacheRtl = createCache({
  key: "muirtl",
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});

const BoxMain: any = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.shape.borderRadius,
  marginRight: "15px",
}));

export default function DashLayout(props: any) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isRtl, setIsRtl] = React.useState(true);

  return (
    <>
      <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
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
              <BoxMain
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                {props.children}
              </BoxMain>
            </Box>
          </DashboardLayoutRoot>
          <TopBar onSidebarOpen={() => setSidebarOpen(true)} />
          <SideBar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
