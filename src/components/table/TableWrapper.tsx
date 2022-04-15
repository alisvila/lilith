import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import ActualTable from "./index";
import { Card, CardContent } from "@mui/material";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab: any = styled(TabUnstyled)(({ theme }: any) => ({
  color: theme.palette.secondary[800],
  cursor: "pointer",
  fontSize: "0.875rem",
  fontWeight: "bold",
  backgroundColor: theme.palette.tab.gray,
  width: "100%",
  padding: "12px 16px",
  margin: " 6px 6px",
  border: "none",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: theme.palette.secondary[800],
    color: "white"
  },

  "&:focus": {
    color: "#fff",
    borderRadius: "3px",
    outline: `2px solid ${theme.palette.secondary[200]}`,
    outlineOffset: "2px",
  },

  [`&.${tabUnstyledClasses.selected}`]: {
    backgroundColor: theme.palette.secondary[800],
    color: "white",
  },

  [`&.${buttonUnstyledClasses.disabled}`]: {
    opacity: " 0.5",
    cursor: "not-allowed",
  },
}));

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
  border: 4px solid #ebebeb;
`;


const TabsList = styled(TabsListUnstyled)(({ theme }: any) => ({
  minWidth: '320px',
  backgroundColor: theme.palette.tab.primary,
  borderRadius: '8px 8px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-between',
  border: 'solid #ebebeb',
  borderWidth: '4px 4px 0 4px',
}));

const StickyGrid: any = styled(Card)(({ theme }: any) => ({
  position: 'sticky',
  top: '0'
}));
  

export default function TableWrapper(props: any) {
  return (
    <StickyGrid>
      <CardContent>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>معمولی</Tab>
            <Tab>نوجوان</Tab>
            <Tab>باردار</Tab>
            <Tab>دیابت</Tab>
          </TabsList>
          <TabPanel value={0}>
            <ActualTable id="normal" x={6} y={6} selectedCalery={props.selectedCalery} />
          </TabPanel>
          <TabPanel value={1}>
            <ActualTable id="young" x={6} y={6} selectedCalery={props.selectedCalery} />
          </TabPanel>
          <TabPanel value={2}>
            <ActualTable id="pregnant" x={6} y={6} selectedCalery={props.selectedCalery} />
          </TabPanel>
          <TabPanel value={3}>
            <ActualTable id="Diabetes" x={6} y={6} selectedCalery={props.selectedCalery} />
          </TabPanel>
        </TabsUnstyled>
      </CardContent>
    </StickyGrid>
  );
}
