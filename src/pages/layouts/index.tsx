import React, { useState } from "react";
import styled from "@emotion/styled";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import TopBar from "../../components/navigation/topBar";
import SideBar from "../../components/navigation/sideBar";
import Footer from "../../components/navigation/footer";
import { theme } from "../../theme";

const DashboardLayoutRoot = styled("div")(({ theme }: any) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  minHeight: "calc(100vh - 88px)",
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

const BoxMain = styled(Box)(({ theme }: any) => ({
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
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
