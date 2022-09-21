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
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import { NavLink, useParams } from "react-router-dom";
import { deleteSingleProfile, getSingleProfile } from "../../../api/profile";
import { persianDate, getGender } from "../../helper";
import CustomSkeleton from "../Skeleton";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteDialog from "../DeleteDialog";
import BasicAlerts from "../BasicAlert";

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

export default function TopDetail({
  patientDetail,
  prescription,
  isLoading,
  ...props
}: any) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [checkups, setCheckups]: any = React.useState([]);
  const [medications, setMedications]: any = React.useState([]);
  const [additionalMedications, setAdditionalMedications]: any = React.useState(
    []
  );
  const [descriptions, setDescriptions]: any = React.useState([]);
  const [diseases, setDiseases]: any = React.useState([]);

  // useEffect(() => {
  //   console.log('fir', patientDetail)
  //   getCheckups()
  //   getMedications()
  //   getAdditionalMedications()
  //   getDescriptions()
  //   getDiseases()
  // }, [patientDetail])

  // const getCheckups = async () => {
  //   const check: any = await getSingleProfile("Patient", `${patientDetail.id}/Checkups`)
  //   setCheckups(check)
  // }

  // const getMedications = async () => {
  //   const check: any = await getSingleProfile("Patient", `${patientDetail.id}/Medications`)
  //   setMedications(check)
  // }

  // const getAdditionalMedications = async () => {
  //   const check: any = await getSingleProfile("Patient", `${patientDetail.id}/AdditionalMedications`)
  //   setAdditionalMedications(check)
  // }

  // const getDescriptions = async () => {
  //   const check: any = await getSingleProfile("Patient", `${patientDetail.id}/Descriptions`)
  //   setDescriptions(check)
  // }

  // const getDiseases = async () => {
  //   const check: any = await getSingleProfile("Patient", `${patientDetail.id}/Diseases`)
  //   setDiseases(check)
  // }

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue);
  // };

  // const handleConfitm = () => {
  //   console.log("delete");
  // };

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ m: 1 }} variant="h3">
          جزییات بیمار
        </Typography>
        {/* <Button
          variant="outlined"
          color="error"
          endIcon={<RemoveIcon />}
          onClick={() => setOpen(true)}
        >
          حذف
        </Button> */}
      </Grid>
      <Grid item xs={12}>
        <Card {...props}>
          {isLoading ? (
            <>
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
                  <CustomSkeleton variant="circular" height={30} />
                  <CustomSkeleton variant="rectangular" height={30} />
                  <CustomSkeleton variant="rectangular" height={30} />
                </Grid>
                <Grid item md={10} sm={5} xs={12}>
                  <Grid container>
                    <DetailGrid item xs={12}>
                      <CustomSkeleton variant="rectangular" height={30} />
                    </DetailGrid>
                    <DetailGrid item xs={12}>
                      <CustomSkeleton variant="rectangular" height={30} />
                    </DetailGrid>
                    <DetailGrid item xs={12}>
                      <CustomSkeleton variant="rectangular" height={30} />
                    </DetailGrid>
                  </Grid>
                </Grid>
              </Grid>
            </>
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
                    <Typography variant="subtitle1">چزییات بدن</Typography>
                    <Grid container>
                      <Grid item sm={4} xs={12}>
                        فشارخون: {checkups[checkups.length - 1]?.bloodPressure}
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        وزن: {checkups[checkups.length - 1]?.weight}
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        دور کمر: {checkups[checkups.length - 1]?.length}
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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ردیف</TableCell>
                  <TableCell align="right">اشتها</TableCell>
                  <TableCell align="right">فعالیت</TableCell>
                  <TableCell align="right">دور لگن</TableCell>
                  <TableCell align="right">وزن</TableCell>
                  <TableCell align="right">تاریخ ویزیت</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {checkups.map((row: any, index: number) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{row.appetiteName}</TableCell>
                    <TableCell align="right">{row.activityActivity}</TableCell>
                    <TableCell align="right">{row.pelvisSize}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                    <TableCell align="right">
                      {persianDate(row.registerDate)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {checkups.length === 0 && (
              <div style={{ marginTop: "15px" }}>
                <BasicAlerts variant="info">
                  <p>موردی برای نمایش وجود ندارد</p>
                </BasicAlerts>
              </div>
            )}
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
