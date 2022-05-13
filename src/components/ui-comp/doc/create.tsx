import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
  SvgIcon,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import newDoc from "./new-doc.webp";
import AdapterJalali from '@date-io/date-fns-jalali';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function Create() {
    const [value, setValue] = React.useState(new Date());

  //   "name": "string",
  //   "lastName": "string",
  //   "gender": true,
  //   "birthDate": "2022-05-11T18:01:23.740Z",
  //   "address": "string",
  //   "job": "string",
  //   "userName": "string",
  //   "email": "string",
  //   "phoneNumber": 0,
  //   "parentId": 0
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography mb={5} variant="h3">
              دکتر جدید
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="نام"
                  type="text"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="نام خانوادگی"
                  type="text"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>مرد</MenuItem>
                    <MenuItem value={20}>زن</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="نام کاربری"
                  type="text"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="ایمیل"
                  type="text"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="شماره"
                  type="number"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterJalali}>
                  <DesktopDatePicker
                    label="تاریخ تولد"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={(newDate: any) => setValue(newDate)}
                    renderInput={(params) => <TextField sx={{width: "100%"}} {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="آدرس"
                  type="text"
                  fullWidth
                  //   onChange={(e) => userDetailHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">
                  ایجاد
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img src={newDoc} alt="new doc" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
