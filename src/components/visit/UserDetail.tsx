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
import CustomSkeleton from "../../components/ui-comp/Skeleton";

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
  //   { id: 0, label: "?????????? (?????????????? ????????)", value: 0 },
  //   { id: 1, label: "???????????? (???????????? ????????????)", value: 1 },
  //   { id: 2, label: "?????????? (??????????????)", value: 2 },
  //   { id: 3, label: "?????????? ?????????? (?????????????? ???????? ????)", value: 3 },
  // ];
  // const appetiteStatus = [
  //   { id: 0, label: "????", value: 0 },
  //   { id: 1, label: "????????????", value: 1 },
  //   { id: 2, label: "????????", value: 2 },
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
              ?????????????? ??????????
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={8} md={6} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={8} md={6} lg={4}>
                    <TextField
                      required
                      id="Height"
                      name="Height"
                      label="????"
                      type="number"
                      defaultValue={Height}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            ?????????? ??????
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
                      label="??????"
                      type="number"
                      defaultValue={Weight}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            ??????????????
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
                      label="???????? ???? ??????"
                      type="number"
                      defaultValue={Wrist}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            ?????????? ??????
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="BellyArea"
                      name="BellyArea"
                      label="???????? ?????? ??????"
                      type="number"
                      defaultValue={BellyArea}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            ?????????? ??????
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <TextField
                      id="HipArea"
                      name="HipArea"
                      label="???????? ?????? ??????"
                      type="number"
                      defaultValue={HipArea}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            ?????????? ??????
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
                      label="???????? ???????? ???? ?????????? ??????"
                      type="number"
                      defaultValue={SleepHour}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">????????</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      required
                      id="Activity"
                      name="Activity"
                      label="?????????? ????????????"
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
                      label="??????????"
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
                      label="???????? ?????? ????????"
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
                      label="???????? ?????? ??????????"
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
                      label="?????? ???????????? ??????????????"
                      type="number"
                      defaultValue={Pulse}
                      fullWidth
                      onChange={(e) => props.userDetailHandler(e)}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <FormGroup row>
                      <FormLabel sx={{ px: 5 }}>???????????? ????????</FormLabel>
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
                          label="????????"
                        />
                        <FormControlLabel
                          value={"false"}
                          name="HistricalEat"
                          control={<Radio />}
                          label="??????????"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={12} lg={12}>
                    <FormGroup row>
                      <FormLabel sx={{ px: 5 }}>?????????? ??????????</FormLabel>
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
