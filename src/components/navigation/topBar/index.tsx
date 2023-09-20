import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import AccountMenu from "./navBarItems";

const DashboardNavbarRoot = styled(AppBar)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  color: theme.palette.neutral[500],
}));

export default function TopBar(props: any) {
  const { onSidebarOpen, ...other } = props;

  return (
    <DashboardNavbarRoot
      {...other}
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: "calc(100% - 280px)",
        },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: "inline-flex",
              lg: "none",
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <AccountMenu />
      </Toolbar>
    </DashboardNavbarRoot>
  );
}
