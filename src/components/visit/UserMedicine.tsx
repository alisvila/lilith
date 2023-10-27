import React, { useEffect } from 'react'
import {
  Typography,
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Checkbox,
  Grid,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import drug from "./drug.webp";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function UserMedicine(props: any) {
  const MedicineHandler = (e: any, value: any, fieldName: string) => {
    props.UserMedicineHandler(value);
  };

  useEffect(() => {
    console.log(props.Medicine, 'medicine')
  }, [props])
  
  return (
    <Card>
      <CardContent>
        <Typography mb={5} variant="h4">
          داروهای مصرفی
        </Typography>
        <Typography variant="body2" my={3}>
          {" "}
          در صورتیکه در حال حاضر دارو یا داروهایی را مصرف می نمایید، از لیست زیر
          داروی مورد نظر را انتخاب کنید.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={8} md={6} lg={8}>
            <Autocomplete
              multiple
              fullWidth
              id="Medicine"
              options={props.allMedicine}
              disableCloseOnSelect
              value={props.Medicine}
              getOptionLabel={(option) => option.enName}
              onChange={(e, value) => MedicineHandler(e, value, "Medicine")}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.enName}
                </li>
              )}
              // style={{ width: 500 }}
              renderInput={(params) => (
                <TextField {...params} label="دارو ها" />
              )}
            />
            <Typography variant="body2" my={3}>
              اگر نام دارو و یا داروهای مصرفی شما درون لیست داروها قرار
              ندارد،داروی خود را در قسمت زیر به صورت دستی تایپ نمایید.
            </Typography>
            <TextField
              id="filled-multiline-flexible"
              label="داروهای دیگر"
              multiline
              minRows={4}
              fullWidth
              value={props.OtherMedicine}
              onChange={(e) =>
                props.changeDesc(1, e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4} >
            <img src={drug} style={{width: '100%'}} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
