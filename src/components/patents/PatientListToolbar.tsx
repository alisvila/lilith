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
import { NavLink } from 'react-router-dom';
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
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ m: 1 }} variant="h6">
        لیست بیمار ها
      </Typography>
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="جستجوی بیمار"
              variant="outlined"
            />
          </Box>
          <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >

    </Box>
          <Box sx={{ maxWidth: 500 }}>
          <Button
          component={NavLink}
          to="/dashboard/patient/create"
          color="primary"
          variant="contained"
        >
          افزودن بیمار جدید
        </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
