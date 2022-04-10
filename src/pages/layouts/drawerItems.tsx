import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Button,
  Divider,
  Drawer,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./logo.png";

const ListItemButtonCus: any = styled(ListItemButton)(({theme}: any) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color:theme.palette.secondary.dark,
    "& .MuiListItemIcon-root" : {
      color:theme.palette.secondary.dark,
    }
  },
}));

const CustomListSubheader = styled(ListSubheader)(({ theme }: any) => ({
  // backgroundColor: theme.palette.neutral[900],
  color: theme.palette.primary.contrastText,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function NestedList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
    sx={{
      px: 2
    }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <CustomListSubheader sx={{ py: 1, mb: 2 }} id="nested-list-subheader">
          <div>
            <img src={logo} style={{ maxHeight: "75px" }} />
            <Typography variant="subtitle1">وزن من</Typography>
          </div>
        </CustomListSubheader>
      }
    >
      {/* <Divider
        sx={{
          borderColor: "#2D3748",
          my: 3,
        }}
      /> */}
      <ListItemButtonCus key="home" component={NavLink} to="/home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="خانه" />
      </ListItemButtonCus>

      <ListItemButtonCus key="dashboard" component={NavLink} to="/dashboard">
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="پنل کاربری" />
      </ListItemButtonCus>
      <ListItemButtonCus key="Customers" component={NavLink} to="/dashboard/Customers">
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="لیست بیمارها" />
      </ListItemButtonCus>

      <ListItemButtonCus onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCus>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCus sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButtonCus>
        </List>
      </Collapse>

      <ListItemButtonCus onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox2" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCus>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCus sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButtonCus>
        </List>
      </Collapse>
        
    </List>
  );
}
