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
  Alert
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import newDoc from "./new-doc.webp";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createProfile, getProfile, updateProfile } from "../../../api/profile";
import { useNavigate } from "react-router-dom";
import CustomSkeleton from "../Skeleton";
import IDoctorCreate from "./DoctorDTO";

export default function Create({ docDetail, ...rest }: any) {
  const [value, setValue] = useState(new Date());
  const [form, setForm]: any = useState({});
  const [docList, setDocList] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

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

  const createDoc = async () => {
    setErrorMsg("")
    try {
      setIsSubmited(true);
      await createProfile("/Doctor", { ...form, birthDate: value });
      navigate(-1);
    } catch (e: any) {
      console.log(e.message)
      setErrorMsg(e.message)
      setIsSubmited(false);
    }
  };

  const editDoc = async () => {
    setErrorMsg("")
    try {
      setIsSubmited(true);
      await updateProfile("/Doctor", { ...form, birthDate: value });
      navigate(-1);
    } catch (e: any) {
      setErrorMsg(e.message)
      setIsSubmited(false);
    }
  };

  // "name": "string",
  // "lastName": "string",
  // "gender": true,
  // "birthDate": "2022-05-15T12:33:52.078Z",
  // "address": "string",
  // "job": "string",
  // "userName": "string",
  // "email": "string",
  // "phoneNumber": 0,
  // "parentId": 0
  return (
    <Card>
      <CardContent>
        {rest.isLoading ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <CustomSkeleton
                      variant="rectangular"
                      height={50}
                      width={200}
                    />
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
                    <CustomSkeleton
                      variant="rectangular"
                      height={50}
                      width={200}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <img src={newDoc} alt="new doc" style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item xs={8}>
              <Typography mb={5} variant="h3">
                ???????? ????????
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="??????"
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
                    label="?????? ????????????????"
                    type="text"
                    value={form.lastName}
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">??????????</InputLabel>
                    <Select
                      name="gender"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={form.gender}
                      label="gender"
                      onChange={(e) => changeHandler(e)}
                    >
                      <MenuItem value={1}>??????</MenuItem>
                      <MenuItem value={0}>????</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="username"
                    name="username"
                    label="?????? ????????????"
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
                    label="??????????"
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
                    label="??????????"
                    type="number"
                    fullWidth
                    onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterJalali}>
                    <DesktopDatePicker
                      label="?????????? ????????"
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
                    label="????????"
                    type="text"
                    fullWidth
                    //   onChange={(e) => changeHandler(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row">
                    {docDetail ? (
                      <>
                        {isSubmited ? (
                          <LoadingButton loading variant="outlined">
                            Submit
                          </LoadingButton>
                        ) : (
                          <Button variant="contained" onClick={editDoc}>
                            ????????????
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        {isSubmited ? (
                          <LoadingButton loading variant="outlined">
                            Submit
                          </LoadingButton>
                        ) : (
                          <Button variant="contained" onClick={createDoc}>
                            ??????????
                          </Button>
                        )}
                      </>
                    )}
                    <Button variant="text" onClick={() => navigate(-1)}>
                      ????????????
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img src={newDoc} alt="new doc" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        )}
        {errorMsg && (
          <Grid container spacing={2} sx={{marginTop: '5px'}}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMsg}</Alert>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
