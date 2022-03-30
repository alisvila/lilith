import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

export default function PersonalInfo(props: any) {
  return (
    <Card {...props}>
      <CardContent>
        <Grid container>
          <Grid
            container
            item
            xs={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar sx={{ height: 65, width: 65 }}>M</Avatar>
          </Grid>
          <Grid item xs={10}>
            <div>
              <Typography variant="h5">مهران بادامی</Typography>
              <Grid container sx={{pt: 2}}>
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
                    <span>BMI بیمار: </span>
                    <span>18</span>
                  </div>
                  <div
                    style={{
                      marginTop: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>وضعیت جسه: </span>
                    <span>معمولی</span>
                  </div>
                  <div
                    style={{
                      marginTop: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>میزان اضافه وزن: </span>
                    <span>18 کیلوگرم</span>
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
                    <span>محدوده وزن مطلوب: </span>
                    <span> 83.93 - 87.42</span>
                  </div>
                  <div
                    style={{
                      marginTop: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>انرژی محاسبه شده بدن در فعالیت: </span>
                    <span>2575 کالری</span>
                  </div>
                  <div
                    style={{
                      marginTop: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>کالری دریافت شده: </span>
                    <span>1500</span>
                  </div>
                </Grid>

                {/* </div> */}
                {/* </div> */}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
