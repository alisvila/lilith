import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  Autocomplete,
  Button,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApprovalIcon from "@mui/icons-material/Approval";
import banks from "./healthBanks.webp";
import { useNavigate } from "react-router-dom";

const SearchButton = () => <Button variant="outlined">ثبت</Button>;
export default function Payment() {
  const [form, setForm]: any = useState({
    price: 1200000,
  });
  const navigate = useNavigate();

  const changeHandler = (e: any) => {
    setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography mb={3} variant="h4">
                کاربر گرامی !
              </Typography>
              <Typography mb={1} variant="body1">
                در حال حاضر مبلغ ویزیت الکترونیکی 700,000 ریال می باشد.
              </Typography>
              <Typography mb={1} variant="body1">
                همچنین میزان موجودی حساب شما 27,000 ریال و میزان کسری حساب شما
                برای انجام یک ویزیت 673,000 ریال است.
              </Typography>
              <Typography mb={5} variant="body1">
                برای شارژ حساب خود پس از وارد کردن مبلغ مورد نظر بر روی دکمه
                مربوطه کلیک نمایید.
              </Typography>
            </Grid>
            {/* <Typography mb={5} variant="h4">
              اطلاعات بیمار
            </Typography> */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  required
                  id="amount"
                  name="amount"
                  label="مبلغ"
                  type="number"
                  defaultValue={form.price}
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">ریال</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  id="standard-name"
                  label="کد تخفیف"
                  value={form.discount}
                  name="discount"
                  onChange={(e) => changeHandler(e)}
                  fullWidth
                  InputProps={{ endAdornment: <SearchButton /> }}
                />
              </Grid>
              <Grid item xs={12}>
              <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<AccountBalanceIcon />}>
                  اتصال به درگاه
                </Button>
                <Button variant="text" onClick={() => navigate(-1)}>
                      بازگشت
                    </Button>
                    </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <img src={banks} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
