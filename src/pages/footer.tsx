import React, { Fragment } from "react";

import clsx from "clsx";

import { Paper, List, ListItem, ListItemText, Grid } from "@mui/material";

import styled from "@emotion/styled";

const DashboardNavbarRoot = styled(Grid)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  color: theme.palette.neutral[500],
  position: 'relative'
}));

const Footer = (props: any) => {
  const { footerFixed, ...other } = props;
  return (
    <>
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
        <Paper
          square
          className={clsx("app-footer text-black-50", {
            "app-footer--fixed": footerFixed,
          })}
        >
          <div className="app-footer--inner">
            <div className="app-footer--first">
              <List dense className="d-flex align-items-center">
                <ListItem
                  className="rounded-sm text-nowrap"
                  button
                  component="a"
                  href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-free"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemText primary="Download now" />
                </ListItem>
                <ListItem
                  className="rounded-sm text-nowrap"
                  button
                  component="a"
                  href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-pro"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemText primary="View PRO Version" />
                </ListItem>
              </List>
            </div>
            <div className="app-footer--second">
              <span>Carolina React Admin Dashboard with Material-UI Free</span>{" "}
              © 2020 - crafted with <span className="text-danger px-1">❤</span>{" "}
              by{" "}
              <a href="https://uifort.com" title="UiFort.com">
                UiFort.com
              </a>
            </div>
          </div>
        </Paper>
      </DashboardNavbarRoot>
    </>
  );
};

export default Footer;
