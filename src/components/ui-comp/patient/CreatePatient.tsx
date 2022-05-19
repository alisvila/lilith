import React, { useEffect, useState } from "react";
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
  Stack,
} from "@mui/material";
// import newDoc from "./new-doc.webp";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createProfile, getProfile, updateProfile } from "../../../api/profile";
import { useNavigate, useParams } from "react-router-dom";
import CustomSkeleton from "../Skeleton";

export default function CreatePatient({ docDetail , ...rest}: any) {
  const [value, setValue] = useState(new Date());
  const [form, setForm]: any = useState({});
  const [docList, setDocList] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const getDocs = async () => {
      const docs: any = await getProfile("/Doctor");
      setDocList(docs);
    };
    getDocs();
  }, []);

  useEffect(() => {
    setForm({ ...docDetail });
  }, [docDetail]);

  // React.ChangeEvent<HTMLInputElement>
  const changeHandler = (e: any) => {
    setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createDoc = () => {
    createProfile("/Patient", { ...form, birthDate: value, doctorId: id });
  };

  const editDoc = () => {
    updateProfile("/Patient", { ...form, birthDate: value });
  };

  
    // "name": "string",
    // "lastName": "string",
    // "gender": 0,
    // "birthDate": "2022-05-17T11:42:55.950Z",
    // "address": "string",
    // "job": "string",
    // "userName": "string",
    // "email": "string",
    // "phoneNumber": 0,
    // "fileNumber": 0,
    // "registerDate": "2022-05-17T11:42:55.950Z",
    // "doctorId": 0
  
  return (
    <Card>
      <CardContent>
        {rest.isLoading ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} width={200} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSkeleton variant="rectangular" height={50} width={200} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                {/* <img src={newDoc} alt="new doc" style={{ width: "100%" }} /> */}
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item xs={8}>
              <Typography mb={5} variant="h3">
                بیمار جدید {id}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="نام"
                    type="text"
                    value={form.name}
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="نام خانوادگی"
                    type="text"
                    value={form.lastName}
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                    <Select
                      name="gender"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={form.gender}
                      label="gender"
                      onChange={(e) => changeHandler(e)}
                    >
                      <MenuItem value={1}>مرد</MenuItem>
                      <MenuItem value={0}>زن</MenuItem>
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
                    value={form.username}
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="ایمیل"
                    value={form.email}
                    type="text"
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    label="شماره"
                    type="number"
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterJalali}>
                    <DesktopDatePicker
                      label="تاریخ تولد"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={(newDate: any) => setValue(newDate)}
                      renderInput={(params) => (
                        <TextField sx={{ width: "100%" }} {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    value={form.address}
                    label="آدرس"
                    type="text"
                    fullWidth
                    //   onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row">
                    {docDetail ? (
                      <Button variant="contained" onClick={editDoc}>
                        ویرایش
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={createDoc}>
                        ایجاد
                      </Button>
                    )}
                    <Button variant="text" onClick={() => navigate(-1)}>
                      بازگشت
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              {/* <img src={newDoc} alt="new doc" style={{ width: "100%" }} /> */}
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
