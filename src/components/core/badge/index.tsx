import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CustomSkeleton from "../skeleton";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { useNavigate } from "react-router-dom";

export const Budget = (props: any) => {
  const theme: any = useTheme();
  const navigate = useNavigate();

  const increaseBudget = () => {
    navigate("/dashboard/payMethod");
  };
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        {!props?.detail ? (
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
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
        ) : (
          <>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  موجودی
                </Typography>
                <Box
                  sx={{
                    pt: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography color="textPrimary" variant="h4">
                    {props?.detail?.budget}
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    ریال
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Avatar
                  variant="rounded"
                  onClick={increaseBudget}
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.largeAvatar,
                    backgroundColor: theme.palette.secondary[800],
                    mt: 1,
                  }}
                >
                  <PointOfSaleIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowDownwardIcon color="error" />
              <Typography
                color="error"
                sx={{
                  mr: 1,
                }}
                variant="body2"
              >
                {props?.detail?.budgetRate}
              </Typography>
              <Typography color="textSecondary" variant="caption">
                نسبت به ماه گذشته
              </Typography>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};
