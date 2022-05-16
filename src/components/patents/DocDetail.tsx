import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { persianDate } from "../helper";
import EditIcon from "@mui/icons-material/Edit";
import { styled, useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomSkeleton from "../../components/ui-comp/Skeleton";

export default function DocDetail({ docDetail, ...props }: any) {
  const theme: any = useTheme();
  const navigate = useNavigate();

  const editDocClick = () => {
    navigate(`/dashboard/doc/edit/${docDetail.id}`);
  };
  return (
    <Card {...props}>
      <CardContent>
        {!docDetail ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomSkeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={12}>
                <CustomSkeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={12}>
                <CustomSkeleton variant="rectangular" height={30} />
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item xs={12}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">
                    {docDetail?.name} {docDetail?.lastName}
                  </Typography>
                  <Avatar
                    variant="rounded"
                    onClick={editDocClick}
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.secondary[800],
                      mt: 1,
                    }}
                  >
                    <EditIcon />
                  </Avatar>
                </div>
                <Grid container sx={{ pt: 2 }}>
                  {/* <div style={{ display: "flex", marginTop: "8px" }}> */}
                  {/* <div style={{ flexGrow: "1", margin: "0 15px" }}> */}
                  <Grid sm={12} md={5}>
                    <div
                      style={{
                        marginTop: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>ایمیل: </span>
                      <span>{docDetail?.email}</span>
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>شماره همراه: </span>
                      <span>{docDetail?.phoneNumber}</span>
                    </div>
                  </Grid>
                  <Grid xs={1} />
                  {/* </div> */}
                  <Grid sm={12} md={6}>
                    {/* <div style={{ flexGrow: "1", margin: "0 15px" }}> */}
                    <div
                      style={{
                        marginTop: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>آدرس: </span>
                      <span> {docDetail?.address}</span>
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>تاریخ تولد: </span>
                      <span>{persianDate(docDetail?.birthDate)}</span>
                    </div>
                  </Grid>

                  {/* </div> */}
                  {/* </div> */}
                </Grid>
              </div>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
