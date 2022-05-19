import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import { Download as DownloadIcon } from "../../icons/download";
import { NavLink } from "react-router-dom";
import DocDetail from "./DocDetail";
import TotalPatient from "./totalPatient";
import { Budget } from "../ui-comp/dash/budget";

export const PatientListToolbar = (props: any) => (
  <Box {...props}>
    <Grid item xs={12}>
      <Grid container spacing={5}>
        <Grid item lg={5} xs={6}>
          <DocDetail sx={{ height: "100%" }} docDetail={props.docDetail} />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <TotalPatient isLoading={false} docDetail={props.docDetail} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget sx={{ height: "100%" }} detail={props.docDetail} />
        </Grid>
      </Grid>
    </Grid>
  </Box>
);
