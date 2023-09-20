import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DrawerItems from "./sideBarItems";

export default function SideBar(props: any) {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = <DrawerItems />;

  if (lgUp) {
    return (
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          sx: {
            // backgroundColor: "neutral.900",
            color: "text.primary",
            width: 280,
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // backgroundColor: "neutral.900",
          color: "text.primary",
          width: 280,
          border: "none",
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}
