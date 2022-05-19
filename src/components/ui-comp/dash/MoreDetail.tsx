import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Paper,
  Grid,
  IconButton,
  Tab,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import { NavLink, useParams } from "react-router-dom";
import { deleteSingleProfile, getSingleProfile } from "../../../api/profile";
import { persianDate, getGender } from "../../helper";

const DetailGrid = styled(Grid)(({ theme }: any) => ({
  borderBottom: "1px solid #d3d3d3",
  padding: "12px 25px",
  "&:last-child": {
    borderBottom: "none",
  },
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];


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


export default function MoreDetail({patientDetail, isLoading, ...props}: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card {...props}>
          {isLoading ? (
            <></>
          ) : (
            <Grid container>
              <Grid
                item
                md={2}
                sm={7}
                xs={12}
                sx={{
                  borderRight: "1px solid #d3d3d3",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src="avatar"
                  sx={{
                    height: 64,
                    mb: 2,
                    width: 64,
                  }}
                />
                <Typography variant="h5">
                  {patientDetail?.name} {patientDetail?.lastName}
                </Typography>
                <Grid>
                  <IconButton
                    component={NavLink}
                    to="/dashboard/sendtiket"
                    aria-label="delete"
                  >
                    <SendIcon />
                  </IconButton>
                  <IconButton
                    component={NavLink}
                    to="/dashboard/history"
                    aria-label="delete"
                  >
                    <MessageIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item md={10} sm={5} xs={12}>
                <Grid container>
                  <DetailGrid item xs={12}>
                    <Typography variant="subtitle1">مشخصات فردی</Typography>
                    <Grid container>
                      <Grid item sm={4} xs={12}>
                        جنسیت: {getGender(patientDetail?.gender)}
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        تاریخ تولد:
                        {persianDate(patientDetail?.birthDate)}
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        شماره موبایل:
                        {patientDetail?.phoneNumber}
                      </Grid>
                    </Grid>
                  </DetailGrid>
                  <DetailGrid item xs={12}>
                    <Typography variant="subtitle1">body detail</Typography>
                    <Grid container>
                      <Grid item sm={4} xs={12}>
                        Blood Type: o+
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        Weight: 75KG
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        Body type: slim
                      </Grid>
                    </Grid>
                  </DetailGrid>
                  <DetailGrid item xs={12}>
                    <Typography variant="subtitle1">مهران بادامی</Typography>
                    <Grid container>
                      <Grid item sm={4} xs={12}>
                        Blood Type: o+
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        Weight: 75KG
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        Body type: slim
                      </Grid>
                    </Grid>
                  </DetailGrid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card {...props}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="ویزیت" {...a11yProps(0)} />
                <Tab label="داروهای مصرفی بیمار" {...a11yProps(1)} />
                <Tab label="سابقه بیماری" {...a11yProps(2)} />
                <Tab label="شرایط زندگی" {...a11yProps(2)} />
                <Tab label="سوابق پرداخت" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
