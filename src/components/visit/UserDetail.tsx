import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import {
  Radio,
  RadioGroup,
  MenuItem,
  TextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function UserDetail(props: any) {
  // const userDetail = {...props.userDetail}

  const activityStatus = [
    { id: 0, label: "بستری (استراحت مطلق)", value: 0 },
    { id: 1, label: "معمولی (فعالیت روزمره)", value: 1 },
    { id: 2, label: "سنگین (ورزشکار)", value: 2 },
    { id: 3, label: "بسیار سنگین (ورزشکار حرفه ای)", value: 3 },
  ];
  const appetiteStatus = [
    { id: 0, label: "کم", value: 0 },
    { id: 1, label: "معمولی", value: 1 },
    { id: 2, label: "زیاد", value: 2 },
  ];

  return (
    <Grid container spacing={2}>
      <FormControl>
        {/* <div>UserDetail</div>
      <input name="Name" onChange={(e) => props.userDetailHandler(e)} /> */}
        <TextField
          required
          id="Height"
          label="قد"
          type="number"
          defaultValue={187}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">سانتی متر</InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id="Weight"
          label="وزن"
          type="number"
          defaultValue={85}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">کیلوگرم</InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id="Wrist"
          label="محیط مچ دست غیر فعال"
          type="number"
          defaultValue={19}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">سانتی متر</InputAdornment>
            ),
          }}
        />

        <TextField
          required
          id="Activity"
          label="میزان فعالیت"
          select
          defaultValue={1}
          onChange={(e) => props.userDetailHandler(e)}
        >
          {activityStatus.map((activity) => (
            <MenuItem key={activity.id} value={activity.value}>
              {activity.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="Pulse"
          name="Pulse"
          label="نبض درحالت استراحت"
          type="number"
          defaultValue={70}
          onChange={(e) => props.userDetailHandler(e)}
        />
        <TextField
          id="BellyArea"
          name="BellyArea"
          label="محیط دور شکم"
          type="number"
          defaultValue={100}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">سانتی متر</InputAdornment>
            ),
          }}
        />
        <TextField
          id="HipArea"
          name="HipArea"
          label="محیط دور لگن"
          type="number"
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">سانتی متر</InputAdornment>
            ),
          }}
        />
        <TextField
          id="TopPressure"
          name="TopPressure"
          label="فشار خون بالا"
          type="number"
          defaultValue={12}
          onChange={(e) => props.userDetailHandler(e)}
        />
        <TextField
          id="BottomPressure"
          name="BottomPressure"
          label="فشار خون پایین"
          type="number"
          defaultValue={8}
          onChange={(e) => props.userDetailHandler(e)}
        />

        <FormGroup row>
          <FormLabel id="demo-row-radio-buttons-group-label">
            پرخوری عصبی
          </FormLabel>
          <RadioGroup
            row
            id="HistricalEat"
            name="HistricalEat"
            value={true}
            onChange={(e) => props.userDetailHandler(e)}
          >
            <FormControlLabel value="true" control={<Radio />} label="دارم" />
            <FormControlLabel value="false" control={<Radio />} label="ندارم" />
          </RadioGroup>
        </FormGroup>
        <TextField
          required
          id="SleepHour"
          name="SleepHour"
          label="زمان خواب در شبانه روز"
          type="number"
          defaultValue={5}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">ساعت</InputAdornment>
            ),
          }}
        />

        <TextField
          required
          id="Appetite"
          name="Appetite"
          label="اشتها"
          select
          defaultValue={1}
          onChange={(e) => props.userDetailHandler(e)}
        >
          {appetiteStatus.map((activity) => (
            <MenuItem key={activity.id} value={activity.value}>
              {activity.label}
            </MenuItem>
          ))}
        </TextField>

        <FormGroup row>
          <FormLabel id="demo-row-radio-buttons-group-label">
            شرایط زندگی
          </FormLabel>
          <FormControlLabel
            id="LifeCondition"
            name="LifeCondition"
            value={[]}
            control={<Checkbox value="diabete" />}
            label="دیابت"
            onChange={(e) => props.userDetailHandler(e)}
          />
          <FormControlLabel
            id="LifeCondition"
            name="LifeCondition"
            value={[]}
            control={<Checkbox value="fat" />}
            label="چربی خون"
            onChange={(e) => props.userDetailHandler(e)}
          />
        </FormGroup>

        <TextField
          required
          id="LifeCondition"
          name="LifeCondition"
          label=""
          type="شرایط زندگی"
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">سانتی متر</InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Grid>
  );
}
