import React, { useCallback, useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MedicationIcon from "@mui/icons-material/Medication";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MasksIcon from "@mui/icons-material/Masks";
import DiscountIcon from "@mui/icons-material/Discount";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import BoyIcon from "@mui/icons-material/Boy";
import { styled, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logo.png";

const ListItemButtonCus: any = styled(ListItemButton)(
  ({ theme, active }: any) => ({
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.dark,
      },
    },
    ...(active && {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
    }),
  })
);

const CustomListSubheader = styled(ListSubheader)(({ theme }: any) => ({
  // backgroundColor: theme.palette.neutral[900],
  color: theme.palette.primary.contrastText,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
interface MenuObj {
  [key: string]: boolean;
  bimari: boolean;
  rejim: boolean;
  finance: boolean;
}

export default React.memo(function NestedList() {
  const location = useLocation();

  const [toggles, setToggles] = useState<MenuObj>({
    bimari: false,
    finance: false,
    rejim: false,
  });

  useEffect(() => {
    console.log(location.pathname, "render");
  }, []);

  const handleClick = useCallback((key: string) => {
    setToggles((prev: MenuObj) => {
      let cloned = { ...prev };
      Object.keys(cloned).map((key) => (cloned[key] = false));
      cloned[key] = true;
      return cloned;
    });
  }, []);

  return (
    <List
      sx={{
        px: 2,
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
      <ListItemButtonCus
        key="home"
        component={NavLink}
        selected={location.pathname === "/dashboard"}
        to="/dashboard"
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="پنل کاربری" />
      </ListItemButtonCus>
      <ListItemButtonCus
        key="Customers"
        component={NavLink}
        selected={location.pathname === "/dashboard/Customers"}
        to="/dashboard/Customers"
      >
        <ListItemIcon>
          <BoyIcon />
        </ListItemIcon>
        <ListItemText primary="لیست دکترها" />
      </ListItemButtonCus>
      <ListItemButtonCus
        key="home"
        component={NavLink}
        selected={location.pathname === "/visit"}
        to="/visit"
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="ویزیت جدید" />
      </ListItemButtonCus>

      <ListItemButtonCus onClick={() => handleClick("rejim")}>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="رژیم غذایی" />
        {toggles.rejim ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCus>
      <Collapse in={toggles.rejim} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal"
            selected={location.pathname === "/dashboard/meal"}
            component={NavLink}
            to="/dashboard/meal"
          >
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="رژیم غذایی" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal2"
            component={NavLink}
            selected={location.pathname === "/dashboard/FoodCategory"}
            to="/dashboard/FoodCategory"
          >
            <ListItemIcon>
              <SoupKitchenIcon />
            </ListItemIcon>
            <ListItemText primary="مواد غذایی" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal2"
            component={NavLink}
            selected={location.pathname === "/dashboard/foodgrid"}
            to="/dashboard/FoodGrid"
          >
            <ListItemIcon>
              <SoupKitchenIcon />
            </ListItemIcon>
            <ListItemText primary="2 مواد غذایی" />
          </ListItemButtonCus>
        </List>
      </Collapse>

      <ListItemButtonCus onClick={() => handleClick("bimari")}>
        <ListItemIcon>
          <CoronavirusIcon />
        </ListItemIcon>
        <ListItemText primary="بیماری" />
        {toggles.bimari ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCus>
      <Collapse in={toggles.bimari} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal3"
            component={NavLink}
            selected={location.pathname === "/dashboard/meal"}
            to="/dashboard/meal"
          >
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="گروه بیماری" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal4"
            component={NavLink}
            selected={location.pathname === "/dashboard/diseas"}
            to="/dashboard/diseas"
          >
            <ListItemIcon>
              <MasksIcon />
            </ListItemIcon>
            <ListItemText primary="بیماری" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="Illnes"
            component={NavLink}
            selected={location.pathname === "/dashboard/medicins"}
            to="/dashboard/medicins"
          >
            <ListItemIcon>
              <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary="دارو" />
          </ListItemButtonCus>
        </List>
      </Collapse>

      <ListItemButtonCus onClick={() => handleClick("finance")}>
        <ListItemIcon>
          <PointOfSaleIcon />
        </ListItemIcon>
        <ListItemText primary="مالی" />
        {toggles.finance ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCus>
      <Collapse in={toggles.finance} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="meal6"
            component={NavLink}
            selected={location.pathname === "dashboard/visit/price"}
            to="dashboard/visit/price"
          >
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <ListItemText primary="قیمت ویزیت" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="mea7l"
            component={NavLink}
            selected={location.pathname === "/dashboard/Discount"}
            to="/dashboard/Discount"
          >
            <ListItemIcon>
              <DiscountIcon />
            </ListItemIcon>
            <ListItemText primary="طرح های تخفیف" />
          </ListItemButtonCus>
          <ListItemButtonCus
            sx={{ pl: 4 }}
            key="payMethod"
            component={NavLink}
            selected={location.pathname === "/dashboard/payMethod"}
            to="/dashboard/payMethod"
          >
            <ListItemIcon>
              <DiscountIcon />
            </ListItemIcon>
            <ListItemText primary="شارژ حساب کاربری" />
          </ListItemButtonCus>
        </List>
      </Collapse>
    </List>
  );
});
