// components
// import mock from "./mock";
// import Widget from "../../components/Widget";
// import PageTitle from "../../components/PageTitle";
// import { Typography } from "../../components/Wrappers";
// import Dot from "../../components/Sidebar/components/Dot";
// import Table from "./components/Table/Table";
// import BigStat from "./components/BigStat/BigStat";

import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../listItem";

const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backdropFilter: "blur(20px)",
  background: "red",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={4}>

      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}

          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div>
            <Grid container item alignItems={"center"}>
              <Grid item xs={6}>
                <Typography variant="h6">12, 678</Typography>
              </Grid>
              <Grid item xs={6}>
                chart
              </Grid>
            </Grid>
          </div>
          <Grid container>
            <Grid item xs={4}>
              <Typography>Registrations</Typography>
              <Typography>860</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Sign Out</Typography>
              <Typography>32</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Rate</Typography>
              <Typography>3.25%</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <div>
            <div>
              <Typography>Integration</Typography>
            </div>
            <div>
              <Typography>SDK</Typography>
            </div>
          </div>
          <div>
            <Typography>Integration</Typography>
            chart
          </div>
          <div>
            <Typography>SDK</Typography>
            chart
          </div>
        </Grid>

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <div>
            <Typography>60% / 37°С / 3.3 Ghz</Typography>
            <div></div>
          </div>
          <div>
            <Typography>54% / 31°С / 3.3 Ghz</Typography>
            <div></div>
          </div>
          <div>
            <Typography>57% / 21°С / 3.3 Ghz</Typography>
            <div></div>
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              chart
            </Grid>
            <Grid item xs={6}>
              <div>
                {PieChartData.map(({ name, value, color }, index) => (
                  <div key={color}>
                    <Typography style={{ whiteSpace: "nowrap", fontSize: 12 }}>
                      &nbsp;{name}&nbsp;
                    </Typography>
                    <Typography>&nbsp;{value}</Typography>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          grid 12
        </Grid>

        <Grid item xs={12}>
          grid 12
        </Grid>
      </Grid>
    </>
  );
}
