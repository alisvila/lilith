import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from "@mui/material";

// project imports
import MainCard from "../ui-comp/cards/mainCard";
import SkeletonEarningCard from "../ui-comp/skeleton/EarningCard";

// assets
import { RotateLeft } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppOutlined";
import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveOutlined";
import CustomSkeleton from "../ui-comp/Skeleton";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const CardWrapper = styled(MainCard)(({ theme }: any) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const TotalPatient = ({ docDetail }: any) => {
  const theme: any = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CardWrapper border={false} content={false} style={{ height: "100%" }}>
        {!docDetail ? (
          <>
            <Box sx={{ p: 2.25, height: "100%" }}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <CustomSkeleton variant="rectangular" height={30} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <CustomSkeleton
                    variant="rectangular"
                    height={30}
                    width={150}
                  />
                </Grid>
                <Grid item>
                  <CustomSkeleton
                    variant="rectangular"
                    height={30}
                    width={150}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <Box sx={{ p: 2.25, height: "100%" }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary.dark,
                        mt: 1,
                      }}
                    >
                      <AccessibilityIcon />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.secondary[200],
                  }}
                >
                  تعداد بیمار
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "2.125rem",
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75,
                      }}
                    >
                      {docDetail.countOfPatient}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark,
                      }}
                    >
                      <ArrowUpwardIcon
                        fontSize="inherit"
                        sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
      </CardWrapper>
    </>
  );
};

export default TotalPatient;
