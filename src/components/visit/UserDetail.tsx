import React, { useEffect, useState } from "react";
import {
  FormLabel,
  FormControlLabel,
  FormGroup,
  Card,
  CardContent,
} from "@mui/material";
import {
  Radio,
  RadioGroup,
  MenuItem,
  TextField,
  InputAdornment,
  Checkbox,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import fat from "./fat.webp";
import { getProfile } from "../../api/profile";
import CustomSkeleton from "../core/skeleton";

export default function UserDetail(props: any) {
  const [isLoading, setLoading] = useState(true);
  const [activityStatus, setActivityStatus]: any = useState([]);
  const [appetiteStatus, setAppetiteStatus]: any = useState([]);
  const [livingCondition, setLivingCondition]: any = useState([]);

  const {
    Height,
    Weight,
    Wrist,
    BellyArea,
    HipArea,
    SleepHour,
    Activity,
    Appetite,
    TopPressure,
    BottomPressure,
    Pulse,
    HistricalEat,
    Diabete,
    Lipidemia,
  } = props.userDetail;

  useEffect(() => {
    const getActivity = async () => {
      const activity: any = await getProfile("/ActivityType");
      const parsedJson: any = [];
      activity.map((ac: any) =>
        parsedJson.push({ id: ac.id, label: ac.activity, value: ac.id })
      );
      setActivityStatus(parsedJson);
    };
    const getAppetite = async () => {
      const appetite: any = await getProfile("/Appetite");
      const parsedJson: any = [];
      appetite.map((ap: any) =>
        parsedJson.push({ id: ap.id, label: ap.name, value: ap.id })
      );
      setAppetiteStatus(parsedJson);
    };
    const getLivingCondition = async () => {
      const livingCondition: any = await getProfile("/LivingCondition");
      const parsedJson: any = [];
      livingCondition.map((ap: any) =>
        parsedJson.push({ id: ap.id, label: ap.name, value: ap.id })
      );
    setLoading(false);

      setLivingCondition(parsedJson);
    };

    getActivity();
    getAppetite();
    getLivingCondition();
  }, []);

  // const activityStatus = [
  //   { id: 0, label: "بستری (استراحت مطلق)", value: 0 },
  //   { id: 1, label: "معمولی (فعالیت روزمره)", value: 1 },
  //   { id: 2, label: "سنگین (ورزشکار)", value: 2 },
  //   { id: 3, label: "بسیار سنگین (ورزشکار حرفه ای)", value: 3 },
  // ];
  // const appetiteStatus = [
  //   { id: 0, label: "کم", value: 0 },
  //   { id: 1, label: "معمولی", value: 1 },
  //   { id: 2, label: "زیاد", value: 2 },
  // ];

  return (
    <Card>
      <CardContent>
        {isLoading ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={8} md={6} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={8} md={6} lg={4}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={8} md={6} lg={4}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={8} md={6} lg={4}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={12}>
                    <CustomSkeleton variant="rectangular" height={50} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={6} lg={4}>
                <CustomSkeleton variant="rectangular" height={150} />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography mb={5} variant="h4">
              اطلاعات بیمار
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={8} md={6} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={8} md={6} lg={4}>
                    <TextField
                      required
                      id="Height"
                      name="Height"
                      label="قد"
                      type="number"
                      defaultValue={Height}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            سانتی متر
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      required
                      id="Weight"
                      name="Weight"
                      label="وزن"
                      type="number"
                      defaultValue={Weight}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            کیلوگرم
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      required
                      id="Wrist"
                      name="Wrist"
                      label="محیط مچ دست"
                      type="number"
                      defaultValue={Wrist}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            سانتی متر
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="BellyArea"
                      name="BellyArea"
                      label="محیط دور شکم"
                      type="number"
                      defaultValue={BellyArea}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            سانتی متر
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="HipArea"
                      name="HipArea"
                      label="محیط دور لگن"
                      type="number"
                      defaultValue={HipArea}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            سانتی متر
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      required
                      id="SleepHour"
                      name="SleepHour"
                      label="زمان خواب در شبانه روز"
                      type="number"
                      defaultValue={SleepHour}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">ساعت</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      required
                      id="Activity"
                      name="Activity"
                      label="میزان فعالیت"
                      select
                      defaultValue={Activity}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    >
                      {activityStatus.map((activity: any) => (
                        <MenuItem key={activity.id} value={activity.value}>
                          {activity.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      required
                      id="Appetite"
                      name="Appetite"
                      label="اشتها"
                      select
                      defaultValue={Appetite}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    >
                      {appetiteStatus.map((activity: any) => (
                        <MenuItem key={activity.id} value={activity.value}>
                          {activity.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="TopPressure"
                      name="TopPressure"
                      label="فشار خون بالا"
                      type="number"
                      defaultValue={TopPressure}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="BottomPressure"
                      name="BottomPressure"
                      label="فشار خون پایین"
                      type="number"
                      defaultValue={BottomPressure}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      required
                      id="Pulse"
                      name="Pulse"
                      label="نبض درحالت استراحت"
                      type="number"
                      defaultValue={Pulse}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <FormGroup row>
                      <FormLabel sx={{ px: 5 }}>پرخوری عصبی</FormLabel>
                      <RadioGroup
                        row
                        id="HistricalEat"
                        name="HistricalEat"
                        value={HistricalEat}
                        onChange={(e) => {
                          console.log(e);
                          props.userDetailHandler(e);
                        }}
                      >
                        <FormControlLabel
                          value={"true"}
                          name="HistricalEat"
                          control={<Radio />}
                          label="دارم"
                        />
                        <FormControlLabel
                          value={"false"}
                          name="HistricalEat"
                          control={<Radio />}
                          label="ندارم"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={12} lg={12}>
                    <FormGroup row>
                      <FormLabel sx={{ px: 5 }}>شرایط زندگی</FormLabel>
                      {livingCondition.map((lc: any) => (
                        <FormControlLabel
                          id={lc.value}
                          name={lc.value}
                          value={lc.value}
                          control={<Checkbox value={true} />}
                          label={lc.label}
                          onChange={(e: any) => {
                            e.target.value = e.target.checked;
                            props.changeLivingCondition(e);
                          }}
                        />
                      ))}
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={6} lg={4}>
                <img src={fat} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </>
        )}
        {/* </Container> */}
      </CardContent>
    </Card>
  );
}
