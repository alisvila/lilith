import * as React from "react";
import { styled } from "@mui/system";
import {Tabs as TabsUnstyled} from "@mui/base/Tabs";
import {TabsList as TabsListUnstyled} from "@mui/base/TabsList";
import {TabPanel as TabPanelUnstyled} from "@mui/base/TabPanel";
import { buttonClasses as buttonUnstyledClasses } from "@mui/base/Button";
import {Tab as TabUnstyled, tabClasses as tabUnstyledClasses } from "@mui/base/Tab";
import ActualTable from "./index";
import { Box, Card, CardContent, Button } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { getProfile, createProfile } from "../../../api/profile";
import { LoadingButton } from "@mui/lab";

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
    color: "white",
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
  minWidth: "320px",
  backgroundColor: theme.palette.tab.primary,
  borderRadius: "8px 8px 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "space-between",
  border: "solid #ebebeb",
  borderWidth: "4px 4px 0 4px",
}));

const StickyGrid: any = styled(Card)(({ theme }: any) => ({
  position: "sticky",
  top: "0",
}));

const TableWrapper = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [livingCondition, setLivingCondition] = useState([]);
  const myRef: any = React.useRef();

  useEffect(() => {
    const getMealCata = async () => {
      const LC: any = await getProfile("/LivingCondition");
      setLivingCondition(LC);
      setIsLoading(false);
    };
    getMealCata();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    myRef.current.handleSubmit();
    setIsLoading(false);
  };

  return (
    <StickyGrid>
      <CardContent>
        <Box style={{ overflow: "auto" }}>
          <TabsUnstyled defaultValue={0} style={{ minWidth: "800px" }}>
            <TabsList>
              {livingCondition.map((lc: any) => (
                <Tab key={lc.id}>{lc.name}</Tab>
              ))}

            </TabsList>
            {livingCondition.map((item: any, index: number) => (
              <TabPanel value={index} key={index}>
                <ActualTable
                  ref={myRef}
                  id={item.id}
                  selectedCalery={props.selectedCalery}
                  handleSubmit={props.handleSubmit}
                />
              </TabPanel>
            ))}
          </TabsUnstyled>
        </Box>
        {isLoading ? (
          <LoadingButton sx={{ mt: 2 }} fullWidth loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <Button
            sx={{ mt: 2 }}
            color="primary"
            fullWidth
            variant="outlined"
            onClick={handleSubmit}
          >
            ثبت جدول
          </Button>
        )}
      </CardContent>
    </StickyGrid>
  );
};

export default TableWrapper;
