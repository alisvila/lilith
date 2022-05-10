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
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApprovalIcon from "@mui/icons-material/Approval";
import SendIcon from "@mui/icons-material/Send";
import ticketImage from "./ticket.webp";
import styled from "@emotion/styled";

const AttachButton = () => (
  <label htmlFor="contained-button-file">
    <Input accept="image/*" id="contained-button-file" multiple type="file" />

    <Button variant="contained" component="span" startIcon={<AttachFileIcon />}>
      انتخاب فایل
    </Button>
  </label>
);

const Input = styled("input")({
  display: "none",
});

export default function SendTicket() {
  const [form, setForm]: any = useState({});

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
                ارسال نامه برای دکتر
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
                  id="title"
                  name="title"
                  label="عنوان"
                  type="text"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  id="text"
                  label="متن"
                  multiline
                  required
                  value={form.text}
                  name="text"
                  onChange={(e) => changeHandler(e)}
                  fullWidth
                  InputProps={{ endAdornment: <AttachButton /> }}
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Button variant="contained" startIcon={<SendIcon />}>
                  ارسال پیام
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <img src={ticketImage} style={{ width: "100%", opacity: "0.8" }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
