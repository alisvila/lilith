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
                  href="/"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemText primary="ارتباط با ما" />
                </ListItem>
                <ListItem
                  className="rounded-sm text-nowrap"
                  button
                  component="a"
                  href="/"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemText primary="درباره ما" />
                </ListItem>
              </List>
            </div>
            <div className="app-footer--second">
              <span>کلیه حقوق وب سایت محفوظ می باشد. </span>{" "}<span className="text-danger px-1">❤</span>{" "}
              توسط{" "}
              <a href="https://google.com" title="google.com">
              شرکت ره پویان نوین تیروژ
              </a>
            </div>
          </div>
        </Paper>
      </DashboardNavbarRoot>
    </>
  );
};

export default Footer;
