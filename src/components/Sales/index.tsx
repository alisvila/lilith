import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Highchart } from "../core/chart/Highchart";
export const Sales = (props: any) => {
  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Last 7 days
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent dir="ltr">
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Highchart />

          {/* <Bar
            data={data}
            options={options}
          /> */}
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};
